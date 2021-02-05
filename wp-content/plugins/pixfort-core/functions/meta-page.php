<?php
/**
 * Page custom meta fields.
 */


function pix_page_meta_add(){

	global $pix_page_meta_box_3;


	// Layouts ----------------------------------
	// $layouts = array( 0 => '-- Theme Options --' );

	// Custom menu ------------------------------
	// $aMenus = array( 0 => '-- Default --' );
	// $oMenus = get_terms( 'nav_menu', array( 'hide_empty' => false ) );
	//
	// if( is_array($oMenus) ){
	// 	foreach( $oMenus as $menu ){
	// 		$aMenus[$menu->term_id] = $menu->name;
	// 	}
	// }



	$header_posts = get_posts([
	    'post_type' => 'pixheader',
	    'post_status' => 'publish',
	    'numberposts' => -1
	    // 'order'    => 'ASC'
	]);

	$headers = array();

	$headers[''] = "Theme Default";
	$headers['disable'] = "Disable";
	foreach ($header_posts as $key => $value) {
	    $headers[$value->ID] = $value->post_title;
	}

	$footer_posts = get_posts([
	    'post_type' => 'pixfooter',
	    'post_status' => 'publish',
	    'numberposts' => -1
	    // 'order'    => 'ASC'
	]);

	$footers = array();
	$footers[''] = "Theme Default";
	$footers['disable'] = "Disabled";
	foreach ($footer_posts as $key => $value) {
	    $footers[$value->ID] = $value->post_title;
	}


	$sidebars = array();
	$sidebars[''] = 'Theme default';
	$sidebars['sidebar-1'] = 'Main Sidebar';
	if(!empty(pix_plugin_get_option('pix_sidebars'))){
	    foreach (pix_plugin_get_option('pix_sidebars') as $key => $value) {
	        $sidebars['sidebar-'.str_replace(' ', '', $value)] = $value;
	    }
	}

	$pagePostTypes = array('page');
	$pagePostTypes = apply_filters( 'pixfort_page_options_post_types', $pagePostTypes );

	$pix_page_meta_box_3 = array(
		'id' 		=> 'pix-meta-portfolio',
		'title' 	=> __('PixFort Options','pixfort-core'),
		'page' 		=> $pagePostTypes,
		'post_types'	=> array('page', 'post'),
		'context' 	=> 'normal',
		'priority' 	=> 'default',
		'fields'	=> array(

			// array(
			// 	'id'		=> 'pix-hide-title',
			// 	'type'		=> 'select',
			// 	'title'		=> __('Hide The Title', 'pixfort-core'),
			// 	'sub_desc'	=> __('Hide page title.', 'pixfort-core'),
			// 	//'desc'		=> __('<strong>Turn it ON if you build content using Content Builder</strong>. Use the Content item if you want to display the Content from editor within the Content Builder.', 'pixfort-core'),
			// 	'options'	=> array('1' => 'Yes', '0' => 'No'),
			// 	'std'		=> '0'
			// ),
			array(
				'id'		=> 'pix-custom-intro-bg',
				'type'		=> 'media',
				'title'		=> __('Page intro background image', 'pixfort-core'),
				'sub_desc'	=> __('Select an image to override the default intro background image.', 'pixfort-core'),
			),

			array(
				'id'		=> 'pix-hide-top-padding',
				'type'		=> 'select',
				'title'		=> __('Hide Top Padding', 'pixfort-core'),
				'sub_desc'	=> __('Hide the padding before page content (under the header).', 'pixfort-core'),
				//'desc'		=> __('<strong>Turn it ON if you build content using Content Builder</strong>. Use the Content item if you want to display the Content from editor within the Content Builder.', 'pixfort-core'),
				'options'	=> array('1' => 'Yes', '0' => 'No'),
				'std'		=> '0'
			),

			array(
				'id'		=> 'pix-hide-top-area',
				'type'		=> 'select',
				'title'		=> __('Hide top area (Intro)', 'pixfort-core'),
				'sub_desc'	=> __('Hide the area under header).', 'pixfort-core'),
				//'desc'		=> __('<strong>Turn it ON if you build content using Content Builder</strong>. Use the Content item if you want to display the Content from editor within the Content Builder.', 'pixfort-core'),
				'options'	=> array(
					'1' => 'Yes',
					'0' => 'No',
					'default' => 'Theme default'
				),
				'std'		=> 'default'
				// 'std'		=> '0'
			),

			// array(
			// 	'id'		=> 'pix-hide-top-area',
			// 	'type'		=> 'switch',
			// 	'title'		=> __('Hide top area (Intro)', 'pixfort-core'),
			// 	'sub_desc'	=> __('Hide the area under header.', 'pixfort-core'),
			// 	// 'desc'		=> __('<strong>Turn it ON if you build content using Content Builder</strong>. Use the Content item if you want to display the Content from editor within the Content Builder.', 'pixfort-core'),
			// 	'options'	=> array('1' => 'On', '0' => 'Off'),
			// 	'std'		=> '0'
			// ),


			array(
				'id'		=> 'pix-sections-stack',
				'type'		=> 'switch',
				'title'		=> __('Enable section slides', 'pixfort-core'),
				// 'sub_desc'	=> __('Hide the area under header (only in boxed header layout).', 'pixfort-core'),
				// 'desc'		=> __('<strong>Turn it ON if you build content using Content Builder</strong>. Use the Content item if you want to display the Content from editor within the Content Builder.', 'pixfort-core'),
				'options'	=> array('1' => 'On', '0' => 'Off'),
				'std'		=> '0'
			),
			array(
				'id'		=> 'pix-sections-stack-dark',
				'type'		=> 'switch',
				'title'		=> __('Dark section slides navigation', 'pixfort-core'),
				// 'sub_desc'	=> __('Hide the area under header (only in boxed header layout).', 'pixfort-core'),
				// 'desc'		=> __('<strong>Turn it ON if you build content using Content Builder</strong>. Use the Content item if you want to display the Content from editor within the Content Builder.', 'pixfort-core'),
				'options'	=> array('1' => 'On', '0' => 'Off'),
				'std'		=> '0'
			),

			// array(
			// 	'id'		=> 'pix-post-hide-content',
			// 	'type'		=> 'switch',
			// 	'title'		=> __('Hide The Content', 'pixfort-core'),
			// 	'sub_desc'	=> __('Hide the content from the WordPress editor.', 'pixfort-core'),
			// 	'desc'		=> __('<strong>Turn it ON if you build content using Content Builder</strong>. Use the Content item if you want to display the Content from editor within the Content Builder.', 'pixfort-core'),
			// 	'options'	=> array('1' => 'On', '0' => 'Off'),
			// 	'std'		=> '0'
			// ),

			// array(
			// 	'id' 		=> 'pix-post-custom-layout',
			// 	'type' 		=> 'select',
			// 	'title' 	=> __('Custom Layout', 'pixfort-core'),
			// 	'desc' 		=> __('Custom Layout overwrites Theme Options', 'pixfort-core'),
			// 	'options' 	=> $layouts,
			// ),
			//
			array(
				'id' 		=> 'pix-page-header',
				'type' 		=> 'select',
				'title' 	=> __('Custom Header', 'pixfort-core'),
				'options' 	=> $headers,
			),
			array(
				'id' 		=> 'pix-page-footer',
				'type' 		=> 'select',
				'title' 	=> __('Custom Footer', 'pixfort-core'),
				'options' 	=> $footers,
			),
			array(
				'id' 		=> 'pix-page-sidebar',
				'type' 		=> 'select',
				'title' 	=> __('Custom Sidebar', 'pixfort-core'),
				'sub_desc'	=> __('Select if you choose sidebar template for the page.', 'pixfort-core'),
				'options' 	=> $sidebars,
			),
			array(
				'id' 		=> 'pix-page-sidebar-sticky',
				'type' 		=> 'select',
				'title' 	=> __('Sidebar Sticky', 'pixfort-core'),
				// 'sub_desc'	=> __('Select if you choose sidebar template for the page.', 'pixfort-core'),
				'options' 	=> array(
	                ''   => "Theme default",
	                'sticky-bottom'   => "Sticky bottom",
	                'sticky-top'   => "Sticky Top",
	                'sticky-disabled'   => "Disable Sticky"
	            ),
			),
			array(
				'id' 		=> 'pix-disable-wp-block-library',
				'type' 		=> 'select',
				'title' 	=> __('Disable Gutenberg CSS from this page', 'pixfort-core'),
				'sub_desc'	=> __('If you don\'t use Gutenberg in the page, you can disabled its css to improve page performance.', 'pixfort-core'),
				'options' 	=> array(
	                ''   => "No",
	                'yes'   => "Yes"
	            ),
			),
			//
			// array(
			// 	'id' 		=> 'pix-post-menu-mobile',
			// 	'type' 		=> 'select',
			// 	'title' 	=> __('Custom Mobile Menu', 'pixfort-core'),
			// 	'options' 	=> $aMenus,
			// ),
			//
			// array(
			// 	'id' 		=> 'pix-post-layout',
			// 	'type' 		=> 'select',
			// 	'title' 	=> __('Layout', 'pixfort-core'),
			// 	'sub_desc' 	=> __('Select layout for this page', 'pixfort-core'),
			// 	'options' 	=> array(
			// 		'no-sidebar' 	=> 'Full width. No sidebar',
			// 		'left-sidebar'	=> 'Left Sidebar',
			// 		'right-sidebar' => 'Right Sidebar',
			// 		'two-sidebar' => 'Two Sidebar'
			//
			// 	),
			// 	//'std' 		=> pix_get_option( 'sidebar-layout' ),
			// ),
			//
			// array(
			// 	'id' 		=> 'pix-post-layout2',
			// 	'type' 		=> 'radio_img',
			// 	'title' 	=> __('Layout', 'pixfort-core'),
			// 	'sub_desc' 	=> __('Select layout for this page', 'pixfort-core'),
			// 	'options' 	=> array(
			// 		'no-sidebar' 	=> array('title' => 'Full width. No sidebar', 'img' => PIX_CORE_PLUGIN_URI.'/functions/img/1col.png'),
			// 		'left-sidebar'	=> array('title' => 'Left Sidebar', 'img' => PIX_CORE_PLUGIN_URI.'/functions/img/2cl.png'),
			// 		'right-sidebar' => array('title' => 'Right Sidebar', 'img' => PIX_CORE_PLUGIN_URI.'/functions/img/2cr.png'),
			// 		'two-sidebar' => array('title' => 'Two Sidebar', 'img' => PIX_CORE_PLUGIN_URI.'/functions/img/2cr.png')
			//
			// 	),
			// 	//'std' 		=> pix_get_option( 'sidebar-layout' ),
			// ),

			// array(
			// 	'id' 		=> 'pix-post-css',
			// 	'type' 		=> 'textarea',
			// 	'title' 	=> __('Custom CSS', 'pixfort-core'),
			// 	'desc' 		=> __('Paste your custom CSS code for this page.', 'pixfort-core'),
			// ),


		),
	);
	add_meta_box($pix_page_meta_box_3['id'], $pix_page_meta_box_3['title'], 'pix_page_show_box', $pix_page_meta_box_3['page'], $pix_page_meta_box_3['context'], $pix_page_meta_box_3['priority']);
}

 add_action('admin_menu', 'pix_page_meta_add');


 function pix_page_show_box() {
	global $pix_page_meta_box_3, $post;

	// Use nonce for verification
	echo '<div id="pix-wrapper">';
		echo '<input type="hidden" name="pix_page_meta_nonce" value="', wp_create_nonce(basename(__FILE__)), '" />';



		echo '<table class="form-table">';
			echo '<tbody>';

				foreach ($pix_page_meta_box_3['fields'] as $field) {
					$meta = get_post_meta($post->ID, $field['id'], true);
					if( ! key_exists('std', $field) ) $field['std'] = false;
					$meta = ( $meta || $meta==='0' ) ? $meta : stripslashes(htmlspecialchars(($field['std']), ENT_QUOTES ));
					pix_meta_field_input( $field, $meta );
				}

			echo '</tbody>';
		echo '</table>';

	echo '</div>';
}

