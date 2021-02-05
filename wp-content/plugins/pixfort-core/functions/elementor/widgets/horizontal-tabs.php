<?php
namespace Elementor;

class Pix_Eor_Horizontal_Tabs extends Widget_Base {

	public function __construct($data = [], $args = null) {
      parent::__construct($data, $args);

      wp_register_script( 'pix-text-tabs-handle', PIX_CORE_PLUGIN_URI.'functions/elementor/js/tabs.js', [ 'elementor-frontend' ], PIXFORT_PLUGIN_VERSION, true );
   	}

	public function get_name() {
		return 'pix-horizontal-tabs';
	}

	public function get_title() {
		return 'Horizontal Tabs';
	}

	public function get_icon() {
		return 'fa fa-list-ul';
	}

	public function get_categories() {
		return [ 'pixfort' ];
	}

	protected function _register_controls() {




		require PIX_CORE_PLUGIN_DIR.'/functions/images/icons_list.php';
		$due_opts = array();
		foreach ($pix_icons_list as $key) {
			$due_opts[$key] = array(
				'title'	=> $key,
				'url'	=> PIX_CORE_PLUGIN_URI.'functions/images/icons/'.$key.'.svg'
			);
		}

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




		$this->start_controls_section(
			'section_title',
			[
				'label' => __( 'Content', 'elementor' ),
			]
		);




		$this->add_control(
			'items',
			[
				'label' => __( 'Items', 'essentials-core' ),
				'type' => Controls_Manager::REPEATER,
				'title_field' => '{{{ title }}}',
				'fields' => [
					[
						'name' => 'title',
						'label' => __( 'Title', 'essentials-core' ),
						'type' => Controls_Manager::TEXT,
						'default' => __( '' , 'essentials-core' ),
						'label_block' => true,
					],
					// [
					// 	'name' => 'media_type',
					// 	'label' => __( 'Use Icon', 'essentials-core' ),
					// 	'type' => Controls_Manager::SELECT,
					// 	'default' => '',
					// 	'options' => array_flip(array(
					// 		"None" => "none",
					// 		"Icon" => "icon",
					// 		"Duo tone icon" => "duo_icon",
					// 	)),
					// ],
                    [
						'name' => 'media_type',
						'label' => __( 'Use Icon', 'essentials-core' ),
						'type' => \Elementor\Controls_Manager::SWITCHER,
						'label_on' => __( 'Yes', 'essentials-core' ),
						'label_off' => __( 'No', 'essentials-core' ),
						'return_value' => 'icon',
						'default' => '',
					],
					// [
					// 	'name' => 'pix_duo_icon',
					// 	'label' => esc_html__('Icon', 'text-domain'),
					// 	'type' => \Elementor\CustomControl\IconSelector_Control::IconSelector,
					// 	'options'	=> $due_opts,
					// 	'default' => '',
					// 	'condition' => [
					// 		'media_type' => 'duo_icon',
					// 	],
					// ],
				    [
					   'name' => 'icon',
		   	            'label' => esc_html__('Icon', 'text-domain'),
		   	            'type' => \Elementor\CustomControl\FonticonSelector_Control::FonticonSelector,
		   	            'options'	=> $fontiocns_opts,
		   	            'default' => '',
		   				'condition' => [
		   					'media_type' => 'icon',
		   				],
	   	        	],
					[
						'name' => 'content',
						'label' => __( 'Content', 'essentials-core' ),
						'type' => Controls_Manager::WYSIWYG,
						'default' => __( '' , 'essentials-core' ),
					],
                    [
						'name' => 'transition',
						'label' => __( 'Transition', 'essentials-core' ),
						'type' => Controls_Manager::SELECT,
						'default' => '',
						'options' => array(
                            ''			=> 'None',
                            'fade'			=> 'Fade',
                            'fade-left'			=> 'Fade Left',
                            'fade-right'		=> 'Fade Right',
                            'fade-up' 		=> 'Fade Up',
                            'fade-down' 		=> 'Fade Down',
                        ),
					],
					// [
					// 	'name' => 'is_open',
					// 	'label' => __( 'Open by default', 'essentials-core' ),
					// 	'type' => \Elementor\Controls_Manager::SWITCHER,
					// 	'label_on' => __( 'Yes', 'essentials-core' ),
					// 	'label_off' => __( 'No', 'essentials-core' ),
					// 	'return_value' => 'yes',
					// 	'default' => '',
					// ],
					// [
					// 	'name' => 'el_class',
					// 	'label' => __( 'Extra class name', 'essentials-core' ),
					// 	'type' => Controls_Manager::TEXT,
					// 	'default' => __( 'mb-2' , 'essentials-core' ),
					// ],

				],
			]
		);

        $this->add_control(
			'is_fill',
			[
				'label' => __( 'Full width buttons', 'essentials-core' ),
				'type' => \Elementor\Controls_Manager::SWITCHER,
				'label_on' => __( 'Yes', 'essentials-core' ),
				'label_off' => __( 'No', 'essentials-core' ),
				'return_value' => 'nav-fill',
				'default' => '',
			]
		);



		$this->add_control(
			'position',
			[
				'label' => __( 'Position', 'plugin-name' ),
				'type' => \Elementor\Controls_Manager::SELECT,
				'options' => array(
                    'justify-content-center'		=> 'Center',
                    'justify-content-start'			=> 'Left',
                    'justify-content-end' 		=> 'Right',
                ),
				'default' => 'justify-content-center',
			]
		);
		$this->add_control(
			'tabs_style',
			[
				'label' => __( 'Style', 'plugin-name' ),
				'type' => \Elementor\Controls_Manager::SELECT,
				'options' => array(
                    'pix-pills-1'		=> 'Default (Gradient)',
                    'pix-pills-solid'			=> 'Solid',
                    'pix-pills-light'			=> 'Light',
                    'pix-pills-outline'			=> 'Outline',
                    'pix-pills-line'			=> 'Line',
                    'pix-pills-round'			=> 'Round',
                    'pix-pills-lines'			=> 'Lines',
                ),
				'default' => 'pix-pills-1',
			]
		);
		$this->add_control(
			'tabs_content_align',
			[
				'label' => __( 'Content align', 'plugin-name' ),
				'type' => \Elementor\Controls_Manager::SELECT,
				'options' => array(
                    ''		=> 'Default (inherit from parent element)',
                    'text-left'			=> 'Left',
                    'text-center'			=> 'Center',
                    'text-right'			=> 'Right',
                ),
				'default' => '',
			]
		);



        $this->add_control(
			'el_class',
			[
				'label' => __( 'Extra class names', 'elementor' ),
				'label_block' => true,
				'type' => Controls_Manager::TEXT,
				'placeholder' => __( '', 'elementor' ),
				'default' => '',
			]
		);



		$this->add_control(
			'tabs_icon_position',
			[
				'label' => __( 'Icons position', 'plugin-name' ),
				'type' => \Elementor\Controls_Manager::SELECT,
				'options' => array(
                       ""           => "Before text",
                       "top"        => "Top"
                   ),
				'default' => '',
			]
		);

        $this->end_controls_section();

        $this->start_controls_section(
            'section_tabs_title',
            [
                'label' => __( 'Tabs Title', 'elementor' ),
            ]
        );

		// Title format
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




		$this->end_controls_section();








	}

	protected function render() {
        $settings = $this->get_settings_for_display();
		echo sc_pix_h_text_tabs($settings);
	}

	protected function _content_template() {

    }

	public function get_script_depends() {
	     return [ 'pix-global', 'pix-text-tabs-handle' ];
	  }


}
