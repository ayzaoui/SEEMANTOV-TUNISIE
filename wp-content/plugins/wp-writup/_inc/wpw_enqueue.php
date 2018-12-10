<?php 
if(!defined('ABSPATH'))exit;
function wpw_enqueue() {
  wp_enqueue_style( 'wpw_style', plugins_url( '_assets/css/wpw_style.css', __DIR__ ),'',WPW_CACHE);
    wp_enqueue_style( 'wpw_modal_help', plugins_url( '_assets/css/wpw_modal_help.css', __DIR__ ),'',WPW_CACHE);
    wp_enqueue_style( 'wpw_modal_intro', plugins_url( '_assets/css/wpw_modal_intro.css', __DIR__ ),'',WPW_CACHE);
  wp_enqueue_script( 'wpw-start', plugins_url( '_assets/js/_fctn/wpw_start.js', __DIR__ ),'','',WPW_CACHE);
    wp_enqueue_script( 'wpw-modal-intro', plugins_url( '_assets/js/_fctn/wpw_modal_intro.js', __DIR__ ),'',WPW_CACHE); 
  wp_enqueue_script( 'wpw-metabox', plugins_url( '_assets/js/_fctn/wpw_metabox.js', __DIR__ ),'',WPW_CACHE);    
    wp_enqueue_script( 'wpw-global', plugins_url( '_assets/js/_fctn/wpw_global.js', __DIR__ ),'',WPW_CACHE);
  wp_enqueue_script( 'wpw-turnapp', plugins_url( '_assets/js/_fctn/wpw_turnapp.js', __DIR__ ),'',WPW_CACHE);
    wp_enqueue_script( 'wpw-modernizr', plugins_url( '_assets/js/lib/modernizr.min.js', __DIR__ ),'',WPW_CACHE);
  wp_enqueue_script( 'wpw-modal-help', plugins_url( '_assets/js/_fctn/wpw_modal_help.js', __DIR__ ),'',WPW_CACHE);
  wp_enqueue_script( 'wpw-autosuggest', plugins_url( '_assets/js/_fctn/wpw_autosuggest.js', __DIR__ ),'',WPW_CACHE);
  wp_enqueue_script( 'wpw-suggest-slurm', plugins_url( '_assets/js/_fctn/wpw_suggest_slurm.js', __DIR__ ),'',WPW_CACHE);
  wp_enqueue_script( 'wpw-analyse-content', plugins_url( '_assets/js/_fctn/wpw_analyse_content.js', __DIR__ ),'',WPW_CACHE);
  wp_enqueue_script( 'wpw-highlighting', plugins_url( '_assets/js/_fctn/wpw_highlighting.js', __DIR__ ),'',WPW_CACHE);
    wp_enqueue_script( 'wpw-mark', plugins_url( '_assets/js/lib/mark.min.js', __DIR__ ),'',WPW_CACHE);
    wp_enqueue_script( 'wpw-jqcloud', plugins_url( '_assets/js/lib/jqcloud.min.js', __DIR__ ),'',WPW_CACHE);
    if(get_locale()=="ar"){
     wp_enqueue_style( 'wpw_lng_ar', plugins_url( '_assets/css/wpw_lng_ar.css', __DIR__ ),'',WPW_CACHE);    
    }
}
function wpw_editor_style( $mce_css ){
    $mce_css .= ', ' . plugins_url( '_assets/css/wpw_editor.css', __DIR__ );
    return $mce_css;
}
function wpw_setting_style($hook) {
  if ( 'toplevel_page_wpw-setting' != $hook and 'toplevel_page_wpw-subscription' != $hook) {
        return;
    }
    wp_enqueue_style( 'wpw_setting', plugins_url( '_assets/css/wpw_setting.css', __DIR__ ),'',WPW_CACHE);
    wp_enqueue_style( 'wpw_modal_windows', plugins_url( '_assets/css/wpw_modal_windows.css', __DIR__ ),'',WPW_CACHE);
    wp_enqueue_script( 'wpw-setting', plugins_url( '_assets/js/_fctn/wpw_setting.js', __DIR__ ),'',WPW_CACHE);
    wp_enqueue_script( 'wpw-modernizr', plugins_url( '_assets/js/lib/modernizr.min.js', __DIR__ ),'',WPW_CACHE);
    wp_enqueue_script( 'wpw-modal-windows', plugins_url( '_assets/js/_fctn/wpw_modal_windows.js', __DIR__ ),'',WPW_CACHE);
    wp_enqueue_script( 'wpw-acc', plugins_url( '_assets/js/_fctn/wpw_acc.js', __DIR__ ),'',WPW_CACHE);
}
function wpw_subscribes_style($hook) {
  if ( 'toplevel_page_wpw-subscription' != $hook ) {
        return;
    }
    wp_enqueue_style( 'wpw_modal_animated', plugins_url( '_assets/css/wpw_modal_animated.css', __DIR__ ),'',WPW_CACHE);
    wp_enqueue_style( 'wpw_modal_alert', plugins_url( '_assets/css/wpw_modal_alert.css', __DIR__ ),'',WPW_CACHE);
    wp_enqueue_style( 'wpw_stripe', plugins_url( '_assets/css/wpw_stripe.css', __DIR__ ),'',WPW_CACHE);
    wp_enqueue_script( 'wpw-modernizr', plugins_url( '_assets/js/lib/modernizr.min.js', __DIR__ ),'',WPW_CACHE);
    wp_enqueue_script( 'wpw-velocity', plugins_url( '_assets/js/lib/velocity.min.js', __DIR__ ),'',WPW_CACHE);
    wp_enqueue_script( 'wpw-modal-animated', plugins_url( '_assets/js/_fctn/wpw_modal_animated.js', __DIR__ ),'',WPW_CACHE);
    wp_enqueue_script( 'wpw-manage-sub', plugins_url( '_assets/js/_fctn/wpw_manage_subscription.js', __DIR__ ),'',WPW_CACHE);
    wp_enqueue_script( 'wpw-stripe-lib', plugins_url( '_assets/js/lib/stripe.min.js', __DIR__ ),'',WPW_CACHE);  
    wp_enqueue_script( 'wpw-stripe', plugins_url( '_assets/js/_fctn/wpw_stripe.js', __DIR__ ),'',WPW_CACHE);
}
function wpw_style_admin($hook){
    wp_enqueue_style( 'wpw_admin', plugins_url( '_assets/css/wpw_admin.css', __DIR__ ),'',WPW_CACHE);
}
function wpw_add_attribute($tag, $handle) {
  switch( $handle ) {
    case 'wpw-analyse-content':
      $tag =  str_replace( " src", " id='wpw_analyse_content' wpwv='".WPW_VERSION."' wpw_license='".WPW_LICENSE."' wpw_ukey='".WPW_UKEY."' wpw_token='".WPW_TOKEN."' wpw_path='".WPW_PATH."' wpw_ysu='".WPW_UKEY."' wpw_wpkey='".WPW_WPKEY."' wpw_agreement='".WPW_AGREEMENT."' wpw_install='".WPW_INSTALL."' wpw_url_adm='".WPW_URL_ADM."' wpw_external_api='".WPW_EXTERNAL_API."' wpw_external_update='".WPW_EXTERNAL_UPDATE."' src", $tag );
    case 'wpw-acc':
      $tag = str_replace( " src", " id='wpw_acc' wpw_url_ajax='".WPW_URL_AJAX."' wpw_url_adm='".WPW_URL_ADM."' wpw_external_acc='".WPW_EXTERNAL_ACC."' src", $tag );
      break;
    case 'wpw-modal-intro':
      $tag = str_replace( " src", " id='wpw_modal_intro' wpw_url_ajax='".WPW_URL_AJAX."' src", $tag );
      break;     
    case 'wpw-manage-sub':
      $tag = str_replace( " src", " id='wpw_manage_sub' wpw_url_ajax='".WPW_URL_AJAX."' wpw_ukey='".WPW_UKEY."' wpw_token='".WPW_TOKEN."' wpw_path='".WPW_PATH."' wpw_ysu='".WPW_UKEY."' wpw_wpkey='".WPW_WPKEY."' wpw_license='".WPW_LICENSE."' wpw_agreement='".WPW_AGREEMENT."' wpw_install='".WPW_INSTALL."' wpw_url_adm='".WPW_URL_ADM."' wpw_external_acc='".WPW_EXTERNAL_ACC."' src", $tag );
      break;  
    case 'wpw-stripe':
      $tag = str_replace( " src", " id='wpw_stripe' wpw_pk_key='".WPW_STRIPE_PK."' wpw_url_ajax='".WPW_URL_AJAX."' wpw_url_adm='".WPW_URL_ADM."' wpw_external_acc='".WPW_EXTERNAL_ACC."' src", $tag );
      break;
    case 'wpw-setting':
      $tag = str_replace( " src", " id='wpw_setting' wpw_url_ajax='".WPW_URL_AJAX."' wpw_registration='".WPW_REGISTRATION."' wpw_license='".WPW_LICENSE."' wpw_path='".WPW_PATH."' wpw_wpkey='".WPW_WPKEY."' wpw_agreement='".WPW_AGREEMENT."' wpw_install='".WPW_INSTALL."' wpw_url_adm='".WPW_URL_ADM."' wpw_external_acc='".WPW_EXTERNAL_ACC."' src", $tag );
      break;
    case 'wpw-suggest-slurm':
      $tag = str_replace( " src", " id='wpw_suggest_slurm' wpw_external_api='".WPW_EXTERNAL_API."' src", $tag );
      break;
    case 'wpw-autosuggest':
      $tag = str_replace( " src", " id='wpw_autosuggest' wpw_external_api='".WPW_EXTERNAL_API."' src", $tag );
      break;
    case 'wpw-stripe':
      $tag = str_replace( " src", " id='wpw_stripe' wpw_pk_key='".WPW_STRIPE_PK."' wpw_url_ajax='".WPW_URL_AJAX."' wpw_url_adm='".WPW_URL_ADM."' src", $tag );
      break;
  }
  return $tag;
}