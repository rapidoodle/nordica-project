<?php
namespace Elementor\CustomControl;

use \Elementor\Base_Data_Control;

class FonticonSelector_Control extends Base_Data_Control {


	public function includes() {
		// require_once( 'icons_list.php');
	}

	const FonticonSelector = 'fonticon_selector';

	/**
	 * Set control type.
	 */
	public function get_type() {
		return self::FonticonSelector;
	}

	/**
	 * Enqueue control scripts and styles.
	 */
	public function enqueue() {

		$url = PIX_CORE_PLUGIN_URI.'functions/elementor/includes/css/';
		// Styles
		wp_enqueue_style('icon-selector', $url.'icon-selector.css', array(), '');
		wp_enqueue_style( 'pix-pixicon-font', PIX_CORE_PLUGIN_URI .'functions/icons/style.css', false, '');
		wp_enqueue_script( 'pixfort-elementor-selector', PIX_CORE_PLUGIN_URI . 'functions/elementor/includes/js/selectors.js', array('jquery'), PLUGIN_VERSION , true );
	}

	/**
	 * Set default settings
	 */
	protected function get_default_settings() {
		return [
			'label_block' => true,
			'toggle' => true,
			'options' => [],
		];
	}

	/**
	 * control field markup
	 */
	public function content_template() {


		$control_uid = $this->get_control_uid('{{ value }}');
		?>
		<div class="elementor-control-field">
			<label class="elementor-control-title">{{{ data.label }}}</label>
			<div style="pading-bottom:5px;"><input type="text" class="pix_param_icons_search" placeholder="Search..." /></div>
			<div class="elementor-control-icon-selector-wrapper">

				<# _.each( data.options, function( options, value ) { #>
				<input id="<?php echo $control_uid; ?>" type="radio" name="elementor-image-selector-{{ data.name }}-{{ data._cid }}" value="{{ value }}" data-setting="{{ data.name }}">
				<label class="elementor-icon-selector-label tooltip-target" for="<?php echo $control_uid; ?>" data-tooltip="{{ options.title }}" title="{{ options.title }}">
					<i class="{{ options.url }}"></i>
					<span class="elementor-screen-only">{{{ options.title }}}</span>
				</label>
				<# } ); #>
			</div>
		</div>
		<# if ( data.description ) { #>
		<div class="elementor-control-field-description">{{{ data.description }}}</div>
		<# } #>
		<?php
	}

}
