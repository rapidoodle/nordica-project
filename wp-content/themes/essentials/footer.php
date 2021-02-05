<?php
/**
* The template for displaying the footer
*
* Contains the closing of the #content div and all content after.
*
* @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
*
* @package essentials
*/

$pix_sticky = '';
$pix_sticky_bg = '';
$pix_sticky_color = '';
if(pix_get_option('pix-sticky-footer')){
	$pix_sticky = 'pix-sticky-footer';
	if(pix_get_option('sticky-footer-bg-color')){
		$pix_sticky_bg = pix_get_option('sticky-footer-bg-color');
		if(pix_get_option('sticky-footer-bg-color')=='custom' && pix_get_option('custom-sticky-footer-bg-color')){
			$pix_sticky_color = pix_get_option('custom-sticky-footer-bg-color');
		}
	}
	if(pix_get_option('pix-body-bg-color')){
		if(pix_get_option('pix-body-bg-color')!='custom'){
			$place_bg = ' bg-'.pix_get_option('pix-body-bg-color');
		}else{
			$place_style .= 'background: '.pix_get_option('custom-body-bg-color').';';
		}
	}
	?>
	<div class="pix-footer-sticky-placeholder <?php echo esc_attr( $place_bg ); ?> w-100 d-block" style="<?php echo esc_attr( $place_style ); ?>"></div>
	<?php
}
?>

<?php
$footer = false;
if(!empty(pix_get_option('pix-footer'))){
	$footer = pix_get_option('pix-footer');
}

$pagePostTypes = array('page');
$pagePostTypes = apply_filters( 'pixfort_page_options_post_types', $pagePostTypes );
if(in_array(get_post_type(), $pagePostTypes) && get_post_meta( get_the_ID(), 'pix-page-footer', true )){
	$footer = get_post_meta( get_the_ID(), 'pix-page-footer', true );
}
if($footer=='disable'){
	$footer = false;
}


 ?>

<footer id="pix-page-footer" class="site-footer2 <?php echo esc_attr( $pix_sticky ); ?> bg-white my-0 py-0" data-sticky-bg="<?php echo esc_attr($pix_sticky_bg); ?>" data-sticky-color="<?php echo esc_attr($pix_sticky_color); ?>">
	<div class="container my-0 py-0">
		<div class="row my-0 py-0">
			<div class="col-12 my-0 py-0">
				<?php

				if ( function_exists( 'elementor_theme_do_location' ) && elementor_theme_do_location( 'footer' ) ) {
					elementor_theme_do_location( 'footer' );
					$footer = false;
				}
				if($footer){
					if(function_exists('icl_get_languages')) {
						$correct_id = apply_filters( 'wpml_object_id', $footer, 'pixfooter', true );
						$post = get_post( $correct_id );
					}else{
						$post = get_post( $footer );
					}

					$wbp_footer_default = true;
					if( class_exists( '\Elementor\Plugin' ) ) {
						if ( Elementor\Plugin::instance()->db->is_built_with_elementor( $footer ) ) {
							$wbp_footer_default = false;
						}
					}
					if ( defined( 'WPB_VC_VERSION' ) && $wbp_footer_default) {
						// WP Bakery
						if(is_user_logged_in()){
							echo do_shortcode(get_post_field('post_content', $post));
						}else{
							echo apply_filters('the_content', do_shortcode(get_post_field('post_content', $post)) );
						}
					}else{
						// Elementor
						if ( get_post_status( $footer ) ) {
							if(get_post_type( $footer )==='pixfooter'){
								setup_postdata($footer);
								the_content();
							}
						}
					}

					wp_reset_postdata();
					// $cpost = the_post();
				}
				?>
			</div>
		</div>
	</div>
</footer>

</div><!-- #page -->







<script>
var global = global || window;
</script>
<?php wp_footer(); ?>
</body>
</html>
