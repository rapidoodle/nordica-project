<?php

/* ---------------------------------------------------------------------------
 * Content box [content_tabs]
 * --------------------------------------------------------------------------- */
if( ! function_exists( 'sc_content_tabs' ) )
{
   function sc_content_tabs( $attr, $content = null )
   {
       extract(shortcode_atts(array(
           'badge_text' 		=> '',
           'badge_bold' 		=> 'font-weight-normal',
           'badge_italic' 		=> '',
           'badge_secondary_font' 		=> '',
           'badge_text_color' 		=> 'primary',
           'badge_text_custom_color' 		=> '',
           'badge_bg_color' 		=> 'primary-light',
           'badge_custom_bg_color' 		=> '',
           'badge_text_size' 		=> 'h5',
           'badge_text_custom_size' 		=> '',
           'badge_css' 		=> '',


           'title'		=> '',
           'bold'		=> 'font-weight-bold',
           'italic'		=> '',
           'secondary_font'		=> '',
           'title_color'		=> '',
           'title_custom_color'		=> '',
           'title_size'		=> 'h1',
           'title_custom_size'		=> '',
           'text_content'		=> '',
           'content_color'		=> 'primary',
           'content_custom_color'		=> '',
           'content_size'		=> '',
           'h1'		=> '',
           'icon' 		=> '',
           'slogan' 	=> '',
           'style' 	=> '',	// icon, line, arrows
           'position'  => 'text-left',
           'padding_title'			=> '',
           'padding_content'		=> '',
           'padding_menu'		=> '20px',


           'is_sticky'  => '',
           'menu_position'  => 'left',
           'tabs_style'  => 'pix-pills-1',
           'tabs_content_align'  => '',



           'style' 		=> '',

           'hover_effect' 		=> '',
           'add_hover_effect' 		=> '',
           'text_color' 		=> '',
           'rounded_box' 		=> '',
           'pix_particles_check' => '',
           'pix_particles' => '',
           'particles_top_index' => '',
           'animation'		=> '',
           'delay'		=> '0',
           'css' => '',
           'overflow' 		=> '',

           'el_class' 		=> 'mb-2',
       ), $attr));

           $output = '';


           $css_class = '';
            if(function_exists('vc_shortcode_custom_css_class')){
                $css_class = apply_filters( VC_SHORTCODE_CUSTOM_CSS_FILTER_TAG, vc_shortcode_custom_css_class( $css, ' ' ) );
            }


           $badge_attr = array(
   			'text'		=> $badge_text,
            'bold'  => $badge_bold,
            'italic'  => $badge_italic,
   			'secondary_font'  => $badge_secondary_font,
   			'text_color'		=> $badge_text_color,
   			'text_custom_color'		=> $badge_text_custom_color,
   			'text_size'		=> $badge_text_size,
   			'text_custom_size'		=> $badge_text_custom_size,
   			'css'		=> $badge_css,


   			'bg_color'		=> $badge_bg_color,
   			'custom_bg_color'		=> $badge_custom_bg_color,
   			'animation' 	=> '',
   			'delay' 	=> '0',
   		);
           $heading_attr = array_merge(
               $attr,
               array(
                   'content'		=> $text_content,
               )
           );


           $pattern = get_shortcode_regex();


  		preg_match_all('/\[pix_content_tab(.*?)\](.*?)\[\/pix_content_tab(.*?)\]/s',$content,$sc_matches);
  		if ( isset( $sc_matches[0] ) ) {
  			$inner_scs = $sc_matches[0];
  		}

  		$reg = get_shortcode_regex();
  		$attrs = array();
  		$i=0;
  		foreach ( $inner_scs as $tab ) {
  			preg_match_all( '/pix_content_tab([^\]]+)/i', $tab, $matches4, PREG_OFFSET_CAPTURE );
  			$tab_titles2 = array();
  			$tab_titles2 = $matches4[1];
  			$tabs_nav = array();
  			foreach ( $tab_titles2 as $pix_sc ) {
  				$attrs[$i] = shortcode_parse_atts( $pix_sc[0] );
  			}
  			// The content
  			preg_match_all('~'.$reg.'~',$tab,$the_inner);
  			$attrs[$i]['pix_content'] = $the_inner[5][0];

  			$i++;
  		}

        $animate_class = '';
        if(!empty($animation)){
            $animate_class = 'animate-in';
        }
        $tabs = '';
        $tabs .= '<div class="col-12 col-md-8 d-inline-block">';
                $tabs .= '<div class="pix_tabs_content '.$animate_class.'" data-anim-type="'.$animation.'" data-anim-delay="'.$delay.'">';
                    $tabs .= '<div class="tab-content '.$tabs_content_align.'">';
                        $tabs .= do_shortcode($content);
                    $tabs .= '</div>';
                $tabs .= '</div>';
        $tabs .= '</div>';

        $menu = '';
        $menu .= '<div class="col-12 col-md-4 d-inline-block">';
            $menu .= '<div class="'.$is_sticky.'" style="top:110px;">';

                if(!empty($badge_text)){
                    $menu .= '<div class="'.$position.'">';
                    $menu .= sc_pix_badge($badge_attr);
                    $menu .= '</div>';
                }
                $menu .= sc_heading($heading_attr, $text_content);

                $padding = '';
                if(!empty($padding_menu)){
                    $padding = 'style="padding-top:'.$padding_menu.';"';
                }
                $menu .= '<div class="nav pix_tabs_btns '.$position.' flex-column nav-pills '.$tabs_style.' '.$animate_class.'" data-anim-type="'.$animation.'" data-anim-delay="'.$delay.'" role="tablist" id="v-pills-tab"  aria-orientation="vertical" '.$padding.'>';

                foreach ( $attrs as $key => $item ) {
                        $title = $item['tab_id'];
                        if(!empty($item['title'])){
                            $title = $item['title'];
                        }
                        $icon_html = '';
                        if(!empty($item['icon'])){
                            $icon_html = '<i class="'.$item['icon'].' mr-2"></i> ';
                        }
                        $bold = '';
                        if(!empty($item['bold'])){
                            $bold = 'font-weight-bold';
                        }
                        $italic = '';
                        if(!empty($item['italic'])){
                            $italic = $item['italic'];
                        }
                        $secondary_font = '';
                        if(!empty($item['secondary_font'])){
                            $secondary_font = $item['secondary_font'];
                        }
                        $menu .= '<div class="nav-item mx-0">';

                            $menu .= '<a class="nav-link pix-tabs-btn text-24 py-2 mb-2 '.$position.' '.$bold.' '.$italic.' '.$secondary_font.'" data-id="'. $item['tab_id'] .'" id="pix-tab-btn-'. $item['tab_id'] .'" role="tab" data-toggle="pill" href="#pix-tab-'. $item['tab_id'] .'"  aria-controls="pix-tab-'. $item['tab_id'] .'" aria-selected="true">'.$icon_html. $title .'</a>';
                        $menu .= '</div>';
                }
                $menu .= '</div>';
            $menu .= '</div>';
        $menu .= '</div>';

        // Final output
        $output .= '<div class="'.$css_class.'">';
            $output .= '<div class="row pix-waiting pix_tabs_container">';
                if($menu_position=='left'){
                    $output .= $menu;
                    $output .= $tabs;
                }else{
                    $output .= $tabs;
                    $output .= $menu;
                }
            $output .= '</div>';
        $output .= '</div>';

       return $output;
   }
}

add_shortcode('content_tabs', 'sc_content_tabs');
add_shortcode('pix_vertical_tabs', 'sc_content_tabs');

 ?>
