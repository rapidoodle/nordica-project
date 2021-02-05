<?php
/**
* Functions which enhance the theme by hooking into WordPress
*
* @package essentials
*/
if ( ! function_exists( 'get_pix_social_links' ) ) {
    function get_pix_social_links($classes = 'text-center pix-py-20'){
        if(function_exists('essentials_core_plugin')){
            ?>
            <div class="pix_post_social <?php echo esc_attr( $classes ); ?>">
                <a class="btn btn-link pix-social-facebook text-sm font-weight-bold text-body-default pix-px-10" href="http://www.facebook.com/sharer.php?u=<?php echo get_the_permalink().'&t='. get_the_title(); ?>" target="blank"><i class="pixicon-facebook pix-pr-10 text-24"></i><?php esc_attr_e('Share on Facebook', 'essentials'); ?></a>
                <a class="btn btn-link pix-social-twitter text-sm font-weight-bold text-body-default pix-px-10" title="Click to share this post on Twitter" href="http://twitter.com/intent/tweet?text=<?php echo get_the_title().' '. get_the_permalink(); ?>" target="_blank"><i class="pixicon-twitter pix-pr-10 text-24"></i><?php esc_attr_e('Share on twitter', 'essentials'); ?></a>
            </div>
            <?php
        }
    }
}

if ( ! function_exists( 'pix_post_navigation' ) ) {
    function pix_post_navigation(){
        $next_post = get_next_post();
    	$next_thumb ='';
    	if($next_post){
    		$next_thumb = get_the_post_thumbnail($next_post->ID,array(40,40), array('class'=>'rounded-lg pix-mr-10'));
    	}
        $previous_post = get_previous_post();
    	$previous_thumb = '';
    	if($previous_post){
    		$previous_thumb = get_the_post_thumbnail($previous_post->ID,array(40,40), array('class'=>'rounded-lg pix-ml-10'));
    	}
        $prevPost = esc_attr__('Previous post', 'essentials');
		$nextPost = esc_attr__('Next post', 'essentials');

    	$prev = '<div class="card shadow-hover-sm shadow-sm d-inline-block m-3 bg-white pix-hover-item">
    					  <div class="card-body pix-pl-20 pix-pr-10 pix-py-10">
    						  <div class="d-flex justify-content-between align-items-center">
    							<i class="pixicon-angle-left text-body-default font-weight-bold mr-3 pix-hover-left"></i>
    							<div class="card-btn-content">
    							<div class="text-body-default text-xs line-height-1">'.$prevPost.'</div>
    							<p class="card-title mb-0 text-heading-default font-weight-bold line-height-1 truncate-150">%title</p>
    							</div>
    							<div>' . $previous_thumb.'</div>
    						</div>
    					  </div>
    					</div>';
    	$next = '<div class="card shadow-hover-sm shadow-sm d-inline-block m-3 bg-white pix-hover-item">
    					  <div class="card-body pix-pl-10 pix-pr-20 pix-py-10">
    						  <div class="d-flex justify-content-between align-items-center">
    							<div>' . $next_thumb .'</div>
    							<div class="card-btn-content">
    							<div class="text-body-default text-xs line-height-1">'.$nextPost.'</div>
    							<p class="card-title mb-0 text-heading-default font-weight-bold line-height-1 text-left truncate-150">%title</p>
    							</div>
    							<i class="pixicon-angle-right text-body-default font-weight-bold ml-3 pix-hover-right"></i>
    						</div>
    					  </div>
    					</div>';
    	the_post_navigation(array(
    			'prev_text'                  => $prev,
    			'next_text'                  => $next,
    			'in_same_term'               => false,
    			'screen_reader_text' =>  esc_attr__( 'Continue Reading', 'essentials' ),
    		) );
    }
}

if ( ! function_exists( 'get_pix_related_posts' ) ) {
    function get_pix_related_posts(){
        $show_related_posts = true;
        $related_count = 4;
        $related_cols = 'col-md-6 col-lg-3';
        if( !empty(pix_get_option('pix-disable-blog-related')) ){
            if(pix_get_option('pix-disable-blog-related')){
                $show_related_posts = false;
            }
        }
        if( !empty(pix_get_option('pix-blog-related-count')) ){
            if(pix_get_option('pix-blog-related-count')){
                $related_count = (int)pix_get_option('pix-blog-related-count');
                if($related_count==3){
                    $related_cols = 'col-md-4';
                }elseif ($related_count==2) {
                    $related_cols = 'col-md-6';
                }
            }
        }
        if($show_related_posts){
            $args=array(
        		'post__not_in' => array(get_the_ID()),
                'category__in' => wp_get_post_categories(get_the_ID()),
        		'posts_per_page'=>$related_count,
        		'ignore_sticky_posts'=>1
    		);
    		$my_query = new WP_Query($args);
            if( $my_query->have_posts() ) {
            ?>
    		<div class="col-12">
    		<h5 class="pix-py-50 text-center"><span class="my-2 d-inline-block text-heading-default"><strong><?php esc_attr_e( 'Related Posts', 'essentials' ); ?></strong></span></h5>
    		</div>
            <?php


        		while ($my_query->have_posts()) : $my_query->the_post();
                ?>
        			<div class="col-12 <?php echo esc_attr($related_cols); ?> pb-5 pix-related-items">
                        <?php
            			$attrs = array(
            				'blog_layout'		=> 'full-img',
            				// 'blog_layout'		=> 'with-padding',
            				'title_tag' => 'h5',
            				'title_classes' => '',
            				'size' => 'sm',
            				'rounded_img' => 'rounded-lg',
            				'style' => '1',
            				'hover_effect' => '1',
            				'add_hover_effect' => '1',
            			);

        			    echo essentials_get_post_excerpt_template($attrs);
                        ?>
        			</div>
                <?php
        		endwhile;
    		}
    		wp_reset_postdata();
        }
    }
}

