<?php
/*
Plugin Name: WP WritUp
Plugin URI: https://wp-writup.fr
Description: Le compagnon idéal pour la rédaction de vos pages de contenu WordPress.
Author: Dailycom Agency.
Version: 1.1.9
Text Domain: wp-writup
Domain Path: /languages/
*/  

/**
 * I LOVE WORDPRESS
 */
global $wpdb;

/**
 * Returns current plugin version.
 * @return string Plugin version
 */ 
function WPW_get_version() {
    if ( ! function_exists( 'get_plugins' ) )
        require_once( ABSPATH . 'wp-admin/includes/plugin.php' );
    $plugin_folder = get_plugins( '/' . plugin_basename( dirname( __FILE__ ) ) );
    $plugin_file = basename( ( __FILE__ ) );
    return $plugin_folder[$plugin_file]['Version'];
} 
// Récupération des indispensable
require_once dirname( __FILE__ ) . '/_inc/init.php';
$Cleaning = 'xed25';
WPW_get_define( WPW_get_version(), $Cleaning );

// Activate, Disabled
register_activation_hook( __FILE__, 'WPWriting_activation' );
register_deactivation_hook ( __FILE__, 'WPWriting_desactivation' );
/**
 * START ACTION
 */

add_action( 'plugins_loaded', 'WPWriting_init' );
add_action( 'wpmu_new_blog', 'WPWriting_CreateBlog', 10, 6 );
add_filter( 'wpmu_drop_tables', 'WPWriting_RemoveBlog' );
add_action( 'admin_print_styles-post-new.php', 'wpw_enqueue' );
add_action( 'admin_print_styles-post.php', 'wpw_enqueue' );
add_action( 'edit_form_top', 'wpw_box_top' );
add_filter( 'tiny_mce_before_init', 'wpw_mce_init' );
add_filter( 'script_loader_tag', 'wpw_add_attribute', 10, 3 );
add_filter( 'mce_css', 'wpw_editor_style' );
add_action( 'wp_head', 'wpw_metatags', 1);
add_filter( 'document_title_parts', 'wpw_metatitle' );
add_action( 'wp_ajax_wpw_update_act', 'wpw_update_act' );
add_action( 'wp_ajax_wpw_update_acc', 'wpw_update_acc' );
add_action( 'wp_ajax_wpw_update_acs', 'wpw_update_acs' );
add_action( 'wp_ajax_wpw_update_dls', 'wpw_update_dls' );
add_action( 'wp_ajax_wpw_update_clhlp', 'wpw_update_clhlp' );
add_action( 'admin_enqueue_scripts', 'wpw_setting_style' );
add_action( 'admin_enqueue_scripts', 'wpw_subscribes_style' );
add_filter( 'manage_posts_columns', 'wpw_posts_columns', 10, 2 );
add_action( 'manage_posts_custom_column', 'wpw_posts_columns_contenu', 10, 2 );
add_filter( 'manage_pages_columns', 'wpw_pages_columns', 10 );
add_action( 'manage_pages_custom_column', 'wpw_posts_columns_contenu', 10, 2 );
add_action('admin_head', 'wpw_style_admin');
/** 
 * LOAD LANGUAGE
 */ 
function WPWriting_init(){
    global $WPWriting;
    load_plugin_textdomain ( 'wp-writup', false, basename(rtrim(dirname(__FILE__), '/')) . '/languages' );
}
/**
 * ACTIVATING THE PLUGIN
 */
function WPWriting_activation($network_wide) {
    global $wpdb;
    if ( is_multisite() && $network_wide ) {
        $blog_ids = $wpdb->get_col( "SELECT blog_id FROM $wpdb->blogs" );
        foreach ( $blog_ids as $blog_id ) {
            switch_to_blog( $blog_id );
            WPWriting_CreateTable();
            restore_current_blog();
        }
    } else {
        WPWriting_CreateTable();
    }
}
/**
 * DEACTIVATION THE PLUGIN
 */
function WPWriting_desactivation() {
    global $wpdb;
    if ( is_multisite() && $network_wide ) {
        $blog_ids = $wpdb->get_col( "SELECT blog_id FROM $wpdb->blogs" );
        foreach ( $blog_ids as $blog_id ) {
            switch_to_blog( $blog_id );
            WPWriting_DelectTable();
            restore_current_blog();
        }
    } else {
        WPWriting_DelectTable();
    }
}
/**
 * CREATING THE DATABASE 
 */
function WPWriting_CreateTable(){
    global $wpdb;
    $wpw_db = $wpdb->prefix."wp_writup";
    if($wpdb->get_var("show tables like '{$wpw_db}'") != $wpw_db) 
    {        
        $wpw_sql_creat = "CREATE TABLE " . $wpw_db . " (`id` mediumint(9) NOT NULL AUTO_INCREMENT,`license` text,`agreement` text,`wpkey` text,`path` text,`install` text,`registration` text, `wpw_ukey` text, `wpw_token` text, `wpw_help` char(1), UNIQUE KEY id (id));";
        $wpdb->query($wpw_sql_creat);
        $wpw_install = wpw_genrandom_string(18);      
        $wpdb->query($wpdb->prepare("INSERT INTO $wpw_db (id,license,agreement,wpkey,path,install,wpw_ukey,wpw_token,wpw_help) VALUES(%d,%s,%s,%s,%s,%s,%s,%s,%d)", array(1,'','','','',$wpw_install,'','',1)));
    }  
}
/**
 * DELECT THE DATABASE 
 */
function WPWriting_DelectTable(){
    global $wpdb;
    $wpw_table = $wpdb->prefix."wp_writup";
    $sql = "DROP TABLE IF EXISTS " . $wpw_table. ";";
    $wpdb->query($sql);
}
/**
 * ADDING A NEW BLOG 
 */
function WPWriting_CreateBlog(){
    if(is_plugin_active_for_network( 'plugin-name/plugin-name.php')){
        switch_to_blog($blog_id);
        WPWriting_CreateTable();
        restore_current_blog();
    }
}
/**
 * REMOVE A BLOG 
 */
function WPWriting_RemoveBlog($wpw_table) {
    global $wpdb;
    $wpw_table[] = $wpdb->prefix.'wp_writup';
    return $wpw_table;
}
/**
 * SOLVE PROBLEMES AUTOMATICALLY
 */
function WPWriting_SolveProblemsAuto()
{
    WPWriting_desactivation();
    WPWriting_activation($network_wide);
    return true;
}



