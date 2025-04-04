<?php
/**
 * Plugin Name: Vinyl Marketing Site Customizations
 * Plugin URI: 
 * Description: 
 * Version: 0.0.12
 * Author: Randal Pope
 * Author URI: https://randal.io
 * License: GPL-2.0+
 * License URI: http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain: vm-custom
 */


function plugin_version(){
	$version = '0.0.12';
	return $version;
}


// If this file is called directly, abort.
if (!defined('WPINC')) {
    die;
}

/**
 * Enable block scripts for adding block styles.
 */
function vm_custom_enable_wp_block_scripts() {

	if ( get_option( 'vm-custom-wp-block-scripts', 1 ) == 1 ) {
		
		wp_enqueue_script(
			'gutenberg-starter-editor', 
			plugin_dir_url( __FILE__ ) . '/dist/js/editor.js', 
			array( 'wp-blocks', 'wp-dom' ), 
			plugin_version(),
			true
		);
		
		wp_enqueue_style('icon-styles', plugin_dir_url( __FILE__ ) . 'dist/css/fonts.css', array(), $version);
		wp_enqueue_style('main-styles', plugin_dir_url( __FILE__ ) . 'dist/css/main.css', array(), $version);
		
	}
}
add_action( 'enqueue_block_editor_assets', 'vm_custom_enable_wp_block_scripts' );


add_action('wp_body_open', function() {
	
	echo '<div data-scroll>';
	echo '  <div data-scroll-container>';
});
add_action('wp_footer', function() {
	echo '  </div>';
	echo '</div>';
	echo '<div class="vm-cursor" data-follow="1"><div class=""></div></div>';
});



function vm_custom_enable_frontend_assets() {


	wp_enqueue_style(
		'locomotive-scroll-css',
		plugin_dir_url(__FILE__) . 'dist/css/locomotive-scroll.min.css',
		array(),
		plugin_version()
	);

	wp_enqueue_script(
		'locomotive-scroll-js',
		plugin_dir_url(__FILE__) . 'dist/js/locomotive-scroll.min.js',
		array(),
		plugin_version(),
		true
	);

	wp_enqueue_script(
		'follow-js',
		plugin_dir_url(__FILE__) . 'dist/js/follow.min.js',
		array(),
		plugin_version(),
		true
	);

	wp_enqueue_script(
		'fidato-frontend',
		plugin_dir_url(__FILE__) . 'dist/js/main.js',
		array('jquery', 'locomotive-scroll-js', 'follow-js'),
		plugin_version(),
		true
	);


	wp_enqueue_style('main-styles', plugin_dir_url( __FILE__ ) . 'dist/css/main.css', array(),  plugin_version());
	wp_enqueue_style('icon-styles', plugin_dir_url( __FILE__ ) . 'dist/css/fonts.css', array(),  plugin_version());
}
add_action('wp_enqueue_scripts', 'vm_custom_enable_frontend_assets');



function add_button_wrapper_with_class( $button, $form ) {
    // Return without changes for the admin back-end.
    if ( is_admin() ){
        return $button;
    }
    return '<span class="gform_submit_button">'.$button . "</span>";
}
add_filter( 'gform_submit_button', 'add_button_wrapper_with_class', 10, 2 );


/**
 * Add data-scroll-section attribute to Kadence footer
 */
function add_scroll_section_to_kadence_footer($footer_html) {
    // Replace the opening footer tag with one containing our data attribute
    $footer_html = str_replace('<footer', '<footer data-scroll-section', $footer_html);
    return $footer_html;
}
add_filter('kadence_footer_markup', 'add_scroll_section_to_kadence_footer');