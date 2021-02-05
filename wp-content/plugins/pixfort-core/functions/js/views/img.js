(function ( $ ) {
	'use strict';
	if(window.InlineShortcodeView){
	    // This name is defined automatically (InlineShortcodeView_you, for Frontend editor only
	    window.InlineShortcodeView_pix_img = window.InlineShortcodeView.extend({
	    	// Render called every time when some of attributes changed.
	    	render: function () {
	    		window.InlineShortcodeView_pix_img.__super__.render.call(this); // it is recommended to call parent method to avoid new versions problems.
				this.displayFix(this.$el);
	    		return this;
	    	},

	    	updated: function () {
	    		window.InlineShortcodeView_pix_img.__super__.updated.call(this);
				this.displayFix(this.$el);
				vc.frame_window.pix_section_stack();
	            return this;
	    	},
			displayFix: function(el){
				vc.frame_window.pix_cb_fn(function(){
					if(el.find('.pix-img-div').length==0){
				        el.css({
				            'display': 'inline-block'
				        });
				    }
				});
			},
	    	parentChanged: function () {
	            // console && console.log('InlineShortcodeView_pix_img: parentChanged called.');
	    		window.InlineShortcodeView_pix_img.__super__.parentChanged.call(this);
	    	}

	    });
	}

})( window.jQuery );
