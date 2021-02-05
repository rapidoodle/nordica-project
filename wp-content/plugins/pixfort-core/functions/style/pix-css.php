<?php

$loadStyleInHeader = false;
if( !empty(pix_plugin_get_option('site-page-transition')) ){
	if(pix_plugin_get_option('site-page-transition')=='disable-page-transition'){
		$loadStyleInHeader = true;
	}
}
if($loadStyleInHeader){
	add_action( 'wp_enqueue_scripts', 'pix_essentials_enqueue_styles', 15 );
}else{
	add_action( 'wp_footer', 'pix_essentials_enqueue_styles', 11 );

}

function pix_essentials_enqueue_styles() {
	// if(WP_DEBUG){
	// 	require_once 'WP_SCSS_Compiler.php';
	// 	pix_update_style_url();
	// }
	$g_middle = false;
	if(pix_plugin_get_option('opt-primary-gradient-switch')){
		$g_middle = true;
	}
	$gradient_1 = '#F27121';
	if(!empty(pix_plugin_get_option('opt-color-gradient-primary-1'))){
		$gradient_1 = pix_plugin_get_option('opt-color-gradient-primary-1');
	}
	$gradient_middle = '#E94057';
	if(!empty(pix_plugin_get_option('opt-color-gradient-primary-middle'))){
		$gradient_middle = pix_plugin_get_option('opt-color-gradient-primary-middle');
	}

	$gradient_2 = '#8A2387';
	if(!empty(pix_plugin_get_option('opt-color-gradient-primary-2'))){
		$gradient_2 = pix_plugin_get_option('opt-color-gradient-primary-2');
	}
	echo '<div class="d-flex"><svg width="0" height="0" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="svg-gradient-primary">
          <stop offset="0%" stop-color="'.$gradient_1.'" />';
		  if($g_middle&&!empty($gradient_middle)){
			  echo '<stop offset="50%" stop-color="'.$gradient_middle.'" />';
		  }
          echo '<stop offset="100%" stop-color="'.$gradient_2.'" />
        </linearGradient>
      </defs>
    </svg></div>';
	if( get_option('pix_essentials_style_url') ){
		wp_enqueue_style( 'pix-essentials-style-2', get_option('pix_essentials_style_url'), array(), null, 'all'  );
	}else{
		require_once 'WP_SCSS_Compiler.php';
		$comp = WP_SCSS_Compiler::instance();
		$script_url = $comp->parse_stylesheet(get_template_directory_uri() . '/inc/scss/essentials.scss', 'pix-essentials-style-2' );
		update_option( 'pix_essentials_style_url', $script_url, 'yes' );
		wp_enqueue_style( 'pix-essentials-style-2', $script_url, array(), null, 'all' );
	}
}

function pix_get_style_url(){
	$script_url = false;
	if( get_option('pix_essentials_style_url') ){
		$script_url = get_option('pix_essentials_style_url');
	}else{
		$comp = WP_SCSS_Compiler::instance();
		$script_url = $comp->parse_stylesheet(get_template_directory_uri() . '/inc/scss/essentials.scss', 'pix-essentials-style-2' );
	}
	return $script_url;
}

function pix_update_style_url(){
	require_once 'WP_SCSS_Compiler.php';
	$comp = WP_SCSS_Compiler::instance();
	$script_url = $comp->parse_stylesheet(get_template_directory_uri() . '/inc/scss/essentials.scss', 'pix-essentials-style-2' );
	// if(substr( $script_url, 0, 6 ) === "https:"){
	// 	$script_url = substr($script_url, 6);
	// }elseif(substr( $script_url, 0, 5 ) === "http:"){
	// 	$script_url = substr($script_url, 5);
	// }
	update_option( 'pix_essentials_style_url', $script_url, 'yes' );
}