/*-----------------------------------------------------------------------------------*/
/*	Save data when page is edited
/*-----------------------------------------------------------------------------------*/
function pix_page_save_data($post_id) {
	global $pix_page_meta_box_3;

	// verify nonce
	if( key_exists( 'pix_page_meta_nonce',$_POST ) ) {
		if ( ! wp_verify_nonce( $_POST['pix_page_meta_nonce'], basename(__FILE__) ) ) {
			return $post_id;
		}
	}

	// check autosave
	if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) {
		return $post_id;
	}

	// check permissions
	if ( (key_exists('post_type', $_POST)) && ('page' == $_POST['post_type']) ) {
		if (!current_user_can('edit_page', $post_id)) {
			return $post_id;
		}
	} elseif (!current_user_can('edit_post', $post_id)) {
		return $post_id;
	}




	if(!empty($pix_page_meta_box_3)){
		foreach ( (array)$pix_page_meta_box_3['fields'] as $field ) {
			$old = get_post_meta($post_id, $field['id'], true);
			if( key_exists($field['id'], $_POST) ) {
				$new = $_POST[$field['id']];
			} else {
				$new = ""; // problem with "quick edit"
				//continue;
			}

			if( isset($new) && $new != $old) {
				update_post_meta($post_id, $field['id'], $new);
			}elseif('' == $new && $old) {
			    delete_post_meta($post_id, $field['id'], $old);
			}
			// if( isset($new) && $new != $old) {
			// 	if($field['type']=="switch"){
			// 		if( isset( $_POST[$field['id']] ) ) {
			//             update_post_meta($post_id, $field['id'], 'no');
			//         } else {
			//             update_post_meta($post_id, $field['id'], 'no');
			//         }
			// 	}else{
			// 		update_post_meta($post_id, $field['id'], $new);
			// 	}
			// }elseif('' == $new && $old) {
			// 	if($field['type']=="switch"){
			// 		if( isset( $_POST[$field['id']] ) ) {
			//             update_post_meta($post_id, $field['id'], 'no');
			//         } else {
			//             update_post_meta($post_id, $field['id'], 'no');
			//         }
			//     }else{
			//     	delete_post_meta($post_id, $field['id'], $old);
			//     }
			// }else{
			// 	if($field['type']=="switch"){
			// 		if( isset( $_POST[$field['id']] ) ) {
			//             update_post_meta($post_id, $field['id'], 'no');
			//         } else {
			//             update_post_meta($post_id, $field['id'], 'no');
			//         }
			// 	}else{
			// 		update_post_meta($post_id, $field['id'], $new);
			// 	}
			// }
		}
	}

}
add_action('save_post', 'pix_page_save_data');







