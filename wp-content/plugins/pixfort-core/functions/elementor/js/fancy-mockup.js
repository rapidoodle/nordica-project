jQuery( window ).on( 'elementor/frontend/init', () => {

   const addHandler = ( $element ) => {
       init_fancy_mockup($element);
   };

   elementorFrontend.hooks.addAction( 'frontend/element_ready/pix-fancy-mockup.default', addHandler );
} );
