<?php
namespace Elementor;

class Pix_Eor_Promo_Box extends Widget_Base {

	public function __construct($data = [], $args = null) {
      parent::__construct($data, $args);

      wp_register_script( 'pix-promo-box-handle', PIX_CORE_PLUGIN_URI.'functions/elementor/js/promo-box.js', [ 'elementor-frontend' ], PIXFORT_PLUGIN_VERSION, true );
   	}

	public function get_name() {
		return 'pix-promo-box';
	}

	public function get_title() {
		return 'Promo Box';
	}

	public function get_icon() {
		return 'fa fa-pager';
	}

	public function get_categories() {
		return [ 'pixfort' ];
	}

	protected function _register_controls() {



		$colors = array(
			"Body default"			=> "body-default",
			"Heading default"		=> "heading-default",
			"Primary"				=> "primary",
			"Primary Gradient"		=> "gradient-primary",
			"Secondary"				=> "secondary",
			"White"					=> "white",
			"Black"					=> "black",
			"Green"					=> "green",
			"Blue"					=> "blue",
			"Red"					=> "red",
			"Yellow"				=> "yellow",
			"Brown"					=> "brown",
			"Purple"				=> "purple",
			"Orange"				=> "orange",
			"Cyan"					=> "cyan",
			// "Transparent"					=> "transparent",
			"Gray 1"				=> "gray-1",
			"Gray 2"				=> "gray-2",
			"Gray 3"				=> "gray-3",
			"Gray 4"				=> "gray-4",
			"Gray 5"				=> "gray-5",
			"Gray 6"				=> "gray-6",
			"Gray 7"				=> "gray-7",
			"Gray 8"				=> "gray-8",
			"Gray 9"				=> "gray-9",
			"Dark opacity 1"		=> "dark-opacity-1",
			"Dark opacity 2"		=> "dark-opacity-2",
			"Dark opacity 3"		=> "dark-opacity-3",
			"Dark opacity 4"		=> "dark-opacity-4",
			"Dark opacity 5"		=> "dark-opacity-5",
			"Dark opacity 6"		=> "dark-opacity-6",
			"Dark opacity 7"		=> "dark-opacity-7",
			"Dark opacity 8"		=> "dark-opacity-8",
			"Dark opacity 9"		=> "dark-opacity-9",
			"Light opacity 1"		=> "light-opacity-1",
			"Light opacity 2"		=> "light-opacity-2",
			"Light opacity 3"		=> "light-opacity-3",
			"Light opacity 4"		=> "light-opacity-4",
			"Light opacity 5"		=> "light-opacity-5",
			"Light opacity 6"		=> "light-opacity-6",
			"Light opacity 7"		=> "light-opacity-7",
			"Light opacity 8"		=> "light-opacity-8",
			"Light opacity 9"		=> "light-opacity-9",
			"Custom"				=> "custom"
		);
		$bg_colors = array(
			"Primary"				=> "primary",
			"Primary Light"			=> "primary-light",
			"Primary Gradient"		=> "gradient-primary",
			"Primary Gradient Light"		=> "gradient-primary-light",
			"Secondary"				=> "secondary",
			"Secondary Light"		=> "secondary-light",
			"White"					=> "white",
			"Black"					=> "black",
			"Green"					=> "green",
			"Green Light"			=> "green-light",
			"Blue"					=> "blue",
			"Blue Light"			=> "blue-light",
			"Red"					=> "red",
			"Red Light"				=> "red-light",
			"Yellow"				=> "yellow",
			"Yellow Light"			=> "yellow-light",
			"Brown"					=> "brown",
			"Brown Light"			=> "brown-light",
			"Purple"				=> "purple",
			"Purple Light"			=> "purple-light",
			"Orange"				=> "orange",
			"Orange Light"			=> "orange-light",
			"Cyan"					=> "cyan",
			"Cyan Light"			=> "cyan-light",
			"Transparent"			=> "transparent",
			"Gray 1"				=> "gray-1",
			"Gray 2"				=> "gray-2",
			"Gray 3"				=> "gray-3",
			"Gray 4"				=> "gray-4",
			"Gray 5"				=> "gray-5",
			"Gray 6"				=> "gray-6",
			"Gray 7"				=> "gray-7",
			"Gray 8"				=> "gray-8",
			"Gray 9"				=> "gray-9",
			"Dark opacity 1"		=> "dark-opacity-1",
			"Dark opacity 2"		=> "dark-opacity-2",
			"Dark opacity 3"		=> "dark-opacity-3",
			"Dark opacity 4"		=> "dark-opacity-4",
			"Dark opacity 5"		=> "dark-opacity-5",
			"Dark opacity 6"		=> "dark-opacity-6",
			"Dark opacity 7"		=> "dark-opacity-7",
			"Dark opacity 8"		=> "dark-opacity-8",
			"Dark opacity 9"		=> "dark-opacity-9",
			"Light opacity 1"		=> "light-opacity-1",
			"Light opacity 2"		=> "light-opacity-2",
			"Light opacity 3"		=> "light-opacity-3",
			"Light opacity 4"		=> "light-opacity-4",
			"Light opacity 5"		=> "light-opacity-5",
			"Light opacity 6"		=> "light-opacity-6",
			"Light opacity 7"		=> "light-opacity-7",
			"Light opacity 8"		=> "light-opacity-8",
			"Light opacity 9"		=> "light-opacity-9",
			"Custom"				=> "custom"
		);
		$infinite_animation = array(
		    "None"                  => "",
		    "Rotating"              => "pix-rotating",
		    "Rotating inversed"     => "pix-rotating-inverse",
		    "Fade"                  => "pix-fade",
		    "Bounce Small"          => "pix-bounce-sm",
		    "Bounce Medium" 		=> "pix-bounce-md",
		    "Bounce Large" 			=> "pix-bounce-lg",
		    "Scale Small"           => "pix-scale-sm",
		    "Scale Medium"           => "pix-scale-md",
		    "Scale Large"           => "pix-scale-lg",

		);
		$animation_speeds = array(
		    "Fast" 			=> "pix-duration-fast",
		    "Medium" 		=> "pix-duration-md",
		    "Slow" 			=> "pix-duration-slow",
		);

		$this->start_controls_section(
			'section_title',
			[
				'label' => __( 'Content', 'elementor' ),
			]
		);

		$this->add_control(
			'image',
			[
				'label' => __( 'Image', 'plugin-name' ),
				'type' => \Elementor\Controls_Manager::MEDIA,
				'dynamic'     => array(
                    'active'  => true
                ),
				'default' => [
					'url' => \Elementor\Utils::get_placeholder_image_src(),
				]
			]
		);

		$this->add_control(
			'title',
			[
				'label' => __( 'Title', 'elementor' ),
				'label_block' => true,
				'type' => Controls_Manager::TEXT,
				'dynamic'     => array(
                    'active'  => true
                ),
				'placeholder' => __( 'Enter your title', 'elementor' ),
				'default' => '',
			]
		);
		$this->add_control(
			'badge',
			[
				'label' => __( 'Badge', 'elementor' ),
				'label_block' => true,
				'type' => Controls_Manager::TEXT,
				'placeholder' => __( '', 'elementor' ),
				'dynamic'     => array(
                    'active'  => true
                ),
				'default' => '',
			]
		);


		$this->add_control(
			'link_text',
			[
				'label' => __( 'Link Text', 'elementor' ),
				'label_block' => true,
				'type' => Controls_Manager::TEXT,
				'dynamic'     => array(
                    'active'  => true
                ),
				'placeholder' => __( 'Link', 'elementor' ),
				'default' => 'Check it out',
			]
		);
		$this->add_control(
			'link',
			[
				'label' => __( 'Link', 'elementor' ),
				'label_block' => true,
				'type' => Controls_Manager::TEXT,
				'placeholder' => __( 'Link', 'elementor' ),
				'default' => '',
			]
		);
		$this->add_control(
			'target',
			[
				'label' => __( 'Open in a new tab', 'essentials-core' ),
				'type' => \Elementor\Controls_Manager::SWITCHER,
				'label_on' => __( 'Yes', 'essentials-core' ),
				'label_off' => __( 'No', 'essentials-core' ),
				'return_value' => 'Yes',
				'condition' => [
					'link!' => '',
				],
			]
		);


		$this->add_control(
			'pix_scroll_parallax',
			[
				'label' => __( 'Scroll Parallax', 'essentials-core' ),
				'type' => \Elementor\Controls_Manager::SWITCHER,
				'label_on' => __( 'Yes', 'essentials-core' ),
				'label_off' => __( 'No', 'essentials-core' ),
				'return_value' => 'scroll_parallax',
			]
		);
		$this->add_control(
			'xaxis',
			[
				'label' => __( 'X axis', 'elementor' ),
				'label_block' => true,
				'type' => Controls_Manager::TEXT,
				'placeholder' => __( '', 'elementor' ),
				'default'	=> '0',
				'condition' => [
					'pix_scroll_parallax' => 'scroll_parallax',
				],
			]
		);
		$this->add_control(
			'yaxis',
			[
				'label' => __( 'Y axis', 'elementor' ),
				'label_block' => true,
				'type' => Controls_Manager::TEXT,
				'placeholder' => __( '', 'elementor' ),
				'default'	=> '0',
				'condition' => [
					'pix_scroll_parallax' => 'scroll_parallax',
				],
			]
		);
		$this->add_control(
			'pix_tilt',
			[
				'label' => __( '3D Hover', 'essentials-core' ),
				'type' => \Elementor\Controls_Manager::SWITCHER,
				'label_on' => __( 'Yes', 'essentials-core' ),
				'label_off' => __( 'No', 'essentials-core' ),
				'return_value' => 'tilt',
			]
		);
		$this->add_control(
			'pix_tilt_size',
			[
				'label' => __( '3d hover size', 'essentials-core' ),
				'type' => Controls_Manager::SELECT,
				'default' => 'tilt',
				'options' => [
					'tilt'			=> 'Default',
					'tilt_big'		=> 'Big',
					'tilt_small' 		=> 'Small',
				],
				'condition' => [
					'pix_tilt!' => '',
				],
			]
		);
		$this->add_control(
			'animation',
			[
				'label' => __( 'Animation', 'essentials-core' ),
				'type' => Controls_Manager::SELECT,
				'default' => '',
				'options' => array_flip(array(
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
				)),
			]
		);
		$this->add_control(
			'delay',
			[
				'label' => __( 'Animation delay (in miliseconds)', 'essentials-core' ),
				'type' => \Elementor\Controls_Manager::TEXT,
				'default' => __( '0', 'essentials-core' ),
				'placeholder' => __( '', 'essentials-core' ),
				'condition' => [
					'animation!' => '',
				],
			]
		);
		$this->add_control(
			'pix_infinite_animation',
			[
				'label' => __( 'Infinite Animation type', 'essentials-core' ),
				'type' => Controls_Manager::SELECT,
				'default' => '',
				'options' => $infinite_animation,
			]
		);
		$this->add_control(
			'pix_infinite_speed',
			[
				'label' => __( 'Infinite Animation Speed', 'essentials-core' ),
				'type' => Controls_Manager::SELECT,
				'default' => '',
				'options' => $animation_speeds,
			]
		);

		$this->add_control(
			'height',
			[
				'label' => __( 'Box minimum height', 'elementor' ),
				'label_block' => true,
				'type' => Controls_Manager::TEXT,
				'placeholder' => __( '', 'elementor' ),
				'default' => '300px',
			]
		);


		$this->add_control(
			'overlay_color',
			[
				'label' => __( 'overlay color', 'plugin-name' ),
				'type' => \Elementor\Controls_Manager::SELECT,
				'options' => array_flip($colors),
				'default' => 'heading-default',
			]
		);
		$this->add_control(
			'overlay_custom_color',
			[
				'label' => __( 'Custom overlay color', 'plugin-name' ),
				'type' => \Elementor\Controls_Manager::COLOR,
				'default' => '',
				'condition' => [
					'overlay_color' => 'custom',
				],
			]
		);
		$this->add_control(
			'overlay_opacity',
			[
				'label' => __( 'Overlay opacity', 'plugin-name' ),
				'type' => \Elementor\Controls_Manager::SELECT,
				'options' => array(
					'pix-opacity-10'   => "0%",
                    'pix-opacity-9'   => "10%",
                    'pix-opacity-8'   => "20%",
                    'pix-opacity-7'   => "30%",
                    'pix-opacity-6'   => "40%",
                    'pix-opacity-5'   => "50%",
                    'pix-opacity-4'   => "60%",
                    'pix-opacity-3'   => "70%",
                    'pix-opacity-2'   => "80%",
                    'pix-opacity-1'   => "90%",

	           ),
				'default' => 'pix-opacity-4',
			]
		);
		$this->add_control(
			'hover_overlay_opacity',
			[
				'label' => __( 'Hover overlay opacity', 'plugin-name' ),
				'type' => \Elementor\Controls_Manager::SELECT,
				'options' => array(
					"pix-hover-opacity-0" 			=> "100%",
	  	              "pix-hover-opacity-2" 			=> "80%",
	  	              "pix-hover-opacity-4" 			=> "60%",
	  	              "pix-hover-opacity-6" 			=> "40%",
	  	              "pix-hover-opacity-7" 			=> "30%",
	  	              "pix-hover-opacity-8" 			=> "20%",
	  	              "pix-hover-opacity-9" 			=> "10%",
	  	              "pix-hover-opacity-10" 			=> "Disable",

	           ),
				'default' => 'pix-hover-opacity-6',
			]
		);


		$this->add_control(
	        'extra_classes',
	        [
	            'label' => __( 'Extra Classes', 'elementor' ),
	            'label_block' => true,
	            'type' => Controls_Manager::TEXT,
	            'placeholder' => __( '', 'elementor' ),
	            'default' => '',
	        ]
	    );













		$this->end_controls_section();
		$this->start_controls_section(
			'title_section',
			[
				'label' => __( 'Title format', 'plugin-name' ),
				'tab' => \Elementor\Controls_Manager::TAB_CONTENT,
			]
		);
		$this->add_control(
			'bold',
			[
				'label' => __( 'Bold', 'essentials-core' ),
				'type' => \Elementor\Controls_Manager::SWITCHER,
				'label_on' => __( 'Yes', 'essentials-core' ),
				'label_off' => __( 'No', 'essentials-core' ),
				'return_value' => 'font-weight-bold',
				'default' => 'font-weight-bold',
			]
		);
		$this->add_control(
			'italic',
			[
				'label' => __( 'Italic', 'essentials-core' ),
				'type' => \Elementor\Controls_Manager::SWITCHER,
				'label_on' => __( 'Yes', 'essentials-core' ),
				'label_off' => __( 'No', 'essentials-core' ),
				'return_value' => 'font-italic',
				'default' => '',
			]
		);
		$this->add_control(
			'secondary_font',
			[
				'label' => __( 'Secondary font', 'essentials-core' ),
				'type' => \Elementor\Controls_Manager::SWITCHER,
				'label_on' => __( 'Yes', 'essentials-core' ),
				'label_off' => __( 'No', 'essentials-core' ),
				'return_value' => 'secondary-font',
				'default' => '',
			]
		);
		$this->add_control(
			'color',
			[
				'label' => __( 'Title color', 'plugin-name' ),
				'type' => \Elementor\Controls_Manager::SELECT,
				'options' => array_flip($colors),
				'default' => 'white',
			]
		);
		$this->add_control(
			'custom_color',
			[
				'label' => __( 'Custom Title color', 'plugin-name' ),
				'type' => \Elementor\Controls_Manager::COLOR,
				'default' => '',
				'condition' => [
					'text_color' => 'custom',
				],
			]
		);
		$this->add_control(
			'title_size',
			[
				'label' => __( 'Title size', 'plugin-name' ),
				'type' => \Elementor\Controls_Manager::SELECT,
				'options' => array_flip(array(
					__('H1','pix-opts') 	=> 'h1',
 				   __('H2','pix-opts')	    => 'h2',
 				   __('H3','pix-opts')	    => 'h3',
 				   __('H4','pix-opts')	    => 'h4',
 				   __('H5','pix-opts')	    => 'h5',
 				   __('H6','pix-opts')	    => 'h6',
 				   __('Custom','pix-opts')	    => 'custom',
		       )),
				'default' => 'h5',
			]
		);
		$this->add_control(
			'title_custom_size',
			[
				'label' => __( 'Custom Title size', 'elementor' ),
				'label_block' => false,
				'type' => Controls_Manager::TEXT,
				'placeholder' => __( 'Enter custom title size', 'elementor' ),
				'default' => '',
				'condition' => [
					'text_size' => 'custom',
				],
			]
		);

		$this->end_controls_section();






		$this->start_controls_section(
			'pix_link_section',
			[
				'label' => __( 'Link format', 'plugin-name' ),
				'tab' => \Elementor\Controls_Manager::TAB_CONTENT,
			]
		);
		$this->add_control(
			'link_bold',
			[
				'label' => __( 'Bold', 'essentials-core' ),
				'type' => \Elementor\Controls_Manager::SWITCHER,
				'label_on' => __( 'Yes', 'essentials-core' ),
				'label_off' => __( 'No', 'essentials-core' ),
				'return_value' => 'font-weight-bold',
				'default' => 'font-weight-bold',
			]
		);
		$this->add_control(
			'link_italic',
			[
				'label' => __( 'Italic', 'essentials-core' ),
				'type' => \Elementor\Controls_Manager::SWITCHER,
				'label_on' => __( 'Yes', 'essentials-core' ),
				'label_off' => __( 'No', 'essentials-core' ),
				'return_value' => 'font-italic',
				'default' => '',
			]
		);
		$this->add_control(
			'link_secondary_font',
			[
				'label' => __( 'Secondary font', 'essentials-core' ),
				'type' => \Elementor\Controls_Manager::SWITCHER,
				'label_on' => __( 'Yes', 'essentials-core' ),
				'label_off' => __( 'No', 'essentials-core' ),
				'return_value' => 'secondary-font',
				'default' => '',
			]
		);
		$this->add_control(
			'link_color',
			[
				'label' => __( 'Link color', 'plugin-name' ),
				'type' => \Elementor\Controls_Manager::SELECT,
				'options' => array_flip($colors),
				'default' => 'light-opacity-6',
			]
		);
		$this->add_control(
			'link_custom_color',
			[
				'label' => __( 'Custom Link color', 'plugin-name' ),
				'type' => \Elementor\Controls_Manager::COLOR,
				'default' => '',
				'condition' => [
					'link_color' => 'custom',
				],
			]
		);

		$this->add_control(
			'link_size',
			[
				'label' => __( 'Link size', 'plugin-name' ),
				'type' => \Elementor\Controls_Manager::SELECT,
				'options' => array(
					''			=> 'Default (16px)',
					'text-xs'		=> '12px',
					'text-sm'		=> '14px',
					'text-sm'		=> '14px',
					'text-18' 		=> '18px',
					'text-20' 		=> '20px',
					'text-24' 		=> '24px',
		       ),
				'default' => '',
			]
		);
		$this->add_control(
			'link_custom_size',
			[
				'label' => __( 'Custom Link size', 'elementor' ),
				'label_block' => false,
				'type' => Controls_Manager::TEXT,
				'placeholder' => __( 'Enter custom title size', 'elementor' ),
				'default' => '',
				'condition' => [
					'text_size' => 'custom',
				],
			]
		);

		$this->end_controls_section();





		$this->start_controls_section(
			'pix_badge_section',
			[
				'label' => __( 'Badge format', 'plugin-name' ),
				'tab' => \Elementor\Controls_Manager::TAB_CONTENT,
			]
		);
		$this->add_control(
			'badge_bold',
			[
				'label' => __( 'Bold', 'essentials-core' ),
				'type' => \Elementor\Controls_Manager::SWITCHER,
				'label_on' => __( 'Yes', 'essentials-core' ),
				'label_off' => __( 'No', 'essentials-core' ),
				'return_value' => 'font-weight-bold',
				'default' => 'font-weight-bold',
			]
		);
		$this->add_control(
			'badge_italic',
			[
				'label' => __( 'Italic', 'essentials-core' ),
				'type' => \Elementor\Controls_Manager::SWITCHER,
				'label_on' => __( 'Yes', 'essentials-core' ),
				'label_off' => __( 'No', 'essentials-core' ),
				'return_value' => 'font-italic',
				'default' => '',
			]
		);
		$this->add_control(
			'badge_secondary_font',
			[
				'label' => __( 'Secondary font', 'essentials-core' ),
				'type' => \Elementor\Controls_Manager::SWITCHER,
				'label_on' => __( 'Yes', 'essentials-core' ),
				'label_off' => __( 'No', 'essentials-core' ),
				'return_value' => 'primary',
				'default' => '',
			]
		);
		$this->add_control(
			'badge_text_color',
			[
				'label' => __( 'Text color', 'plugin-name' ),
				'type' => \Elementor\Controls_Manager::SELECT,
				'options' => array_flip($colors),
				'default' => 'primary',
			]
		);
		$this->add_control(
			'badge_text_custom_color',
			[
				'label' => __( 'Custom Text color', 'plugin-name' ),
				'type' => \Elementor\Controls_Manager::COLOR,
				'default' => '',
				'condition' => [
					'badge_text_color' => 'custom',
				],
			]
		);
		$this->add_control(
			'badge_bg_color',
			[
				'label' => __( 'Background color', 'plugin-name' ),
				'type' => \Elementor\Controls_Manager::SELECT,
				'options' => array_flip($bg_colors),
				'default' => 'white',
			]
		);
		$this->add_control(
			'badge_custom_bg_color',
			[
				'label' => __( 'Custom Background Color', 'plugin-name' ),
				'type' => \Elementor\Controls_Manager::COLOR,
				'default' => '',
				'condition' => [
					'badge_bg_color' => 'custom',
				],
			]
		);

		$this->add_control(
			'badge_text_custom_size',
			[
				'label' => __( 'Text Size', 'elementor' ),
				'label_block' => false,
				'type' => Controls_Manager::TEXT,
				'placeholder' => __( 'Enter custom text size', 'elementor' ),
				'default' => '12px',
			]
		);

		$this->end_controls_section();



		pix_get_elementor_effects($this);

	}

	protected function render() {
        $settings = $this->get_settings_for_display();
		echo sc_pix_promo_box($settings);
	}

	protected function _content_template() {

    }

	public function get_script_depends() {
	     return [ 'pix-global', 'pix-promo-box-handle' ];
	  }


}
