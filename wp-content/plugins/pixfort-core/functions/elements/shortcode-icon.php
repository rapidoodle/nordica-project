<?php

$popup_posts = get_posts([
  'post_type' => 'pixpopup',
  'post_status' => 'publish',
  'numberposts' => -1
]);

$popups = array();
$popups[''] = "Disabled";
foreach ($popup_posts as $key => $value) {
	$popups[$value->ID] = $value->post_title;
}


// Icon -------------------------------------------
vc_map( array (
    'base' 			=> 'pix_icon',
    'name' 			=> __('Icon', 'pixfort-core'),
    'category' 		=> __('pixfort', 'pixfort-core'),
    "weight"	=> "1000",
    'class'         => 'pixfort_element',
    'icon' 			=> PIX_CORE_PLUGIN_URI . 'functions/images/elements/icon.png',
    'description' 	=> __('Create custom single icon', 'pixfort-core'),
    'params' 		=> array (
        array(
    		  "type" => "dropdown",
    		  "heading" => __( "Use image or icon", "pix-opts" ),
    		  "param_name" => "media_type",
    		  "value" => array(
                        "None" => "none",
    				   "Image" => "image",
    				   "Icon" => "icon",
    				   "Duo tone icon" => "duo_icon",
    				   "Character" => "char"
    		   ),
               "group"	      => "Image / Icon",
    	  ),

          array(
              'type'        => 'pix_icons_select',
              'heading'  => 'Icon',
              'param_name'  => 'pix_duo_icon',
              "class" => "my_param_field",
              'value'       => '0',
              "group"	      => "Image / Icon",
              "dependency" => array(
                   "element" => "media_type",
                   "value" => "duo_icon"
               ),
          ),
          array (
              'param_name' 	=> 'char',
              'type' 			=> 'textfield',
              'heading' 		=> __('Character', 'pixfort-core'),
              "std"           => "1",
              'description' => __( 'Please input only one character.', 'js_composer' ),
              'admin_label'	=> false,
              "dependency" => array(
    		        "element" => "media_type",
    		        "value" => "char"
    		    ),
                "group"	      => "Image / Icon",
          ),

        array (
            'type' => 'iconpicker',
            'heading' => __( 'Icon', 'js_composer' ),
            'param_name' => 'icon',
            'settings' => array(
                'emptyIcon' => true, // default true, display an "EMPTY" icon?
                'type' => 'pix-icons',
                'iconsPerPage' => 200, // default 100, how many icons per/page to display
            ),
            "group"	      => "Image / Icon",
            'description' => __( 'Select icon from library.', 'js_composer' ),
            "dependency" => array(
  		        "element" => "media_type",
  		        "value" => "icon"
  		    ),
        ),
        array (
            'param_name' 	=> 'icon_color',
            'type' 			=> 'dropdown',
            'heading' 		=> __('Icon color', 'pixfort-core'),
            'admin_label'	=> false,
            'value' 		=> $colors,
            'std'			=> 'primary',
            "group"	      => "Image / Icon",
            "dependency" => array(
  		        "element" => "media_type",
  		        "value" => array("icon", "char", "duo_icon")
  		    ),
        ),

        array (
            'param_name' 	=> 'custom_icon_color',
            'type' 			=> 'colorpicker',
            'heading' 		=> __('Icon Color', 'pixfort-core'),
            'admin_label'	=> false,
            "group"	      => "Image / Icon",
            "dependency" => array(
                  "element" => "icon_color",
                  "value" => "custom"
              ),
        ),

        array(
              "type" => "checkbox",
              "heading" => __( "Background circle", "pix-opts" ),
              "param_name" => "has_icon_bg",
              "group"	      => "Image / Icon",
              "value" => __( "Yes", "pix-opts" ),
              "dependency" => array(
                    "element" => "media_type",
                    "value" => array("icon", "char", "duo_icon", "none")
                ),
          ),

        array (
            'param_name' 	=> 'icon_bg_color',
            'type' 			=> 'dropdown',
            'heading' 		=> __('Icon Background color', 'pixfort-core'),
            'admin_label'	=> false,
            'value' 		=> $bg_colors,
            'std'			=> 'primary-light',
            "group"	      => "Image / Icon",
            "dependency" => array(
  		        "element" => "media_type",
  		        "value" => array("icon", "char", "duo_icon")
  		    ),
        ),
        array (
            'param_name' 	=> 'icon_custom_bg_color',
            'type' 			=> 'colorpicker',
            'heading' 		=> __('Custom Icon Background Color', 'pixfort-core'),
            'admin_label'	=> false,
            "group"	      => "Image / Icon",
            "dependency" => array(
                  "element" => "icon_bg_color",
                  "value" => "custom"
              ),
        ),
        array (
            'param_name' 	=> 'icon_size',
            'type' 			=> 'textfield',
            'heading' 		=> __('Icon Size', 'pixfort-core'),
            "std"           => "30",
            'description' => __( 'The size of the icon in pixels (without writing the unit).', 'js_composer' ),
            'admin_label'	=> false,
            "group"	      => "Image / Icon",
            "dependency" => array(
  		        "element" => "media_type",
  		        "value" => array("icon", "char", "duo_icon")
  		    ),
        ),


        array (
            'param_name' 	=> 'image',
            'type' 			=> 'attach_image',
            'heading' 		=> __('Image', 'pixfort-core'),
            'admin_label'	=> false,
            "group"	      => "Image / Icon",
            "dependency" => array(
  		        "element" => "media_type",
  		        "value" => "image"
  		    ),
        ),
        array (
            'param_name' 	=> 'image_size',
            'type' 			=> 'textfield',
            'heading' 		=> __('Image Size', 'pixfort-core'),
            'description' => __( 'The size of the image (with the unit), leave empty for full size.', 'js_composer' ),
            'admin_label'	=> false,
            "group"	      => "Image / Icon",
            "dependency" => array(
  		        "element" => "media_type",
  		        "value" => "image"
  		    ),
        ),

        array(
              "type" => "checkbox",
              "heading" => __( "Circle image", "pix-opts" ),
              "param_name" => "circle",
              "value" => __( "Yes", "pix-opts" ),
              "group"	      => "Image / Icon",
              "dependency" => array(
    		        "element" => "media_type",
    		        "value" => 'image'
    		    ),
          ),

        array (
            'param_name' 	=> 'content_align',
            'type' 			=> 'dropdown',
            'heading' 		=> __('Content align', 'pixfort-core'),
            'admin_label'	=> false,
            'value'			=> array_flip(array(
                'left'	=> 'Left',
                'center'	=> 'Center',
                'right'	=> 'Right',
                'inline'	=> 'Inline',
            )),
            "dependency" => array(
  		        "element" => "icon_position",
  		        "value" => "top"
  		    ),
        ),

        array(
         "type" => "dropdown",
         "heading" => __("Shadow Style", "js_composer"),
         "param_name" => "style",
         "admin_label" => true,
         "value" => array_flip(array(
            "" => "Default",
            "1"       => "Small shadow",
            "2"       => "Medium shadow",
            "3"       => "Large shadow",
            "4"       => "Inverse Small shadow",
            "5"       => "Inverse Medium shadow",
            "6"       => "Inverse Large shadow",
        )),
         'save_always' => true,
         'group' => __( 'Effects', 'essentials-core' ),
         "description" => __( "Please select the style you wish for the box to display in.", "js_composer")
        ),
        array(
        "type" => "dropdown",
        "heading" => __("Shadow Hover Style", "js_composer"),
        "param_name" => "hover_effect",
        "admin_label" => true,
        "value" => array_flip(array(
          ""       => "None",
          "1"       => "Small hover shadow",
          "2"       => "Medium hover shadow",
          "3"       => "Large hover shadow",
          "4"       => "Inverse Small hover shadow",
          "5"       => "Inverse Medium hover shadow",
          "6"       => "Inverse Large hover shadow",
        )),
        'save_always' => true,
        'group' => __( 'Effects', 'essentials-core' ),
        "description" => __( "Please select the style you wish for the box to display in.", "js_composer")
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
        'group' => __( 'Effects', 'essentials-core' ),
        "description" => __( "Please select the style you wish for the box to display in.", "js_composer")
        ),

        array (
            'param_name' 	=> 'link_type',
            'type' 			=> 'dropdown',
            'heading' 		=> __('Link type', 'pixfort-core'),
            'admin_label'	=> false,
            'value'			=> array_flip(array(
                'link'	=> 'Link',
                'popup'	=> 'Popup',
                'video'	=> 'Video',
                'embed'	=> 'Embed code',
            )),
        ),
        array (
            'param_name' 	=> 'link',
            'type' 			=> 'textfield',
            'heading' 		=> __('Link', 'pixfort-core'),
            'admin_label'	=> true,
            "dependency" => array(
              "element" => "link_type",
              "value" => "link"
          ),
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
           "type" => "dropdown",
           "heading" => __("Open Popup instead of link", "js_composer"),
           "param_name" => "icon_popup_id",
           "admin_label" => true,
           "value" => array_flip($popups),
           "dependency" => array(
             "element" => "link_type",
             "value" => "popup"
         ),
        ),

        array (
            'param_name' 	=> 'embed_code',
            'type' 			=> 'textarea',
            'heading' 		=> __('Embed Code', 'pixfort-core'),
            'admin_label'	=> true,
            "dependency" => array(
              "element" => "link_type",
              "value" => array('video', 'embed')
          ),
        ),

        array (
            'param_name' 	=> 'aspect',
            'type' 			=> 'dropdown',
            'heading' 		=> __('Aspect ratio', 'pixfort-core'),
            'admin_label'	=> false,
            'value' 		=> array(
                __('21:9 aspect ratio','pixfort-core') 	    => 'embed-responsive-21by9',
                __('16:9 aspect ratio','pixfort-core')	    => 'embed-responsive-16by9',
                __('4:3 aspect ratio','pixfort-core')	    => 'embed-responsive-4by3',
                __('1:1 aspect ratio','pixfort-core')	    => 'embed-responsive-1by1'
            ),
            "dependency" => array(
              "element" => "link_type",
              "value" => array('video', 'embed')
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

        array (
            'param_name' 	=> 'class',
            'type' 			=> 'textfield',
            'group'         => 'Advanced',
            'heading' 		=> __('Custom CSS classes for link', 'pixfort-core'),
            'description' 	=> __('This option is useful when you want to use PrettyPhoto (prettyphoto) or Scroll (scroll).', 'pixfort-core'),
            'admin_label'	=> true,
        ),

        array(
            'type' => 'el_id',
            'param_name' => 'element_id',
            'settings' => array(
                'auto_generate' => true,
            ),
            'heading' => esc_html__( 'Element ID', 'js_composer' ),
            'description' => sprintf( esc_html__( 'Enter element ID (Note: make sure it is unique and valid according to %sw3c specification%s).', 'js_composer' ), '<a href="https://www.w3schools.com/tags/att_global_id.asp" target="_blank">', '</a>' ),
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
