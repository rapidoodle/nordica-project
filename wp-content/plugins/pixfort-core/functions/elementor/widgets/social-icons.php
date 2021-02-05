<?php
namespace Elementor;

class Pix_Eor_Social_Icons extends Widget_Base {

	public function __construct($data = [], $args = null) {
      parent::__construct($data, $args);

      // wp_register_script( 'pix-social-icons-handle', PIX_CORE_PLUGIN_URI.'functions/elementor/js/feature-list.js', [ 'elementor-frontend' ], PIXFORT_PLUGIN_VERSION, true );
   	}

	public function get_name() {
		return 'pix-social-icons';
	}

	public function get_title() {
		return 'Social icons';
	}

	public function get_icon() {
		return 'fa fa-twitter';
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

		$fontiocns_opts = array();
	    $fontiocns_opts[''] = array('title' => 'None', 'url' => '' );
	    $pixicons = vc_iconpicker_type_pixicons( array() );
	        foreach ($pixicons as $key) {
	            // echo '<br />';
	            $fontiocns_opts[array_keys($key)[0]] = array(
	                'title'	=> array_keys($key)[0],
	                'url'	=> array_keys($key)[0]
	            );
	        }

		$this->add_control(
			'items',
			[
				'label' => __( 'Icons', 'essentials-core' ),
				'type' => Controls_Manager::REPEATER,
				'title_field' => '{{{ icon }}}',
				'fields' => [

					[
						'name' => 'icon',
			            'label' => esc_html__('Icon', 'text-domain'),
			            'type' => \Elementor\CustomControl\FonticonSelector_Control::FonticonSelector,
			            'options'	=> $fontiocns_opts,
			            'default' => '',
			        ],
					[
						'name' => 'item_link',
						'label' => __( 'Icon Link', 'essentials-core' ),
						'type' => Controls_Manager::TEXT,
						'default' => __( '' , 'essentials-core' ),
						'label_block' => true,
					],
					[
						'name' => 'has_color',
						'label' => __( 'Different color', 'essentials-core' ),
						'type' => \Elementor\Controls_Manager::SWITCHER,
						'label_on' => __( 'Yes', 'essentials-core' ),
						'label_off' => __( 'No', 'essentials-core' ),
						'return_value' => 'yes',
						'default' => '',
					],
					[
						'name' => 'item_color',
						'label' => __( 'Icon color', 'plugin-name' ),
						'type' => \Elementor\Controls_Manager::SELECT,
						'options' => array_flip($colors),
						'default' => '',
						'condition' => [
							'has_color' => true,
						],
					],
					[
						'name' => 'item_custom_color',
						'label' => __( 'Custom Icon Color', 'plugin-name' ),
						'type' => \Elementor\Controls_Manager::COLOR,
						'default' => '',
						'condition' => [
							'icon_color' => 'custom',
						],
					]



				],
			]
		);


		$this->add_control(
			'item_size',
			[
				'label' => __( 'Size', 'essentials-core' ),
				'type' => Controls_Manager::SELECT,
				'default' => '',
				'options' => [
					''			=> 'Default (16px)',
	                'text-xs'		=> '12px',
	                'text-sm'		=> '14px',
	                'text-sm'		=> '14px',
	                'text-18' 		=> '18px',
	                'text-20' 		=> '20px',
	                'text-24' 		=> '24px',
	                'custom' 		=> 'Custom',
				],
			]
		);
		$this->add_control(
			'item_custom_size',
			[
				'label' => __( 'Custom Icon Size', 'essentials-core' ),
				'type' => \Elementor\Controls_Manager::TEXT,
				'default' => __( '', 'essentials-core' ),
				'placeholder' => __( 'Please input the value (with the unit: px,.. etc).', 'essentials-core' ),
				'condition' => [
					'item_size' => 'custom',
				],
			]
		);


		$this->add_control(
			'items_color',
			[
				'label' => __( 'Icons color', 'plugin-name' ),
				'type' => \Elementor\Controls_Manager::SELECT,
				'options' => array_flip($colors),
				'default' => 'body-default',
			]
		);
		$this->add_control(
			'items_custom_color',
			[
				'label' => __( 'Custom Icons Color', 'plugin-name' ),
				'type' => \Elementor\Controls_Manager::COLOR,
				'default' => '',
				'condition' => [
					'icon_color' => 'custom',
				],
			]
		);
		$this->add_control(
			'items_style',
			[
				'label' => __( 'Hover Animation', 'plugin-name' ),
				'type' => \Elementor\Controls_Manager::SELECT,
				'options' => array(
					""       => "None",
		            "fly-sm"       => "Fly Small",
		            "fly"       => "Fly Medium",
		            "fly-lg"       => "Fly Large",
		            "scale-sm"       => "Scale Small",
		            "scale"       => "Scale Medium",
		            "scale-lg"       => "Scale Large",
				),
				'default' => '',
			]
		);
		$this->add_control(
			'position',
			[
				'label' => __( 'Position', 'plugin-name' ),
				'type' => \Elementor\Controls_Manager::SELECT,
				'options' => array(
					'text-left'			=> 'Left',
	                'text-center'		=> 'Center',
	                'text-right' 		=> 'Right',
	            ),
				'default' => 'text-left',
			]
		);
		$this->add_control(
			'item_padding',
			[
				'label' => __( 'Padding', 'plugin-name' ),
				'type' => \Elementor\Controls_Manager::SELECT,
				'options' => array(
					'px-2'			=> 'Default (small)',
	                'px-1'		=> 'Extra small',
	                'px-3'		=> 'Medium',
	                'px-4'		=> 'Large',
	                'px-5'		=> 'Extra Large',
	                'none'		=> 'None',
	                'custom'		=> 'Custom',
	            ),
				'default' => 'px-2',
			]
		);
		$this->add_control(
			'item_custom_padding',
			[
				'label' => __( 'Custom Icons padding', 'essentials-core' ),
				'type' => \Elementor\Controls_Manager::TEXT,
				'default' => __( '', 'essentials-core' ),
				'placeholder' => __( 'Please input the value (with the unit: px,.. etc).', 'essentials-core' ),
				'condition' => [
					'padding' => 'custom',
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










		$this->end_controls_section();





	}

	protected function render() {
        $settings = $this->get_settings_for_display();
		echo sc_pix_social_icons($settings);
	}

	protected function _content_template() {

    }

	public function get_script_depends() {
	     return [ 'pix-global' ];
	  }


}
