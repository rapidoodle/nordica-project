<?php

vc_map( array(
    "name" => __("Card Group", "js_composer"),
    "base" => "pix_card_group",
    "content_element" => true,
    'category' 		=> __('pixfort', 'pixfort-core'),
    "weight"	=> "1000",
    'class'         => 'pixfort_element',
    'icon' 			=> PIX_CORE_PLUGIN_URI . 'functions/images/elements/pricing-group.png',
    'description' 	=> __('A container for card elements', 'pixfort-core'),
    "show_settings_on_create" => false,
    "is_container" => true,
    "params" => array_merge(
        array(
            array(
                'type' => 'dropdown',
                'param_name' => 'pix_rounded',
                'value' => array(
                    __( 'No', 'js_composer' )		=> '',
                    __( 'Yes', 'js_composer' )		=> 'pix-rounded-group',
                ),
                'heading' => __( 'Rounded corneres', 'js_composer' ),
            ),
            array(
                "type" => "textfield",
                "heading" => __("Extra class name", "my-text-domain"),
                "param_name" => "el_class",
                "description" => __("If you wish to style particular content element differently, then use this field to add a class name and then refer to it in your css file.", "my-text-domain"),
                'value'       => 'w-100',
            ),

            array(
                'type' => 'css_editor',
                'heading' => __( 'Css', 'essentials-core' ),
                'param_name' => 'css',
                'group' => __( 'Design options', 'essentials-core' ),
            ),

        )),
        "js_view" => 'VcColumnView'
    )
);

if ( class_exists( 'WPBakeryShortCodesContainer' ) ) {
    class WPBakeryShortCode_pix_card_group extends WPBakeryShortCodesContainer {
    }
}

?>