add_filter( 'wp_scss_variables', 'pix_scss_vars', 10, 2 );
function pix_scss_vars( $vars, $handle ) {

	if ( ! is_array( $vars ) ) {
		$vars = array();
	}

	// colors
	if(!empty(pix_plugin_get_option('opt-primary-color'))){
		$vars['primary'] = pix_plugin_get_option('opt-primary-color');
	}
	if(!empty(pix_plugin_get_option('opt-secondary-color'))){
		$vars['secondary'] = pix_plugin_get_option('opt-secondary-color');
	}
	if(!empty(pix_plugin_get_option('opt-body-color'))){
		if(pix_plugin_get_option('opt-body-color')!='custom'){
			$vars['body-color'] = 'final-color("'.pix_plugin_get_option('opt-body-color').'")';
		}else{
			$vars['body-color'] = pix_plugin_get_option('opt-custom-body-color');
		}

	}
	if(!empty(pix_plugin_get_option('opt-dark-body-color'))){
		if(pix_plugin_get_option('opt-dark-body-color')!='custom'){
			$vars['dark-body-color'] = 'final-color("'.pix_plugin_get_option('opt-dark-body-color').'")';
		}else{
			$vars['dark-body-color'] = pix_plugin_get_option('opt-custom-dark-body-color');
		}

	}

	if(!empty(pix_plugin_get_option('opt-heading-color'))){
		if(pix_plugin_get_option('opt-heading-color')!='custom'){
			$vars['heading-color'] = 'final-color("'.pix_plugin_get_option('opt-heading-color').'")';
		}else{
			if(!empty(pix_plugin_get_option('opt-custom-heading-color'))){
				$vars['heading-color'] = pix_plugin_get_option('opt-custom-heading-color');
			}else{
				$vars['heading-color'] = '#495057';
			}

		}

	}else{
		$vars['heading-color'] = 'gray-7';
	}
	if(!empty(pix_plugin_get_option('opt-dark-heading-color'))){
		if(pix_plugin_get_option('opt-dark-heading-color')!='custom'){
			$vars['dark-heading-color'] = 'final-color("'.pix_plugin_get_option('opt-dark-heading-color').'")';
		}else{
			if(!empty(pix_plugin_get_option('opt-custom-dark-heading-color'))){
				$vars['dark-heading-color'] = pix_plugin_get_option('opt-custom-dark-heading-color');
			}else{
				$vars['dark-heading-color'] = '#ffffff';
			}

		}
	}else{
		$vars['dark-heading-color'] = 'white';
	}


	if(!empty(pix_plugin_get_option('opt-link-color'))){
		$vars['link-color'] = pix_plugin_get_option('opt-link-color');
	}
	if(!empty(pix_plugin_get_option('opt-font-size-base'))){
		$vars['font-size-base'] = pix_plugin_get_option('opt-font-size-base');
	}else{
		$vars['font-size-base'] = '1rem';
	}

	if(!empty(pix_plugin_get_option('opt-primary-font-spacing'))){
		$vars['letter-spacing-base'] = pix_plugin_get_option('opt-primary-font-spacing');
	}else{
		$vars['letter-spacing-base'] = '-0.1px';
	}
	if(!empty(pix_plugin_get_option('opt-secondary-font-spacing'))){
		$vars['letter-spacing-secondary'] = pix_plugin_get_option('opt-secondary-font-spacing');
	}else{
		$vars['letter-spacing-secondary'] = '-0.1px';
	}
// pix_plugin_get_option
	$g_middle = false;
	if(pix_plugin_get_option('opt-primary-gradient-switch')){
		$vars['middle-gradient'] = 'yes';
		$g_middle = true;
	}else{
		$vars['middle-gradient'] = 'no';
	}
	$gradient_1 = '#F27121';
	if(!empty(pix_plugin_get_option('opt-color-gradient-primary-1'))){
		$vars['gradient-primary-1'] = pix_plugin_get_option('opt-color-gradient-primary-1');
		$gradient_1 = $vars['gradient-primary-1'];
	}
	$gradient_middle = '#E94057';
	if(!empty(pix_plugin_get_option('opt-color-gradient-primary-middle'))){
		$vars['gradient-primary-middle'] = pix_plugin_get_option('opt-color-gradient-primary-middle');
		$gradient_middle = $vars['gradient-primary-middle'];
	}

	$gradient_2 = '#8A2387';
	if(!empty(pix_plugin_get_option('opt-color-gradient-primary-2'))){
		$vars['gradient-primary-2'] = pix_plugin_get_option('opt-color-gradient-primary-2');
		$gradient_2 = $vars['gradient-primary-2'];
	}
	if(!empty(pix_plugin_get_option('opt-primary-gradient-dir'))){
		$vars['gradient-direction'] = pix_plugin_get_option('opt-primary-gradient-dir');
	}


	if(!empty(pix_plugin_get_option('opt-primary-font'))){
		$vars['font-family-base'] = pix_plugin_get_option('opt-primary-font')['font-family'];
	}
	if(!empty(pix_plugin_get_option('opt-secondary-font'))){
		$vars['font-family-secondary'] = pix_plugin_get_option('opt-secondary-font')['font-family'];
	}
	if(!empty(pix_plugin_get_option('opt-regular-font-weight'))){
		$vars['font-weight-normal'] = pix_plugin_get_option('opt-regular-font-weight');
	}
	if(!empty(pix_plugin_get_option('opt-bold-font-weight'))){
		$vars['font-weight-bold'] = pix_plugin_get_option('opt-bold-font-weight');
	}
	if(!empty(pix_plugin_get_option('pix-custom-container-width'))){
		$vars['custom-container'] = pix_plugin_get_option('pix-custom-container-width');
	}
	if(!empty(pix_plugin_get_option('google-api-key'))){
		$vars['enable_google_maps'] = pix_plugin_get_option('google-api-key');
	}
	// Main colors
	if(!empty(pix_plugin_get_option('opt-color-blue'))){
		$vars['blue'] = pix_plugin_get_option('opt-color-blue');
	}
	if(!empty(pix_plugin_get_option('opt-color-green'))){
		$vars['green'] = pix_plugin_get_option('opt-color-green');
	}
	if(!empty(pix_plugin_get_option('opt-color-cyan'))){
		$vars['cyan'] = pix_plugin_get_option('opt-color-cyan');
	}
	if(!empty(pix_plugin_get_option('opt-color-yellow'))){
		$vars['yellow'] = pix_plugin_get_option('opt-color-yellow');
	}
	if(!empty(pix_plugin_get_option('opt-color-orange'))){
		$vars['orange'] = pix_plugin_get_option('opt-color-orange');
	}
	if(!empty(pix_plugin_get_option('opt-color-red'))){
		$vars['red'] = pix_plugin_get_option('opt-color-red');
	}
	if(!empty(pix_plugin_get_option('opt-color-brown'))){
		$vars['brown'] = pix_plugin_get_option('opt-color-brown');
	}
	if(!empty(pix_plugin_get_option('opt-color-purple'))){
		$vars['purple'] = pix_plugin_get_option('opt-color-purple');
	}



	if ( class_exists( 'WooCommerce' ) ) {
		$vars['enable_woocommerce'] = 'true';
	}
	if ( defined( 'JETPACK__VERSION' ) ) {
		$vars['enable_jetpack'] = 'true';
	}

	return $vars;
}



