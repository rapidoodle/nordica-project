<?php
/**
* The template for displaying product content within loops
*
* This template can be overridden by copying it to yourtheme/woocommerce/content-product.php.
*
* HOWEVER, on occasion WooCommerce will need to update template files and you
* (the theme developer) will need to copy the new files to your theme to
* maintain compatibility. We try to do this as little as possible, but it does
* happen. When this occurs the version of the template file will be bumped and
* the readme will list any important changes.
*
* @see     https://docs.woocommerce.com/document/template-structure/
* @package WooCommerce/Templates
* @version 3.4.0
*/

defined( 'ABSPATH' ) || exit;

global $product;

// Ensure visibility.
if ( empty( $product ) || ! $product->is_visible() ) {
	return;
}
$nonce = wp_create_nonce("product_nonce");

$extra_classes = 'shadow-sm fly shadow-hover-sm rounded-lg';
if(!empty($GLOBALS['item_extra_classes'])){
    $extra_classes = $GLOBALS['item_extra_classes'];
}

?>
<li <?php wc_product_class('', $product); ?>>
	<div class="pix-product-item bg-white overflow-hidden <?php echo esc_attr( $extra_classes ); ?>">

		<?php
		$image = wp_get_attachment_image_src( get_post_thumbnail_id( $post->ID ), 'pix-woocommerce-md' );
		?>
		<?php
		/**
		* Hook: woocommerce_before_shop_loop_item.
		*
		* @hooked woocommerce_template_loop_product_link_open - 10
		*/
		do_action( 'woocommerce_before_shop_loop_item' );
		/**
		* Hook: woocommerce_before_shop_loop_item_title.
		*
		* @hooked woocommerce_show_product_loop_sale_flash - 10
		* @hooked woocommerce_template_loop_product_thumbnail - 10
		*/
		remove_action('woocommerce_before_shop_loop_item_title', 'woocommerce_show_product_loop_sale_flash', 10);

		?>
		<a href="<?php echo get_the_permalink() ?>">
			<div class="position-relative rounded-0 overflow-hidden pix-product-img-hover d-block w-100">
			<?php do_action( 'woocommerce_before_shop_loop_item_title' ); ?>
			</div>
		</a>
		<div class="pix-p-20">
			<div class="d-flex align-items-center">
				<div class="flex-fill">
					<a href="<?php echo get_the_permalink() ?>"  class="secondary-font font-weight-bold text-heading-default p-0 align-self-center"><?php echo  esc_attr( get_the_title() ); ?></a>
				</div>
				<div class="pix-pl-10 flex-fill text-right align-self-stretch2 d-flex2">
					<?php
					$link = admin_url('admin-ajax.php?action=pix_product_preview&id='.$post->ID.'&nonce='.$nonce);
					?>
					<span data-preview-link="<?php echo esc_url( $link ); ?>" class="text-18 d-inline-block pix-preview-loop-icon pix-product-preview align-self-center text-body-default"><?php echo pix_load_inline_svg(get_template_directory().'/inc/assets/preview.svg') ; ?></span>
				</div>
			</div>
			<div class="pix-mb-10">
			<?php
			action_pixfort_product_cats();
			woocommerce_show_product_loop_sale_flash();
			?>
			</div>
			<?php
			/**
			* Hook: woocommerce_after_shop_loop_item_title.
			*
			* @hooked woocommerce_template_loop_rating - 5
			* @hooked woocommerce_template_loop_price - 10
			*/
			remove_action('woocommerce_after_shop_loop_item_title', 'woocommerce_template_loop_rating', 5);
			remove_action('woocommerce_after_shop_loop_item_title', 'woocommerce_template_loop_price', 10);
			do_action( 'woocommerce_after_shop_loop_item_title' );
			/**
			* Hook: woocommerce_after_shop_loop_item.
			*
			* @hooked woocommerce_template_loop_product_link_close - 5
			* @hooked woocommerce_template_loop_add_to_cart - 10
			*/
			$disableDefaultAdd = true;
			if(pix_get_option('shop-default-add-cart')){
				$disableDefaultAdd = false;
			}
			if($disableDefaultAdd){
				remove_action('woocommerce_after_shop_loop_item', 'woocommerce_template_loop_add_to_cart', 10);
				do_action( 'woocommerce_after_shop_loop_item' );
			}else{
				?>
				<div class="pix-mb-10">
				<?php
				do_action( 'woocommerce_after_shop_loop_item' );
				?>
				</div>
				<?php
			}


			$price_area = '';
			if($product->get_rating_count()>0){
				$price_area = 'pix-product-price-rating';
			}
			?>
			<div class="d-flex align-items-center pix-pb-202">
				<div class="flex-fill <?php echo esc_attr( $price_area );?>">
					<div class="pix-product-price">
						<?php woocommerce_template_loop_price(); ?>
					</div>
					<div class="pix-product-rating">
						<?php woocommerce_template_loop_rating(); ?>
					</div>
				</div>
				<?php
				if( class_exists( 'YITH_WCWL' ) ){
					?>
					<div class="pix-pl-10 align-self-stretch d-flex">
					<?php
					$like_link = admin_url('admin-ajax.php');
					$status = '';
					$like_classes = 'text-body-default';
					global $yith_wcwl;
					if(empty($yith_wcwl->details['user_id'])){
						$yith_wcwl->details['user_id'] = '';
					}
					if($yith_wcwl->is_product_in_wishlist($post->ID)){
						$status = 'remove-item';
						$like_classes = 'text-red';
					}
					?>
					<a href="<?php echo esc_url($like_link); ?>" data-id="<?php echo esc_attr( $post->ID); ?>" class="pix-add-to-wishlist <?php echo esc_attr( $status); ?>"><span class="btn-icon <?php echo esc_attr( $like_classes); ?> text-18 pixicon-heart align-self-center"></span></a>
					</div>
					<?php
				}
				do_action( 'pix_product_add_to_cart_sm_btn', $post, $product, $nonce );
				?>
			
			</div>
		</div>
	</div>
</li>
