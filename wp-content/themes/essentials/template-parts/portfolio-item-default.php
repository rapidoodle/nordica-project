<?php
/**
* Template part for displaying single portfolio
*
* @link https://developer.wordpress.org/themes/basics/template-hierarchy/
*
* @package essentials
*/


$classes = '';
if(!get_post_meta( get_the_ID(), 'pix-hide-top-padding', true )){
    $classes .= 'pt-5';
}
?>
<div id="content" class="site-content <?php echo esc_attr( $classes );?>">
    <div class="container">
        <div class="row">

            <?php
            $portfolioText = get_post_meta( get_the_ID(), "portfolio-text", true);
            $data = false;
            if(get_post_meta( get_the_ID(), 'pix-highlights', true )){
                $data = get_post_meta( get_the_ID(), 'pix-highlights', true );
                $data = json_decode(wp_specialchars_decode($data));
                if(!is_array($data)||count($data)==0){
                    $data = false;
                }
            }
            if(!empty($portfolioText) || $data ){
            ?>
            <div class="col-12 col-md-8 offset-md-2">
                <div id="primary" class="content-area">
                    <main id="main" class="site-main">


                        <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>




                            <div class="entry-content pix-mb-20">
                                <?php
                                echo do_shortcode( $portfolioText );

                                if($data){

                                        ?>
                                        <div class="d-inline-block shadow-lg bg-white w-100 pix-mt-20" style="border-top-left-radius:5px;border-top-right-radius:5px;">
                                        <?php


                                        if(get_post_meta( get_the_ID(), 'pix-highlights', true )){
                                            ?>
                                            <div class="d-md-flex pix-pt-20 pix-pb-10" >
                                                <?php


                                            $delay = 400;

                                            foreach ($data as $key => $value) {
                                                ?>
                                                <div class="flex-md-fill w-100 text-center pix-py-10 animate-in" data-anim-type="fade-in-up" data-anim-delay="<?php echo esc_attr( $delay ); ?>">
                                                    <?php
                                                    if(!empty($value->title)) {
                                                        ?>
                                                        <div><h6 class="text-heading-default text-20 font-weight-bold"><?php echo esc_attr( $value->title ); ?></h6></div>
                                                        <?php
                                                    }
                                                    if(!empty($value->value)){
                                                        ?>
                                                        <div class="text-body-default"><?php echo esc_attr( $value->value ); ?></div>
                                                        <?php
                                                    }
                                                    ?>
                                                </div>
                                                <?php
                                                $delay += 150;
                                            }
                                            ?>
                                            </div>
                                            <?php
                                        }


                                        ?>
                                        </div>
                                        <div class="d-block position-relative w-100 pix-mb-60">
                                        <?php

                                            if( function_exists('pix_get_divider') ){
                                                $b_divider_opts = array(
                                                    'd_divider_select'		=> 'intro-box',
                                                    'd_layers'				=> '3',
                                                    'd_1_is_gradient'			=> '',
                                                    'd_1_color'					=> '#fff',
                                                    'd_2_is_gradient'			=> '',
                                                    'd_2_color'					=> 'rgba(255,255,255,0.6)',
                                                    'd_2_animation'				=> 'fade-in-up',
                                                    'd_2_delay'					=> '500',
                                                    'd_3_is_gradient'			=> '',
                                                    'd_3_color'					=> 'rgba(255,255,255,0.3)',
                                                    'd_3_color_2'				=> '',
                                                    'd_3_animation'				=> 'fade-in-up',
                                                    'd_3_delay'					=> '700',
                                                    'd_high_index'				=> '',
                                                    'd_flip_h'					=> '',
                                                    'extra_classes'					=> 'pix-svg-box-shadow',
                                                );
                                                echo pix_get_divider('intro-box', '#fff', 'top', false, '#fff', $b_divider_opts, 37);

                                            }
                                        ?>
                                        </div>
                                        <?php
                                }


                                if(!empty(pix_get_option('portfolio-post-info'))){
                                    ?>
                                    <div class="p-3 bg-gray-12 shadow-sm rounded-lg text-body-default font-weight-bold text-xs">
                                        <?php
                                        essentials_posted_on();
                                        essentials_posted_by();
                                        ?>
                                    </div>
                                    <?php
                                }

                                wp_link_pages( array(
                                    'before' => '<div class="page-links">' . esc_attr__( 'Pages:', 'essentials' ),
                                    'after'  => '</div>',
                                ) );
                                ?>
                            </div><!-- .entry-content -->

                            <footer class="entry-footer">
                                <?php essentials_entry_footer(); ?>
                            </footer><!-- .entry-footer -->
                        </article><!-- #post-<?php the_ID(); ?> -->



                    </main><!-- #main -->
                </div><!-- #primary -->
            </div>
            <div class="col-12 clearfix"></div>
            <?php } ?>
            <div class="col-12">
                <div class="sticky-top2" style="">
                    <?php
                    the_content();
                    ?>


                </div>
            </div>


        </div>
    </div>
</div>
