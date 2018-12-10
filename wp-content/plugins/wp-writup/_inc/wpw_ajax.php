<?php
if(!defined('ABSPATH'))exit;
function wpw_update_act(){
    global $wpdb;    
    $wpw_table = $wpdb->prefix."wp_writup";
    $wpdb->query($wpdb->prepare("UPDATE $wpw_table SET wpkey=%s, path=%s, registration=%s WHERE id=%d", sanitize_text_field($_POST['wpw_wpkey']), sanitize_text_field($_POST['wpw_path']), sanitize_text_field($_POST['wpw_registration']), 1 ));
    define("WPW_GET_DEFINE", '0');
}
function wpw_update_acc(){
    global $wpdb;
    $wpw_table = $wpdb->prefix."wp_writup";
    $wpdb->query($wpdb->prepare("UPDATE $wpw_table SET wpw_ukey=%s, wpw_token=%s WHERE id=%d", sanitize_text_field($_POST['wpw_ukey']), sanitize_text_field($_POST['wpw_token']), 1 ));
    define("WPW_GET_DEFINE", '0');
}
function wpw_update_acs(){
    global $wpdb;
    $wpw_table = $wpdb->prefix."wp_writup";
    $wpdb->query($wpdb->prepare("UPDATE $wpw_table SET license=%s, agreement=%s, wpkey=%s, path=%s, registration=%s WHERE id=%d", sanitize_text_field($_POST['wpw_license']), sanitize_text_field($_POST['wpw_agreement']), sanitize_text_field($_POST['wpw_wpkey']), sanitize_text_field($_POST['wpw_path']), sanitize_text_field($_POST['wpw_registration']), 1 ));
    define("WPW_GET_DEFINE", '0');
}
function wpw_update_dls(){
    global $wpdb;
    $wpw_table = $wpdb->prefix."wp_writup";
    $wpdb->query($wpdb->prepare("UPDATE $wpw_table SET license=%s, agreement=%s, wpkey=%s, registration=%s WHERE id=%d", '', '', '', '', 1 ));
    define("WPW_GET_DEFINE", '0');
}
function wpw_update_clhlp(){
    global $wpdb;
    $wpw_table = $wpdb->prefix."wp_writup";
    $wpdb->query($wpdb->prepare("UPDATE $wpw_table SET wpw_help=%d WHERE id=%d", '0', 1 ));
    define("WPW_GET_DEFINE", '0');
}