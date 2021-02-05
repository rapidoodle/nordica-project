<?php

// Highlight Box ----------------------------------------------
vc_map( array (
    "name" => __("Highlight Box", "js_composer"),
    "base" => "pix_highlight_box",
    "content_element" => true,
    "show_settings_on_create" => true,
    'category' 		=> __('pixfort', 'pixfort-core'),
    "weight"	=> "1000",
    'class'         => 'pixfort_element',
    'icon' 			=> PIX_CORE_PLUGIN_URI . 'functions/images/elements/highlight-box.jpg',
    'description' 	=> __('Create custom Highlight content and image', 'pixfort-core'),
    "is_container" => true,
    "js_view" => 'VcColumnView',
    'params' 		=> array_merge(
        array (


            array(
                "type" => "dropdown",
                "heading" => __( "Infinite Animation type", "pix-opts" ),
                "param_name" => "pix_infinite_animation",
                "value" => array(
                    "None"                  => "",
                    "Slide Left"            => "pix-bg-slide-left",
                    "Sldie Right"           => "pix-bg-slide-right",
                    "Sldie Up"           => "pix-bg-slide-up",
                    "Sldie Down"           => "pix-bg-slide-down",
                ),
                'admin_label'	=> false,
            ),
            array(
                "type" => "dropdown",
                "heading" => __( "Infinite Animation Speed", "pix-opts" ),
                "param_name" => "pix_infinite_speed",
                "value" => array(
                    "Fast" 			=> "pix-duration-fast",
                    "Medium" 		=> "pix-duration-md",
                    "Slow" 			=> "pix-duration-slow",
                ),
                'admin_label'	=> false,
                "dependency" => array(
                    "element" => "pix_infinite_animation",
                    "not_empty" => true
                ),
            ),


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
                'std'	=> 'rounded-xl',
                'group'         => 'Advanced',
                'value' 		=> array(
                    __('No','pixfort-core') 	=> 'rounded-0',
                    __('Rounded','pixfort-core')	    => 'rounded',
                    __('Rounded Large','pixfort-core')	    => 'rounded-lg',
                    __('Rounded 5px','pixfort-core')	    => 'rounded-xl',
                    __('Rounded 10px','pixfort-core')	    => 'rounded-10',
                )
            ),


            array(
                'type' => 'css_editor',
                'heading' => __( 'Content area Css', 'essentials-core' ),
                'param_name' => 'content_area_css',
                'group' => __( 'Content area options', 'essentials-core' ),
            ),
            array(
                'type' => 'css_editor',
                'heading' => __( 'Css', 'essentials-core' ),
                'param_name' => 'css',
                'group' => __( 'Design options', 'essentials-core' ),
            ),
        ),
        $effects_params,
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
        )


    )
)
);

if ( class_exists( 'WPBakeryShortCodesContainer' ) ) {
    class WPBakeryShortCode_pix_highlight_box extends WPBakeryShortCodesContainer {
    }
}


?>
