!function($) {

    $("body").on('change keydown paste input', '.pix_param_icons_search', function(){
        let search = $(this).val();

        $(this).closest('.elementor-control-field').find(".elementor-icon-selector-label").show().filter(function () {
            return $(this).data('tooltip').indexOf(search) < 0;
        }).hide();

    });

}(window.jQuery);
