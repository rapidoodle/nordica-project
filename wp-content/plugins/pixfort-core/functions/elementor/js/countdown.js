jQuery( window ).on( 'elementor/frontend/init', () => {

   const addHandler = ( $element ) => {
       pix_countdown($element);
   };

   elementorFrontend.hooks.addAction( 'frontend/element_ready/pix-countdown.default', addHandler );
} );
