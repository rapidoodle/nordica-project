<?php
/**
 * The template for displaying archive pages
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package essentials
 */

get_header();


$classes = '';
$styles = '';
if(!empty(pix_get_option('pages-bg-color'))){
	if(!empty(pix_get_option('blog-bg-color'))){
 	  if(pix_get_option('blog-bg-color')=='custom'){
 		  $styles = 'background:'.pix_get_option('custom-blog-bg-color').';';
 	  }else{
 		  $classes = 'bg-'.pix_get_option('blog-bg-color'). ' ';
 	  }
    }
}
// if(pix_get_option('pix-header')){
//     $single_header = pix_get_option('pix-header');
// 	if(!empty($single_header)){
// 		$post = get_post( $single_header );
// 		if(!empty(get_post_field('pix-header-style', $post))){
// 	        $header_style = get_post_field('pix-header-style', $post);
// 			if(!empty($header_style)){
// 				if($header_style=='boxed' || $header_style=='transparent'){
// 					get_template_part( 'template-parts/intro' );
// 				}
// 			}
// 	    }
// 	}
// }
get_template_part( 'template-parts/intro' );
?>

<div id="content" class="site-content <?php echo esc_html( $classes );?> pix-pt-20 " style="<?php echo esc_html( $styles ); ?>" >
	<div class="container">
		<div class="row">

			<div class="col-12 col-md-8 pix-mb-20">
				<div id="primary" class="content-area">
					<main id="main" class="site-main">

					<?php if ( have_posts() ) : ?>

						<header class="page-header pix-mb-20">
							<?php
							the_archive_title( '<h5 class="page-title text-heading-default font-weight-bold">', '</h5>' );
							the_archive_description( '<div class="archive-description">', '</div>' );
							?>
						</header><!-- .page-header -->

						<?php
						/* Start the Loop */
						while ( have_posts() ) :
							the_post();
							/*
							 * Include the Post-Type-specific template for the content.
							 * If you want to override this in a child theme, then include a file
							 * called content-___.php (where ___ is the Post Type name) and that will be used instead.
							 */
							get_template_part( 'template-parts/content' );
						endwhile;
						?>
						<div class="pix-pagination d-sm-flex justify-content-center align-items-center">
							<?php
					        echo paginate_links( array(
					           'base'         => str_replace( 999999999, '%#%', esc_url( get_pagenum_link( 999999999 ) ) ),
					           'current'      => max( 1, get_query_var( 'paged' ) ),
					           'format'       => '?paged=%#%',
					           'show_all'     => false,
					           'type'         => 'plain',
					           'end_size'     => 2,
					           'mid_size'     => 1,
					           'prev_next'    => true,
					           'prev_text'    => '<span class="d-sm-flex justify-content-center align-items-center"><i class="pixicon-angle-left align-self-center"></i></span>',
					           'next_text'    => '<span class="d-sm-flex justify-content-center align-items-center"><i class="pixicon-angle-right align-self-center"></i></span>',
					           'add_args'     => false,
					           'add_fragment' => '',
					       ) );
						   ?>
					   </div>
					   <?php
					else :
						get_template_part( 'template-parts/content', 'none' );
					endif;
					?>
					</main><!-- #main -->
				</div><!-- #primary -->
			</div>
			<?php get_sidebar(); ?>
		</div>
	</div>
</div>
<?php

get_footer();
