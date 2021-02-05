<?php

/* ---------------------------------------------------------------------------
* Review element [pix_review]
* --------------------------------------------------------------------------- */
if( ! function_exists( 'sc_pix_review' ) ){
	function sc_pix_review( $attr, $content = null ){
		extract(shortcode_atts(array(
			'name' 	=> '',
			'title' 	=> '',
			'image' 	=> '',
			'rating' 	=> '',
			'link' 	=> '',


			'title' 	=> '',
			'bold'		=> 'font-weight-bold',
			'italic'		=> '',
			'secondary_font'		=> '',
			'name_color'		=> 'dark-opacity-8',
			'name_custom_color'		=> '',
            'title_color'		=> 'dark-opacity-6',
			'title_custom_color'		=> '',
			'title_size'		=> 'text-sm',
			'content_bold'		=> '',
			'content_italic'		=> '',
			'content_secondary_font'		=> '',
            'content_color'		=> 'dark-opacity-5',
			'content_custom_color'		=> '',
			'content_size'		=> 'text-20',
			'slider_style' 		=> 'pix-opacity-slider-2',
	        'hover_effect' 		=> '',
	        'add_hover_effect' 		=> '',
			'bg_color' 	=> 'transparent',
			'custom_bg_color' 	=> '',
			'rounded_box' 	=> 'rounded-0',
			'style' 	=> '',
			'animation' 	=> 'fade-in-up',
			'delay' 	=> '500',
			'slides' 	=> '',


			'css' 	=> '',
		), $attr));


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

		$css_class = '';
        if(function_exists('vc_shortcode_custom_css_class')){
            $css_class = apply_filters( VC_SHORTCODE_CUSTOM_CSS_FILTER_TAG, vc_shortcode_custom_css_class( $css, ' ' ) );
        }

		$classes = array();
		$item_classes = array();
		$content_classes = array();

		$i_style = '';
		if($bg_color=='custom' && !empty($custom_bg_color)){
			$i_style = 'style="background:'.$custom_bg_color.'"';
		}
		if($bg_color=='gradient-primary') $bg_color = $bg_color.'-cover';
		array_push($item_classes, 'bg-'.$bg_color);
		array_push($item_classes, $rounded_box);

		if($style){
			array_push($item_classes, $style_arr[$style]);
		}
		if($hover_effect){
			array_push($item_classes, $hover_effect_arr[$hover_effect]);
		}
		if($add_hover_effect){
			array_push($item_classes, $add_hover_effect_arr[$add_hover_effect]);
		}

		$n_custom_color = '';
		if(!empty($name_color)){
			if($name_color!='custom'){
				array_push($classes, 'text-'.$name_color );
			}else{
				$n_custom_color = 'color:'.$name_custom_color.' !important;';
			}
		}

        if(!empty($bold)) array_push($classes, $bold );
		if(!empty($italic)) array_push($classes, $italic );
		if(!empty($secondary_font)) array_push($classes, $secondary_font );

        array_push($classes, 'mb-0' );

        $class_names = join( ' ', $classes );
        $item_class_names = join( ' ', $item_classes );


        $t_color = '';
        $t_custom_color = '';
        if(!empty($title_color)){
            if($title_color!='custom'){
                $t_color = 'text-'.$title_color;
            }else{
                $t_custom_color = 'color:'.$title_custom_color.' !important;';
            }
        }

		if(!empty($content_bold)) array_push($content_classes, $content_bold );
		if(!empty($content_italic)) array_push($content_classes, $content_italic );
		if(!empty($content_secondary_font)) array_push($content_classes, $content_secondary_font );
		$content_class_names = join( ' ', $content_classes );
        $c_color = '';
        $c_custom_color = '';
        if(!empty($content_color)){
            if($content_color!='custom'){
                $c_color = 'text-'.$content_color;
            }else{
                $c_custom_color = 'color:'.$content_custom_color.' !important;';
            }
        }


		$anim_type = '';
		$content_delay = '';
		$rating_delay = '';
		$name_delay = '';
		$title_delay = '';
		$anim = '';
		if(!empty($animation)){
			$anim = 'animate-in';
			$anim_type = 'data-anim-type="'.$animation.'"';
			$content_delay = 'data-anim-delay="'.$delay.'"';
			$delay += 100;
			$rating_delay = 'data-anim-delay="'.$delay.'"';
			$delay += 100;
			$name_delay = 'data-anim-delay="'.$delay.'"';
			$delay += 100;
			$title_delay = 'data-anim-delay="'.$delay.'"';
		}




		$output  = '';




		$imgSrc = false;
		if(!empty($image)){

			$attrs = array(
				'class'	=> 'img-fluid pix-fit-cover',
				'style'	=> 'height:70px !important;width:70px;object-fit: cover;',
				'alt'	=> get_the_title()
			);

			$imgSrc = '';
			if(is_string($image)&&substr( $image, 0, 4 ) === "http"){
				$imgSrc = '<img class="img-fluid pix-fit-cover" style="height:70px !important;width:70px;object-fit: cover;" alt="'.get_the_title().'" src="'. $image .'"  />';
			}else{
				if(!empty($image['id'])){
	              $full_image_url = wp_get_attachment_image($image['id'], "pix-woocommerce-md", false, $attrs);
	            }else{
	              $full_image_url = wp_get_attachment_image($image, "pix-woocommerce-md", false, $attrs);
	            }
				$imgSrc = $full_image_url;
			}

		}
		$title = empty($title)? '':$title;

		$output .= '<div class="card2 p-3 '.$item_class_names.' '.$css_class.'" '.$i_style.'>';
			if( !empty($link) ) $output .= '<a target="_blank" href="'. $link .'" title="'. $title .'">';
				$output .= '<div class="blockquote2 mb-0 card-body text-center">';
					if($imgSrc){
						$output .= '<div class="rounded-circle text-center mb-4 bg-dark-opacity-1 overflow-hidden d-inline-block" style="width:70px;height:70px;position:relative;">'. $imgSrc .'</div>';
					}
					$output .= '<p class="'.$content_class_names.' '.$c_color.' '.$content_size.' '.$anim.'" style="'.$c_custom_color.'" '.$anim_type.' '.$content_delay.'>'. do_shortcode($content) .'</p>';
					if(!empty($rating)){
						$count = (int)$rating;
						$output .= '<div class="text-center '.$anim.'" '.$anim_type.' '.$rating_delay.'>';
                            $output .= '<span class="bg-orange-light rounded-lg pb-1 mb-3 d-inline-block px-2 text-yellow">';
								for ($x = 1; $x <= 5; $x++) {
									if($x<=$count){
										$output .= '<img class="px-1" src="'.PIX_CORE_PLUGIN_URI.'functions/images/star.svg" alt=""/>';
									}else{
										$output .= '<img class="px-1" src="'.PIX_CORE_PLUGIN_URI.'functions/images/star-empty.svg" alt=""/>';
									}
								}
                            $output .= '</span>';
                        $output .= '</div>';
					}
					$output .= '<div class="d-flex justify-content-center text-center">';
						$output .= '<div class="align-self-center">';
						$output .= '<h6 class="'. $class_names .' text-attachment-fix mx-3 '.$anim.'" '.$anim_type.' '.$name_delay.' style="'.$n_custom_color.'">'. $name .'</h6>';
						$output .= '<span class="'.$t_color.' '.$title_size.' text-attachment-fix pb-0 mx-3 mb-0 '.$anim.'" style="'.$t_custom_color.'" '.$anim_type.' '.$title_delay.'>'. $title .'</span>';
						$output .= '</div>';
					$output .= '</div>';
				$output .= '</div>';
			if( !empty($link) ) $output .= '</a>';
		$output .= '</div>';


		return $output;
	}
}

add_shortcode( 'pix_review', 'sc_pix_review' );

?>
