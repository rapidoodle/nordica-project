<?php
namespace Elementor;

class Pix_Eor_Clients extends Widget_Base {

	public function __construct($data = [], $args = null) {
      parent::__construct($data, $args);

      wp_register_script( 'pix-clients-handle', PIX_CORE_PLUGIN_URI.'functions/elementor/js/clients.js', [ 'elementor-frontend' ], PIXFORT_PLUGIN_VERSION, true );
   	}

	public function get_name() {
		return 'pix-clients';
	}

	public function get_title() {
		return 'Clients';
	}

	public function get_icon() {
		return 'eicon-logo';
	}

	public function get_categories() {
		return [ 'pixfort' ];
	}

	protected function _register_controls() {

		$this->start_controls_section(
			'section_title',
			[
				'label' => __( 'General', 'essentials-core' ),
			]
		);
		$this->add_control(
			'in_row',
			[
				'label' => __( 'Items in Row', 'essentials-core' ),
				'type' => Controls_Manager::SELECT,
				'default' => '3',
				'options' => array_flip(array(
					'1 Client'	            => '12',
	                '2 Clients'				=> '6',
	                '3 Clients'				=> '4',
	                '4 Clients'				=> '3',
	                '5 Clients'				=> '5',
	                '6 Clients'				=> '2',
				)),
			]
		);

		$this->add_control(
			'clients',
			[
				'label' => __( 'Clients', 'essentials-core' ),
				'type' => Controls_Manager::REPEATER,
				'title_field' => '{{{ title }}}',
				'fields' => [
					[
						'name'	=> 'image',
						'label' => __( 'Image', 'essentials-core' ),
						'type' => \Elementor\Controls_Manager::MEDIA,
						'default' => [
							'url' => \Elementor\Utils::get_placeholder_image_src(),
						]
					],
					[
						'name' => 'title',
						'label' => __( 'Title', 'essentials-core' ),
						'type' => Controls_Manager::TEXT,
						'default' => __( '' , 'essentials-core' ),
						'label_block' => true,
					],
					[
						'name' => 'link',
						'label' => __( 'Link', 'essentials-core' ),
						'type' => Controls_Manager::TEXT,
						'default' => __( '' , 'essentials-core' ),
					],
					[
						'name'	=> 'target',
						'label' => __( 'Open in a new tab', 'essentials-core' ),
						'type' => \Elementor\Controls_Manager::SWITCHER,
						'label_on' => __( 'Yes', 'essentials-core' ),
						'label_off' => __( 'No', 'essentials-core' ),
						'return_value' => 'yes',
						'default' => 'yes',
					]

				]
			]
		);

		$this->add_control(
			'add_hover_effect',
			[
				'label' => __( 'Hover Animation', 'essentials-core' ),
				'type' => Controls_Manager::SELECT,
				'default' => '',
				'options' => [
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
				],
			]
		);
		$this->add_control(
			'style',
			[
				'label' => __( 'Additional hover effect', 'essentials-core' ),
				'type' => Controls_Manager::SELECT,
				'default' => 'pix-box',
				'options' => [
					'pix-box'			=> 'Fade others + Box',
                    'client'			=> 'Fade others',
                    // 'nobox' 	=> 'Without boxes',
                    // 'fly' 	    => 'Fly',
                    'no-effect' 	    => 'No effect',
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
			'delay_items',
			[
				'label' => __( 'Add delay between items', 'essentials-core' ),
				'type' => Controls_Manager::SELECT,
				'default' => '',
				'options' => array_flip(array(
					''			=> 'No',
  	              'yes'			=> 'Yes',
				)),
				'condition' => [
					'animation!' => '',
				],
			]
		);


		$this->end_controls_section();



	}

	protected function render() {
        $settings = $this->get_settings_for_display();
		echo sc_clients($settings);
	}

	protected function _content_template() {

    }

	public function get_script_depends() {
	     return [ 'pix-global', 'pix-clients-handle' ];
	  }


}
