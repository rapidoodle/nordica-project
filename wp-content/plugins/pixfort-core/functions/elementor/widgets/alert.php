<?php
namespace Elementor;

class Pix_Eor_Alert extends Widget_Base {

	public function __construct($data = [], $args = null) {
      parent::__construct($data, $args);

      // wp_register_script( 'pix-alert-handle', PIX_CORE_PLUGIN_URI.'functions/elementor/js/alert.js', [ 'elementor-frontend' ], PIXFORT_PLUGIN_VERSION, true );
   	}

	public function get_name() {
		return 'pix-alert';
	}

	public function get_title() {
		return 'Alert';
	}

	public function get_icon() {
		return 'fa fa-exclamation-circle';
	}

	public function get_categories() {
		return [ 'pixfort' ];
	}

	protected function _register_controls() {

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
				'default' => 'Alert title',
				'dynamic'     => array(
                    'active'  => true
                ),
			]
		);

		$this->add_control(
			'alert_type_1',
			[
				'label' => __( 'Alert Type', 'elementor' ),
				'label_block' => true,
				'type' => Controls_Manager::SELECT,
				'options' => [
					'success'		=> 'Success',
	                'secondary'		=> 'Secondary',
	                'primary' 		=> 'Primary',
	                'danger' 		=> 'Danger',
	                'warning' 		=> 'Warning',
	                'info' 		    => 'Info',
	                'light' 		=> 'Light',
	                'dark' 		    => 'Dark'
				],
				'default' => 'success',
			]
		);

		$this->add_control(
			'shadow',
			[
				'label' => __( 'Show shadow', 'elementor' ),
				'type' => Controls_Manager::CHOOSE,
				'options' => [
					'1' => [
						'title' => __( 'Yes', 'plugin-name' ),
						'icon' => 'fa fa-check',
					],
					'0' => [
						'title' => __( 'No', 'plugin-name' ),
						'icon' => 'fa fa-times',
					]
				],
				'default' => '1',
			]
		);

		$this->end_controls_section();

		// $this->start_controls_section(
		// 	'style_section',
		// 	[
		// 		'label' => __( 'Style', 'plugin-name' ),
		// 		'tab' => \Elementor\Controls_Manager::TAB_STYLE,
		// 	]
		// );


	}

	protected function render() {
        $settings = $this->get_settings_for_display();
		echo pf_alertblock($settings);
	}

	protected function _content_template() {

    }

	public function get_script_depends() {
	     return [ 'pix-global' ];
	  }


}
