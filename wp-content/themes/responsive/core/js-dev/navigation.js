/**
 * File navigation.js.
 *
 * Handles toggling the navigation menu for small screens and enables TAB key
 * navigation support for dropdown menus.
 */
( function() {
	var container, button, menu, links, i, len;

	container = document.getElementById( 'site-navigation' );
	if ( ! container ) {
		return;
	}

	button = container.getElementsByTagName( 'button' )[0];
	if ( 'undefined' === typeof button ) {
		return;
	}

	menu = container.getElementsByTagName( 'ul' )[0];

	// Hide menu toggle button if menu is empty and return early.
	if ( 'undefined' === typeof menu ) {
		button.style.display = 'none';
		return;
	}

	menu.setAttribute( 'aria-expanded', 'false' );
	if ( -1 === menu.className.indexOf( 'nav-menu' ) ) {
		menu.className += ' nav-menu';
	}

	button.onclick = function() {
		if ( -1 !== container.className.indexOf( 'toggled' ) ) {
			container.className = container.className.replace( ' toggled', '' );
			button.setAttribute( 'aria-expanded', 'false' );
			menu.setAttribute( 'aria-expanded', 'false' );
		} else {
			container.className += ' toggled';
			button.setAttribute( 'aria-expanded', 'true' );
			menu.setAttribute( 'aria-expanded', 'true' );
		}

		icon = button.getElementsByTagName( 'i' )[0]
		if ( 'true' === button.getAttribute( "aria-expanded" )) {
			icon.setAttribute( 'class', 'icon-bars' );
			icon.setAttribute( 'class', 'icon-times' );
			if (document.body.classList.contains( 'mobile-menu-style-sidebar' )) {
				document.getElementById( "sidebar-menu-overlay" ).style.display = "block";
			}
		} else {
			icon.setAttribute( 'class', 'icon-bars' );
			if (document.body.classList.contains( 'mobile-menu-style-sidebar' )) {
				document.getElementById( "sidebar-menu-overlay" ).style.display = "none";
			}
		}
	};

	// Get all the link elements within the menu.
	links = menu.getElementsByTagName( 'a' );

	// Each time a menu link is focused or blurred, toggle focus.
	for ( i = 0, len = links.length; i < len; i++ ) {
		links[i].addEventListener( 'focus', toggleFocus, true );
		links[i].addEventListener( 'blur', toggleFocus, true );
	}

	/**
	 * Sets or removes .focus class on an element.
	 */
	function toggleFocus() {
		var self = this;

		// Move up through the ancestors of the current link until we hit .nav-menu.
		while ( -1 === self.className.indexOf( 'nav-menu' ) ) {

			// On li elements toggle the class .focus.
			if ( 'li' === self.tagName.toLowerCase() ) {
				if ( -1 !== self.className.indexOf( 'focus' ) ) {
					self.className = self.className.replace( ' focus', '' );
				} else {
					self.className += ' focus';
				}
			}

			self = self.parentElement;
		}
	}

	/**
	 * Toggles `focus` class to allow submenu access on tablets.
	 */
	( function( container ) {
		var touchStartFn, i,
			parentLink = container.querySelectorAll( '.menu-item-has-children > a, .page_item_has_children > a' );

		if ( 'ontouchstart' in window ) {
			touchStartFn = function( e ) {
				var menuItem = this.parentNode, i;

				if ( ! menuItem.classList.contains( 'focus' ) ) {
					e.preventDefault();
					for ( i = 0; i < menuItem.parentNode.children.length; ++i ) {
						if ( menuItem === menuItem.parentNode.children[i] ) {
							continue;
						}
						menuItem.parentNode.children[i].classList.remove( 'focus' );
					}
					menuItem.classList.add( 'focus' );
				} else {
					menuItem.classList.remove( 'focus' );
				}
			};

			for ( i = 0; i < parentLink.length; ++i ) {
				parentLink[i].addEventListener( 'touchstart', touchStartFn, false );
			}
		}
	}( container ) );

    search_link = document.getElementById( 'res-search-link' );

    if( search_link  ) {
        search_link.onclick = function() {
            search_form = container.getElementsByTagName( 'form' )[0];
            if( search_form.style.display == 'block' ) {
                search_form.style.display = 'none';
            } else {
                search_form.style.display = 'block';
            }
        }
    }

	search_style = document.getElementById( 'full-screen-res-search-link' );

    if( search_style  ) {
		search_style_form = document.getElementById( 'full-screen-search-wrapper' );
		search_style_form.style.display = 'none';
        search_style.onclick = function() {
			search_style_form.style.display = 'block';
            search_style_form.style.position = 'fixed';
			search_form = container.getElementsByTagName( 'form' )[0];
            search_form.style.display = 'block';
        }
    }

	search_close = document.getElementById( 'search-close' );
	if( search_close  ) {
        search_close.onclick = function() {
            search_style_form = document.getElementById( 'full-screen-search-wrapper' );
                search_style_form.style.display = 'none';
        }
    }

} )();
