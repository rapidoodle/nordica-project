<?php
namespace Elementor;

class Pix_Eor_Comparison_Table extends Widget_Base {

	public function __construct($data = [], $args = null) {
      parent::__construct($data, $args);

      // wp_register_script( 'pix-comparison-table-handle', PIX_CORE_PLUGIN_URI.'functions/elementor/js/comparison-table.js', [ 'elementor-frontend' ], PIXFORT_PLUGIN_VERSION, true );
   	}

	public function get_name() {
		return 'pix-comparison-table';
	}

	public function get_title() {
		return 'Comparison Table';
	}

	public function get_icon() {
		return 'fa fa-images';
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
			'cols_count',
			[
				'label' => __( 'Columns count', 'essentials-core' ),
				'type' => Controls_Manager::SELECT,
				'default' => '3',
				'options' => array_flip(array(
                    '1'			=> '1',
                    '2'			=> '2',
                    '3'			=> '3',
                )),
			]
		);

        $this->add_control(
			'table_title',
			[
				'label' => __( 'Table Title', 'elementor' ),
				'label_block' => true,
				'type' => Controls_Manager::TEXT,
				'placeholder' => __( '', 'elementor' ),
				'default' => '',
				'dynamic'     => array(
                    'active'  => true
                ),
			]
		);


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

		$this->add_control(
			'items',
			[
				'label' => __( 'Lines', 'essentials-core' ),
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
					[
						'name' => 'text',
						'label' => __( 'Description', 'essentials-core' ),
						'type' => Controls_Manager::TEXT,
						'default' => __( '' , 'essentials-core' ),
					],

                    // Col 1
                    [
						'name' => 'col_1_text',
						'label' => __( 'Column 1 Text', 'essentials-core' ),
						'type' => Controls_Manager::TEXT,
						'default' => __( '' , 'essentials-core' ),
					],
                    [
						'name' => 'col_1_tooltip',
						'label' => __( 'Col 1 Tooltip', 'essentials-core' ),
						'type' => Controls_Manager::TEXT,
						'default' => __( '' , 'essentials-core' ),
					],
                    [
						'name' => 'col_1_media_type',
						'label' => __( 'Column 1 Icon', 'essentials-core' ),
						'type' => Controls_Manager::SELECT,
						'default' => 'none',
						'options' => array_flip(array(
                            "None" => "none",
							"Icon" => "icon",
							"Duo tone icon" => "duo_icon",
						)),
					],

                    [
						'name' => 'col_1_pix_duo_icon',
						'label' => esc_html__('Icon', 'text-domain'),
						'type' => \Elementor\CustomControl\IconSelector_Control::IconSelector,
						'options'	=> $due_opts,
						'default' => '',
						'condition' => [
							'col_1_media_type' => 'duo_icon',
						],
					],
                    [
                      'name' => 'col_1_icon',
                       'label' => esc_html__('Icon', 'text-domain'),
                       'type' => \Elementor\CustomControl\FonticonSelector_Control::FonticonSelector,
                       'options'	=> $fontiocns_opts,
                       'default' => '',
                       'condition' => [
                           'col_1_media_type' => 'icon',
                       ],
                    ],






				],
			]
		);

		$this->add_control(
			'pix_columns',
			[
				'label' => __( 'Grid columns', 'essentials-core' ),
				'type' => Controls_Manager::SELECT,
				'default' => 'pix-3-columns',
				'options' => array_flip(array(
                    '3 Columns'		=> 'pix-3-columns',
                    '4 Columns'		=> 'pix-4-columns'
                )),
			]
		);
		$this->add_control(
			'pix_style',
			[
				'label' => __( 'Grid style', 'essentials-core' ),
				'type' => Controls_Manager::SELECT,
				'default' => '',
				'options' => array_flip(array(
                    'Default (with paddings)'		=> '',
                    'Without paddings'		=> 'gutter-0'
                )),
			]
		);
		$this->add_control(
			'full_size_img',
			[
				'label' => __( 'Enable full size images', 'essentials-core' ),
				'type' => Controls_Manager::SELECT,
				'default' => '',
				'options' => array_flip(array(
                    'No'		=> 'no',
                    'Yes'		=> 'Yes'
                )),
			]
		);
		$this->add_control(
			'rounded_img',
			[
				'label' => __( 'Rounded corners', 'essentials-core' ),
				'type' => Controls_Manager::SELECT,
				'default' => 'rounded-lg',
				'options' => [
					'rounded-0' => __( 'No', 'essentials-core' ),
					'rounded' => __( 'Rounded', 'essentials-core' ),
					'rounded-lg' => __( 'Rounded Large', 'essentials-core' ),
					'rounded-xl' => __( 'Rounded 5px', 'essentials-core' ),
					'rounded-10' => __( 'Rounded 10px', 'essentials-core' ),
				],
			]
		);




		$this->add_control(
			'pix_tilt',
			[
				'label' => __( '3D Hover', 'essentials-core' ),
				'type' => \Elementor\Controls_Manager::SWITCHER,
				'label_on' => __( 'Enable', 'essentials-core' ),
				'label_off' => __( 'Disable', 'essentials-core' ),
				'return_value' => 'tilt',
				'default' => 'no',

			]
		);

		$this->add_control(
			'pix_tilt_size',
			[
				'label' => __( '3d hover size', 'essentials-core' ),
				'type' => Controls_Manager::SELECT,
				'default' => 'tilt',
				'options' => [
					'tilt' => __( 'Default', 'essentials-core' ),
					'tilt_big' => __( 'Big', 'essentials-core' ),
					'tilt_small' => __( 'Small', 'essentials-core' ),
				],
				'condition' => [
					'pix_tilt' => 'tilt',
				],
			]
		);



		$this->end_controls_section();




		pix_get_elementor_effects($this);



		$this->start_controls_section(
			'section_title_style',
			[
				'label' => __( 'Advanced', 'essentials-core' ),
				'tab' => Controls_Manager::TAB_STYLE,
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
        if(!empty($settings['items'])&&is_array($settings['items'])){
            foreach ($settings['items'] as $k => $value) {
                if(!empty($settings['items'][$k]['link'])&&is_array($settings['items'][$k]['link'])){
                    if(!empty($settings['items'][$k]['link']['is_external'])){
                        $settings['items'][$k]['target'] = $settings['items'][$k]['link']['is_external'];
                    }
                    if(!empty($settings['items'][$k]['link']['custom_attributes'])){
                        $settings['items'][$k]['link_atts'] = $settings['items'][$k]['link']['custom_attributes'];
                    }
                    $settings['items'][$k]['link'] = $settings['items'][$k]['link']['url'];
                }
            }
        }

		echo sc_pix_comparison_table($settings);
	}

	protected function _content_template() {

    }

	public function get_script_depends() {
	     return [ 'pix-global' ];
	  }


}
