<?php
$order_by_values = array(
	'',
	esc_html__( 'Date', 'js_composer' ) => 'date',
	esc_html__( 'ID', 'js_composer' ) => 'ID',
	esc_html__( 'Author', 'js_composer' ) => 'author',
	esc_html__( 'Title', 'js_composer' ) => 'title',
	esc_html__( 'Modified', 'js_composer' ) => 'modified',
	esc_html__( 'Random', 'js_composer' ) => 'rand',
	esc_html__( 'Comment count', 'js_composer' ) => 'comment_count',
	esc_html__( 'Menu order', 'js_composer' ) => 'menu_order',
	esc_html__( 'Menu order & title', 'js_composer' ) => 'menu_order title',
	esc_html__( 'Include', 'js_composer' ) => 'include',
);

$order_way_values = array(
	'',
	esc_html__( 'Descending', 'js_composer' ) => 'DESC',
	esc_html__( 'Ascending', 'js_composer' ) => 'ASC',
);
// Products carousel -----------------------------
vc_map( array (
    'base' 			=> 'pix_products_carousel',
    'name' 			=> __('Products Carousel', 'pixfort-core'),
    'category' 		=> __('pixfort', 'pixfort-core'),
    "weight"	=> "1000",
    'class'         => 'pixfort_element',
    'icon' 			=> PIX_CORE_PLUGIN_URI . 'functions/images/elements/products-carousel.png',
    'description' 	=> __('Create custom products carousel', 'pixfort-core'),
    'params' 		=> array_merge(
        array (


            array (
                'param_name' 	=> 'product_style',
                'type' 			=> 'dropdown',
                'heading' 		=> __('Product items style', 'pixfort-core'),
                'description' 	=> __('Select the position of the image.', 'pixfort-core'),
                'admin_label'	=> false,
                'value'			=> array_flip(array(
                    'theme'			=> 'Use theme option value',
                    'default'		=> 'Default Style',
                    'default-no-padding' 		=> 'Default without padding',
                    'top-img' 		=> 'Top image',
                    'top-img-no-padding' 		=> 'Top image without padding',
                    'full-img' 		=> 'Full image',
                )),
            ),


            array(
				'type' => 'textfield',
				'heading' => esc_html__( 'Count', 'js_composer' ),
				'value' => 6,
				'param_name' => 'count',
				'save_always' => true,
			),

            array (
                'param_name' 	=> 'category',
                'type' 			=> 'dropdown',
                'heading' 		=> __('Category', 'pixfort-core'),
                'description' 	=> __('Select posts category.', 'pixfort-core'),
                'admin_label'	=> false,
                'value' 		=> pix_get_categories( 'product_cat' ),
            ),
            array (
                'param_name' 	=> 'category_multi',
                'type' 			=> 'textfield',
                'heading' 		=> __('Multiple Categories', 'pixfort-core'),
                'description' 	=> __('Categories Slugs should be separated with <strong>coma</strong> (,)', 'pixfort-core'),
                'admin_label'	=> false,
            ),


            array(
				'type' => 'dropdown',
				'heading' => esc_html__( 'Order by', 'js_composer' ),
				'param_name' => 'orderby',
				'value' => $order_by_values,
				'std' => 'title',
				// Default WC value
				'save_always' => true,
				'description' => sprintf( esc_html__( 'Select how to sort retrieved products. More at %s. Default by Title', 'js_composer' ), '<a href="https://codex.wordpress.org/Class_Reference/WP_Query#Order_.26_Orderby_Parameters" target="_blank">WordPress codex page</a>' ),
			),
			array(
				'type' => 'dropdown',
				'heading' => esc_html__( 'Sort order', 'js_composer' ),
				'param_name' => 'order',
				'value' => $order_way_values,
				'std' => 'ASC',
				// default WC value
				'save_always' => true,
				'description' => sprintf( esc_html__( 'Designates the ascending or descending order. More at %s. Default by ASC', 'js_composer' ), '<a href="https://codex.wordpress.org/Class_Reference/WP_Query#Order_.26_Orderby_Parameters" target="_blank">WordPress codex page</a>' ),
			),



            array (
                'param_name' 	=> 'animation',
                'type' 			=> 'dropdown',
                'heading' 		=> __('Animation', 'pixfort-core'),
                'description' 	=> __('Select the animation of the heading.', 'pixfort-core'),
                'admin_label'	=> false,
                'value'			=> $animations,
            ),
            array (
                'param_name' 	=> 'delay',
                'type' 			=> 'textfield',
                'heading' 		=> __('Animation delay (in miliseconds)', 'pixfort-core'),
                'admin_label'	=> true,
                "dependency" => array(
                      "element" => "animation",
                      "not_empty" => true
                  ),
            ),
            array (
                'param_name' 	=> 'rounded_img',
                'type' 			=> 'dropdown',
                'heading' 		=> __('Rounded corners', 'pixfort-core'),
                'admin_label'	=> false,
                'std'	=> 'rounded-lg',
                'group'         => 'Styling',
                'value' 		=> array(
                    __('No','pixfort-core') 	=> 'rounded-0',
                    __('Rounded','pixfort-core')	    => 'rounded',
                    __('Rounded Large','pixfort-core')	    => 'rounded-lg',
                    __('Rounded 5px','pixfort-core')	    => 'rounded-xl',
                    __('Rounded 10px','pixfort-core')	    => 'rounded-10',
                )
            ),
            array(
             "type" => "dropdown",
             "heading" => __("Shadow Style", "js_composer"),
             "param_name" => "style",
             "admin_label" => true,
             "value" => array_flip(array(
                "" => "Default",
                "1"       => "Small shadow",
                "2"       => "Medium shadow",
                "3"       => "Large shadow",
                "4"       => "Inverse Small shadow",
                "5"       => "Inverse Medium shadow",
                "6"       => "Inverse Large shadow",
            )),
             'save_always' => true,
             'group' => __( 'Styling', 'essentials-core' ),
             "description" => __( "Please select the style you wish for the box to display in.", "js_composer")
            ),
            array(
            "type" => "dropdown",
            "heading" => __("Shadow Hover Style", "js_composer"),
            "param_name" => "hover_effect",
            "admin_label" => true,
            "value" => array_flip(array(
              ""       => "None",
              "1"       => "Small hover shadow",
              "2"       => "Medium hover shadow",
              "3"       => "Large hover shadow",
              "4"       => "Inverse Small hover shadow",
              "5"       => "Inverse Medium hover shadow",
              "6"       => "Inverse Large hover shadow",
            )),
            'save_always' => true,
            'group' => __( 'Styling', 'essentials-core' ),
            "description" => __( "Please select the style you wish for the box to display in.", "js_composer")
            ),
            array(
            "type" => "dropdown",
            "heading" => __("Hover Animation", "js_composer"),
            "param_name" => "add_hover_effect",
            "admin_label" => true,
            "value" => array_flip(array(
              ""       => "None",
              "1"       => "Fly Small",
              "2"       => "Fly Medium",
              "3"       => "Fly Large",
              "4"       => "Scale Small",
              "5"       => "Scale Medium",
              "6"       => "Scale Large",
              "7"       => "Scale Inverse Small",
              "8"       => "Scale Inverse Medium",
              "9"       => "Scale Inverse Large",
            )),
            'save_always' => true,
            'group' => __( 'Styling', 'essentials-core' ),
            "description" => __( "Please select the style you wish for the box to display in.", "js_composer")
            ),

            // Advanced
            array (
                'param_name' 	=> 'slider_num',
                'type' 			=> 'dropdown',
                'heading' 		=> __('Slides per page', 'pixfort-core'),
                'admin_label'	=> false,
                'value' 		=> array(
                    "1" 	=> 1,
                    "2" 	=> 2,
                    "3" 	=> 3,
                    "4" 	=> 4,
                    "5" 	=> 5,
                    "6" 	=> 6,
                ),
                "std"   => 3,
                 "group" => __( "Advanced", "pix-opts" ),
            ),
            array (
                'param_name' 	=> 'slider_style',
                'type' 			=> 'dropdown',
                'heading' 		=> __('Slides style', 'pixfort-core'),
                'admin_label'	=> false,
                'std'	=> 'pix-standard',
                'value' 		=> array(
                    __('Standard','pixfort-core')         	        => 'pix-style-standard',
                    __('One active item','pixfort-core')         	=> 'pix-one-active',
                    __('Faded items','pixfort-core') 	            => 'pix-opacity-slider',
                ),
                "group" => __( "Advanced", "pix-opts" ),
            ),
            array (
                'param_name' 	=> 'slider_effect',
                'type' 			=> 'dropdown',
                'heading' 		=> __('Slides effect', 'pixfort-core'),
                'admin_label'	=> false,
                'std'	=> 'pix-opacity-slider',
                'value' 		=> array(
                    __('Standard','pixfort-core') 	                => 'pix-effect-standard',
                    __('Circular effect','pixfort-core') 	        => 'pix-circular-slider',
                    __('Circular Left only','pixfort-core') 	        => 'pix-circular-left',
                    __('Circular Right only','pixfort-core') 	    => 'pix-circular-right',
           __('Fade out','pixfort-core') 	                => 'pix-fade-out-effect',
                ),
                 "group" => __( "Advanced", "pix-opts" ),
            ),

            array(
                  "type" => "checkbox",
                  "heading" => __( "Show navigation buttons", "pix-opts" ),
                  "param_name" => "prevnextbuttons",
                  "value" => array('Yes' => true),
                  'save_always' => true,
                  'std' => true,
                  "group" => __( "Advanced", "pix-opts" ),
              ),
            array(
                  "type" => "checkbox",
                  "heading" => __( "Dots", "pix-opts" ),
                  "param_name" => "pagedots",
                  "value" => array('Yes' => true),
                  'std' => true,
                  'save_always' => true,
                  "group" => __( "Advanced", "pix-opts" ),
              ),
              array (
                  'param_name' 	=> 'dots_style',
                  'type' 			=> 'dropdown',
                  'heading' 		=> __('Dots', 'pixfort-core'),
                  'admin_label'	=> false,
                  "group" => __( "Advanced", "pix-opts" ),
                  'value' 		=> array_flip(array(
                      ''			=> 'Default',
                      'light-dots' 	=> 'Light',
                  )),
                  "dependency" => array(
                        "element" => "pagedots",
                        "not_empty" => true
                    ),
              ),
              array (
                  'param_name' 	=> 'dots_align',
                  'type' 			=> 'dropdown',
                  'heading' 		=> __('Dots', 'pixfort-core'),
                  'admin_label'	=> false,
                  "group" => __( "Advanced", "pix-opts" ),
                  'value' 		=> array_flip(array(
                      ''			=> 'Center',
                      'pix-dots-left' 	=> 'Left',
                      'pix-dots-right' 	=> 'Right',
                  )),
                  "dependency" => array(
                        "element" => "pagedots",
                        "not_empty" => true
                    ),
              ),
            array(
                  "type" => "checkbox",
                  "heading" => __( "Free Scroll", "pix-opts" ),
                  "param_name" => "freescroll",
                  "value" => array('Yes' => true),
                  'save_always' => true,
                  "group" => __( "Advanced", "pix-opts" ),
              ),
              array (
                  'param_name' 	=> 'cellalign',
                  'type' 			=> 'dropdown',
                  'heading' 		=> __('Main cell Align', 'pixfort-core'),
                  'admin_label'	=> false,
                  'group'	=> 'Advanced',
                  'value' 		=> array_flip(array(
                      'center'			=> 'Center',
                      'left' 	=> 'Left',
                      'right' 	=> 'Right',
                  )),
              ),
              array(
                    "type" => "checkbox",
                    "heading" => __( "Scale main item", "pix-opts" ),
                    "param_name" => "slider_scale",
                    "value" => array('Yes' => 'pix-slider-scale'),
                    'save_always' => true,
                    "group" => __( "Advanced", "pix-opts" ),
                ),
              array (
                  'param_name' 	=> 'cellpadding',
                  'type' 			=> 'dropdown',
                  'heading' 		=> __('Cells padding', 'pixfort-core'),
                  'admin_label'	=> false,
                  'group'	=> 'Advanced',
                  'std'	=> 'pix-p-10',
                  'value' 		=> array_flip(array(
                      'pix-p-5'			=> '5px',
                      'pix-p-10'			=> '10px',
                      'pix-p-15'			=> '15px',
                      'pix-p-20'			=> '20px',
                      'pix-p-25'			=> '25px',
                      'pix-p-30'			=> '30px',
                      'pix-p-35'			=> '35px',
                      'pix-p-40'			=> '40px',
                      'pix-p-45'			=> '45px',
                      'pix-p-50'			=> '50px',
                  )),
              ),
              array(
                    "type" => "checkbox",
                    "heading" => __( "autoplay", "pix-opts" ),
                    "param_name" => "autoplay",
                    "value" => array('Yes' => true),
                    'save_always' => true,
                    "group" => __( "Advanced", "pix-opts" ),
                ),
                array (
                    'param_name' 	=> 'autoplay_time',
                    'type' 			=> 'textfield',
                    'heading' 		=> __('Autoplay time', 'pixfort-core'),
                    'description' 		=> __('The time between auto slides in milliseconds.', 'pixfort-core'),
                    'admin_label'	=> false,
                    'std'			=> '1500',
                    'group'			=> 'Advanced',
                    "dependency" => array(
                          "element" => "autoplay",
                          "not_empty" => true
                      ),
                ),
            array(
                  "type" => "checkbox",
                  "heading" => __( "Adaptive height", "pix-opts" ),
                  "param_name" => "adaptiveheight",
                  "value" => true,
                  'save_always' => true,
                  'std' => true,
                  "group" => __( "Advanced", "pix-opts" ),
              ),
            array(
                  "type" => "checkbox",
                  "heading" => __( "Right to Left", "pix-opts" ),
                  "param_name" => "righttoleft",
                  "value" => true,
                  'save_always' => true,
                  "group" => __( "Advanced", "pix-opts" ),
              ),
            array(
                  "type" => "checkbox",
                  "heading" => __( "Wrap slides", "pix-opts" ),
                  "param_name" => "slider_wrap",
                  "value" => true,
                  "std" => true,
                  'save_always' => true,
                  "group" => __( "Advanced", "pix-opts" ),
              ),
            array(
                  "type" => "checkbox",
                  "heading" => __( "Increas vertial view", "pix-opts" ),
                  "param_name" => "visible_y",
                  "value" => array("Yes" => 'pix-overflow-y-visible'),
                  'save_always' => true,
                  "group" => __( "Advanced", "pix-opts" ),
              ),
            array(
                  "type" => "checkbox",
                  "heading" => __( "Visible overflow", "pix-opts" ),
                  "description" => "slides outside the slider view box will be visible.",
                  "param_name" => "visible_overflow",
                  "value" => array("Yes" => 'pix-overflow-all-visible'),
                  'save_always' => true,
                  "group" => __( "Advanced", "pix-opts" ),
              ),



            array(
              'type' => 'css_editor',
              'heading' => __( 'Css', 'essentials-core' ),
              'param_name' => 'css',
              'group' => __( 'Design options', 'essentials-core' ),
              ),

        )
    )
));

 ?>