function wpb_add_google_fonts() {

	$reg = '400';
	$bold = '700';
	if(!empty(pix_plugin_get_option('opt-regular-font-weight'))){
		$reg = pix_plugin_get_option('opt-regular-font-weight');
	}
	if(!empty(pix_plugin_get_option('opt-bold-font-weight'))){
		$bold = pix_plugin_get_option('opt-bold-font-weight');
	}

	$default_fonts = array(
		"Arial, Helvetica, sans-serif",
		"'Arial Black', Gadget, sans-serif",
		"'Bookman Old Style', serif",
		"'Comic Sans MS', cursive",
		"Courier, monospace",
		"Garamond, serif",
		"Georgia, serif",
		"Impact, Charcoal, sans-serif",
		"'Lucida Console', Monaco, monospace",
		"'Lucida Sans Unicode', 'Lucida Grande', sans-serif",
		"'MS Sans Serif', Geneva, sans-serif",
		"'MS Serif', 'New York', sans-serif",
		"'Palatino Linotype', 'Book Antiqua', Palatino, serif",
		"Tahoma, Geneva, sans-serif",
		"'Times New Roman', Times, serif",
		"'Trebuchet MS', Helvetica, sans-serif",
		"Verdana, Geneva, sans-serif",
	);

	if(!empty(pix_plugin_get_option('opt-primary-font'))){

		if( pix_plugin_get_option('opt-primary-font')['google'] && strcmp(pix_plugin_get_option('opt-primary-font')['google'],'false') != 0  ){
			if( pix_plugin_get_option('opt-primary-font')['font-family']!=pix_plugin_get_option('opt-external-font-1-name')
				&& pix_plugin_get_option('opt-primary-font')['font-family']!=pix_plugin_get_option('opt-external-font-2-name')
			){
				if(!in_array(pix_plugin_get_option('opt-primary-font')['font-family'], $default_fonts)){
					$primaryGoogleFont = pix_plugin_get_option('opt-primary-font')['font-family'];
					array_push($default_fonts, $primaryGoogleFont);
					$url = esc_url( 'https://fonts.googleapis.com/css?family='.$primaryGoogleFont.':'.$reg.','.$bold.'&display=swap' );
					wp_enqueue_style( 'wpb-google-font-primary', $url, false );
				}

			}
		}
	}
	if(!empty(pix_plugin_get_option('opt-secondary-font'))){
		if( pix_plugin_get_option('opt-secondary-font')['google']
			&& strcmp(pix_plugin_get_option('opt-secondary-font')['google'],'false') != 0
			&& pix_plugin_get_option('opt-secondary-font')['google'] != false
		){
			if( pix_plugin_get_option('opt-secondary-font')['font-family']!=pix_plugin_get_option('opt-external-font-1-name')
				&& pix_plugin_get_option('opt-secondary-font')['font-family']!=pix_plugin_get_option('opt-external-font-2-name')
			){
				if(!in_array(pix_plugin_get_option('opt-secondary-font')['font-family'], $default_fonts)){
					wp_enqueue_style( 'wpb-google-font-secondary', 'https://fonts.googleapis.com/css?family='.pix_plugin_get_option('opt-secondary-font')['font-family'].':'.$reg.','.$bold.'&display=swap', false );
				}
			}
		}
	}
}

// add_action( 'wp_enqueue_scripts', 'wpb_add_google_fonts' );
add_action( 'wp_footer', 'wpb_add_google_fonts' );

function pix_add_custom_fonts() {
	if(!empty(pix_plugin_get_option('opt-primary-font'))){
		if(!empty(pix_plugin_get_option('opt-external-font-1-url'))){
			wp_enqueue_style( 'pix-external-font-1', pix_plugin_get_option('opt-external-font-1-url'), false );
		}
	}

	if(!empty(pix_plugin_get_option('opt-secondary-font'))){
		if(!empty(pix_plugin_get_option('opt-external-font-2-url'))){
			wp_enqueue_style( 'pix-external-font-2', pix_plugin_get_option('opt-external-font-2-url'), false );
		}
	}
}
add_action( 'wp_footer', 'pix_add_custom_fonts' );
?>
