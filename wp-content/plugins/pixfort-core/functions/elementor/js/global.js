jQuery( window ).on( 'elementor/frontend/init', () => {

   const addHandler = ( $element ) => {
       pixLoadImgs();
       pix_animation($element);
   };

   elementorFrontend.hooks.addAction( 'frontend/element_ready/widget', addHandler );
} );
