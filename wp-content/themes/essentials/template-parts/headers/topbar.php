<?php

$topbar_val = $topbar_data->val;
$opts = array();
if(!empty($topbar_data->opts)){
    foreach ($topbar_data->opts as $i => $v) {
        $opts[$v->name] = $v->val;
    }
}

extract(shortcode_atts(array(
    'background' 		=> 'gray-1',
    'style' 		=> '',
    'line_color' 		=> 'gray-1',
    'line_custom_color' 		=> '',
    'bold' 		=> '',
    'color' 		=> 'body-default',
    'custom_color' 		=> '',
    'custom_background' 		=> '',
), $opts));

$pix_topbar_background = $background ;
$cont_class = 'container';
if(strcmp($header_style, "default-full")==0 || strcmp($header_style, "boxed-full")==0 || strcmp($header_style, "transparent-full")==0){
    $cont_class = 'container-fluid';
}
$opts['is_secondary_font'] = $is_secondary_font;
$is_topbar_empty = true;

$custom_topbar_style = '';
if(!empty($background&&$background=='custom')){
    if(!empty($custom_background)){
        $custom_topbar_style .= 'background:'.$custom_background.';';
    }
}
$extra_classes = '';
if(!empty($color)&&$color=='custom'){
    $extra_classes = 'text-pix-topbar-header-custom';
    $customStyle = '.text-pix-topbar-header-custom .pix-header-text { color: '.$custom_color.' !important; }';
    wp_register_style( 'pix-custom-header-handle', false );
    wp_enqueue_style( 'pix-custom-header-handle' );
    wp_add_inline_style( 'pix-custom-header-handle', $customStyle );
}

 ?>
 <div class="pix-topbar position-relative pix-header-desktop pix-topbar-normal <?php echo esc_attr($extra_classes);?> bg-<?php echo esc_attr( $background ) . ' '; ?> text-white sticky-top2 p-sticky" style="z-index:999;<?php echo esc_attr($custom_topbar_style); ?>" >
     <div class="<?php echo esc_attr( $cont_class ); ?>">
         <div class="row d-flex align-items-center align-items-stretch">
             <?php
                 $col_opts = $opts;
                 if(!empty($topbar_val->topbar_1->opts)){
                     foreach ($topbar_val->topbar_1->opts as $i => $v) {
                         $col_opts[$v->name] = $v->val;
                     }
                 }
                 $col_opts['bold'] = $bold;
                 extract(shortcode_atts(array(
                     'align' 		=> 'text-left'
                 ), $col_opts));
             $display_col = sizeof($topbar_val->topbar_1->val)>0? 'pix-header-min-height':'';
              ?>
             <div class="col-12 col-lg-6 column <?php echo esc_attr( $display_col ); ?> <?php echo esc_attr( $align ); ?> py-md-0 d-flex align-items-center">
 				<?php
     				foreach ($topbar_val->topbar_1->val as $key => $value) {
                        pix_get_header_elem('topbar', $value, $opts);
                        $is_topbar_empty = false;
     				}
 				?>
             </div>

             <?php
                 $col_opts = $opts;

                 if(!empty($topbar_val->topbar_2->opts)){
                     foreach ($topbar_val->topbar_2->opts as $i => $v) {
                         $col_opts[$v->name] = $v->val;
                     }
                 }
                 $col_opts['bold'] = $bold;
                 extract(shortcode_atts(array(
                     'align' 		=> 'text-right'
                 ), $col_opts));
             ?>
             <?php
             $display_col = sizeof($topbar_val->topbar_2->val)>0? 'pix-header-min-height':'';
              ?>
             <div class="col-12 col-lg-6 column <?php echo esc_attr( $align ); ?> <?php echo esc_attr( $display_col ); ?> py-md-0 d-flex align-items-center justify-content-end">
 				<?php
                    foreach ($topbar_val->topbar_2->val as $key => $value) {
                        pix_get_header_elem('topbar', $value, $opts);
                        $is_topbar_empty = false;
     				}
 				?>
             </div>

         </div>
         <?php if($style=="border-bottom"): ?>
             <div class="bg-<?php echo esc_attr( $line_color ); ?>" style="width:100%;height:1px;"></div>
         <?php endif; ?>
     </div>
     <?php if($style=="border-bottom-wide"): ?>
         <div class="bg-<?php echo esc_attr( $line_color ); ?>" style="width:100%;height:1px;"></div>
     <?php endif; ?>
 </div>