if ( ! function_exists( 'essentials_get_post_excerpt_template' ) ) {
    function essentials_get_post_excerpt_template($atts = []){
        extract(shortcode_atts(
    		array(
    			'blog_layout' => '',
    			'blog_type' => 'default',
    			'title_tag' => 'h4',
    			'title_classes' => '',
    			'blog_style_box' => false,
                'blog_size'				=> 'lg',
                'size'       => '',
                'rounded_img'  => 'rounded-lg',
        		'style' 		=> '',
        		'hover_effect' 		=> '',
        		'add_hover_effect' 		=> '',
        		'padding_bottom' 		=> '',
    		), $atts ));

        $output = '';


        if(!empty($_GET["blog_layout"])){
            switch ($_GET["blog_layout"]) {
                case 'transparent':
                    $blog_layout = 'transparent';
                    break;
                case 'with-padding':
                    $blog_layout = 'with-padding';
                    break;
                case 'left-img':
                    $blog_layout = 'left-img';
                    break;
                case 'right-img':
                    $blog_layout = 'right-img';
                    break;
                case 'full-img':
                    $blog_layout = 'full-img';
                    break;
                case 'default':
                    $blog_layout = 'default';
                    break;
            }
        }

        if(!empty($_GET["blog_type"])){
            switch ($_GET["blog_type"]) {
                case 'masonry':
                    $blog_type = 'masonry';
                    break;
                case 'grid':
                    $blog_type = 'grid';
                    break;
                case 'default':
                    $blog_type = 'default';
                    break;
            }
        }

        $el_padding = 'pix-pb-20';
        if($blog_type=='default'){
            $el_padding = 'pix-pb-60';
        }
        if($padding_bottom!='') $el_padding = $padding_bottom;
        $style_arr = array(
               "" => "",
               "1"       => "shadow-sm",
               "2"       => "shadow",
               "3"       => "shadow-lg",
               "4"       => "shadow-inverse-sm",
               "5"       => "shadow-inverse",
               "6"       => "shadow-inverse-lg",
             );

             $hover_effect_arr = array(
                ""       => "",
                "1"       => "shadow-hover-sm",
                "2"       => "shadow-hover",
                "3"       => "shadow-hover-lg",
                "4"       => "shadow-inverse-hover-sm",
                "5"       => "shadow-inverse-hover",
                "6"       => "shadow-inverse-hover-lg",
             );

             $add_hover_effect_arr = array(
                ""       => "",
                "1"       => "fly-sm",
                "2"       => "fly",
                "3"       => "fly-lg",
                "4"       => "scale-sm",
                "5"       => "scale",
                "6"       => "scale-lg",
    			"7"       => "scale-inverse-sm",
                "8"       => "scale-inverse",
                "9"       => "scale-inverse-lg",
             );
             $box_classes = array();

          array_push($box_classes, $rounded_img);
          if($style){
             array_push($box_classes, $style_arr[$style]);
         }
         if($hover_effect){
             array_push($box_classes, $hover_effect_arr[$hover_effect]);
         }
         if($add_hover_effect){
             array_push($box_classes, $add_hover_effect_arr[$add_hover_effect]);
         }

         $box_class_names = join( ' ', $box_classes );

        $img_classes = 'img-fluid pix-img-scale pix-fit-cover2 rounded-0 ';
        if($blog_layout=='transparent'||$blog_layout=='with-padding'){
            $img_classes .= 'rounded-xl overflow-hidden';
        }elseif($blog_layout=='left-img'||$blog_layout=='right-img'){
            $img_classes .= 'rounded-0 flex-grow-1 h-100 pix-fit-cover';
        }elseif($blog_layout=='full-img'){
            $img_classes = 'card-img pix-bg-image pix-img-scale rounded-0 flex-grow-1 h-100 pix-opacity-7 pix-fit-cover';
        }else{
            $img_classes .= 'card-img-top';
        }
        $img_attrs = array(
    		'class'	=> $img_classes,
    		'alt'	=> get_the_title()
    	);

    	$full_image_url = wp_get_attachment_image( get_post_thumbnail_id(), 'full', false, $img_attrs );
    	$img_src = $full_image_url;

        $cat_args = array( 'fields' => 'all' );
        $cats = wp_get_post_categories(get_the_ID(), $cat_args);

        $cats_str = '';
        if(function_exists('sc_pix_badge')){
            foreach ($cats as $value) {
                $badge_attrs = array(
                    'text'	=> $value->name,
                    'text_size'	=> 'custom',
                    'text_custom_size'		=> '12px',
                    'bold'  => 'font-weight-bold',
                    'secondary-font'  => 'secondary-font',
                    'custom_css'	=> 'padding:5px 10px;margin-right:3px;line-height:12px;',
                    'link'      => get_category_link($value->term_id)
                );
                if($blog_layout=='full-img'){
                    $badge_attrs['text_color'] = 'dark-opacity-5';
                    $badge_attrs['bg_color']   = 'dark-opacity-5';
                }
                $cats_str .= sc_pix_badge($badge_attrs);
            }
        }else{
            if($blog_layout!='full-img'){
                foreach ($cats as $value) {
                    $cats_str .= '<a href="'.get_category_link($value->term_id).'">';
            		$cats_str .= '<span class="d-inline-block mr-1">';
            			$cats_str .= '<span class="badge bg-primary-light text-primary pix-px-10 pix-py-5" style="margin-right:3px;line-height:12px;">';
            				$cats_str .= '<span class="" style="font-size:12px;">';
            					$cats_str .= $value->name;
            				$cats_str .= '</span>';
            			$cats_str .= '</span>';
            		$cats_str .= '</span>';
            		$cats_str .= '</a>';
                }
            }

        }

        $comment_link = get_comments_link();
        $comment_count = get_comments_number();
        $author = get_the_author();
        $author_img = '';
        $avatar = '';
        if($blog_layout=='full-img'){
            $avatar = get_avatar_url(get_the_author_meta('ID'), array('size'=>36));
            if($avatar !== FALSE){
                $author_img = '<img class="pix_blog_sm_avatar shadow" src="'.esc_url($avatar).'" alt="'.$author.'">';
            }
        }else{
            $avatar = get_avatar_url(get_the_author_meta('ID'), array('size'=>80));
            if($avatar !== FALSE){
                $author_img = '<img class="pix_blog_md_avatar shadow" src="'.esc_url($avatar).'" alt="'.$author.'">';
            }
        }

        $thumb_atts = $atts;
        $thumb_atts['avatar'] = $avatar;
        $thumb_atts['img_src'] = $img_src;
        $thumb_atts['blog_layout'] = $blog_layout;

        $item_box = 'bg-transparent ' .$box_class_names;
        $thumb_atts['img_rounded'] = 'rounded-0 rounded-t-xl';
        if($blog_style_box){
            $item_box = ' bg-white fly-sm2 ' .$box_class_names;
        }else{
            $thumb_atts['img_rounded'] = $rounded_img;
        }

        $min_height = 'min-height:400px;';
        if($size=='sm'){
            $min_height = '';
        }


        $output .= '<article id="post-'. get_the_ID() .'" class="'.implode(' ',get_post_class('h-100 align-self-stretch')).' '.$el_padding.' d-block position-relative animate-in" data-anim-type="fade-in-up" data-anim-delay="300">';
        switch ($blog_layout) {
            case "full-img":
                $output .= '<div class="d-inline-block position-relative w-100 h-100">';


                    $output .= '<div class="card w-100 h-100 bg-black pix-hover-item '.$box_class_names.' position-relative overflow-hidden pix-dark fly-sm2 overflow-hidden shadow-lg2 shadow-hover-lg2 row no-gutters flex-column flex-md-row">';
                        if($img_src){
                            $output .=$img_src;
                        }else{
                            $output .= '<div class="card-img pix-bg-image d-inline-block w-100 h-100 bg-gradient-primary" style="'.$min_height.'max-height:100% !important;"></div>';
                        }
                        $output .= '<div class="card-img-overlay2 pix-post-meta-element pix-post-meta-full-img d-inline-block w-100 pix-img-overlay pix-p-20 d-flex align-items-end">';
                            $output .= '<div class="w-100 d-flex align-items-start flex-column h-100">';


                                $output .= '<div class="d-flex align-items-start w-100 mb-auto">';

                                    $output .= '<div class="w-100">';
                                        $output .= '<div class="entry-meta pix-fade-in d-flex align-items-center">';
                                            $output .= '<div class="flex-fill text-left">';
                                                $output .= '<a href="'.get_author_posts_url(get_the_author_meta('ID')).'" class="pix-post-meta-author text-heading-default font-weight-bold" data-toggle="tooltip" data-placement="right" title="By '.$author.'">';
                                                  $output .= $author_img;
                                                $output .= '</a>';
                                            $output .= '</div>';
                                            $output .= '<div class="flex-fill2 text-right text-sm">';
                                                if( function_exists('get_pixfort_likes') ){
                                                    $output .= get_pixfort_likes();
                                                }
                                            $output .= '</div>';
                                        $output .= '</div>';
                                    $output .= '</div>';
                                $output .= '</div>';



                                if($size!='sm'){
                                    $output .= '<div class="d-flex align-items-stretch position-relative w-100" style="min-height: 200px;">';
                                        if(has_post_format(array('video', 'audio', 'link', 'quote' ))){
                                            if(has_post_format('video')){
                                                if(get_post_meta( get_the_ID(), 'pix-post-video', true )){
                                                    $res = get_post_meta( get_the_ID(), 'pix-post-video', true );


                                                    $output .= '<div class="pix-post-format-btn text-center d-inline-block2 d-flex justify-content-center">';
                                                       $output .= '<a href="#" data-aspect="embed-responsive-16by9" data-content="'.htmlspecialchars($res).'" class="pix-video-popup pix-post-format-a pix-post-btn-dark  d-inline-block rounded-circle align-self-center scale shadow-lg shadow-hover-lg bg-black pix-p-10 d-flex align-items-center justify-content-center">';
                                                        $output .= pix_load_inline_svg(get_template_directory().'/inc/images/play_arrow.svg');
                                                       $output .= '</a>';
                                                    $output .= '</div>';

                                                }else{
                                                    $content = apply_filters('the_content', get_post_field('post_content', get_the_ID()));
                                                    $iframes = get_media_embedded_in_content( $content, array('iframe', 'video', 'embed') );
                                                    if(!empty($iframes)){
                                                        if(!empty($iframes[0])){
                                                            $res = preg_replace("/[\`]/", "", $iframes[0]);
                                                            $output .= '<div class="pix-post-format-btn text-center d-inline-block2 d-flex justify-content-center">';
                                                               $output .= '<a href="#" data-aspect="embed-responsive-16by9" data-content="'.htmlspecialchars($res).'" class="pix-video-popup pix-post-format-a pix-post-btn-dark  d-inline-block rounded-circle align-self-center scale shadow-lg shadow-hover-lg bg-black pix-p-10 d-flex align-items-center justify-content-center">';
                                                                $output .= pix_load_inline_svg(get_template_directory().'/inc/images/play_arrow.svg');
                                                               $output .= '</a>';
                                                            $output .= '</div>';
                                                        }
                                                    }
                                                }

                                            }
                                            if(has_post_format('audio')){
                                                $content = apply_filters('the_content', get_post_field('post_content', get_the_ID()));
                                                $iframes = get_media_embedded_in_content( $content, 'audio' );
                                                if(!empty($iframes)){
                                                    if(!empty($iframes[0])){
                                                        $output .= '<div class="pix-post-format-btn text-center d-inline-block">';
                                                        $res = preg_replace("/[\`]/", "", $iframes[0]);
                                                           $output .= '<a href="#" data-aspect="embed-responsive-16by9" data-content="'.htmlspecialchars($res).'" class="pix-audio-popup pix-post-format-a pix-post-btn-dark d-inline-block rounded-circle align-self-center scale shadow-lg shadow-hover-lg bg-black"><i class="pixicon-volume-3 m-0 p-0"></i></a>';
                                                        $output .= '</div>';
                                                    }
                                                }
                                            }
                                            if(has_post_format('link')){
                                                if(get_post_meta( get_the_ID(), 'pix-post-link', true )){
                                                    $output .= '<div class="pix-post-format-btn text-center d-inline-block">';
                                                       $output .= '<a href="'.get_post_meta( get_the_ID(), 'pix-post-link', true ).'" target="_blank" class=" pix-post-format-a pix-post-btn-dark d-inline-block rounded-circle align-self-center scale shadow-lg shadow-hover-lg bg-black"><i class="pixicon-link-4 m-0 p-0"></i></a>';
                                                    $output .= '</div>';
                                                }
                                            }
                                            if(has_post_format('quote')){
                                                if(get_post_meta( get_the_ID(), 'pix-post-quote', true )){
                                                    $output .= '<div class="pix-post-format-btn text-center d-inline-block pix-p-30 text-20 font-italic text-heading-default">';
                                                    $output .= '<div class="line-clamp-5">';
                                                       $output .= get_post_meta( get_the_ID(), 'pix-post-quote', true );
                                                       $output .= '</div>';
                                                       $output .= '<div class="font-weight-bold pix-mt-10">';
                                                       $output .= get_post_meta( get_the_ID(), 'pix-post-quote-citation', true );
                                                    $output .= '</div>';
                                                    $output .= '</div>';
                                                }
                                            }
                                        }
                                    $output .= '</div>';
                                }


                                $output .= '<div class="d-flex align-items-end w-100 item-full-content">';
                                    $output .= '<div class="w-100">';
                                        $output .= '<div class="pix-post-meta-categories">'.$cats_str.'</div>';
                                        $output .= '<'.$title_tag.' class="entry-title pix-py-10 font-weight-bold '.$title_classes.'"><a class="text-heading-default line-clamp-4" href="' . esc_url( get_permalink() ) . '" rel="bookmark">';
                                            if($size=='sm'){
                                                $output .= wp_trim_words(get_the_title(),6);
                                            }else{
                                                $output .= get_the_title();
                                            }

                                        $output .= '</a></'. $title_tag.'>';

                                        $output .= '<div class="d-inline-block  pix-post-meta-date w-100 position-relative pix-pt-10">';
                                            $output .= '<div class="text-right d-flex w-100" style="line-height:0;">';
                                                $output .= '<div class="text-left">';
                                                    $output .= '<a class="mb-0 d-inline-block2 d-flex align-items-center text-xs text-body-default svg-body-default" href="'. get_permalink() .'">';
                                                        $output .= '<span class="pr-1">';
                                                            $output .= pix_load_inline_svg(get_template_directory().'/inc/assets/blog/blog-post-date-icon.svg');
                                                        $output .= '</span>';
                                                        $output .= '<span class="text-body-default">'. get_the_date() .'</span>';
                                                    $output .= '</a>';
                                                $output .= '</div>';
                                            $output .= '</div>';
                                        $output .= '</div>';

                                    $output .= '</div>';
                                $output .= '</div>';





                            $output .= '</div>';
                        $output .= '</div>';
                    $output .= '</div>';


                $output .= '</div>';


                break;
            case "left-img":
                $output .= '<div class="d-inline-block position-relative w-100">';
                $output .= '<div class="card pix-post-meta-element pix-post-meta-left-img '.$item_box.' overflow-hidden row no-gutters flex-column flex-md-row flex-md-row-reverse2">';

                    $output .= '<div class="flex-column col-md-6">';

                        $output .= pix_get_post_thumb($thumb_atts);

                    $output .= '</div>';

                    $c_padding = 'pl-md-4';
                    if($blog_style_box){
                        $c_padding = 'pix-p-20';
                    }
                    $output .= '<div class="card-body d-flex align-content-between flex-wrap col-md-6 '.$c_padding.' py-md-0">';
                        $output .= '<div class="d-flex align-items-start">';
                            $output .= '<div>';
                                $output .= '<div class="pix-post-meta-categories">'.$cats_str.'</div>';
                                $output .= the_title( '<'.$title_tag.' class="entry-title pix-py-10 font-weight-bold '.$title_classes.'"><a class="text-heading-default" href="' . esc_url( get_permalink() ) . '" rel="bookmark">', '</a></'.$title_tag.'>', false );


                                    $output .= '<div class="pix-pb-20 text-break text-body-default">';
                                    if(!empty(get_the_excerpt())){
                                        $output .= get_the_excerpt();
                                    }else{
                                        $output .= wp_trim_words(
                                                strip_shortcodes(get_the_content()), // We'll use the post's content as our text string
                                                40, // We want the first 55 words
                                                '...' // This is what comes after the first 55 words
                                            );
                                    }
                                    $output .= '</div>';

                            $output .= '</div>';
                        $output .= '</div>';
                        $output .= '<div class="d-flex align-items-end w-100">';
                            $output .= '<div class="w-100">';
                                $output .= '<div class="d-inline-block w-100 position-relative pix-pt-20 mt-md-4">';
                                    $output .= '<div class="text-right d-flex w-100" style="line-height:0;">';
                                        $output .= '<div class="text-left">';
                                            $output .= '<a class="mb-0 pix-post-meta-date d-inline-block2 d-flex align-items-center text-xs text-body-default svg-body-default" href="'. get_permalink() .'">';
                                                $output .= '<span class="pr-1">';
                                                    $output .= pix_load_inline_svg(get_template_directory().'/inc/assets/blog/blog-post-date-icon.svg');
                                                $output .= '</span>';
                                                $output .= '<span class="text-body-default">'. get_the_date() .'</span>';
                                            $output .= '</a>';
                                        $output .= '</div>';
                                        $output .= '<div class="flex-fill text-right">';
                                            $output .= '<a href="'. get_permalink() .'" class="btn btn-sm p-0 btn-link text-body-default svg-body-default font-weight-bold pix-hover-item">';
                                                $output .= '<span class="align-bottom">'.esc_attr__('Read more', 'essentials').'</span>';
                                                $output .= '<span class="ml-1 align-middle pix-hover-right">';
                                                $output .= pix_load_inline_svg(get_template_directory().'/inc/images/blog/blog-post-read-more-icon.svg');
                                                $output .= '</span>';
                                            $output .= '</a>';
                                        $output .= '</div>';
                                    $output .= '</div>';
                                $output .= '</div>';


                            $output .= '</div>';
                        $output .= '</div>';
                    $output .= '</div>';

                $output .= '</div>';

                $output .= '</div>';
                break;
            case "right-img":
                $output .= '<div class="d-inline-block position-relative w-100">';
                $output .= '<div class="card '.$item_box.' pix-post-meta-element pix-post-meta-right-img overflow-hidden row no-gutters flex-column flex-md-row flex-md-row-reverse">';

                    $output .= '<div class="flex-column col-md-6">';

                        $output .= pix_get_post_thumb($thumb_atts);

                    $output .= '</div>';

                    $c_padding = 'pr-md-4';
                    if($blog_style_box){
                        $c_padding = 'pix-p-20';
                    }
                    $output .= '<div class="card-body d-flex align-content-between flex-wrap col-md-6 '.$c_padding.' py-md-0">';
                        $output .= '<div class="d-flex align-items-start w-100">';
                            $output .= '<div class="w-100">';
                                $output .= '<div class="pix-post-meta-categories">'.$cats_str.'</div>';
                                $output .= the_title( '<'.$title_tag.' class="entry-title pix-py-10 font-weight-bold '.$title_classes.'"><a class="text-heading-default" href="' . esc_url( get_permalink() ) . '" rel="bookmark">', '</a></'.$title_tag.'>', false );


                                $output .= '<div class="pix-pb-20 text-break text-body-default">';
                                    if(!empty(get_the_excerpt())){
                                        $output .= get_the_excerpt();
                                    }else{
                                        $output .= wp_trim_words(
                                                strip_shortcodes(get_the_content()), // We'll use the post's content as our text string
                                                40, // We want the first 55 words
                                                '...' // This is what comes after the first 55 words
                                            );
                                    }

                                $output .= '</div>';

                            $output .= '</div>';
                        $output .= '</div>';
                        $output .= '<div class="d-flex align-items-end w-100">';
                            $output .= '<div class="w-100">';
                                $output .= '<div class="d-inline-block w-100 position-relative pix-pt-20 mt-md-4">';
                                    $output .= '<div class="text-right d-flex w-100" style="line-height:0;">';
                                        $output .= '<div class="text-left">';
                                            $output .= '<a class="mb-0 pix-post-meta-date d-inline-block2 d-flex align-items-center text-xs text-body-default svg-body-default" href="'. get_permalink() .'">';
                                                $output .= '<span class="pr-1">';
                                                    $output .= pix_load_inline_svg(get_template_directory().'/inc/assets/blog/blog-post-date-icon.svg');
                                                $output .= '</span>';
                                                $output .= '<span class="text-body-default">'. get_the_date() .'</span>';
                                            $output .= '</a>';
                                        $output .= '</div>';
                                        $output .= '<div class="flex-fill text-right">';
                                            $output .= '<a href="'. get_permalink() .'" class="btn btn-sm p-0 btn-link text-body-default svg-body-default font-weight-bold pix-hover-item">';
                                                $output .= '<span class="align-bottom">'.esc_attr__('Read more', 'essentials').'</span>';
                                                $output .= '<span class="ml-1 align-middle pix-hover-right">';
                                                $output .= pix_load_inline_svg(get_template_directory().'/inc/images/blog/blog-post-read-more-icon.svg');
                                                $output .= '</span>';
                                            $output .= '</a>';
                                        $output .= '</div>';
                                    $output .= '</div>';
                                $output .= '</div>';


                            $output .= '</div>';
                        $output .= '</div>';
                    $output .= '</div>';

                $output .= '</div>';

                $output .= '</div>';
                break;

            case "with-padding":
                $output .= '<div class="d-inline-block position-relative w-100">';
                $output .= '<div class="pix-content-box pix-post-meta-element pix-post-meta-with-padding d-flex align-content-between flex-wrap align-self-stretch '.$item_box.'  overflow-hidden '. implode(' ',get_post_class()).'">';
                    $output .= '<div class="d-flex align-items-start w-100">';
                        $output .= '<div class="w-100">';

                            $thumb_atts['img_rounded'] = $rounded_img;
                            $output .= pix_get_post_thumb($thumb_atts);

                            $output .= '<div class="position-relative pix-p-20">';
                                $output .= '<div class="pix-post-meta-categories">'.$cats_str.'</div>';
                                $output .= the_title( '<'.$title_tag.' class="entry-title pix-py-10 font-weight-bold '.$title_classes.'"><a class="text-heading-default" href="' . esc_url( get_permalink() ) . '" rel="bookmark">', '</a></'.$title_tag.'>', false );

                                if($blog_size=='lg'){
                                    $output .= '<div class="pix-pb-20 text-break text-body-default">';
                                    if(!empty(get_the_excerpt())){
                                        $output .= get_the_excerpt();
                                    }else{
                                        $output .= wp_trim_words(
                                                strip_shortcodes(get_the_content()), // We'll use the post's content as our text string
                                                40, // We want the first 55 words
                                                '...' // This is what comes after the first 55 words
                                            );
                                    }
                                    $output .= '</div>';
                                }
                                if($blog_size!='sm'){
                                    $output .= '<div class="text-right d-flex w-100" style="line-height:0;">';
                                        $output .= '<div class="text-left">';
                                            $output .= '<a class="mb-0 pix-post-meta-date d-inline-block2 d-flex align-items-center text-xs text-body-default svg-body-default" href="'. get_permalink() .'">';
                                                $output .= '<span class="pr-1">';
                                                    $output .= pix_load_inline_svg(get_template_directory().'/inc/assets/blog/blog-post-date-icon.svg');
                                                $output .= '</span>';
                                                $output .= '<span class="text-body-default">'. get_the_date() .'</span>';
                                            $output .= '</a>';
                                        $output .= '</div>';
                                        $output .= '<div class="flex-fill text-right">';
                                            $output .= '<a href="'. get_permalink() .'" class="btn btn-sm p-0 btn-link text-body-default svg-body-default font-weight-bold pix-hover-item">';
                                                $output .= '<span class="align-bottom">'.esc_attr__('Read more', 'essentials').'</span>';
                                                $output .= '<span class="ml-1 align-middle pix-hover-right">';
                                                $output .= pix_load_inline_svg(get_template_directory().'/inc/images/blog/blog-post-read-more-icon.svg');
                                                $output .= '</span>';
                                            $output .= '</a>';
                                        $output .= '</div>';
                                    $output .= '</div>';
                                }
                        $output .= '</div>';
                    $output .= '</div>';
                $output .= '</div>';
                $output .= '</div>';
                break;

            default:
                $output .= '<div class="d-inline-block position-relative w-100">';
                $output .= '<div class="pix-content-box '.$item_box.' pix-post-meta-element pix-post-meta-default d-flex align-content-between flex-wrap align-self-stretch slide-inner2 overflow-hidden '. implode(' ',get_post_class()).'">';
                    $output .= '<div class="d-flex align-items-start w-100">';
                        $output .= '<div class="w-100">';

                            $output .= pix_get_post_thumb($thumb_atts);

                            $output .= '<div class="position-relative pix-p-20">';

                                $output .= '<div class="pix-post-meta-categories">'.$cats_str.'</div>';

                                $output .= the_title( '<'.$title_tag.' class="entry-title pix-py-10 font-weight-bold '.$title_classes.'"><a class="text-heading-default" href="' . esc_url( get_permalink() ) . '" rel="bookmark">', '</a></'.$title_tag.'>', false );

                                if($blog_size=='lg'){
                                    $output .= '<div class="pix-pb-20 text-break text-body-default">';
                                        $output .= get_the_excerpt();

                                    $output .= '</div>';
                                }
                                if($blog_size!='sm'){
                                    $output .= '<div class="text-right d-flex w-100" style="line-height:0;">';
                                        $output .= '<div class="text-left">';
                                            $output .= '<a class="mb-0 pix-post-meta-date d-inline-block2 d-flex align-items-center text-xs text-body-default svg-body-default" href="'. get_permalink() .'">';
                        						$output .= '<span class="pr-1">';
                        						    $output .= pix_load_inline_svg(get_template_directory().'/inc/assets/blog/blog-post-date-icon.svg');
                        						$output .= '</span>';
                        						$output .= '<span class="text-body-default">'. get_the_date() .'</span>';
                        					$output .= '</a>';
            	                        $output .= '</div>';
            	                        $output .= '<div class="flex-fill text-right">';
                                            $output .= '<a href="'. get_permalink() .'" class="btn btn-sm p-0 btn-link text-body-default svg-body-default font-weight-bold pix-hover-item">';
                                                $output .= '<span class="align-bottom">'.esc_attr__('Read more', 'essentials').'</span>';
            									$output .= '<span class="ml-1 align-middle pix-hover-right">';
            									$output .= pix_load_inline_svg(get_template_directory().'/inc/images/blog/blog-post-read-more-icon.svg');
            									$output .= '</span>';
                                            $output .= '</a>';
                                    	$output .= '</div>';
            	                    $output .= '</div>';
                                }
                            $output .= '</div>';
                        $output .= '</div>';
                    $output .= '</div>';
                $output .= '</div>';
                $output .= '</div>';

        }
        $output .= '</article>';



        return $output;
    }
}

