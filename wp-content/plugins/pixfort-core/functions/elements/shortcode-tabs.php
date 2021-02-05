<?php
if ( ! defined( 'ABSPATH' ) ) {
	die( '-1' );
}






vc_map(

	array(
'name' => esc_html__( 'Pix Tabs', 'js_composer' ),
'base' => 'pix_tabs',
'icon' => 'icon-wpb-ui-tab-content',
'is_container' => true,
"content_element" => true,
'show_settings_on_create' => false,
'as_parent' => array(
	'only' => 'vc_tta_section',
),
'category' => esc_html__( 'Content', 'js_composer' ),
'description' => esc_html__( 'Tabbed content', 'js_composer' ),
'params' => array(
	array(
		'type' => 'textfield',
		'param_name' => 'title',
		'heading' => esc_html__( 'Widget title', 'js_composer' ),
		'description' => esc_html__( 'Enter text used as widget title (Note: located above content element).', 'js_composer' ),
	),

),
'js_view' => 'VcColumnView',
)

);



if ( class_exists( 'WPBakeryShortCodesContainer' ) ) {
  class WPBakeryShortCode_Pix_Tabs extends WPBakeryShortCodesContainer {
  }
}


 ?>
