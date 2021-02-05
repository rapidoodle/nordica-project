<?php

defined( 'ABSPATH' ) || exit;

// Note: `wc_get_gallery_image_html` was added in WC 3.3.2 and did not exist prior. This check protects against theme overrides being used on older versions of WC.
global $product;


$columns           = apply_filters( 'woocommerce_product_thumbnails_columns', 4 );
$post_thumbnail_id = $product->get_image_id();
$wrapper_classes   = apply_filters( 'woocommerce_single_product_image_gallery_classes', array(
	'woocommerce-product-gallery-2',
	'woocommerce-product-gallery--' . ( $product->get_image_id() ? 'with-images' : 'without-images' ),
	'woocommerce-product-gallery--columns-' . absint( $columns ),
	'images',
) );
?>
<div class="<?php echo esc_attr( implode( ' ', array_map( 'sanitize_html_class', $wrapper_classes ) ) ); ?>" >
	<figure class="woocommerce-product-gallery__wrapper">
		<?php
        $attachment_ids = $product->get_gallery_image_ids();

        if ( $attachment_ids && $product->get_image_id() ) {
			?>
            <div class="row">
                <div class="col-2 d-lg-block d-none">
                    <div class="sticky-top pix-sticky-top-adjust text-right">
					<?php
					if (!empty($product->get_image_id())){
						?>
						<a href="#pix-product-img-featured-<?php echo esc_attr( $product->get_image_id() ); ?>">
							<?php
	                        echo wp_get_attachment_image( $product->get_image_id(), 'pix-woocommerce-xs', false, array(
								'class' => 'rounded-lg pix-mb-20 pix-fit-cover d-inline-block',
								'style' => 'width:75px;height:75px;'
							));
							?>
                        </a>
						<?php
					}
                	foreach ( $attachment_ids as $attachment_id ) {
						?>
                        <a href="#pix-product-img-<?php echo esc_attr( $attachment_id ); ?>">
							<?php
	                        echo wp_get_attachment_image( $attachment_id, 'pix-woocommerce-xs', false, array(
	                            'class' => 'rounded-lg pix-mb-20 pix-fit-cover d-inline-block',
	                            'style' => 'width:75px;height:75px;'
	                        ));
							?>
                        </a>
						<?php
                	}
					?>
                    </div>
                </div>
                <div class="col-12 col-lg-10 pl-lg-0">
					<?php
					if (!empty($product->get_image_id())){
						?>
						<div id="pix-product-img-featured-<?php echo esc_attr( $product->get_image_id() ); ?>">
							<?php
	                        echo wp_get_attachment_image( $product->get_image_id(), 'full', false, array(
		                        'class' => 'rounded-lg pix-mb-20 pix-fit-cover',
		                    ));
							?>
                        </div>
						<?php
					}
            		foreach ( $attachment_ids as $attachment_id ) {
                    ?>
                    <div id="pix-product-img-<?php echo esc_attr( $attachment_id ); ?>">
						<?php
	                    echo wp_get_attachment_image( $attachment_id, 'full', false, array(
	                        'class' => 'rounded-lg pix-mb-20 pix-fit-cover',
	                    ));
						?>
                    </div>
					<?php
            	}
				?>
                </div>
            </div>
			<?php
        }else{
			?>
            <div class="row">
                <div class="col-2 d-lg-block d-none">
                    <div class="sticky-top pix-sticky-top-adjust text-right">
                        <a href="#pix-product-img-<?php echo esc_attr( $attachment_id ); ?>">
							<?php
                        echo wp_get_attachment_image( $product->get_image_id(), 'pix-woocommerce-xs', false, array(
                            'class' => 'rounded-lg pix-mb-20 pix-fit-cover d-inline-block',
                            'style' => 'width:75px;height:75px;'
                        ));
						?>
                        </a>

                    </div>
                </div>
            	<div class="col-12 col-lg-10 pl-lg-0">
                    <div id="pix-product-img-<?php echo esc_attr( $attachment_id ); ?>">
						<?php
	                    echo wp_get_attachment_image( $product->get_image_id(), 'full', false, array(
	                        'class' => 'rounded-lg pix-mb-20 pix-fit-cover',
	                    ));
						?>
                    </div>
                </div>
            </div>
			<?php
        }
		?>
	</figure>
</div>