if ( ! function_exists( 'pix_get_post_thumb' ) ) {
    function pix_get_post_thumb($atts = ""){
        extract(shortcode_atts(
    		array(
    			'blog_layout' => '',
    			'img_rounded' => '',
                'size'       => ''
    		), $atts ));
        $output = '';
        $img_classes = '';
        if($blog_layout=='transparent'||$blog_layout=='with-padding'){
            $img_classes .= 'rounded-xl overflow-hidden';
        }elseif($blog_layout=='left-img'||$blog_layout=='right-img'){
            $img_classes .= 'rounded-0 flex-grow-1 h-100 pix-fit-cover';
        }elseif($blog_layout=='full-img'){
            $img_classes .= 'rounded-0 flex-grow-1 h-100 pix-opacity-7 pix-fit-cover';
        }else{
            $img_classes .= 'card-img-top';
        }
        $card_bg = '';
        if(has_post_format('quote')){
            $img_classes .= ' pix-opacity-3';
            $card_bg = 'bg-gradient-primary';
        }
        $img_attrs = array(
    		'class'	=> 'img-fluid pix-img-scale pix-fit-cover2 rounded-0 '.$img_classes,
    		'style'	=> 'max-height: 450px;min-height:100%;width:100%;object-fit:cover;',
    		'alt'	=> get_the_title()
    	);

        $comment_link = get_comments_link();
        $comment_count = get_comments_number();
        $author = get_the_author();
        $author_img = '';
        $avatar = '';
        if($blog_layout=='full-img'){
            $avatar = get_avatar_url(get_the_author_meta('ID'), array('size'=>36));
            if($avatar !== FALSE){
                $author_img = '<img class="pix_blog_sm_avatar shadow" src="'.esc_url($avatar).'" alt="'.$avatar.'">';
            }
        }else{
            $avatar = get_avatar_url(get_the_author_meta('ID'), array('size'=>80));
            if($avatar !== FALSE){
                $author_img = '<img class="pix_blog_md_avatar shadow" src="'.esc_url($avatar).'" alt="'.$avatar.'">';
            }
        }

    	$full_image_url = wp_get_attachment_image( get_post_thumbnail_id(), 'full', false, $img_attrs );
    	$img_src = $full_image_url;
        $format = get_post_format();
        $protected = false;
        if(post_password_required()){
            $format = 'protected';
            $protected = true;
        }

        if($blog_layout=='with-padding'){
            $output .= '<div class="pix-pt-20 pix-px-20">';
        }

        $imgOut = '';
        $metaClass = 'pix-hover-item';
        if(!empty($img_src)){
            $imgOut .= $img_src;
        }else{
            if(in_array($format,array('video', 'audio', 'link', 'quote' ))){
                $imgOut .= '<div class="d-inline-block w-100 h-100 bg-gradient-primary" style="min-height:350px;"></div>';
            }else{
                if(is_sticky()){
                    $imgOut .= '<div class="d-inline-block w-100 h-100 bg-gradient-primary" style="min-height:80px;"></div>';
                }else{
                    $imgOut .= '<div class="d-inline-block w-100 h-100 bg-gray-2" style="min-height:80px;"></div>';
                }

                $metaClass = '';
            }
        }

        $output .= '<div class="card '.$img_rounded.' '.$metaClass.' overflow-hidden '.$card_bg.' text-white2 h-100">';
            $output .= $imgOut;


            $output .= '<div class="card-img-overlay h-100 d-flex flex-column justify-content-end">';
                $output .= '<div class="overflow-hidden2">';

                    if(!$protected && has_post_format(array('video', 'audio', 'link', 'quote' ))){
                        if(has_post_format('video')){
                            if(get_post_meta( get_the_ID(), 'pix-post-video', true )){
                                $res = get_post_meta( get_the_ID(), 'pix-post-video', true );

                                $output .= '<div class="pix-post-format-btn text-center d-inline-block2 d-flex justify-content-center">';
                                   $output .= '<a href="#" data-aspect="embed-responsive-16by9" data-content="'.htmlspecialchars($res).'" class="pix-video-popup pix-post-format-a d-inline-block rounded-circle align-self-center scale shadow-lg shadow-hover-lg bg-white pix-p-10 d-flex align-items-center justify-content-center">';
                                    $output .= pix_load_inline_svg(get_template_directory().'/inc/images/play_arrow.svg');
                                   $output .= '</a>';
                                $output .= '</div>';

                            }else{
                                $content = apply_filters('the_content', get_post_field('post_content', get_the_ID()));
                                $iframes = get_media_embedded_in_content( $content, array('iframe', 'video', 'embed') );
                                if(!empty($iframes)){
                                    if(!empty($iframes[0])){
                                        $res = preg_replace("/[\`]/", "", $iframes[0]);
                                        $output .= '<div class="pix-post-format-btn text-center d-inline-block2 d-flex justify-content-center">';
                                           $output .= '<a href="#" data-aspect="embed-responsive-16by9" data-content="'.htmlspecialchars($res).'" class="pix-video-popup pix-post-format-a d-inline-block rounded-circle align-self-center scale shadow-lg shadow-hover-lg bg-white pix-p-10 d-flex align-items-center justify-content-center">';
                                            $output .= pix_load_inline_svg(get_template_directory().'/inc/images/play_arrow.svg');
                                           $output .= '</a>';
                                        $output .= '</div>';

                                    }
                                }
                            }
                        }
                        if(has_post_format('audio')){
                            if(get_post_meta( get_the_ID(), 'pix-post-audio', true )){
                                $output .= '<div class="pix-post-format-btn text-center d-inline-block">';
                                $res = get_post_meta( get_the_ID(), 'pix-post-audio', true );
                                   $output .= '<a href="#" data-aspect="embed-responsive-16by9" data-content="'.htmlspecialchars($res).'" class="pix-video-popup pix-post-format-a d-inline-block rounded-circle align-self-center scale shadow-lg shadow-hover-lg bg-white"><i class="pixicon-play m-0 p-0"></i></a>';
                                $output .= '</div>';
                            }else{
                                $content = apply_filters('the_content', get_post_field('post_content', get_the_ID()));
                                $iframes = get_media_embedded_in_content( $content, 'audio' );
                                if(!empty($iframes)){
                                    if(!empty($iframes[0])){
                                        $output .= '<div class="pix-post-format-btn text-center d-inline-block">';
                                        $res = preg_replace("/[\`]/", "", $iframes[0]);
                                           $output .= '<a href="#" data-aspect="embed-responsive-16by9" data-content="'.htmlspecialchars($res).'" class="pix-audio-popup pix-post-format-a d-inline-block rounded-circle align-self-center scale shadow-lg shadow-hover-lg bg-white"><i class="pixicon-volume-3 m-0 p-0"></i></a>';
                                        $output .= '</div>';
                                    }
                                }
                            }
                        }
                        if(has_post_format('link')){
                            if(get_post_meta( get_the_ID(), 'pix-post-link', true )){
                                $output .= '<div class="pix-post-format-btn text-center d-inline-block">';
                	               $output .= '<a href="'.get_post_meta( get_the_ID(), 'pix-post-link', true ).'" target="_blank" class=" pix-post-format-a d-inline-block rounded-circle align-self-center scale shadow-lg shadow-hover-lg bg-white"><i class="pixicon-link-4 m-0 p-0"></i></a>';
                                $output .= '</div>';
                            }
                        }
                        if(has_post_format('quote')){
                            if(get_post_meta( get_the_ID(), 'pix-post-quote', true )){
                                $output .= '<div class="pix-post-format-btn pix-format-quote text-center d-inline-block pix-p-30 text-20 font-italic text-white">';
                                $output .= '<div class="">';
                	               $output .= get_post_meta( get_the_ID(), 'pix-post-quote', true );
                                   $output .= '</div>';
                                   $output .= '<div class="font-weight-bold pix-mt-10">';
                	               $output .= get_post_meta( get_the_ID(), 'pix-post-quote-citation', true );
                                $output .= '</div>';
                                $output .= '</div>';
                            }
                        }
                    }




                    $output .= '<div class="d-flex align-items-end w-100">';
                        $output .= '<div class="entry-meta pix-fade-in d-flex align-items-center w-100">';
                            $output .= '<div class="flex-fill text-left">';
                                $output .= '<a href="'.get_author_posts_url(get_the_author_meta('ID')).'" class="pix-post-meta-author text-heading-default font-weight-bold" data-toggle="tooltip" data-placement="right" title="'.esc_attr__('By', 'essentials').' '.$author.'">';
                                  $output .= $author_img;
                                $output .= '</a>';
                            $output .= '</div>';
                            if(comments_open()){
                                $output .= '<div class="pix-post-meta-comments text-right pr-2">';
                                    $output .= '<a href="'.$comment_link.'" class="d-flex align-items-center pix-blog-badge-box text-xs pm-2 bg-white pix-py-5 pix-px-15 shadow-sm rounded-xl text-body-default svg-body-default">';
                                        $output .= '<span class="pix-pr-5">';
                                            $output .= pix_load_inline_svg(get_template_directory().'/inc/images/blog/blog-post-comments-icon.svg');
                                        $output .= '</span>';
                                        $output .= '<span class="align-middle font-weight-bold">'.$comment_count.'</span>';
                                    $output .= '</a>';
                                $output .= '</div>';
                            }
                            $output .= '<div class="text-right text-sm">';
                                if( function_exists('get_pixfort_likes') ){
                                    $output .= get_pixfort_likes('box');
                                }
                            $output .= '</div>';
                        $output .= '</div>';
                    $output .= '</div>';
                $output .= '</div>';
            $output .= '</div>';
        $output .= '</div>';
        if($blog_layout=='with-padding'){
            $output .= '</div>';
        }

        return $output;

    }
}



