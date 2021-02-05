(function ( $ ) {

    $.fn.stack = function() {
        // Disable in the builder
        if($('body').hasClass('vc_editor')||window.vc_iframe) return false;
        if (typeof elementorFrontend !== 'undefined' && elementorFrontend !== null) {
            if(elementorFrontend.config.environmentMode.edit){
                $('body').removeClass('pix-sections-stack');
                return false;
            }
        }
        this.css( "position", "fixed" );
        if($('.sticky-overlay').length==0){
            $('#content').append('<div class="sticky-overlay"></div>');
        }
        if($('#pix-vertical-nav').length==0){
            $('body').append('<nav id="pix-vertical-nav"><ul></ul></nav>');
        }

        // Init vars
        var elemCount = this.length,
        elems = [],
        currentElem = 0,
        prevHeight = 0,
        ptop = 0,
        ph = $( window ).height(),
        sections_h = 0,
        sections = [],
        active = true,
        start = 0,
        current = 0,
        admin_bar = 0,
        footer_height = 0,
        footer = false;
        if($('#wpadminbar').length>0){
            admin_bar = $('#wpadminbar').outerHeight();
        }
        this.each(function(i) {
            sections_h += $( this ).outerHeight();
            // console.log($( this ).outerHeight());
            $( this ).css( 'z-index' , elemCount * 10);
            var section_name = 'Section '+i;
            if($(this).attr('data-section-name') && $(this).attr('data-section-name')!=''){
                section_name = $(this).attr('data-section-name');
            }
            elems.push( $( this ) );
            var nav = '';

            var bottom = false;
            if($(this).hasClass('site-footer2')){
                // console.log("Footer");
                // console.log(elemCount);
                bottom = true;
                footer_height = $( this ).outerHeight();
                $(this).css({
                    // 'top': 'auto',
                    'bottom': '0',
                });
            }else{
                $( this ).css( 'top' , ptop + 'px');
                nav = '<li><a class="pix-stack-links" id="pix-stack-link-'+i+'" data-top="'+start+'" href="#pix-stack-section-'+i+'" data-number="'+i+'"><span class="pix-dot"></span><span class="pix-label">'+section_name+'</span></a></li>';
            }
            sections.push({
                el: $(this),
                height: $( this ).outerHeight(),
                index: elemCount * 10,
                num: elemCount,
                active: active,
                start: start,
                limit: sections_h,
                bottom: bottom,
                link: 'pix-stack-link-'+i
            });
            elemCount--;
            $(this).attr('data-scroll', start);
            $(this).addClass('pix-slides-section');
            start = sections_h;
            active = false;
            $(this).attr('id', 'pix-stack-section-'+i);
            $('#pix-vertical-nav ul').append(nav);
        });
        $( '#page' ).css( 'height' , sections_h - admin_bar);
        if( sections[sections.length-1].bottom ){
            footer = sections[sections.length-1];
        }
        var s = sections[current];
        $('#'+s.link).addClass('is-selected');

        s.el.addClass('is-sticky-active');
        document.addEventListener('scroll', (e) => {
            let pos = $( window ).scrollTop();
            if(pos>=s.start&&pos<=s.limit){
            }else{
                s = get_current(pos, s);
                setTimeout(fix_sections(pos),0);
                window.pix_animation_display(s.el);
                piximations.init();
            }
            $('.site-content').css('z-index', s.index);
            $('.sticky-overlay').css('z-index', s.index-1);
            var op = (s.height + s.el.position().top) /  ph;
            if(s.num==2){

                op = ( $( window ).scrollTop() + s.height + s.el.position().top - sections_h - admin_bar) /  footer_height;
                // console.log({footer});
                if(footer){
                    window.pix_animation(footer.el, true);
                    piximations.play(footer.el);
                    // window.pix_animation($('.site-footer2'), true);
                }
            }
            if (op<0){op = 0};
            if (op>1){op = 1};
            op = op*0.8;
            if(!s.el.bottom){
                s.el.css('top', - $( window ).scrollTop() + s.start );
            }
            $('.sticky-overlay').css('opacity', op);
        }, {
            passive: true
        });
        // $( window ).scroll(function() {
        //     let pos = $( window ).scrollTop();
        //     if(pos>=s.start&&pos<=s.limit){
        //     }else{
        //         s = get_current(pos, s);
        //         setTimeout(fix_sections(pos),0);
        //         window.pix_animation_display(s.el);
        //         piximations.init();
        //     }
        //     $('.site-content').css('z-index', s.index);
        //     $('.sticky-overlay').css('z-index', s.index-1);
        //     var op = (s.height + s.el.position().top) /  ph;
        //     if(s.num==2){
        //
        //         op = ( $( window ).scrollTop() + s.height + s.el.position().top - sections_h - admin_bar) /  footer_height;
        //         // console.log({footer});
        //         if(footer){
        //             window.pix_animation(footer.el, true);
        //             piximations.play(footer.el);
        //             // window.pix_animation($('.site-footer2'), true);
        //         }
        //     }
        //     if (op<0){op = 0};
        //     if (op>1){op = 1};
        //     op = op*0.8;
        //     if(!s.el.bottom){
        //         s.el.css('top', - $( window ).scrollTop() + s.start );
        //     }
        //     $('.sticky-overlay').css('opacity', op);
        // });
        setTimeout(function(){
            pix_update_heights();
        }, 1000);
        setTimeout(function(){
            pix_update_heights();
        }, 2000);
        window.addEventListener("resize", pix_update_heights);
        function pix_update_heights(){
            var up_section = 0;
            var up_start = 0;
            $.each(sections, function(i) {
                up_section += sections[i].el.outerHeight();
                sections[i].height = sections[i].el.outerHeight();
                sections[i].start = up_start;
                sections[i].limit = up_section;
                up_start = up_section;
                // console.log(sections[i].el.outerHeight());
            });
            $( '#page' ).css( 'height' , up_section - admin_bar );
        }

        function get_current(pos, current){
            var res = current;
            $.each(sections, function(i) {
                if(sections[i].start<=pos&&sections[i].limit>=pos){
                    current.active = false;
                    current.el.removeClass('is-sticky-active');
                    $('.pix-stack-links').removeClass('is-selected');
                    sections[i].active = true;
                    sections[i].el.addClass('is-sticky-active');
                    $('#'+sections[i].link).addClass('is-selected');
                    res = sections[i];
                }
            });
            return res;
        }
        function fix_sections(pos){
            $.each(sections, function(i) {
                if(!sections[i].active && !sections[i].bottom){
                    if(sections[i].limit<=pos){
                        sections[i].el.css('top', -sections[i].height);
                    }else{
                        sections[i].el.css('top', '0');
                    }
                }
            });
        }











        var contentSections = $('.pix-section'),
        navigationItems = $('#pix-vertical-nav a');

        updateNavigation();
        $(window).on('scroll', function(){
            updateNavigation();
        });

        //smooth scroll to the section
        $('#pix-vertical-nav a').on('click', function(event){
            event.preventDefault();
            // console.log($(this.hash));

            // console.log({start});
            // console.log({sections});
            let start = $(this.hash).data('scroll');
            if($(this).data('number')){
                start = sections[$(this).data('number')].start;
            }
            smoothScroll(start);

            // if($(this).data('top')){
            //     smoothScroll($(this.hash));
            // }else{
            //     smoothScroll($(this.hash));
            // }
            return false;
        });
        //smooth scroll to second section
        $('.pix-scroll-down').on('click', function(event){
            event.preventDefault();
            smoothScroll($(this.hash));
        });

        // //open-close navigation on touch devices
        // $('.touch .pix-nav-trigger').on('click', function(){
        // 	$('.touch #pix-vertical-nav').toggleClass('open');
        //
        // });
        // //close navigation on touch devices when selectin an elemnt from the list
        // $('.touch #pix-vertical-nav a').on('click', function(){
        // 	$('.touch #pix-vertical-nav').removeClass('open');
        // });

        function updateNavigation() {
            contentSections.each(function(){
                $this = $(this);
                var activeSection = $('#pix-vertical-nav a[href="#'+$this.attr('id')+'"]').data('number') - 1;
                if ( ( $this.offset().top - $(window).height()/2 < $(window).scrollTop() ) && ( $this.offset().top + $this.height() - $(window).height()/2 > $(window).scrollTop() ) ) {
                    navigationItems.eq(activeSection).addClass('is-selected');
                }else {
                    navigationItems.eq(activeSection).removeClass('is-selected');
                }
            });
        }

        function smoothScroll(start) {
            // var start = target.data('scroll');

            $('body,html').animate(
                // {'scrollTop':target.offset().top},
                {'scrollTop':start+1},
                600
            );
        }



    };



}( jQuery ));

