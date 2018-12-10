<?php
if(!defined('ABSPATH'))exit;
function WPW_get_define($plugin_version,$clean_cache){
    /**
     * RECUPERE LA CONFIGURATION DU PLUGIN
     */
    function WPW_get_vlawutirh() {
        global $wpdb;        
        $wpw_table = $wpdb->prefix."wp_writup";
        $wpw_result = $wpdb->get_results($wpdb->prepare("SELECT * FROM $wpw_table WHERE id=%d", 1 ));
        $wpw_row = $wpw_result[0];
        return $wpw_row;
    }

    $wpw_data_plg = WPW_get_vlawutirh();
    /**
     * VA CHERCHER LE PATH DU WORDPRESS
     */
    function wpw_get_path($wp_url_admin){
        $wels = array("http://", "https://", "www.");
        $Server_Referer = str_replace($wels, "", $wp_url_admin);
        $Server_Referer_exp = explode("/", $Server_Referer);
        $Server_Path = base64_encode($Server_Referer_exp[0]);
        return $Server_Path;
    } 
    $wpw_path = wpw_get_path(admin_url());
    /**
     * DEFINIE LES VARIABLES
     */
    if(!empty($wpw_data_plg->path)){
        define("WPW_PATH", $wpw_data_plg->path);
    }else{
        define("WPW_PATH", $wpw_path); 
    } 
    define("WPW_VERSION", $plugin_version);
    define("WPW_CACHE", base64_encode('wpw_'.$clean_cache.'-'.$plugin_version));
    define("WPW_LICENSE", $wpw_data_plg->license);
    define("WPW_AGREEMENT", $wpw_data_plg->agreement);
    define("WPW_WPKEY", $wpw_data_plg->wpkey);
    define("WPW_UKEY", $wpw_data_plg->wpw_ukey);
    define("WPW_TOKEN", $wpw_data_plg->wpw_token);
    define("WPW_INSTALL", $wpw_data_plg->install);
    define("WPW_URL_AJAX", admin_url( 'admin-ajax.php'));
    define("WPW_URL_ADM", admin_url());
    define("WPW_URL_ASSETS", plugins_url( '_assets/', __DIR__ ));
    define("WPW_REGISTRATION", $wpw_data_plg->registration);
    define("WPW_STRIPE_PK", "pk_live_KSDAlLFm6ehXslwYyr8zeWId");
    define("WPW_HELP", $wpw_data_plg->wpw_help);
    define("WPW_EXTERNAL_API", 'https://api.wp-writup.com'); 
    define("WPW_EXTERNAL_UPDATE", 'https://update.wp-writup.com'); 
    define("WPW_EXTERNAL_ACC", 'https://acc.wp-writup.com');
}