if ( ! function_exists( 'pix_get_post_simple_thumb' ) ) {
    function pix_get_post_simple_thumb($atts = ""){
        extract(shortcode_atts(
    		array(
    			'blog_layout' => '',
    			'img_rounded' => '',
                'size'       => ''
    		), $atts ));
        $img_classes = '';
        $card_bg = '';
        if(has_post_format('quote')){
            $img_classes .= ' pix-opacity-3';
            $card_bg = 'bg-gradient-primary';
        }
        $img_attrs = array(
    		'class'	=> 'img-fluid pix-img-scale '.$img_classes,
    		'style'	=> 'max-height: 450px;min-height:100%;width:100%;object-fit:cover;',
    		'alt'	=> get_the_title()
    	);
    	$full_image_url = wp_get_attachment_image( get_post_thumbnail_id(), 'full', false, $img_attrs );
    	$img_src = $full_image_url;
        $format = get_post_format();


        ?>
        <div class="card rounded-xl pix-hover-item shadow-lg <?php echo esc_attr( $card_bg ); ?> overflow-hidden text-white2 h-100">
            <?php
            if(!empty($img_src)){
                echo wp_get_attachment_image( get_post_thumbnail_id(), 'full', false, $img_attrs );
            }else{
                if(in_array($format,array('video', 'audio', 'link', 'quote' ))){
                    ?>
                    <div class="d-inline-block w-100 h-100 bg-gradient-primary" style="min-height:350px;"></div>
                    <?php
                }
            }
            ?>
            <div class="card-img-overlay h-100 d-flex flex-column justify-content-end">
                <div class="overflow-hidden2">
                    <?php
                    if(has_post_format(array('video', 'audio', 'link', 'quote' ))){
                        if(has_post_format('video')){
                            if(get_post_meta( get_the_ID(), 'pix-post-video', true )){
                                $res = get_post_meta( get_the_ID(), 'pix-post-video', true );
                                ?>
                                <div class="pix-post-format-btn text-center d-inline-block2 d-flex justify-content-center">
                                    <a href="#" data-aspect="embed-responsive-16by9" data-content="<?php echo htmlspecialchars($res); ?>" class="pix-video-popup pix-post-format-a d-inline-block rounded-circle align-self-center scale shadow-lg shadow-hover-lg bg-white pix-p-10 d-flex align-items-center justify-content-center">
                                        <?php echo pix_load_inline_svg(get_template_directory().'/inc/images/play_arrow.svg'); ?>
                                    </a>
                                </div>
                                <?php
                            }else{
                                $content = apply_filters('the_content', get_post_field('post_content', get_the_ID()));
                                $iframes = get_media_embedded_in_content( $content, array('iframe', 'video', 'embed') );
                                if(!empty($iframes)){
                                    if(!empty($iframes[0])){
                                        $res = preg_replace("/[\`]/", "", $iframes[0]);
                                        ?>
                                        <div class="pix-post-format-btn text-center d-inline-block2 d-flex justify-content-center">
                                            <a href="#" data-aspect="embed-responsive-16by9" data-content="<?php echo htmlspecialchars($res); ?>" class="pix-video-popup pix-post-format-a d-inline-block rounded-circle align-self-center scale shadow-lg shadow-hover-lg bg-white pix-p-10 d-flex align-items-center justify-content-center">
                                               <?php echo pix_load_inline_svg(get_template_directory().'/inc/images/play_arrow.svg'); ?>
                                            </a>
                                        </div>
                                        <?php
                                    }
                                }
                            }
                        }
                        if(has_post_format('audio')){
                            if(get_post_meta( get_the_ID(), 'pix-post-audio', true )){
                                ?>
                                <div class="pix-post-format-btn text-center d-inline-block">
                                <?php $res = get_post_meta( get_the_ID(), 'pix-post-audio', true ); ?>
                                    <a href="#" data-aspect="embed-responsive-16by9" data-content="<?php echo htmlspecialchars($res); ?>" class="pix-video-popup pix-post-format-a d-inline-block rounded-circle align-self-center scale shadow-lg shadow-hover-lg bg-white"><i class="pixicon-play m-0 p-0"></i></a>
                                </div>
                                <?php
                            }else{
                                $content = apply_filters('the_content', get_post_field('post_content', get_the_ID()));
                                $iframes = get_media_embedded_in_content( $content, 'audio' );
                                if(!empty($iframes)){
                                    if(!empty($iframes[0])){
                                        ?>
                                        <div class="pix-post-format-btn text-center d-inline-block">
                                            <?php
                                            $res = preg_replace("/[\`]/", "", $iframes[0]);
                                            ?>
                        	                <a href="#" data-aspect="embed-responsive-16by9" data-content="<?php echo htmlspecialchars($res); ?>" class="pix-audio-popup pix-post-format-a d-inline-block rounded-circle align-self-center scale shadow-lg shadow-hover-lg bg-white"><i class="pixicon-volume-3 m-0 p-0"></i></a>
                                        </div>
                                        <?php
                                    }
                                }
                            }
                        }
                        if(has_post_format('link')){
                            if(get_post_meta( get_the_ID(), 'pix-post-link', true )){
                                ?>
                                <div class="pix-post-format-btn text-center d-inline-block">
                	                <a href="<?php echo esc_url( get_post_meta( get_the_ID(), 'pix-post-link', true ) ); ?>" target="_blank" class=" pix-post-format-a d-inline-block rounded-circle align-self-center scale shadow-lg shadow-hover-lg bg-white"><i class="pixicon-link-4 m-0 p-0"></i></a>';
                                </div>
                                <?php
                            }
                        }
                        if(has_post_format('quote')){
                            if(get_post_meta( get_the_ID(), 'pix-post-quote', true )){
                                ?>
                                <div class="pix-post-format-btn text-center d-inline-block pix-p-30 text-20 font-italic text-white">
                                    <div class="">
                    	               <?php echo esc_attr( get_post_meta( get_the_ID(), 'pix-post-quote', true ) ); ?>
                                    </div>
                                    <div class="font-weight-bold pix-mt-10">
                    	               <?php echo esc_attr( get_post_meta( get_the_ID(), 'pix-post-quote-citation', true ) ); ?>
                                    </div>
                                </div>
                                <?php
                            }
                        }
                    }
                    ?>
                </div>
            </div>
        </div>
        <?php
    }
}


