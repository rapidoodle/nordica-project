<?php


/* ---------------------------------------------------------------------------
 * Comparison Table [pix_comparison_table] [/pix_comparison_table]
* --------------------------------------------------------------------------- */
if( ! function_exists( 'sc_pix_comparison_table' ) )
{
	function sc_pix_comparison_table( $attr, $content = null )
	{
		extract(shortcode_atts(array(
			'items'  => '',
			'table_title'  => '',

			// Head title
			'bold'  => 'font-weight-bold',
			'italic'  => '',
			'title_color'  => 'heading-default',
			'title_custom_color'  => '',
			'title_size'  => 'h3',
			'display'  => '',
			'title_custom_size'  => '',
			'cols_titles_size'  => 'h4',
			'cols_titles_custom_size'  => '',
			'head_style'  => '',
			'head_bg_color'  => 'white',
			'head_custom_bg_color'  => '',

			// Descriptions
			'descriptions_title_bold'  => 'font-weight-bold',
			'descriptions_title_italic'  => '',
			'descriptions_title_color'  => '',
			'descriptions_title_custom_color'  => '',
			'descriptions_title_size'  => 'h6',
			'descriptions_title_display'  => '',
			'descriptions_title_custom_size'  => '',
			'content_size'  => '',
			'content_bold'  => '',
			'content_italic'  => '',
			'content_color'  => 'body-default',
			'content_custom_color'  => '',
			'columns_size'  => '',

			'style' 		=> '',
            'hover_effect' 		=> '',
            'add_hover_effect' 		=> '',


			// 'icon_color'  => 'primary',
			// 'custom_icon_color'  => '',
			'animation' 	=> '',
			'delay' 	=> '0',


			'col_1_title' 	=> '',
			'col_1_color' 	=> 'heading-default',
			'col_1_custom_color' 	=> '',

			'col_2_title' 	=> '',
			'col_2_color' 	=> 'heading-default',
			'col_2_custom_color' 	=> '',

			'col_3_title' 	=> '',
			'col_3_color' 	=> 'heading-default',
			'col_3_custom_color' 	=> '',

			'css' 		=> '',
		), $attr));

		$css_class = '';
		if(function_exists('vc_shortcode_custom_css_class')){
		    $css_class = apply_filters( VC_SHORTCODE_CUSTOM_CSS_FILTER_TAG, vc_shortcode_custom_css_class( $css, ' ' ) );
		}

		$style_arr = array(
           "" => "",
           "1"       => "shadow-sm",
           "2"       => "shadow",
           "3"       => "shadow-lg",
           "4"       => "shadow-inverse-sm",
           "5"       => "shadow-inverse",
           "6"       => "shadow-inverse-lg",
           "7"       => "pix-bottom-line",
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
		 $classes = array();
		 if($style){
			 array_push($classes, $style_arr[$style]);
		 }
		 if($hover_effect){
			 array_push($classes, $hover_effect_arr[$hover_effect]);
		 }
		 if($add_hover_effect){
			 array_push($classes, $add_hover_effect_arr[$add_hover_effect]);
		 }
		 $class_names = join( ' ', $classes );




		 $head_classes = '';
		 if($head_style!='7'){
			 $head_classes .= 'rounded-xl ';
		 }
		 $head_classes .= $style_arr[$head_style];


		 $anim_type = '';
		$anim_delay = '';
		$anim_class = '';
		if(!empty($animation)){
			$anim_type = 'data-anim-type="'.$animation.'"';
			$anim_delay = 'data-anim-delay="'.$delay.'"';
			$anim_class = 'animate-in';
			$class_names .= ' '.$anim_class;
			$head_classes .= ' '.$anim_class;
		}



		$c_color = '';
		$output = '';
		$c_custom_color = '';
		if(!empty($content_color)){
			if($content_color!='custom'){
				$c_color = 'text-'.$content_color;
			}else{
				$c_custom_color = 'style="color:'.$content_custom_color.';"';
			}
		}

		$element_id = "pix-event-".wp_rand(0,10000000);


		$elementor = false;
		if(is_array($items)){
			$items_arr = $items;
			$elementor = true;
		}else{
			if(function_exists('vc_param_group_parse_atts')){
				$items_arr = vc_param_group_parse_atts( $items );
			}
		}

		$customStyle = '';

		// Col 1
		$col_1_color_class = '';
		if($col_1_color=='custom'){

		}else{
			$col_1_color_class = 'text-'.$col_1_color;
			$customStyle .= '
				@media screen and (max-width: 767px){
					.pix_comparison_1_title::before {
					    content: "'.esc_attr($col_1_title).'";
						font-weight: bold;
						color:  var(--text-'.$col_1_color.');
						padding-bottom:5px;
						display:block;
					}
				}
			';
		}

		// Col 2
		$col_2_color_class = '';
		if($col_2_color=='custom'){

		}else{
			$col_2_color_class = 'text-'.$col_2_color;
			$customStyle .= '
				@media screen and (max-width: 767px){
					.pix_comparison_2_title::before {
					    content: "'.esc_attr($col_2_title).'";
						font-weight: bold;
						color:  var(--text-'.$col_2_color.');
						padding-bottom:5px;
						display:block;
					}
				}
			';
		}
		// Col 3
		$col_3_color_class = '';
		if($col_3_color=='custom'){

		}else{
			$col_3_color_class = 'text-'.$col_3_color;
			$customStyle .= '
				@media screen and (max-width: 767px){
					.pix_comparison_3_title::before {
					    content: "'.esc_attr($col_3_title).'";
						font-weight: bold;
						color:  var(--text-'.$col_3_color.');
						padding-bottom:5px;
						display:block;
					}
				}
			';
		}



		wp_register_style( 'pix-comparison-handle', false );
		wp_enqueue_style( 'pix-comparison-handle' );
		wp_add_inline_style( 'pix-comparison-handle', $customStyle );

		$output .= '<div class="w-100 '. esc_attr( $css_class ) .'" >';
		$output .= '<div class="container" id="'.$element_id.'">';

		$heading_opts = array(
			'title'		=> $table_title,
			'bold'		=> $bold,
			'italic'		=> $italic,
			'secondary_font'		=> '',
			'title_color'		=> $title_color,
			'title_custom_color'		=> $title_custom_color,
			'title_size'		=> $title_size,
			'display'		=> $display,
			'title_custom_size'		=> $title_custom_size,
			'padding_title'			=> '',
			'h1'		=> '',
			'position'  => 'text-left',
		);
		$heading_out = sc_heading($heading_opts);

		$descriptions_title_opts = array(
			'bold'		=> $descriptions_title_bold,
			'italic'		=> $descriptions_title_italic,
			'secondary_font'		=> '',
			'title_color'		=> $descriptions_title_color,
			'title_custom_color'		=> $descriptions_title_custom_color,
			'title_size'		=> $descriptions_title_size,
			'display'		=> $descriptions_title_display,
			'title_custom_size'		=> $descriptions_title_custom_size,
			'padding_title'			=> '',
			'h1'		=> '',
			'position'  => 'text-left',
		);
		$text_opts = array(
			'size'  => $content_size,
			'bold'		=> $content_bold,
			'italic'		=> $content_italic,
			'secondary_font'		=> '',
			'content_color'		=> $content_color,
			'content_custom_color'		=> $content_custom_color,
			'remove_pb_padding'		=> 'm-0',
		);

		$cols_titles_style = '';
		if($cols_titles_size=='custom'){
			$cols_titles_style = 'style="font-size:'. $cols_titles_custom_size. ';"';
		}
		$head_style = '';
		if($head_bg_color=='custom'){
			$head_style = 'style="background:'. $icon_custom_bg_color. ';"';
		}

		$output .= '<div class="sticky-top pix-sticky-top-adjust">';
			$output .= '<div class="row pix-py-20 bg-'.$head_bg_color.' '.$head_classes.'" '.$anim_type.' '.$anim_delay.' '.$head_style.'>';
				$output .= '<div class="col-12 col-md-4 col-lg-6  font-weight-bold text-heading-default"><div class="pix-px-15">'.$heading_out;
				$output .= '</div></div>';
				$output .= '<div class="col justify-content-center font-weight-bold  d-none d-md-flex align-items-center"><div class="mb-0  font-weight-bold '.$cols_titles_size.' '.$col_1_color_class.'" '.$cols_titles_style.'>'.do_shortcode($col_1_title).'</div>';
				$output .= '</div>';
				$output .= '<div class="col justify-content-center font-weight-bold d-none d-md-flex align-items-center"><div class="mb-0 '.$cols_titles_size.' '.$col_2_color_class.' font-weight-bold" '.$cols_titles_style.'>'.do_shortcode($col_2_title).'</div>';
				$output .= '</div>';
				$output .= '<div class="col justify-content-center font-weight-bold d-none d-md-flex align-items-center"><div class="mb-0 '.$cols_titles_size.' '.$col_3_color_class.' font-weight-bold" '.$cols_titles_style.'>'.do_shortcode($col_3_title).'</div>';
				$output .= '</div>';
			$output .= '</div>';

		$output .= '</div>';

            foreach ($items_arr as $key => $value) {
				extract(shortcode_atts(array(
					'title'  => '',
					'text'  => '',

					'col_1_text'  => '',
					'col_1_tooltip'  => '',
					'col_1_media_type'  => '',
					'col_1_pix_duo_icon'  => '',
					'col_1_icon'  => '',

					'col_2_text'  => '',
					'col_2_tooltip'  => '',
					'col_2_media_type'  => '',
					'col_2_pix_duo_icon'  => '',
					'col_2_icon'  => '',

					'col_3_text'  => '',
					'col_3_tooltip'  => '',
					'col_3_media_type'  => '',
					'col_3_pix_duo_icon'  => '',
					'col_3_icon'  => '',
				), $value));


				$output .= '<div class="row pix-py-25 pix-my-10 '.$class_names.' rounded-lg" '.$anim_type.' '.$anim_delay.'>';
					$output .= '<div class="col-12 col-md-4 col-lg-6 mb-4 mb-sm-0 pb-3 pb-md-0">';
						$output .= '<div class="pix-px-15">';
							if(!empty($title)){
								$item_title = $descriptions_title_opts;
								$item_title['title'] = $title;
								$title_out = sc_heading($item_title);
								$output .= '<h6 class="font-weight-bold">'. $title_out . '</h6>';
							}
							if(!empty($text)){
								$text_out = sc_pix_text($text_opts, $text );
								$output .= $text_out;
							}
						$output .= '</div>';
					$output .= '</div>';

					$tooltip_1_out = '';
					if(!empty($col_1_tooltip)){
						$tooltip_1_out = 'data-toggle="tooltip" data-placement="bottom" title="'.$col_1_tooltip.'"';
					}
					$output .= '<div class="col text-center pix_comparison_1_title d-md-flex align-items-center justify-content-center">';
					$output .= '<div class="text-center '.$columns_size.' d-flex align-items-center justify-content-center '.$col_1_color_class.'" '.$tooltip_1_out.'>';

						if(!empty($col_1_media_type)) {
							if($col_1_media_type == "duo_icon"){
								if(!empty($col_1_pix_duo_icon)) {
									$output .= '<div class="pix-mr-10 '.$col_1_color_class.'" style="width:1.5em;height:1.5em;position:relative;line-height:1em;text-align:center;">';
									$output .= pix_load_inline_svg(PIX_CORE_PLUGIN_DIR.'/functions/images/icons/'.$col_1_pix_duo_icon.'.svg');
									$output .= '</div>';
								}
							}else{
								if(!empty($col_1_icon)) {
									$output .= '<i class="'.$col_1_icon.' mr-2 '.$col_1_color_class.'" '.$i_custom_color.'></i>';
								}
							}
						}
						$output .= do_shortcode($col_1_text);
					$output .= '</div>';
					$output .= '</div>';

					$tooltip_2_out = '';
					if(!empty($col_2_tooltip)){
						$tooltip_2_out = 'data-toggle="tooltip" data-placement="bottom" title="'.$col_2_tooltip.'"';
					}
					$output .= '<div class="col text-center pix_comparison_2_title d-md-flex align-items-center justify-content-center">';
					$output .= '<div class="text-center '.$columns_size.' d-flex align-items-center justify-content-center '.$col_2_color_class.'" '.$tooltip_2_out.'>';
						if(!empty($col_2_media_type)) {
							if($col_2_media_type == "duo_icon"){
								if(!empty($col_2_pix_duo_icon)) {
									$output .= '<div class="pix-mr-10 '.$col_2_color_class.'" style="width:1.5em;height:1.5em;position:relative;line-height:1em;text-align:center;">';
									$output .= pix_load_inline_svg(PIX_CORE_PLUGIN_DIR.'/functions/images/icons/'.$col_2_pix_duo_icon.'.svg');
									$output .= '</div>';
								}
							}else{
								if(!empty($col_2_icon)) {
									$output .= '<i class="'.$col_2_icon.' mr-2 '.$col_2_color_class.'" '.$i_custom_color.'></i>';
								}
							}
						}
						$output .= $col_2_text;
					$output .= '</div>';
					$output .= '</div>';

					$tooltip_3_out = '';
					if(!empty($col_3_tooltip)){
						$tooltip_3_out = 'data-toggle="tooltip" data-placement="bottom" title="'.$col_3_tooltip.'"';
					}
					$output .= '<div class="col text-center pix_comparison_3_title d-md-flex align-items-center justify-content-center">';
					$output .= '<div class="text-center '.$columns_size.' d-flex align-items-center justify-content-center '.$col_3_color_class.'" '.$tooltip_3_out.'>';
						if(!empty($col_3_media_type)) {
							if($col_3_media_type == "duo_icon"){
								if(!empty($col_3_pix_duo_icon)) {
									$output .= '<div class="pix-mr-10 '.$col_3_color_class.'" style="width:1.5em;height:1.5em;position:relative;line-height:1em;text-align:center;">';
									$output .= pix_load_inline_svg(PIX_CORE_PLUGIN_DIR.'/functions/images/icons/'.$col_3_pix_duo_icon.'.svg');
									$output .= '</div>';
								}
							}else{
								if(!empty($col_3_icon)) {
									$output .= '<i class="'.$col_3_icon.' mr-2 '.$col_3_color_class.'" '.$i_custom_color.'></i>';
								}
							}
						}
						$output .= $col_3_text;
					$output .= '</div>';
					$output .= '</div>';
				$output .= '</div>';
            }




        $output .= '</div>';
        $output .= '</div>';

		return $output;
	}
}


add_shortcode( 'pix_comparison_table', 'sc_pix_comparison_table' );

 ?>
