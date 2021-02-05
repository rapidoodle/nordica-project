<?php
namespace Elementor;

class Pix_Eor_Animated_Heading extends Widget_Base {

	public function __construct($data = [], $args = null) {
      parent::__construct($data, $args);

      // wp_register_script( 'pix-animated-heading-handle', PIX_CORE_PLUGIN_URI.'functions/elementor/js/animated-heading.js', [ 'elementor-frontend' ], PIXFORT_PLUGIN_VERSION, true );
   	}

	public function get_name() {
		return 'pix-animated-heading';
	}

	public function get_title() {
		return 'Animated Heading';
	}

	public function get_icon() {
		return 'eicon-animated-headline';
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


		$this->start_controls_section(
			'section_title',
			[
				'label' => __( 'Content', 'elementor' ),
			]
		);

		$this->add_control(
			'title',
			[
				'label' => __( 'Title', 'elementor' ),
				'label_block' => true,
				'type' => Controls_Manager::TEXT,
				'placeholder' => __( 'Enter your title', 'elementor' ),
				'dynamic'     => array(
                    'active'  => true
                ),
				'default' => '',
			]
		);

		$this->add_control(
			'words',
			[
				'label' => __( 'Scrolling words', 'essentials-core' ),
				'type' => Controls_Manager::REPEATER,
				'title_field' => '{{{ word }}}',
				'fields' => [
					[
						'name' => 'word',
						'label' => __( 'Word', 'elementor' ),
						'label_block' => true,
						'type' => Controls_Manager::TEXT,
						'placeholder' => __( 'Enter the word', 'elementor' ),
						'default' => '',
					],
					[
						'name'	=> 'has_color',
						'label' => __( 'Different color', 'essentials-core' ),
						'type' => \Elementor\Controls_Manager::SWITCHER,
						'label_on' => __( 'Yes', 'essentials-core' ),
						'label_off' => __( 'No', 'essentials-core' ),
						'return_value' => true,
						'default' => false,
					],
					[
						'name'	=> 'word_color',
						'label' => __( 'Different Color', 'plugin-name' ),
						'type' => \Elementor\Controls_Manager::SELECT,
						'options' => array_flip($colors),
						'default' => '',
						// 'condition' => [
						// 	'has_color' => true,
						// ],
					],
					[
						'name'	=> 'word_custom_color',
						'label' => __( 'Custom Different color', 'plugin-name' ),
						'type' => \Elementor\Controls_Manager::COLOR,
						'default' => '',
						// 'condition' => [
						// 	'word_color' => 'custom',
						// ],
					]

				],
			]
		);

		$this->add_control(
			'text_after',
			[
				'label' => __( 'Text after', 'elementor' ),
				'label_block' => true,
				'type' => Controls_Manager::TEXT,
				'placeholder' => __( 'Enter Text after', 'elementor' ),
				'default' => '',
				'dynamic'     => array(
                    'active'  => true
                ),
			]
		);
		$this->add_control(
			'slogan',
			[
				'label' => __( 'Slogan', 'elementor' ),
				'label_block' => true,
				'type' => Controls_Manager::TEXT,
				'placeholder' => __( 'Enter Text after', 'elementor' ),
				'default' => '',
				'dynamic'     => array(
                    'active'  => true
                ),
			]
		);

		$this->add_control(
			'style',
			[
				'label' => __( 'Animation Style', 'plugin-name' ),
				'type' => \Elementor\Controls_Manager::SELECT,
				'options' => array(
	                'slide-inverse' 		 => 'Slide Up',
	                'pixfade' 		         => 'Fade',
	                'loading-bar'			 => 'Loading bar',
	                'slide' 		         => 'Slide Down',
	                'zoom' 		             => 'Zoom',
	                'push' 		             => 'Push',
	                'rotate-1'			     => 'Rotate',
	            ),
				'default' => 'slide-inverse',
			]
		);
		$this->add_control(
			'position',
			[
				'label' => __( 'Position', 'plugin-name' ),
				'type' => \Elementor\Controls_Manager::SELECT,
				'options' => array(
	                'left'			=> 'Left',
	                'center'		=> 'Center',
	                'right' 		=> 'Right',
	            ),
				'default' => 'center',
			]
		);




		$this->end_controls_section();

		$this->start_controls_section(
			'section_title_format',
			[
				'label' => __( 'Text format', 'elementor' ),
			]
		);

		$this->add_control(
			'title_bold',
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
			'title_italic',
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
			'title_secondary_font',
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
			'space_after',
			[
				'label' => __( 'Add space after the animated text', 'essentials-core' ),
				'type' => \Elementor\Controls_Manager::SWITCHER,
				'label_on' => __( 'Yes', 'essentials-core' ),
				'label_off' => __( 'No', 'essentials-core' ),
				'return_value' => 'space_after',
				'default' => '',
			]
		);
		$this->add_control(
			'br_after',
			[
				'label' => __( 'Add break line after the animated text', 'essentials-core' ),
				'type' => \Elementor\Controls_Manager::SWITCHER,
				'label_on' => __( 'Yes', 'essentials-core' ),
				'label_off' => __( 'No', 'essentials-core' ),
				'return_value' => true,
				'default' => '',
			]
		);

		$this->add_control(
			'size',
			[
				'label' => __( 'Font size', 'essentials-core' ),
				'type' => Controls_Manager::SELECT,
				'default' => 'h1',
				'options' => array(
					'h1'		=> 'H1',
	                'h2'		=> 'H2',
	                'h3' 		=> 'H3',
	                'h4' 		=> 'H4',
	                'h5' 		=> 'H5',
	                'h6' 		=> 'H6',
	                'p' 		=> 'p',
                ),
			]
		);

		$this->add_control(
			'display',
			[
				'label' => __( 'Bigger Text', 'plugin-name' ),
				'type' => \Elementor\Controls_Manager::SELECT,
				'options' => array(
	                ''		=> 'None',
	                'display-1'		=> 'Display 1',
	                'display-2'		=> 'Display 2',
	                'display-3'		=> 'Display 3',
	                'display-4'		=> 'Display 4',
	            ),
				'default' => '',
				'condition' => [
					'size' => array('h1', 'h2', 'h3', 'h4', 'h5', 'h6')
				],
			]
		);
		$this->add_control(
			'title_color',
			[
				'label' => __( 'Title color', 'plugin-name' ),
				'type' => \Elementor\Controls_Manager::SELECT,
				'options' => array_flip($colors),
				'default' => 'heading-default',
			]
		);
		$this->add_control(
			'title_custom_color',
			[
				'label' => __( 'Custom Title color', 'plugin-name' ),
				'type' => \Elementor\Controls_Manager::COLOR,
				'default' => '',
				'condition' => [
					'title_color' => 'custom',
				],
			]
		);




		$this->end_controls_section();






		$this->start_controls_section(
			'section_slogan',
			[
				'label' => __( 'Slogan format', 'elementor' ),
			]
		);

		$this->add_control(
			'slogan_bold',
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
			'slogan_italic',
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
			'slogan_font',
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
			'slogan_color',
			[
				'label' => __( 'Title color', 'plugin-name' ),
				'type' => \Elementor\Controls_Manager::SELECT,
				'options' => array_flip($colors),
				'default' => 'primary',
			]
		);
		$this->add_control(
			'slogan_custom_color',
			[
				'label' => __( 'Custom Title color', 'plugin-name' ),
				'type' => \Elementor\Controls_Manager::COLOR,
				'default' => '',
				'condition' => [
					'slogan_color' => 'custom',
				],
			]
		);




		$this->end_controls_section();


		$this->start_controls_section(
			'section_advanced',
			[
				'label' => __( 'Advanced', 'elementor' ),
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

		$this->end_controls_section();

	}

	protected function render() {
        $settings = $this->get_settings_for_display();
		echo sc_animated_heading($settings);
	}

	protected function _content_template() {

    }

	public function get_script_depends() {
	     return [ 'pix-global' ];
	  }


}
