<?php
namespace Elementor;

use Elementor\Controls_Manager;

class Pix_Eor_Button extends Widget_Base {

	public function __construct($data = [], $args = null) {
      parent::__construct($data, $args);

      wp_register_script( 'pix-button-handle', PIX_CORE_PLUGIN_URI.'functions/elementor/js/badge.js', [ 'elementor-frontend' ], PIXFORT_PLUGIN_VERSION, true );
   	}

	public function get_name() {
		return 'pix-button';
	}

	public function get_title() {
		return 'Button';
	}

	public function get_icon() {
		return 'eicon-button';
	}

	public function get_categories() {
		return [ 'pixfort' ];
	}

	protected function _register_controls() {
		pix_get_elementor_btn($this);
	}

	protected function render() {
        $settings = $this->get_settings_for_display();
		echo sc_pix_button($settings);
	}

	protected function _content_template() {

    }

	public function get_script_depends() {
	     return [ 'pix-global', 'pix-button-handle' ];
	  }


}
