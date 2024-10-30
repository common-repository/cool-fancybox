<?php
/*
Plugin Name: Cool Fancybox
Description: Cool Fancybox for Images and Iframe dosplay.
Tags: Cool Fancybox, image, fancybox, lightbox, popup box, overlay 
Author URI: https://www.airboardpro.se
Author: Kjeld Hansen
Text Domain: cool_fancybox
Requires at least: 4.0
Tested up to: 4.4.2
Version: 1.0
*/
function cool_fancybox_scripts_js() {
    wp_enqueue_style( 'cool-fancybox-css', plugins_url( '/assets/cool-fancy-box.css', __FILE__) );
    wp_enqueue_script( 'cool-fancybox-js', plugins_url( '/assets/cool-fancy-box.js', __FILE__), array(), '1.0.0', true );
}
add_action( 'wp_enqueue_scripts', 'cool_fancybox_scripts_js' );
