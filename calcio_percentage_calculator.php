<?php
/*
Plugin Name: Percentage Calculator by Calculator.iO
Plugin URI: https://www.calculator.io/percentage-calculator/
Description: Instantly calculate percentages, percentage change, and percent differences with our free Percentage Calculator. Get fast, accurate results in seconds!
Version: 1.0.0
Author: www.calculator.io / Percentage Calculator
Author URI: https://www.calculator.io/
License: GPLv2 or later
Text Domain: calcio_percentage_calculator
*/

if (!defined('ABSPATH')) exit;

if (!function_exists('add_shortcode')) return "No direct call for Percentage Calculator by www.calculator.io";

function calcio_percentage_calculator_shortcode(){
    $page = 'index.html';
    return '<h2><img src="' . esc_url(plugins_url('assets/images/icon-48.png', __FILE__ )) . '" width="48" height="48">Percentage Calculator</h2><div><iframe style="background:transparent; overflow: scroll" src="' . esc_url(plugins_url($page, __FILE__ )) . '" width="100%" frameBorder="0" allowtransparency="true" onload="this.style.height = this.contentWindow.document.documentElement.scrollHeight + \'px\';" id="calcio_percentage_calculator_iframe"></iframe></div>';
}


add_shortcode( 'calcio_percentage_calculator', 'calcio_percentage_calculator_shortcode' );