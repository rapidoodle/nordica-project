<?php
/**
 * The template for displaying search results pages
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#search-result
 *
 * @package essentials
 */

get_header();

$classes = '';
$styles = '';
if(!empty(pix_get_option('blog-bg-color'))){
	if(!empty(pix_get_option('blog-bg-color'))){
 	  if(pix_get_option('blog-bg-color')=='custom'){
 		  $styles = 'background:'.pix_get_option('custom-blog-bg-color').';';
 	  }else{
 		  $classes = 'bg-'.pix_get_option('blog-bg-color') . ' ';
 	  }
    }
}
if(pix_get_option('pix-header')){
    $single_header = pix_get_option('pix-header');
	if(!empty($single_header)){
		$post = get_post( $single_header );
		if($post){
			if(!empty(get_post_field('pix-header-style', $post))){
		        $header_style = get_post_field('pix-header-style', $post);
				if(!empty($header_style)){
					if(
						$header_style=='boxed'
						|| $header_style=='transparent'
						|| $header_style=='transparent-full'
						|| $header_style=='boxed-full'
					){
						get_template_part( 'template-parts/intro' );
					}
				}
		    }
		}
	}
}
?>

<div id="content" class="site-content <?php echo esc_html( $classes );?> pix-pt-40" style="<?php echo esc_html( $styles ); ?>" >
	<div class="container">
		<div class="row">

			<div class="col-12 col-md-8">
				<section id="primary" class="content-area">
					<main id="main" class="site-main">

					<?php if ( have_posts() ) : ?>

						<header class="page-header pix-mb-20">
							<h4 class="page-title text-heading-default font-weight-bold">
								<?php
								/* translators: %s: search query. */
								printf( esc_attr__( 'Search Results for: %s', 'essentials' ), '<span>' . get_search_query() . '</span>' );
								?>
							</h4>
						</header><!-- .page-header -->

						<?php
						/* Start the Loop */
						while ( have_posts() ) :
							the_post();

							/**
							 * Run the loop for the search to output the results.
							 * If you want to overload this in a child theme then include a file
							 * called content-search.php and that will be used instead.
							 */
							get_template_part( 'template-parts/content' );

						endwhile;

						echo '<div class="pix-pagination d-sm-flex justify-content-center align-items-center">';
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
					   echo '</div>';

					   echo '<div class="pix-mb-40">';
					    echo '</div>';

					else :

						get_template_part( 'template-parts/content', 'none' );

					endif;
					?>

					</main><!-- #main -->
				</section><!-- #primary -->
			</div>
			<?php get_sidebar(); ?>

		</div>
	</div>
</div>
<?php

get_footer();
