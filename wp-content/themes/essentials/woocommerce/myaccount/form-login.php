<?php
/**
 * Login Form
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/myaccount/form-login.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see     https://docs.woocommerce.com/document/template-structure/
 * @package WooCommerce/Templates
 * @version 4.1.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

do_action( 'woocommerce_before_customer_login_form' ); ?>
<div class="container">
<div class="row">
<?php if ( 'yes' === get_option( 'woocommerce_enable_myaccount_registration' ) ) { ?>

		<div class="col-12 col-md-6">
			<h4 class="font-weight-bold text-heading-default pix-mb-40"><?php esc_html_e( 'Login', 'essentials' ); ?></h4>
<?php }else{ ?>
	<div class="col-12 offset-md-3 col-md-6">
		<h4 class="font-weight-bold text-heading-default pix-mb-40 text-center"><?php esc_html_e( 'Login', 'essentials' ); ?></h4>
	<?php } ?>


		<form class=" woocommerce-form2 woocommerce-form-login2 pix-mb-80 shadow-inverse-sm2 shadow-lg bg-white login2 rounded-xl pix-p-30" method="post">

			<?php do_action( 'woocommerce_login_form_start' ); ?>

			<p class="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
				<label class="font-weight-bold text-body-default w-100" for="username"><?php esc_html_e( 'Username or email address', 'essentials' ); ?>&nbsp;<span class="required">*</span></label>
				<input type="text" class="form-control w-100 shadow woocommerce-Input woocommerce-Input--text input-text" name="username" id="username" autocomplete="username" value="<?php echo ( ! empty( $_POST['username'] ) ) ? esc_attr( wp_unslash( $_POST['username'] ) ) : ''; ?>" /><?php // @codingStandardsIgnoreLine ?>
			</p>
			<p class="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
				<label class="font-weight-bold text-body-default d-block w-100" for="password"><?php esc_html_e( 'Password', 'essentials' ); ?>&nbsp;<span class="required">*</span></label>
				<input class="form-control shadow w-100 woocommerce-Input woocommerce-Input--text input-text" type="password" name="password" id="password" autocomplete="current-password" />
			</p>

			<?php do_action( 'woocommerce_login_form' ); ?>

			<div class="form-row">
				<div class="form-check w-100 pix-mb-20 pix-pt-10">
					<input class="form-check-input" name="rememberme" type="checkbox" id="rememberme" value="forever" />
				<label for="rememberme" class="font-weight-bold text-body-default w-100 form-check-label">
					<span><?php esc_html_e( 'Remember me', 'essentials' ); ?></span>
				</label>
				</div>
				<?php wp_nonce_field( 'woocommerce-login', 'woocommerce-login-nonce' ); ?>
				<button type="submit" class="btn btn-primary btn-block mr-0 shadow-lg shadow-hover font-weight-bold" name="login" value="<?php esc_attr_e( 'Log in', 'essentials' ); ?>"><?php esc_html_e( 'Log in', 'essentials' ); ?></button>
			</div>
			<div class="woocommerce-LostPassword lost_password pix-mt-20">
				<a class="btn btn-sm btn-underline-gray-5 p-0 d-inline-block pix-hover-item secondary-font btn-lg font-weight-bold" href="<?php echo esc_url( wp_lostpassword_url() ); ?>">
					<span><?php esc_html_e( 'Lost your password?', 'essentials' ); ?></span>
					<i class="font-weight-bold pixicon-angle-right  pix-hover-right  ml-1"></i>
				</a>
			</div>

			<?php do_action( 'woocommerce_login_form_end' ); ?>

		</form>
		</div>
<?php if ( 'yes' === get_option( 'woocommerce_enable_myaccount_registration' )  ) : ?>


	<div class="col-12 col-md-6">

		<h4 class="font-weight-bold text-heading-default pix-mb-40"><?php esc_html_e( 'Register', 'essentials' ); ?></h4>

		<form method="post" class="woocommerce-form2 woocommerce-form-register2 register2 pix-mb-80 shadow-inverse-sm2 shadow-lg bg-white  rounded-xl pix-p-30" <?php do_action( 'woocommerce_register_form_tag' ); ?> >

			<?php do_action( 'woocommerce_register_form_start' ); ?>

			<?php if ( 'no' === get_option( 'woocommerce_registration_generate_username' ) ) : ?>

				<p class="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
					<label for="reg_username"><?php esc_html_e( 'Username', 'essentials' ); ?>&nbsp;<span class="required">*</span></label>
					<input type="text" class="form-control shadow w-100 woocommerce-Input woocommerce-Input--text input-text" name="username" id="reg_username" autocomplete="username" value="<?php echo ( ! empty( $_POST['username'] ) ) ? esc_attr( wp_unslash( $_POST['username'] ) ) : ''; ?>" /><?php // @codingStandardsIgnoreLine ?>
				</p>

			<?php endif; ?>

			<p class="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
				<label for="reg_email"><?php esc_html_e( 'Email address', 'essentials' ); ?>&nbsp;<span class="required">*</span></label>
				<input type="email" class="form-control shadow w-100 woocommerce-Input woocommerce-Input--text input-text" name="email" id="reg_email" autocomplete="email" value="<?php echo ( ! empty( $_POST['email'] ) ) ? esc_attr( wp_unslash( $_POST['email'] ) ) : ''; ?>" /><?php // @codingStandardsIgnoreLine ?>
			</p>

			<?php if ( 'no' === get_option( 'woocommerce_registration_generate_password' ) ) : ?>

				<p class="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
					<label for="reg_password"><?php esc_html_e( 'Password', 'essentials' ); ?>&nbsp;<span class="required">*</span></label>
					<input type="password" class="form-control shadow w-100 woocommerce-Input woocommerce-Input--text input-text" name="password" id="reg_password" autocomplete="new-password" />
				</p>

			<?php else : ?>

				<p><?php esc_html_e( 'A password will be sent to your email address.', 'essentials' ); ?></p>

			<?php endif; ?>

			<?php do_action( 'woocommerce_register_form' ); ?>

			<p class="woocommerce-FormRow form-row">
				<?php wp_nonce_field( 'woocommerce-register', 'woocommerce-register-nonce' ); ?>
				<button type="submit" class="btn btn-primary btn-block mr-0 shadow-lg shadow-hover font-weight-bold woocommerce-form-register__submit" name="register" value="<?php esc_attr_e( 'Register', 'essentials' ); ?>"><?php esc_html_e( 'Register', 'essentials' ); ?></button>
			</p>

			<?php do_action( 'woocommerce_register_form_end' ); ?>

		</form>

		</div>
	
<?php endif; ?>
</div>
</div>

<?php do_action( 'woocommerce_after_customer_login_form' ); ?>