if ( ! function_exists( 'essentials_get_blog_page' ) ) {
    function essentials_get_blog_page(){

        $paged = ( get_query_var( 'paged' ) ) ? get_query_var( 'paged' ) : 1;

        $query_options = array(
            'posts_per_page' => 8,
            'paged' => $paged
        );


        $blog_type = 'default';
        if(!empty(pix_get_option('blog-page-layout'))){
            $blog_type = pix_get_option('blog-page-layout');
        }
        if(!empty($_GET["blog_type"])){
            switch ($_GET["blog_type"]) {
                case 'masonry':
                    $blog_type = 'masonry';
                    break;
                case 'grid':
                    $blog_type = 'grid';
                    break;
                case 'default':
                    $blog_type = 'default';
                    break;
            }
        }

        if(pix_get_option('blog-posts')){
            $query_options['posts_per_page'] = pix_get_option('blog-posts');
        }

        $the_query = new WP_Query( $query_options );

        switch ($blog_type) {
            case 'masonry':
                $blog_masonry_count = '3';
                if(!empty(pix_get_option('blog-masonry-count'))){
                    $blog_masonry_count = pix_get_option('blog-masonry-count');
                }
                if(!empty($_GET["masonry_count"])){
                    switch ($_GET["masonry_count"]) {
                        case '2':
                            $blog_masonry_count = '2';
                            break;
                        case '3':
                            $blog_masonry_count = '3';
                            break;
                        case '4':
                            $blog_masonry_count = '4';
                            break;
                        case '5':
                            $blog_masonry_count = '5';
                            break;
                    }
                }
                echo '<div>';
                echo '<div class="pix_masonry pix_masonry_'.$blog_masonry_count.'">';
                    echo '<div class="grid-sizer"></div>';
                    echo '<div class="gutter-sizer"></div>';
                    while ( $the_query->have_posts() ) :
                        echo '<div class="grid-item">';
                            $the_query->the_post();
                            get_template_part( 'template-parts/content' );
                        echo '</div>';
                    endwhile; // End of the loop.
                echo '</div>';
                echo '</div>';
                break;
            case 'grid':
                $blog_grid_count = '4';
                if(!empty(pix_get_option('blog-grid-count'))){
                    $blog_grid_count = pix_get_option('blog-grid-count');
                }
                if(!empty($_GET["grid_count"])){
                    switch ($_GET["grid_count"]) {
                        case '2':
                            $blog_grid_count = '6';
                            break;
                        case '3':
                            $blog_grid_count = '4';
                            break;
                        case '4':
                            $blog_grid_count = '3';
                            break;
                    }
                }
                echo '<div class="container">';
                    echo '<div class="row">';
                    while ( $the_query->have_posts() ) :
                        echo '<div class="col-12 col-md-'.$blog_grid_count.'">';
                        $the_query->the_post();
                        get_template_part( 'template-parts/content' );
                        echo '</div>';
                    endwhile; // End of the loop.
                    echo '</div>';
                echo '</div>';
                break;

            default:
                while ( $the_query->have_posts() ) :
                    $the_query->the_post();
                    get_template_part( 'template-parts/content' );
                endwhile; // End of the loop.
                break;
        }

        echo '<div class="pix-pagination d-sm-flex justify-content-center align-items-center">';
            echo paginate_links( array(
               'base'         => str_replace( 999999999, '%#%', esc_url( get_pagenum_link( 999999999 ) ) ),
               'total'        => $the_query->max_num_pages,
               'current'      => max( 1, get_query_var( 'paged' ) ),
               'format'       => '?paged=%#%',
               'show_all'     => false,
               'type'         => 'plain',
               'end_size'     => 2,
               'mid_size'     => 1,
               'prev_next'    => true,
               'prev_text'    => '<span class="d-sm-flex justify-content-center align-items-center"><i class="pixicon-angle-left align-self-center"></i></span>',
               'next_text'    => '<span class="d-sm-flex justify-content-center align-items-center"><i class="pixicon-angle-right align-self-center"></i></span>',
               'add_args'     => false,
               'add_fragment' => '',
           ) );

       echo '</div>';

       echo '<div class="pix-mb-40">';
        the_posts_navigation();
        echo '</div>';

        wp_reset_postdata();
    }
}
