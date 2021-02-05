<?php /* Template Name: Blog Left sidebar */

    get_header();
    $classes = '';
    $styles = '';

    if(!empty(pix_get_option('blog-bg-color'))){
        if(pix_get_option('blog-bg-color')=='custom'){
            $styles = 'style="background:'.pix_get_option('custom-blog-bg-color').';"';
        }else{
            $classes = 'bg-'.pix_get_option('blog-bg-color'). ' ';
        }
    }
    $hide_top_area = false;
    $pagePostTypes = array('page');
    $pagePostTypes = apply_filters( 'pixfort_page_options_post_types', $pagePostTypes );
    $post_type = get_post_type();
    if(get_post_meta( get_the_ID(), 'pix-hide-top-area', true )){
        if(get_post_meta( get_the_ID(), 'pix-hide-top-area', true )==='1'){
            $hide_top_area = true;
        }
        if( in_array($posttype, $pagePostTypes) ){
            if(empty(pix_get_option('pages-with-intro'))||!pix_get_option('pages-with-intro')){
                $hide_top_area = true;
            }
        }
    }
    if(!$hide_top_area){
        get_template_part( 'template-parts/intro' );
    }else{
        ?>
		<div class="pix-main-intro-placeholder"></div>
		<?php
    }
    if(!get_post_meta( get_the_ID(), 'pix-hide-top-padding', true )){
        $classes .= 'pt-5';
    }
?>
<div id="content" class="site-content template-blog-left-sidebar <?php echo esc_html( $classes ); ?> bg-white2 pb-52" <?php echo esc_html( $styles ); ?> >
    <div class="container">
        <div class="row">
            <?php get_sidebar("test"); ?>
            <div class="col-12 col-md-8 pix-mb-20">
                <div id="primary" class="content-area">
                    <main id="main" class="site-main">
                        <?php
                        essentials_get_blog_page();
                        the_content();
                        ?>
                    </main>
                </div>
            </div>
        </div>
    </div>
</div>
<?php
get_footer();
