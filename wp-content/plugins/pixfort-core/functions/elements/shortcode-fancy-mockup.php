<?php

// Fancy mockup -----------------------------
vc_map( array (
    'base' 			=> 'pix_fancy_mockup',
    'name' 			=> __('Fancy Mockup', 'pixfort-core'),
    'category' 		=> __('pixfort', 'pixfort-core'),
    "weight"	=> "1000",
    'class'         => 'pixfort_element',
    'icon' 			=> PIX_CORE_PLUGIN_URI . 'functions/images/elements/fancy-mockup.apng',
    'description' 	=> __('Add any image inside an ipad pro mockup', 'pixfort-core'),
    'params' 		=> array_merge(
        array (

            array (
                'param_name' 	=> 'image',
                'type' 			=> 'attach_image',
                'heading' 		=> __('Image', 'pixfort-core'),
                'admin_label'	=> false,
            ),


            array (
                'param_name' 	=> 'rounded_img',
                'type' 			=> 'dropdown',
                'heading' 		=> __('Rounded corners', 'pixfort-core'),
                'admin_label'	=> false,
                'value' 		=> array(
                    __('No','pixfort-core') 	=> 'rounded-0',
                    __('Rounded','pixfort-core')	    => 'rounded',
                    __('Rounded Large','pixfort-core')	    => 'rounded-lg'
                )
            ),

            array (
                'param_name' 	=> 'alt',
                'type' 			=> 'textfield',
                'heading' 		=> __('Image alternative text', 'pixfort-core'),
                'admin_label'	=> true,
            ),

            array (
                'param_name' 	=> 'align',
                'type' 			=> 'dropdown',
                'heading' 		=> __('Image alignment', 'pixfort-core'),
                'description' 	=> __('Select the position of the image.', 'pixfort-core'),
                'admin_label'	=> false,
                'value'			=> array_flip(array(
                    'text-left'			=> 'Left',
                    'text-center'		=> 'Center',
                    'text-right' 		=> 'Right',
                )),
            ),

            array (
                'param_name' 	=> 'width',
                'type' 			=> 'textfield',
                'heading' 		=> __('Width (Optional)', 'pixfort-core'),
                "description" => __( "Please input the value (with the unit: %, px,.. etc).", "pix-opts"),
                'admin_label'	=> false,
            ),
            array (
                'param_name' 	=> 'height',
                'type' 			=> 'textfield',
                'heading' 		=> __('Height (Optional)', 'pixfort-core'),
                "description" => __( "Please input the value (with the unit: %, px,.. etc).", "pix-opts"),
                'admin_label'	=> false,
            ),

            array (
                'param_name' 	=> 'link',
                'type' 			=> 'textfield',
                'heading' 		=> __('Link', 'pixfort-core'),
                'admin_label'	=> true,
            ),
            array(
                "type" => "checkbox",
                "heading" => __( "Open in a new tab", "pix-opts" ),
                "param_name" => "target",
                "value" => __( "Yes", "pix-opts" ),
                "dependency" => array(
                    "element" => "link",
                    "not_empty" => true
                ),
            ),

            array(
                "type" => "checkbox",
                "heading" => __( "Animation type", "pix-opts" ),
                "param_name" => "pix_scroll_parallax",
                "value" => array_flip(array(
                    "scroll_parallax"       => "Scroll Parallax",
                )),
            ),
            array(
                "type" => "checkbox",
                "param_name" => "pix_tilt",
                "value" => array_flip(array(
                    "tilt"       => "3D Hover",
                )),
            ),
            array (
                'param_name' 	=> 'xaxis',
                'type' 			=> 'textfield',
                'heading' 		=> __('X axis', 'pixfort-core'),
                'admin_label'	=> false,
                'std'			=> '0',
                "dependency" => array(
                    "element" => "pix_scroll_parallax",
                    "value" => "scroll_parallax"
                ),
            ),
            array (
                'param_name' 	=> 'yaxis',
                'type' 			=> 'textfield',
                'heading' 		=> __('Y axis', 'pixfort-core'),
                'admin_label'	=> false,
                'std'			=> '0',
                "dependency" => array(
                    "element" => "pix_scroll_parallax",
                    "value" => "scroll_parallax"
                ),
            ),
            array (
                'param_name' 	=> 'pix_tilt_size',
                'type' 			=> 'dropdown',
                'heading' 		=> __('3d hover size', 'pixfort-core'),
                'admin_label'	=> false,
                'value'			=> array_flip(array(
                    'tilt'			=> 'Default',
                    'tilt_big'		=> 'Big',
                    'tilt_small' 		=> 'Small',
                )),
                "dependency" => array(
                    "element" => "pix_tilt",
                    "not_empty" => true
                ),
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

            array(
                "type" => "dropdown",
                "heading" => __( "Infinite Animation type", "pix-opts" ),
                "param_name" => "pix_infinite_animation",
                "value" => $infinite_animation,
                'admin_label'	=> false,
            ),
            array(
                "type" => "dropdown",
                "heading" => __( "Infinite Animation Speed", "pix-opts" ),
                "param_name" => "pix_infinite_speed",
                "value" => $animation_speeds,
                'admin_label'	=> false,
                "dependency" => array(
                    "element" => "pix_infinite_animation",
                    "not_empty" => true
                ),
            ),


            array(
                'type' => 'css_editor',
                'heading' => __( 'Css', 'essentials-core' ),
                'param_name' => 'css',
                'group' => __( 'Design options', 'essentials-core' ),
            ),
        ),
        $effects_params
    )
));

?>
