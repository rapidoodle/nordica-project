<?php

// Card wide ----------------------------------------------
vc_map( array (
    'base' 			=> 'pix_card_wide',
    'name' 			=> __('Card (Wide)', 'pixfort-core'),
    'category' 		=> __('pixfort', 'pixfort-core'),
    'class'         => 'pixfort_element',
    'icon' 			=> PIX_CORE_PLUGIN_URI . 'functions/images/elements/card-wide.png',
    'description' 	=> __('A big card style', 'pixfort-core'),
    "weight"	=> "1000",
    'params' 		=> array_merge(
        array (

            array(
                'type' => 'dropdown',
                'param_name' => 'layout',
                'value' => array(
                    __( 'Wide card (right image)', 'js_composer' ) 			=> 'wide_card_right',
                    __( 'Wide card (left image)', 'js_composer' )		=> 'wide_card_left',
                ),
                'heading' => __( 'Layout', 'js_composer' ),
                'description' => __( 'Select tabs display style.', 'js_composer' ),
            ),

            array (
                'param_name' 	=> 'title',
                'type' 			=> 'textfield',
                'heading' 		=> __('Title', 'pixfort-core'),
                'admin_label'	=> true,
            ),
            array (
                'param_name' 	=> 'text',
                'type' 			=> 'textarea',
                'heading' 		=> __('Card text', 'pixfort-core'),
                'admin_label'	=> true,
            ),

            array (
                'param_name' 	=> 'image',
                'type' 			=> 'attach_image',
                'heading' 		=> __('Image', 'pixfort-core'),
                'admin_label'	=> false,
            ),
            array (
                'param_name' 	=> 'feature_image',
                'type' 			=> 'attach_image',
                'heading' 		=> __('Featured Image', 'pixfort-core'),
                'admin_label'	=> false,
                'dependency' => array(
                    "element" => "layout",
                    "value" => array("wide_card_right","wide_card_left")
                )
            ),
            array (
                'param_name' 	=> 'feature_image_width',
                'type' 			=> 'textfield',
                'heading' 		=> __('Max Width of the featured image (Optional)', 'pixfort-core'),
                'description'    => 'Input the maximum width of the image (with the unit, for example 200px).',
                'admin_label'	=> false,
                "dependency" => array(
                   "element" => "feature_image",
                   "not_empty" => true
                ),
            ),


        ),
        $effects_params,
        pix_get_text_format_params(array(
            'prefix' 		=> '',
            'name' 		=> 'Title',
            'bold' 		=> true,
            'bold_value' 		=> 'font-weight-bold',
            'italic' 		=> true,
            'italic_value' 		=> '',
            'secondary_font' 		=> false,
            'secondary_font_value' 		=> '',
            'color' 		=> true,
            'color_value' 		=> 'heading-default',
            'text_group'            => "Advanced"
        )),
        array(
            array (
                'param_name' 	=> 'title_size',
                'type' 			=> 'dropdown',
                'heading' 		=> __('Title size', 'pixfort-core'),
                'admin_label'	=> false,
                'std'           => 'h5',
                'group'         => 'Advanced',
                'value' 		=> array(
                    __('H1','pixfort-core') 	=> 'h1',
                    __('H2','pixfort-core')	    => 'h2',
                    __('H3','pixfort-core')	    => 'h3',
                    __('H4','pixfort-core')	    => 'h4',
                    __('H5','pixfort-core')	    => 'h5',
                    __('H6','pixfort-core')	    => 'h6',
                    __('Custom','pixfort-core')	    => 'custom',
                ),
            ),

            array (
                'param_name' 	=> 'title_custom_size',
                'type' 			=> 'textfield',
                'heading' 		=> __('Title Size', 'pixfort-core'),
                'admin_label'	=> false,
                'group'         => 'Advanced',
                "dependency" => array(
                    "element" => "title_size",
                    "value" => "custom"
                ),
            ),
        ),
        pix_get_text_format_params(array(
            'prefix' 		=> 'text_',
            'name' 		=> 'Text',
            'bold' 		=> true,
            'bold_value' 		=> 'font-weight-bold',
            'italic' 		=> true,
            'italic_value' 		=> '',
            'secondary_font' 		=> false,
            'secondary_font_value' 		=> '',
            'text_group'            => "Advanced",
            'color' 		=> true,
            'color_value' 		=> 'body-default',
        )),
        array(
            array (
                'param_name' 	=> 'text_size',
                'type' 			=> 'dropdown',
                'heading' 		=> __('Text font Size', 'pixfort-core'),
                'description' 	=> __('Select the size of the text.', 'pixfort-core'),
                'admin_label'	=> false,
                'group'         => 'Advanced',
                'value'			=> array_flip(array(
                    ''			=> 'Default (16px)',
                    'text-xs'		=> '12px',
                    'text-sm'		=> '14px',
                    'text-sm'		=> '14px',
                    'text-18' 		=> '18px',
                    'text-20' 		=> '20px',
                    'text-24' 		=> '24px',
                )),
            ),
        ),
        array (
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