(function ( $ ) {

        window.pix_section_stack = function() {
            if(!$('body').hasClass('vc_editor')){
                $('.pix-scale-in, .pix-scale-in-xs, .pix-scale-in-sm, .pix-scale-in-lg').each(function(){
                    var section = $(this);
                    if(section.hasClass('pix-loaded')) return false;

                    section.addClass('pix-loaded');

                    var top = section.offset().top;
                    var height = section.outerHeight();
                    var bottom = section.offset().top + height;
                    var scale_val = 2;
                    var offset = 600;
                    var translate_val = height / 3;
                    if(section.hasClass('pix-scale-in-xs')) {
                        scale_val = 1.1;
                        if(translate_val>300) translate_val = 300;
                        offset = 200;
                    }
                    if(section.hasClass('pix-scale-in-sm')) {
                        scale_val = 1.2;
                        offset = 200;
                    }
                    if(section.hasClass('pix-scale-in')) {
                        scale_val = 1.6;
                        offset = 400;
                    }
                    section.css({
                        'z-index' : '99999999',
                        'transform-style': 'preserve-3d',
                        // 'transition': 'transform 0.05s ease',
                    });
                    let start = top - offset ;
                    var range = 600;
                    if(height<500) range = height;
                    var rect = this.getBoundingClientRect();
                    var that = this;
                    // console.log(section.offset().top);
                    // console.log("popup.getBoundingClientRect(): " + rect.top);
                    var range_start = $(window).height();
                    var range_end = $(window).height()/2;
                    var range_total = range_start - range_end;

                    if(rect.top <= range_start && rect.top >= range_end){
                        var per = (rect.top - range_end) / range_total;
                        var scale = (scale_val - 1)  * per;
                        scale++;
                        var translate = translate_val  * per;

                        section.css({
                            'transform' : 'scale('+scale+') translateY('+translate+'px)'
                        });
                    }else if (rect.top > range_start) {
                        // Before
                        section.css({
                            'transform' : 'scale('+scale_val+') translateY('+translate_val+'px)'
                        });
                    }else{
                        // After
                        section.css({
                            'transform' : 'scale(1) translateY(0px)'
                        });
                    }
                    document.addEventListener('scroll', (e) => {
                        // console.log(section.offset().top);
                        rect = that.getBoundingClientRect();
                        // console.log("popup.getBoundingClientRect(): " + rect.top);

                        if(rect.top <= range_start && rect.top >= range_end){
                            var per = (rect.top - range_end) / range_total;
                            var scale = (scale_val - 1)  * per;
                            scale++;
                            var translate = translate_val  * per;

                            section.css({
                                'transform' : 'scale('+scale+') translateY('+translate+'px)'
                            });
                        }else if (rect.top > range_start) {
                            // Before
                            section.css({
                                'transform' : 'scale('+scale_val+') translateY('+translate_val+'px)'
                            });
                        }else{
                            // After
                            section.css({
                                'transform' : 'scale(1) translateY(0px)'
                            });
                        }
                    }, {
                        passive: true
                    });
                    // $( window ).scroll(function() {
                    //
                    //     // console.log(section.offset().top);
                    //     rect = that.getBoundingClientRect();
                    //     // console.log("popup.getBoundingClientRect(): " + rect.top);
                    //
                    //     if(rect.top <= range_start && rect.top >= range_end){
                    //         var per = (rect.top - range_end) / range_total;
                    //         var scale = (scale_val - 1)  * per;
                    //         scale++;
                    //         var translate = translate_val  * per;
                    //
                    //         section.css({
                    //             'transform' : 'scale('+scale+') translateY('+translate+'px)'
                    //         });
                    //     }else if (rect.top > range_start) {
                    //         // Before
                    //         section.css({
                    //             'transform' : 'scale('+scale_val+') translateY('+translate_val+'px)'
                    //         });
                    //     }else{
                    //         // After
                    //         section.css({
                    //             'transform' : 'scale(1) translateY(0px)'
                    //         });
                    //     }
                    // });
                });
            }
        };




}( jQuery ));
