<?php
/**
 * Plugin Name: Vinyl Marketing Site Customizations
 * Plugin URI: 
 * Description: 
 * Version: 0.0.5
 * Author: Randal Pope
 * Author URI: https://randal.io
 * License: GPL-2.0+
 * License URI: http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain: vm-custom
 */

 $version = '0.0.5';

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
			filemtime( plugin_dir_url( __FILE__ ) . 'dist/js/editor.js' ),
			true
		);
		
		wp_enqueue_style('icon-styles', plugin_dir_url( __FILE__ ) . 'dist/css/fonts.css');
		wp_enqueue_style('main-styles', plugin_dir_url( __FILE__ ) . 'dist/css/main.css');
		
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
		$version
	);

	wp_enqueue_script(
		'locomotive-scroll-js',
		plugin_dir_url(__FILE__) . 'dist/js/locomotive-scroll.min.js',
		array(),
		$version,
		true
	);

	wp_enqueue_script(
		'follow-js',
		plugin_dir_url(__FILE__) . 'dist/js/follow.min.js',
		array(),
		$version,
		true
	);

	wp_enqueue_script(
		'fidato-frontend',
		plugin_dir_url(__FILE__) . 'dist/js/main.js',
		array('jquery', 'locomotive-scroll-js', 'follow-js'),
		$version,
		true
	);


	wp_enqueue_style('main-styles', plugin_dir_url( __FILE__ ) . 'dist/css/main.css');
	wp_enqueue_style('icon-styles', plugin_dir_url( __FILE__ ) . 'dist/css/fonts.css');
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