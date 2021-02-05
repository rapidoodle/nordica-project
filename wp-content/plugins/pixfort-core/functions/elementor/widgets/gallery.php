<?php
namespace Elementor;

class Pix_Eor_Gallery extends Widget_Base {

	public function __construct($data = [], $args = null) {
      parent::__construct($data, $args);

      wp_register_script( 'pix-gallery-handle', PIX_CORE_PLUGIN_URI.'functions/elementor/js/gallery.js', [ 'elementor-frontend' ], PIXFORT_PLUGIN_VERSION, true );
   	}

	public function get_name() {
		return 'pix-gallery';
	}

	public function get_title() {
		return 'Gallery';
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
			'items',
			[
				'label' => __( 'Items', 'essentials-core' ),
				'type' => Controls_Manager::REPEATER,
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
						'name' => 'desc',
						'label' => __( 'Image Description', 'essentials-core' ),
						'type' => Controls_Manager::TEXT,
						'default' => __( '' , 'essentials-core' ),
						'label_block' => true,
					],
                    [
						'name'	=> 'enable_link',
						'label' => __( 'Use link instead of Lightbox', 'essentials-core' ),
						'type' => \Elementor\Controls_Manager::SWITCHER,
						'label_on' => __( 'Yes', 'essentials-core' ),
						'label_off' => __( 'No', 'essentials-core' ),
						'return_value' => 'yes',
						'default' => '',
					],
                    [
        				'label' => __( 'Link', 'elementor' ),
        				'name' => 'link',
        				'type' => Controls_Manager::URL,
        				'placeholder' => __( 'Link', 'elementor' ),
        				'default' => [
        					'url' => '',
        					'is_external' => false,
        					'nofollow' => true,
        				],
        				'placeholder'   => 'http://your-link.com',
        				'dynamic'     => array(
                            'active'  => true
                        ),
        			],
                    [
						'name'	=> 'pix_color_effect',
						'label' => __( 'Hover color effect', 'essentials-core' ),
						'type' => \Elementor\Controls_Manager::SWITCHER,
						'label_on' => __( 'Yes', 'essentials-core' ),
						'label_off' => __( 'No', 'essentials-core' ),
						'return_value' => 'pix-hover-colored',
						'default' => '',
					],
                    [
						'name'	=> 'pix_title_effect',
						'label' => __( 'Hover title fade in', 'essentials-core' ),
						'type' => \Elementor\Controls_Manager::SWITCHER,
						'label_on' => __( 'Yes', 'essentials-core' ),
						'label_off' => __( 'No', 'essentials-core' ),
						'return_value' => 'pix-hover-title',
						'default' => '',
					],
                    [
                        'name'	=> 'grid_size',
        				'label' => __( 'Item width', 'essentials-core' ),
        				'type' => Controls_Manager::SELECT,
        				'default' => 'grid-item',
        				'options' => [
        					'grid-item' => __( 'Default', 'essentials-core' ),
        					'grid-item grid-item--width2' => __( 'Wide', 'essentials-core' )
        				]
        			],
                    [
                        'name'	=> 'gallery_height',
        				'label' => __( 'Item Height', 'essentials-core' ),
        				'type' => Controls_Manager::SELECT,
        				'default' => 'pix-gallery-sm',
        				'options' => [
                            'pix-gallery-sm'		=> 'Default',
                            'pix-gallery-lg'		=> 'Tall'
        				],
        			]


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

		echo sc_pix_gallery($settings);
	}

	protected function _content_template() {

    }

	public function get_script_depends() {
	     return [ 'pix-global', 'pix-gallery-handle' ];
	  }


}
