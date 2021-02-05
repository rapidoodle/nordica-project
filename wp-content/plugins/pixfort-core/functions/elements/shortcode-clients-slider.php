<?php

// Clients Slider ----------------------------------------------
vc_map( array (
    'base' 			=> 'clients_slider',
    'name' 			=> __('Clients Carousel', 'pixfort-core'),
    "weight"	=> "1000",
    'category' 		=> __('pixfort', 'pixfort-core'),
    'class'         => 'pixfort_element',
    'icon' 			=> PIX_CORE_PLUGIN_URI . 'functions/images/elements/clients-carousel.png',
    'description' 	=> __('Display logos in carousel', 'pixfort-core'),
    'params' 		=> array (

        array(
            'type' => 'param_group',
            'value' => '',
            'param_name' => 'clients',
            'heading' 		=> __('Clients', 'pixfort-core'),
            'params' => array(
                array (
                    'param_name' 	=> 'image',
                    'type' 			=> 'attach_image',
                    'heading' 		=> __('Image', 'pixfort-core'),
                    'admin_label'	=> false,
                ),

                array (
                    'param_name' 	=> 'title',
                    'type' 			=> 'textfield',
                    'heading' 		=> __('Title', 'pixfort-core'),
                    'admin_label'	=> false,
                ),

                array (
                    'param_name' 	=> 'link',
                    'type' 			=> 'textfield',
                    'heading' 		=> __('Link', 'pixfort-core'),
                    'admin_label'	=> false,
                ),

                array(
                    "type" => "checkbox",
                    "heading" => __( "Open in a new tab", "pix-opts" ),
                    "param_name" => "target",
                    "value" => __( "Yes", "pix-opts" ),
                    "dependency" => array(
                        "element" => "link",
                        "not_empty" => true
                    ),
                ),
            )
        ),


        array(
            "type" => "dropdown",
            "heading" => __("Hover Animation", "js_composer"),
            "param_name" => "add_hover_effect",
            "admin_label" => true,
            "value" => array_flip(array(
                ""       => "None",
                "1"       => "Fly Small",
                "2"       => "Fly Medium",
                "3"       => "Fly Large",
                "4"       => "Scale Small",
                "5"       => "Scale Medium",
                "6"       => "Scale Large",
                "7"       => "Scale Inverse Small",
                "8"       => "Scale Inverse Medium",
                "9"       => "Scale Inverse Large",
            )),
            'save_always' => true,
            // 'group' => __( 'Advanced', 'essentials-core' ),
            "description" => __( "Please select the style you wish for the box to display in.", "js_composer")
        ),

        array (
            'param_name' 	=> 'style',
            'type' 			=> 'dropdown',
            'heading' 		=> __('Additional hover effect', 'pixfort-core'),
            'admin_label'	=> false,
            'value' 		=> array_flip(array(
                'pix-box'			=> 'Fade others + Box',
                'client'			=> 'Fade others',
                // 'nobox' 	=> 'Without boxes',
                // 'fly' 	    => 'Fly',
                'no-effect' 	    => 'No effect',
            )),
        ),

        array (
            'param_name' 	=> 'animation',
            'type' 			=> 'dropdown',
            'heading' 		=> __('Animation', 'pixfort-core'),
            'description' 	=> __('Select the animation of the heading.', 'pixfort-core'),
            'admin_label'	=> false,
            'src'	=> 'fade-in-Img',
            'value'			=>  array(
                "None" 				=> "",
                "Fade in" 			=> "fade-in",
                'fade-in-down'		=> 'fade-in-down',
                'fade-in-left'		=> 'fade-in-left',
                'fade-in-right'		=> 'fade-in-right',
                'fade-in-up'		=> 'fade-in-up',
                'fade-in-up-big'	=> 'fade-in-up-big',
                'fade-in-right-big'	=> 'fade-in-right-big',
                'fade-in-left-big'	=> 'fade-in-left-big',
                "Slide in up"		=> "slide-in-up",
                "Fade in & Scale"		=> "fade-in-Img",
            ),
        ),
        array (
            'param_name' 	=> 'delay',
            'type' 			=> 'textfield',
            'heading' 		=> __('Animation delay (in miliseconds)', 'pixfort-core'),
            'admin_label'	=> true,
            "dependency" => array(
                "element" => "animation",
                "not_empty" => true
            ),
        ),

        array (
            'param_name' 	=> 'delay_items',
            'type' 			=> 'dropdown',
            'heading' 		=> __('Add delay between items', 'pixfort-core'),
            'admin_label'	=> false,
            'value' 		=> array_flip(array(
                ''			=> 'No',
                'yes'			=> 'Yes',
            )),
            "dependency" => array(
                "element" => "animation",
                "not_empty" => true
            ),
        ),


        // Advanced
        array (
            'param_name' 	=> 'slider_num',
            'type' 			=> 'dropdown',
            'heading' 		=> __('Slides per page', 'pixfort-core'),
            'admin_label'	=> false,
            'value' 		=> array(
                "1" 	=> 1,
                "2" 	=> 2,
                "3" 	=> 3,
                "4" 	=> 4,
                "5" 	=> 5,
                "6" 	=> 6,
            ),
            "std"   => 3,
            "group" => __( "Advanced", "pix-opts" ),
        ),
        array (
            'param_name' 	=> 'slider_style',
            'type' 			=> 'dropdown',
            'heading' 		=> __('Slides style', 'pixfort-core'),
            'admin_label'	=> false,
            'std'	=> 'pix-standard',
            'value' 		=> array(
                __('Standard','pixfort-core')         	        => 'pix-style-standard',
                __('One active item','pixfort-core')         	=> 'pix-one-active',
                __('Faded items','pixfort-core') 	            => 'pix-opacity-slider',
            ),
            "group" => __( "Advanced", "pix-opts" ),
        ),
        array (
            'param_name' 	=> 'slider_effect',
            'type' 			=> 'dropdown',
            'heading' 		=> __('Slides effect', 'pixfort-core'),
            'admin_label'	=> false,
            'std'	=> 'pix-opacity-slider',
            'value' 		=> array(
                __('Standard','pixfort-core') 	                => 'pix-effect-standard',
                __('Circular effect','pixfort-core') 	        => 'pix-circular-slider',
                __('Circular Left only','pixfort-core') 	        => 'pix-circular-left',
                __('Circular Right only','pixfort-core') 	    => 'pix-circular-right',
                __('Fade out','pixfort-core') 	                => 'pix-fade-out-effect',
            ),
            "group" => __( "Advanced", "pix-opts" ),
        ),

        array(
            "type" => "checkbox",
            "heading" => __( "Show navigation buttons", "pix-opts" ),
            "param_name" => "prevnextbuttons",
            "value" => array('Yes' => true),
            'save_always' => true,
            'std' => true,
            "group" => __( "Advanced", "pix-opts" ),
        ),
        array(
            "type" => "checkbox",
            "heading" => __( "Dots", "pix-opts" ),
            "param_name" => "pagedots",
            "value" => array('Yes' => true),
            'std' => true,
            'save_always' => true,
            "group" => __( "Advanced", "pix-opts" ),
        ),
        array (
            'param_name' 	=> 'dots_style',
            'type' 			=> 'dropdown',
            'heading' 		=> __('Dots style', 'pixfort-core'),
            'admin_label'	=> false,
            "group" => __( "Advanced", "pix-opts" ),
            'value' 		=> array_flip(array(
                ''			=> 'Default',
                'light-dots' 	=> 'Light',
            )),
            "dependency" => array(
                "element" => "pagedots",
                "not_empty" => true
            ),
        ),
        array (
            'param_name' 	=> 'dots_align',
            'type' 			=> 'dropdown',
            'heading' 		=> __('Dots', 'pixfort-core'),
            'admin_label'	=> false,
            "group" => __( "Advanced", "pix-opts" ),
            'value' 		=> array_flip(array(
                ''			=> 'Center',
                'pix-dots-left' 	=> 'Left',
                'pix-dots-right' 	=> 'Right',
            )),
            "dependency" => array(
                "element" => "pagedots",
                "not_empty" => true
            ),
        ),
        array(
            "type" => "checkbox",
            "heading" => __( "Free Scroll", "pix-opts" ),
            "param_name" => "freescroll",
            "value" => array('Yes' => true),
            'save_always' => true,
            "group" => __( "Advanced", "pix-opts" ),
        ),
        array (
            'param_name' 	=> 'cellalign',
            'type' 			=> 'dropdown',
            'heading' 		=> __('Main cell Align', 'pixfort-core'),
            'admin_label'	=> false,
            'group'	=> 'Advanced',
            'value' 		=> array_flip(array(
                'center'			=> 'Center',
                'left' 	=> 'Left',
                'right' 	=> 'Right',
            )),
        ),
        array(
            "type" => "checkbox",
            "heading" => __( "Scale main item", "pix-opts" ),
            "param_name" => "slider_scale",
            "value" => array('Yes' => 'pix-slider-scale'),
            'save_always' => true,
            "group" => __( "Advanced", "pix-opts" ),
        ),
        array (
            'param_name' 	=> 'cellpadding',
            'type' 			=> 'dropdown',
            'heading' 		=> __('Cells padding', 'pixfort-core'),
            'admin_label'	=> false,
            'group'	=> 'Advanced',
            'std'	=> 'pix-p-10',
            'value' 		=> array_flip(array(
                'pix-p-5'			=> '5px',
                'pix-p-10'			=> '10px',
                'pix-p-15'			=> '15px',
                'pix-p-20'			=> '20px',
                'pix-p-25'			=> '25px',
                'pix-p-30'			=> '30px',
                'pix-p-35'			=> '35px',
                'pix-p-40'			=> '40px',
                'pix-p-45'			=> '45px',
                'pix-p-50'			=> '50px',
            )),
        ),
        array(
            "type" => "checkbox",
            "heading" => __( "autoplay", "pix-opts" ),
            "param_name" => "autoplay",
            "value" => array('Yes' => true),
            'save_always' => true,
            "group" => __( "Advanced", "pix-opts" ),
        ),
        array (
            'param_name' 	=> 'autoplay_time',
            'type' 			=> 'textfield',
            'heading' 		=> __('Autoplay time', 'pixfort-core'),
            'description' 		=> __('The time between auto slides in milliseconds.', 'pixfort-core'),
            'admin_label'	=> false,
            'std'			=> '1500',
            'group'			=> 'Advanced',
            "dependency" => array(
                "element" => "autoplay",
                "not_empty" => true
            ),
        ),
        array(
            "type" => "checkbox",
            "heading" => __( "Adaptive height", "pix-opts" ),
            "param_name" => "adaptiveheight",
            "value" => true,
            'save_always' => true,
            'std' => true,
            "group" => __( "Advanced", "pix-opts" ),
        ),
        array(
            "type" => "checkbox",
            "heading" => __( "Right to Left", "pix-opts" ),
            "param_name" => "righttoleft",
            "value" => true,
            'save_always' => true,
            "group" => __( "Advanced", "pix-opts" ),
        ),
        array(
            "type" => "checkbox",
            "heading" => __( "Wrap slides", "pix-opts" ),
            "param_name" => "slider_wrap",
            "value" => true,
            "std" => true,
            'save_always' => true,
            "group" => __( "Advanced", "pix-opts" ),
        ),
        array(
            "type" => "checkbox",
            "heading" => __( "Increas vertial view", "pix-opts" ),
            "param_name" => "visible_y",
            "value" => array("Yes" => 'pix-overflow-y-visible'),
            'save_always' => true,
            "group" => __( "Advanced", "pix-opts" ),
        ),
        array(
            "type" => "checkbox",
            "heading" => __( "Visible overflow", "pix-opts" ),
            "description" => "slides outside the slider view box will be visible.",
            "param_name" => "visible_overflow",
            "value" => array("Yes" => 'pix-overflow-all-visible'),
            'save_always' => true,
            "group" => __( "Advanced", "pix-opts" ),
        ),

        array(
            'type' => 'css_editor',
            'heading' => __( 'Css', 'essentials-core' ),
            'param_name' => 'css',
            'group' => __( 'Design options', 'essentials-core' ),
        ),



    )
));

?>
