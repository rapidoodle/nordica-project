<?php
/**
 * Single Product Meta
 *
 * pixfort version
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see 	    https://docs.woocommerce.com/document/template-structure/
 * @author 		WooThemes
 * @package 	WooCommerce/Templates
 * @version     3.0.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

global $product;
?>
<div class="product_meta">


	<?php do_action( 'woocommerce_product_meta_start' ); ?>

	<?php if ( wc_product_sku_enabled() && ( $product->get_sku() || $product->is_type( 'variable' ) ) ) : ?>
		<span class="sku_wrapper text-sm"><span class="text-heading-default font-weight-bold"><?php esc_html_e( 'SKU:', 'essentials' ); ?></span> <span class="sku"><?php echo do_shortcode( ( $sku = $product->get_sku() ) ? $sku : esc_html__( 'N/A', 'essentials' ) ); ?></span></span>
		<div class="pix-py-20 pix-xd-divider-20 my-0 line-height-0"><div class="pix-line-divider thin bg-dark-opacity-1 d-inline-block w-100"></div></div>
	<?php endif; ?>


		<span class="tagged_as pix-woo-tags text-gray d-block text-sm d-inline-block "><span class="text-heading-default font-weight-bold"><?php echo _n( 'Tag:', 'Tags:', count( $product->get_tag_ids() ), 'essentials' ); ?></span>
		<span class=" pix-ml-10"></span>


		<?php
		$terms = get_the_terms( get_the_ID(), 'product_tag' );
		$term_array = array();
		if ( ! empty( $terms ) && ! is_wp_error( $terms ) ){
		    foreach ( $terms as $term ) {
		        $term_array[] = $term
				?>
				<a href="<?php echo get_tag_link($term->term_id); ?>" class="btn btn-sm btn-white fly-sm shadow-hover-sm font-weight-bold text-body-default shadow-sm"><?php echo esc_attr( $term->name ); ?></a>
				<?php
		    }
		}
	?>
	<div class="pix-py-20 pix-xd-divider-20 my-0 line-height-0"><div class="pix-line-divider thin bg-dark-opacity-1 d-inline-block w-100"></div></div>
	<?php
		get_pix_social_links('text-center');
	 ?>
	<?php do_action( 'woocommerce_product_meta_end' ); ?>

</div>
