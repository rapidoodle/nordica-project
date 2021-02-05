<?php
namespace Elementor;

class Pix_Eor_Clients_Carousel extends Widget_Base {

	public function __construct($data = [], $args = null) {
      parent::__construct($data, $args);

      wp_register_script( 'pix-clients-carousel-handle', PIX_CORE_PLUGIN_URI.'functions/elementor/js/clients-carousel.js', [ 'elementor-frontend' ], PIXFORT_PLUGIN_VERSION, true );
   	}

	public function get_name() {
		return 'pix-clients-carousel';
	}

	public function get_title() {
		return 'Clients Carousel';
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
			'clients',
			[
				'label' => __( 'Clients', 'essentials-core' ),
				'type' => Controls_Manager::REPEATER,
				// 'default' => [
				// 	[
				// 		'alt' => __( 'Item #1', 'elementor' ),
				// 	],
				// 	[
				// 		'alt' => __( 'Item #2', 'elementor' ),
				// 	],
				// ],
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
				'placeholder' => __( 'Type your title here', 'essentials-core' ),
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

		$this->start_controls_section(
			'section_advanced',
			[
				'label' => __( 'Advanced', 'essentials-core' ),
				'tab' => Controls_Manager::TAB_STYLE,
			]
		);


		$this->add_control(
			'slider_num',
			[
				'label' => __( 'Slides per page', 'essentials-core' ),
				'type' => Controls_Manager::SELECT,
				'default' => 3,
				'options' => [
					1 	=> "1",
                    2 	=> "2",
                    3 	=> "3",
                    4 	=> "4",
                    5 	=> "5",
                    6 	=> "6",
				],
			]
		);
		$this->add_control(
			'slider_style',
			[
				'label' => __( 'Slides style', 'essentials-core' ),
				'type' => Controls_Manager::SELECT,
				'default' => 'pix-style-standard',
				'options' => [
					'pix-style-standard'        => __('Standard','essentials-core'),
                    'pix-one-active'         	=> __('One active item','essentials-core'),
                    'pix-opacity-slider'        => __('Faded items','essentials-core'),
				],
			]
		);
		$this->add_control(
			'slider_effect',
			[
				'label' => __( 'Slides effect', 'essentials-core' ),
				'type' => Controls_Manager::SELECT,
				'default' => 'pix-effect-standard',
				'options' => array_flip(
					array(
	                    __('Standard','pix-opts') 	                => 'pix-effect-standard',
	                    __('Circular effect','pix-opts') 	        => 'pix-circular-slider',
	                    __('Circular Left only','pix-opts') 	        => 'pix-circular-left',
	                    __('Circular Right only','pix-opts') 	    => 'pix-circular-right',
	                     __('Fade out','pix-opts') 	                => 'pix-fade-out-effect',
	                )
				),
			]
		);

		$this->add_control(
			'prevnextbuttons',
			[
				'label' => __( 'Show navigation buttons', 'essentials-core' ),
				'type' => \Elementor\Controls_Manager::SWITCHER,
				'label_on' => __( 'Yes', 'essentials-core' ),
				'label_off' => __( 'No', 'essentials-core' ),
				'return_value' => true,
				'default' => true,

			]
		);
		$this->add_control(
			'pagedots',
			[
				'label' => __( 'Dots', 'essentials-core' ),
				'type' => \Elementor\Controls_Manager::SWITCHER,
				'label_on' => __( 'Yes', 'essentials-core' ),
				'label_off' => __( 'No', 'essentials-core' ),
				'return_value' => true,
				'default' => true,

			]
		);
		$this->add_control(
			'dots_style',
			[
				'label' => __( 'Dots style', 'essentials-core' ),
				'type' => Controls_Manager::SELECT,
				'default' => '',
				'options' => [
					''			=> 'Default',
					'light-dots' 	=> 'Light',
				],
				'condition' => [
					'pagedots' => true,
				],
			]
		);
		$this->add_control(
			'dots_align',
			[
				'label' => __( 'Dots style', 'essentials-core' ),
				'type' => Controls_Manager::SELECT,
				'default' => '',
				'options' => [
					''			=> 'Center',
					'pix-dots-left' 	=> 'Left',
					'pix-dots-right' 	=> 'Right',
				],
				'condition' => [
					'pagedots' => true,
				],
			]
		);
		$this->add_control(
			'freescroll',
			[
				'label' => __( 'Free Scroll', 'essentials-core' ),
				'type' => \Elementor\Controls_Manager::SWITCHER,
				'label_on' => __( 'Yes', 'essentials-core' ),
				'label_off' => __( 'No', 'essentials-core' ),
				'return_value' => true,
				'default' => false,

			]
		);
		$this->add_control(
			'cellalign',
			[
				'label' => __( 'Main cell Align', 'essentials-core' ),
				'type' => Controls_Manager::SELECT,
				'default' => 'center',
				'options' => [
					'center'			=> 'Center',
					'left' 	=> 'Left',
					'right' 	=> 'Right',
				],
			]
		);
		$this->add_control(
			'slider_scale',
			[
				'label' => __( 'Scale main item', 'essentials-core' ),
				'type' => \Elementor\Controls_Manager::SWITCHER,
				'label_on' => __( 'Yes', 'essentials-core' ),
				'label_off' => __( 'No', 'essentials-core' ),
				'return_value' => 'pix-slider-scale',
				'default' => false,
			]
		);
		$this->add_control(
			'cellpadding',
			[
				'label' => __( 'Cells padding', 'essentials-core' ),
				'type' => Controls_Manager::SELECT,
				'default' => 'pix-p-10',
				'options' => [
					'p-0'				=> '0px',
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
				],
			]
		);
		$this->add_control(
			'autoplay',
			[
				'label' => __( 'Autoplay', 'essentials-core' ),
				'type' => \Elementor\Controls_Manager::SWITCHER,
				'label_on' => __( 'Yes', 'essentials-core' ),
				'label_off' => __( 'No', 'essentials-core' ),
				'return_value' => true,
				'default' => false,
			]
		);
		$this->add_control(
			'autoplay_time',
			[
				'label' => __( 'Autoplay time', 'essentials-core' ),
				'type' => \Elementor\Controls_Manager::TEXT,
				'default' => __( '1500', 'essentials-core' ),
				'placeholder' => __( 'Type your title here', 'essentials-core' ),
				// 'condition' => [
				// 	'autoplay' => true,
				// ],
			]
		);
		$this->add_control(
			'adaptiveheight',
			[
				'label' => __( 'Adaptive height', 'essentials-core' ),
				'type' => \Elementor\Controls_Manager::SWITCHER,
				'label_on' => __( 'Yes', 'essentials-core' ),
				'label_off' => __( 'No', 'essentials-core' ),
				'return_value' => true,
				'default' => true,
			]
		);
		$this->add_control(
			'righttoleft',
			[
				'label' => __( 'Right to Left', 'essentials-core' ),
				'type' => \Elementor\Controls_Manager::SWITCHER,
				'label_on' => __( 'Yes', 'essentials-core' ),
				'label_off' => __( 'No', 'essentials-core' ),
				'return_value' => true,
				'default' => false,
			]
		);
		$this->add_control(
			'slider_wrap',
			[
				'label' => __( 'Wrap slides', 'essentials-core' ),
				'type' => \Elementor\Controls_Manager::SWITCHER,
				'label_on' => __( 'Yes', 'essentials-core' ),
				'label_off' => __( 'No', 'essentials-core' ),
				'return_value' => true,
				'default' => true,
			]
		);
		$this->add_control(
			'visible_y',
			[
				'label' => __( 'Increas vertial view', 'essentials-core' ),
				'type' => \Elementor\Controls_Manager::SWITCHER,
				'label_on' => __( 'Yes', 'essentials-core' ),
				'label_off' => __( 'No', 'essentials-core' ),
				'return_value' => 'pix-overflow-y-visible',
				'default' => false,
			]
		);
		$this->add_control(
			'visible_overflow',
			[
				'label' => __( 'Visible overflow', 'essentials-core' ),
				'type' => \Elementor\Controls_Manager::SWITCHER,
				'label_on' => __( 'Yes', 'essentials-core' ),
				'label_off' => __( 'No', 'essentials-core' ),
				'return_value' => 'pix-overflow-all-visible',
				'default' => false,
			]
		);

		$this->end_controls_section();


	}

	protected function render() {
        $settings = $this->get_settings_for_display();
		echo sc_clients_slider($settings);
	}

	protected function _content_template() {

    }

	public function get_script_depends() {
	     return [ 'pix-global', 'pix-clients-carousel-handle' ];
	  }


}
