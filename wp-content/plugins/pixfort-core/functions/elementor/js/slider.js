jQuery( window ).on( 'elementor/frontend/init', () => {

   const addHandler = ( $element ) => {
       setTimeout(function(){
           pix_sliders();
           pix_animation_display($element);
           piximations.init();
       }, 1000);
   };

   elementorFrontend.hooks.addAction( 'frontend/element_ready/pix-slider.default', addHandler );
} );
