jQuery(document).ready(function($) {
    "use strict";
	// Add header btn

    setTimeout(function() {

        var pix_selected_cat = false;

    	var vc_btn = $('.vc_icon-btn.vc_templates-button');
    	var pix_btn = '<li class="pix_templates-li"><a href="#" class="vc_icon-btn pix_templates-button" id="pix_templates-editor-button" title="pixfort Templates"><img class="pixfort-btn-logo" src="'+plugin_object.PIX_CORE_PLUGIN_URI+'functions/images/pixfort-logo-mini.svg" /> pixfort Templates</a></li>';
    	vc_btn.closest('li').after(pix_btn);

    	$('#pix_templates-editor-button').on('click', function(event){
    		event.preventDefault();
    		$('#vc_templates-editor-button').click();
    		setTimeout(function(){
                if(pix_selected_cat) pix_selected_cat.click();
            }, 10);
    		$('button[data-vc-ui-element-target="[data-tab=default_templates]"]').click();
    		$('button[data-vc-ui-element-target="[data-tab=default_templates]"]').focus();
    	});

    	// remove shared templates
    	$('button[data-vc-ui-element-target="[data-tab=shared_templates]"]').parent().hide();
    	var btn_html = '<img class="pixfort-btn-logo" src="'+plugin_object.PIX_CORE_PLUGIN_URI+'functions/images/pixfort-logo-mini.svg" /> PixFort Templates';
    	$('button[data-vc-ui-element-target="[data-tab=default_templates]"]').addClass('pixfort-btn');
    	$('button[data-vc-ui-element-target="[data-tab=default_templates]"]').html(btn_html);
    	var elements_btn_html = '<img class="pixfort-btn-elements" src="'+plugin_object.PIX_CORE_PLUGIN_URI+'functions/images/elements-icon.svg" /> pixfort Elements';
    	$('.vc_icon-btn.vc_element-button').html(elements_btn_html);

    	var pix_cats = {
    		'all':			'All sections',
    	    'intros':       'Intros',
    	    'features':     'Features',
    	    'content':      'Content',
    	    'headings':     'Headings',
            'tabs':         'Tabs',
            'sliders':      'Sliders',
    	    'blog':         'Blog',
    	    'portfolio':    'Portfolio',
    	    'shop':         'Shop',
            'pricing':      'Pricing',
            'cta':          'Call to Action',
            'forms':        'Forms',
            'clients':      'Clients',
            'accordion':    'Accordion',
            'video':        'Video',
            'testimonials': 'Testimonials',
            'reviews':      'Reviews',
            'links':        'Links & Social',
            'faq':          'FAQ',
            'maps':         'Maps',
            'contact':      'Contact information',
            'countdown':    'Countdown',
            'numbers':      'Numbers',
            'custom_404':   '404 Pages',
            'stories':      'Stories',
            'team':         'Team',
            'image_carousel': 'Image carousel',
            'charts':       'Charts',
            'slides':       'Slides',
            'miscellaneous': 'Miscellaneous',
            'pages':        'Pages',
            'footers':      'Footers',
    	};

    	var pix_imgs = {
    		'firas-template':		'functions/vc_templates/custom/thumbnails/1.png',
    		'blog-slider-1':		'functions/vc_templates/custom/thumbnails/2.png',
    		'heading-1':		'functions/vc_templates/custom/thumbnails/2.png',
    		'heading-2':		'functions/vc_templates/custom/thumbnails/2.png',
    		'heading-3':		'functions/vc_templates/custom/thumbnails/2.png'
    	};


    	// $('.wpb-layout-element-button .vc_shortcode-link').each(function(i, el){
    	// 		var content = $(el).html();
    	// 		content.find('i').remove();
    	// 		$(el).append('<div>'+content+'</div>');
    	//
    	// });

    	$('.vc_shortcode-link').each(function(i, elem){
    		var img = $(elem).find('i');
    		$(elem).find('i').remove();
    		var content = '<div class="pixfort_element_text">'+$(elem).html()+'</div>';
    		$(elem).html('');
    		var img_div = $('<div class="pixfort_elemet_img_div"></div>');
    		img_div.append(img);
    		$(elem).append(img_div);
    		$(elem).append(content);

    	});

    	$('.pixfort_element_nav').each(function(i, elem){
    		$(this).find('i').each(function(i, el){
    			var style = $(el).currentStyle || window.getComputedStyle(el, false);
    			var bi = style.backgroundImage.slice(4, -1).replace(/"/g, "");
    			// var url = $(this).find('i').css('background-image');
    			// console.log(bi);
    			var img = '<img class="pixfort_element_img" src="'+bi+'" >';
    			$(el).replaceWith(img);
    		});
    		var img = $(elem).find('img');
    		$(elem).find('img').remove();
    		var content = '<div>'+$(elem).html()+'</div>';
    		$(elem).html('');
    		$(elem).append(img);
    		$(elem).append(content);

    	});




		// $('body').on( 'click', 'span[data-vc-ui-element="button-save"], .vc_control-btn-clone', function(event){
		// 	setTimeout(function() {
		// 		vc.frame_window.pixInitJs();
		// 	}, 1000);
		// });

	    // Dev
	    // $('#vc_templates-editor-button').click();
	    // $('button[data-vc-ui-element-target="[data-tab=default_templates]"]').click();

		var cats_html = '';
		jQuery.each(pix_cats, function(i, val) {
			var extra_class = '';
			if(i=='all'){extra_class='selected';}
			cats_html += '<li>';
				cats_html += '<a href="#" data-cat="'+i+'" class="pix-cat-item '+extra_class+'">'+val+'</a>';
			cats_html += '</li>';
		});


		// console.log(plugin_object.PIX_CORE_PLUGIN_URI);
		var sections = '';
		var sections_arr = JSON.parse(JSON.stringify(pix_cats));
        delete sections_arr['all'];
        Object.keys(sections_arr).forEach(function(key) {
            sections_arr[key] = '';
            // console.table('Key : ' + key + ', Value : ' + sections_arr[key])
        });
		var sections_count = 0;

		sections_count = $('.custom_template_for_vc_custom_template').length;
        var addedSections = [];
		$('.custom_template_for_vc_custom_template').each(function(i, obj) {
		    var id = $(obj).data('template_id');
		    var hash = $(obj).data('template_id_hash');
		    var name = $(obj).data('template_name');
		    var classes = $(obj).attr('class');
		    var title = $(obj).find('.vc_ui-list-bar-item-trigger').text();
				sections += '<div class="section-card '+classes+'" data-template_id="'+id+'" data-template_id_hash="'+hash+'" data-category="default_templates" data-template_unique_id="'+id+'" data-template_name="'+name+'" data-template_type="default_templates" data-vc-content=".vc_ui-template-content" style="display: block;">';
				sections += '<div class="section-card-box">';
					if(name in pix_imgs){

                            sections += '<img class="pix-section-img" src="'+plugin_object.PIX_CORE_PLUGIN_URI+pix_imgs[name]+'"/>';
					}else{
                        if(name in plugin_object.TEMPLATES_ARR){
                            // console.log(name);
                            sections += '<img class="pix-section-img" src="'+plugin_object.TEMPLATES_ARR[name]+'"/>';
                        }
                    }
					sections += '<div class="section-card-inner">';
						sections += '<span class="pix-section-title">'+title+'</span>';
							sections += '<a href="#" class="vc_ui-list-bar-item-trigger pix-section-add-btn" title="Add template" data-template-handler="" data-vc-ui-element="template-title">Add</a>';
					sections += '</div>';
				sections += '</div>';
				sections += '</div>';

                Object.keys(sections_arr).forEach(function(key) {
                    if( $(obj).hasClass(key) ){
                        if(!addedSections.includes(id)){
                            sections_arr[key] += sections;
                            addedSections.push(id);
                        }
                        return false;
                    }
                });

                sections = '';
		});
        sections = '<ul class="pix_sections_list">';
        Object.keys(sections_arr).forEach(function(key) {
            sections += sections_arr[key];
        });
		sections += '</ul>';



	            var templates_panel = $('.vc_edit-form-tab[data-tab="default_templates"]');
	            templates_panel.addClass('pix-form-tab');
	            // console.log(tt);
	            var pix_base = '';
	            // pix_base += '<div class="container-fluid">';
	                // pix_base += '<div class="row">';
	                    pix_base += '<div class="pix-templates-cats-div" >';
	                        pix_base += '<div class="pix-templates-cats-inner" >';
	                        pix_base += '<ul>';

	                        	pix_base += cats_html;
	                        pix_base += '</ul>';
	                        pix_base += '</div>';
	                    pix_base += '</div>';
	                    pix_base += '<div class="pix-templates-items-div">';
	                        pix_base += '<div class="pix-templates-items-inner">';
	                        	pix_base += '<div class="title_div">';
	                        		pix_base += '<span class="inner_title">All Sections</span>';
	                        		pix_base += '<span class="inner_title_count">'+sections_count+' sections</span>';
	                        	pix_base += '</div>';
	                        pix_base += sections;
	                        // pix_base += phtml;
	                        // pix_base += phtml2;
	                        pix_base += '</div>';
	                    pix_base += '</div>';
	                // pix_base += '</div>';
	            // pix_base += '</div>';
	            templates_panel.html(pix_base);




			$('body').on( 'click', '.pix-cat-item', function(event){
				event.preventDefault();
				var count = 0;
				var cat = $(this).data('cat');
				$('.pix-templates-cats-div ul li a').removeClass('selected');
				$(this).addClass('selected');
                pix_selected_cat = $(this);
				$('.inner_title').text(pix_cats[cat]);
				$('.section-card:not(.'+cat+')').hide();
				$('.section-card.'+cat+'').show();
				count = $('.section-card.'+cat+'').length;
				if(count==1){
					$('.inner_title_count').text(count+' section');
				}else{
					$('.inner_title_count').text(count+' sections');
				}
			});
            $('#vc_templates_name_filter').on('input', function() {
                $('.inner_title').html("Search results");
                var res_count = $('.section-card').filter(function() {
                    return $(this).css('display') !== 'none';
                }).length;
                $('.inner_title_count').html(res_count);
                if( $(this).val() === '' || !$(this).val()){
                    setTimeout(function(){
                        $('.vc_ui-tabs-line-trigger.pixfort-btn').click();
                        $('.pix-cat-item[data-cat="all"]').click();
                    }, 100);

                }
            });
            if(vc.frame_window){
                if(typeof vc.frame_window.pix_cb_fn !== "undefined"){
                    vc.frame_window.pix_cb_fn(function(){
                        setTimeout(function(){
                            $('.vc_ui-help-block a').attr('href', 'https://essentials.pixfort.com/knowledge-base');
                        }, 100);
                    });
                }
            }


    }, 3000);

	setTimeout(function() {
        if(window.vc){
            if(window.vc.frame_window) window.vc.frame_window.pixLoadImgs();
            if(vc.frame_window) vc.frame_window.pix_animation(false, true);
            window.vc.events.on( 'shortcodeView:updated, shortcodeView:ready', function ( model ) {
                // console.log("shortcodeView:updated");
                if(vc.frame_window){
                    var el = model.view.$el;
                    vc.frame_window.pix_animation(el, true);
                    vc.frame_window.pixInitJs(el);
                    vc.frame_window.pixLoadImgs();
                }
            } );
            if(vc){
                init_update();
            }
        }
	}, 5000);

});

function init_update(){
	setTimeout(function() {
		if(vc.loaded){
			vc.frame_window.pixInitJs();
			return false;
		}else{
			init_update();
		}
	}, 200);
}
