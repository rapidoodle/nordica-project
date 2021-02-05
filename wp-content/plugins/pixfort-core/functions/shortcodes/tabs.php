<?php

/* ---------------------------------------------------------------------------
 * Content box [content_box]
 * --------------------------------------------------------------------------- */
 if( ! function_exists( 'sc_pix_tabs' ) )
 {
    function sc_pix_tabs( $attr, $content = null )
    {
        extract(shortcode_atts(array(
            'is_fill'	=> '',
            'position'	=> 'justify-content-center',
            'tabs_style'	=> 'pix-pills-1',
            'tabs_content_align'  => '',
            'animation'	=> '',
            'delay'	=> '0',
            'el_class'	=> '',
            'tabs_icon_position' 		=> '',
            'css'	=> '',
        ), $attr));

        $css_class = '';
        if(function_exists('vc_shortcode_custom_css_class')){
            $css_class = apply_filters( VC_SHORTCODE_CUSTOM_CSS_FILTER_TAG, vc_shortcode_custom_css_class( $css, ' ' ) );
        }

        $output = '';

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
         $tabs .= '<div class="pix_tabs_content '.$animate_class.'" data-anim-type="'.$animation.'" data-anim-delay="'.$delay.'">';
             $tabs .= '<div class="tab-content '.$tabs_content_align.'">';
                 $tabs .= do_shortcode($content);
             $tabs .= '</div>';
         $tabs .= '</div>';

     $menu = '';
            $lines_class = '';
            if($tabs_style=='pix-pills-lines'){
                $lines_class = 'd-flex';
            }
             $menu .= '<div class="nav '.$lines_class.' nav-pills pix_tabs_btns '.$position.' '.$is_fill.' '.$tabs_style.' mb-4 '.$animate_class.'" data-anim-type="'.$animation.'" role="tablist" data-anim-delay="'.$delay.'" id="v-pills-tab"  aria-orientation="vertical">';

             if($tabs_style=='pix-pills-lines'){
                 $menu .= '<div class="nav-item2 d-none d-sm-block flex-fill align-self-center pix-mr-20">';
                    $menu .= '<span class="w-100 pix-tabs-line"></span>';
                 $menu .= '</div>';
             }
             foreach ( $attrs as $key => $item ) {
                     $title = $item['tab_id'];
                     if(!empty($item['title'])){
                         $title = $item['title'];
                     }
                     $bold = '';
                     if(!empty($item['bold'])){
                         $bold = 'font-weight-bold';
                     }
                     $icon_html = '';
                     if(!empty($item['icon'])){
                         if($tabs_icon_position=='top'){
                             $icon_html = '<i class="w-100 '.$item['icon'].' d-block text-center mt-2"></i> ';
                         }else{
                             $icon_html = '<i class="'.$item['icon'].' mr-2"></i> ';
                         }

                     }
                     $menu .= '<div class="nav-item">';
                        $menu .= '<a class="nav-link pix-tabs-btn text-24 pix-px-25 py-2 my-2 '.$bold.'" data-id="'. $item['tab_id'] .'" role="tab" id="pix-tab-btn-'. $item['tab_id'] .'" data-toggle="pill" href="#pix-tab-'. $item['tab_id'] .'"  aria-controls="pix-tab-'. $item['tab_id'] .'">'.$icon_html. $title .'</a>';
                     $menu .= '</div>';
             }
             if($tabs_style=='pix-pills-lines'){
                 $menu .= '<div class="nav-item2 d-none d-sm-block pix-tab-line flex-fill align-self-center pix-ml-20">';
                    $menu .= '<span class="w-100 pix-tabs-line"></span>';
                 $menu .= '</div>';
             }
             $menu .= '</div>';

     // Final output
     $output .= '<div class=" '.$css_class.'">';
         $output .= '<div class="pix_tabs_container pix-waiting" data-icons-pos="'.$tabs_icon_position.'">';
             $output .= $menu;
             $output .= $tabs;
         $output .= '</div>';
     $output .= '</div>';

    return $output;
    }
 }

add_shortcode('pix_tabs', 'sc_pix_tabs');
?>
