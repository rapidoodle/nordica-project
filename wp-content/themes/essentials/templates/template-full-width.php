<?php /* Template Name: Full width Template */

get_header();
$classes = '';
$styles = '';
if(get_post_type()=='post'){
    if(!empty(pix_get_option('blog-bg-color'))){
        if(pix_get_option('blog-bg-color')=='custom'){
            $styles = 'background:'.pix_get_option('custom-blog-bg-color').';';
        }else{
            $classes = 'bg-'.pix_get_option('blog-bg-color'). ' ';
        }
    }
}else{
    if(!empty(pix_get_option('pages-bg-color'))){
        if(pix_get_option('pages-bg-color')=='custom'){
            $styles = 'background:'.pix_get_option('custom-pages-bg-color').';';
        }else{
            $classes = 'bg-'.pix_get_option('pages-bg-color'). ' ';
        }
    }
}
get_template_part( 'template-parts/intro' );
if(!get_post_meta( get_the_ID(), 'pix-hide-top-padding', true )){
    $classes .= 'pt-5';
}
?>
<div id="content" class="site-content <?php echo esc_attr( $classes ); ?> bg-white2 pb-52" style="<?php echo esc_attr( $styles ); ?>" >
    <div class="container-full">
        <div class="row">
            <div class="col-12">
                <div id="primary" class="content-area">
                    <main id="main" class="site-main">
                        <?php
                        while ( have_posts() ) :
                            the_post();
                            get_template_part( 'template-parts/content', 'page' );
                            // If comments are open or we have at least one comment, load up the comment template.
                            if ( comments_open() || get_comments_number() ) :
                                comments_template();
                            endif;
                        endwhile; // End of the loop.
                        ?>
                    </main>
                </div>
            </div>
        </div>
    </div>
</div>
<?php
get_footer();
