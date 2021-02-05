<?php
/**
 * The main template file
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * E.g., it puts together the home page when no home.php file exists.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package essentials
 */

get_header();

$classes = 'bg-white';
$styles = '';
if(!empty(pix_get_option('pages-bg-color'))){
	if(!empty(pix_get_option('blog-bg-color'))){
 	  if(pix_get_option('blog-bg-color')=='custom'){
 		  $styles = 'background:'.pix_get_option('custom-blog-bg-color').';';
		  $classes = '';
 	  }else{
 		  $classes = 'bg-'.pix_get_option('blog-bg-color'). ' ';
 	  }
    }
}
get_template_part( 'template-parts/intro' );
if(!get_post_meta( get_the_ID(), 'pix-hide-top-padding', true )){
		$classes .= 'pt-5';
}
if(!function_exists('essentials_core_plugin')){
	$classes .= ' bg-gray-1 pix-pt-40';
}
?>
<div id="content" class="site-content <?php echo esc_attr( $classes ); ?>" style="<?php echo esc_attr( $styles ); ?>" >
	<div class="container-fluid">
		<div class="row">
			<div class="col-12 col-md-8">
				<div id="primary" class="content-area">
					<main id="main" class="site-main">

					<?php
					if ( have_posts() ) :

						if ( is_home() && ! is_front_page() ) :
							?>
							<header>
								<h1 class="page-title screen-reader-text"><?php single_post_title(); ?></h1>
							</header>
							<?php
						endif;

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