// function essentials_scripts_fix(){
// 	wp_deregister_style( 'js_composer_front' );
// }
// add_action( 'wp_enqueue_scripts', 'essentials_scripts_fix' );
//
// function essentials_scripts_footer_fix(){
// 	wp_enqueue_style( 'js_composer_front' );
// }
// add_action( 'wp_footer', 'essentials_scripts_footer_fix' );
/*-----------------------------------------------------------------------------------*/
/*	Styles & scripts
/*-----------------------------------------------------------------------------------*/
function pix_page_admin_styles() {
	wp_enqueue_style( 'pix-admin-core', PIX_CORE_PLUGIN_URI. 'functions/css/pix-admin-core.css', false, PLUGIN_VERSION, 'all');
	wp_enqueue_style( 'pix-meta', PIX_CORE_PLUGIN_URI. 'functions/css/pixbuilder.css', false, PLUGIN_VERSION, 'all');
    wp_enqueue_style( 'pix-meta2', PIX_CORE_PLUGIN_URI. 'functions/pixbuilder.css', false, PLUGIN_VERSION, 'all');
}
add_action('admin_print_styles', 'pix_page_admin_styles');

// function pix_page_admin_scripts() {
// 	// wp_enqueue_script( 'pix-admin-piximations', PIX_CORE_PLUGIN_URI . 'functions/js/piximations.js');
// 	// wp_enqueue_script( 'pix-admin-custom', PIX_CORE_PLUGIN_URI . 'functions/js/custom.js', array('jquery'));
// 	// wp_localize_script( 'pix-admin-custom', 'plugin_object', array(
// 	//     'PIX_CORE_PLUGIN_URI' => PIX_CORE_PLUGIN_URI,
// 	// ));
// }
// add_action('admin_print_scripts', 'pix_page_admin_scripts');

?>
