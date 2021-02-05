<?php
// Image Box -------------------------------------------
vc_map( array (
    'base' 			=> 'pix_img_box',
    'name' 			=> __('Image Box', 'pixfort-core'),
    'category' 		=> __('pixfort', 'pixfort-core'),
    'icon' 			=> 'pix-icon-vc-image-box',
    "weight"	=> "1000",
    'class'         => 'pixfort_element',
    'icon' 			=> PIX_CORE_PLUGIN_URI . 'functions/images/elements/image-box.jpg',
    'description' 	=> __('Create custom image box element', 'pixfort-core'),
    'params' 		=> array_merge(
        array (

            array (
                'param_name' 	=> 'image',
                'type' 			=> 'attach_image',
                'heading' 		=> __('Image', 'pixfort-core'),
                'admin_label'	=> false,
            ),

            array (
                'param_name' 	=> 'rounded_img',
                'type' 			=> 'dropdown',
                'heading' 		=> __('Rounded corners', 'pixfort-core'),
                'admin_label'	=> false,
                'std'	=> 'rounded-lg',
                'value' 		=> array(
                    __('No','pixfort-core') 	=> 'rounded-0',
                    __('Rounded','pixfort-core')	    => 'rounded',
                    __('Rounded Large','pixfort-core')	    => 'rounded-lg',
                    __('Rounded 5px','pixfort-core')	    => 'rounded-xl',
                    __('Rounded 10px','pixfort-core')	    => 'rounded-10',
                )
            ),

            array (
                'param_name' 	=> 'alt',
                'type' 			=> 'textfield',
                'heading' 		=> __('Image alternative text', 'pixfort-core'),
                'admin_label'	=> true,
            ),


            array (
                'param_name' 	=> 'title',
                'type' 			=> 'textfield',
                'heading' 		=> __('Title', 'pixfort-core'),
                'admin_label'	=> true,
            ),

            array (
                'param_name' 	=> 'content',
                'type' 			=> 'textarea',
                'heading' 		=> __('Content', 'pixfort-core'),
                'admin_label'	=> false,
            ),

            array (
                'param_name' 	=> 'link',
                'type' 			=> 'textfield',
                'heading' 		=> __('Link', 'pixfort-core'),
                'admin_label'	=> true,
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


              array(
                    "type" => "checkbox",
                    "heading" => __( "Animation type", "pix-opts" ),
                    "param_name" => "pix_scroll_parallax",
                    "value" => array_flip(array(
                      "scroll_parallax"       => "Scroll Parallax",
                  )),
                ),
                array(
                      "type" => "checkbox",
                      "param_name" => "pix_tilt",
                      "value" => array_flip(array(
                        "tilt"       => "3D Hover",
                    )),
                  ),
                array (
                    'param_name' 	=> 'xaxis',
                    'type' 			=> 'textfield',
                    'heading' 		=> __('X axis', 'pixfort-core'),
                    'admin_label'	=> false,
                    'std'			=> '0',
                    "dependency" => array(
                          "element" => "pix_scroll_parallax",
                          "value" => "scroll_parallax"
                      ),
                ),
                array (
                    'param_name' 	=> 'yaxis',
                    'type' 			=> 'textfield',
                    'heading' 		=> __('Y axis', 'pixfort-core'),
                    'admin_label'	=> false,
                    'std'			=> '0',
                    "dependency" => array(
                          "element" => "pix_scroll_parallax",
                          "value" => "scroll_parallax"
                      ),
                ),
                array (
                    'param_name' 	=> 'pix_tilt_size',
                    'type' 			=> 'dropdown',
                    'heading' 		=> __('3d hover size', 'pixfort-core'),
                    'admin_label'	=> false,
                    'value'			=> array_flip(array(
                        'tilt'			=> 'Default',
                        'tilt_big'		=> 'Big',
                        'tilt_small' 		=> 'Small',
                    )),
                    "dependency" => array(
                          "element" => "pix_tilt",
                          "not_empty" => true
                      ),
                ),

            array (
                'param_name' 	=> 'animation',
                'type' 			=> 'dropdown',
                'heading' 		=> __('Animation', 'pixfort-core'),
                'description' 	=> __('Select the animation of the heading.', 'pixfort-core'),
                'admin_label'	=> false,
                'value'			=> $animations,
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

            array(
               "type" => "dropdown",
               "heading" => __( "Infinite Animation type", "pix-opts" ),
               "param_name" => "pix_infinite_animation",
               "value" => $infinite_animation,
               'admin_label'	=> false,
           ),
            array(
               "type" => "dropdown",
               "heading" => __( "Infinite Animation Speed", "pix-opts" ),
               "param_name" => "pix_infinite_speed",
               "value" => $animation_speeds,
               'admin_label'	=> false,
               "dependency" => array(
                     "element" => "pix_infinite_animation",
                     "not_empty" => true
                 ),
           ),





        ),

        pix_get_text_format_params(array(
            'prefix' 		=> '',
            'name' 		=> 'Title',
            'text_group' 		=> 'Advanced',
            'bold' 		=> true,
            'bold_value' 		=> 'font-weight-bold',
            'italic' 		=> true,
            'italic_value' 		=> '',
            'secondary_font' 		=> true,
            'secondary_font_value' 		=> '',
            'color' 		=> true,
            'color_value' 		=> 'white',
        )),
        array(
            array (
                'param_name' 	=> 'title_size',
                'type' 			=> 'dropdown',
                'heading' 		=> __('Title size', 'pixfort-core'),
                'description' 	=> __('Wrap title into H1 instead of H2', 'pixfort-core'),
                'admin_label'	=> false,
                'value' 		=> array(
                    __('H1','pixfort-core') 	=> 'h1',
                    __('H2','pixfort-core')	    => 'h2',
                    __('H3','pixfort-core')	    => 'h3',
                    __('H4','pixfort-core')	    => 'h4',
                    __('H5','pixfort-core')	    => 'h5',
                    __('H6','pixfort-core')	    => 'h6',
                    __('Custom','pixfort-core')	    => 'custom',
                ),
                'std'   => 'h4',
                "group"   => "Advanced",
            ),

            array (
                'param_name' 	=> 'title_custom_size',
                'type' 			=> 'textfield',
                'heading' 		=> __('Title Size', 'pixfort-core'),
                'admin_label'	=> false,
                "dependency" => array(
                      "element" => "title_size",
                      "value" => "custom"
                  ),
                  "group"   => "Advanced",
            ),
        ),
        pix_get_text_format_params(array(
            'prefix' 		=> 'text_',
            'name' 		=> 'Text',
            'text_group' 		=> 'Advanced',
            'bold' 		=> true,
            'bold_value' 		=> '',
            'italic' 		=> true,
            'italic_value' 		=> '',
            'secondary_font' 		=> true,
            'secondary_font_value' 		=> '',
            'color' 		=> true,
            'color_value' 		=> 'light-opacity-6',
        )),

        array(
            array (
                'param_name' 	=> 'content_size',
                'type' 			=> 'dropdown',
                'heading' 		=> __('Size', 'pixfort-core'),
                'description' 	=> __('Select the size of the text.', 'pixfort-core'),
                'admin_label'	=> false,
                'value'			=> array_flip(array(
                    ''			=> 'Default (16px)',
                    'text-xs'		=> '12px',
                    'text-sm'		=> '14px',
                    'text-sm'		=> '14px',
                    'text-18' 		=> '18px',
                    'text-20' 		=> '20px',
                    'text-24' 		=> '24px',
                )),
                "group"   => "Advanced",
            ),
            array (
                'param_name' 	=> 'overlay_color',
                'type' 			=> 'dropdown',
                'heading' 		=> __('Hover overlay color', 'pixfort-core'),
                'admin_label'	=> false,
                'group'         => 'Advanced',
                'value' 		=> $colors,
                'std'			=> 'black',
            ),

            array (
                'param_name' 	=> 'overlay_custom_color',
                'type' 			=> 'colorpicker',
                'heading' 		=> __('Custom hover overlay color', 'pixfort-core'),
                'admin_label'	=> false,
                'group'         => 'Advanced',
                "dependency" => array(
                      "element" => "overlay_color",
                      "value" => "custom"
                  ),
            ),
            array(
          "type" => "dropdown",
          "heading" => __("Hover overlay opacity", "pix-opts"),
          "param_name" => "overlay_opacity",
             'group'         => 'Advanced',
             "std"      => 'pix-hover-opacity-7',
          "value" => array_flip(array(
             "pix-hover-opacity-0" 			=> "100%",
             "pix-hover-opacity-2" 			=> "80%",
             "pix-hover-opacity-4" 			=> "60%",
             "pix-hover-opacity-6" 			=> "40%",
             "pix-hover-opacity-7" 			=> "30%",
             "pix-hover-opacity-8" 			=> "20%",
             "pix-hover-opacity-9" 			=> "10%",
             "pix-hover-opacity-10" 			=> "Disable",

         )),
            ),

            array(
                'type' => 'css_editor',
                'heading' => __( 'Css', 'essentials-core' ),
                'param_name' => 'css',
                'group' => __( 'Design options', 'essentials-core' ),
            ),
        ),

        $effects_params
    )
));
 ?>
