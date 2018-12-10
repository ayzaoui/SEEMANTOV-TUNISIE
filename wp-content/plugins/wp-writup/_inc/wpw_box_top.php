<?php
if (!defined('ABSPATH'))exit;
function wpw_mce_init( $init ) {
    $init['setup'] = "function( ed ) { ed.onKeyUp.add( function( ed, e ) { wpw_external_delay(function(){wpw_analyse_content(e)}); }); }";
    return $init;
}
function wpw_box_top( $post_type ) {
	$Get = new wpw_get_data( $post_type );
    global $post;
    require_once dirname( __FILE__ ) . '/wpw_ajx_translate.php';    
?>
<div id="wpw_box_top">
    <div id="wpw">
        <div class="title">
            <svg id="svg_logowritup" data-name="svg_logowritup" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 336.88 72.78"><defs><style>.cls-1{fill:#fff;}.cls-2{fill:#29c5e5;}.cls-3{fill:#393f3f;}</style></defs><title>logo-writup</title><path class="cls-1" d="M2007.28,342.55v26a14.68,14.68,0,0,1-29.35.52c0-.17,0-0.35,0-0.52v-16.7h-7.42v16.7c0,0.16,0,.31,0,0.46a14.68,14.68,0,0,1-29.35-.46v-26h-7.39v26a22.07,22.07,0,0,0,40.43,12.24,22.07,22.07,0,0,0,40.44-12.24v-26h-7.39Z" transform="translate(-1846.09 -335.9)"/><path class="cls-2" d="M2129.2,342.55v26a14.68,14.68,0,0,1-29.36,0v-26h-7.39v26a22.07,22.07,0,1,0,44.15,0v-26h-7.39Z" transform="translate(-1846.09 -335.9)"/><path class="cls-1" d="M2029.64,352.09v6.68q3.69-7.31,11.49-7.31v8.21h-2q-4.66,0-7.07,2.37t-2.4,8.21v20.19h-7.93V352.09h7.93Z" transform="translate(-1846.09 -335.9)"/><path class="cls-1" d="M2057.49,341a5,5,0,1,1-1.46-3.62A4.92,4.92,0,0,1,2057.49,341Zm-9,49.46V352.09h7.93v38.36h-7.93Z" transform="translate(-1846.09 -335.9)"/><path class="cls-1" d="M2085.41,358.56h-9.33V379.8a4.07,4.07,0,0,0,1,3.1,5,5,0,0,0,3.44.94h4.87v6.61h-6.27q-11.07,0-11.07-10.65V358.56h-4.52v-6.47h4.52v-9.54h8v9.54h9.33v6.47Z" transform="translate(-1846.09 -335.9)"/><path class="cls-2" d="M2164.94,351.46a17,17,0,0,1,12.88,5.47q5.15,5.47,5.15,14.2t-5.19,14.34a16.8,16.8,0,0,1-12.84,5.61A14.71,14.71,0,0,1,2157,389a15.74,15.74,0,0,1-5.43-5.68v25.41h-7.93v-56.6h7.93v6.82a15,15,0,0,1,5.4-5.4A15.3,15.3,0,0,1,2164.94,351.46Zm6.47,29.14a13.06,13.06,0,0,0,3.48-9.5q0-5.92-3.45-9.33a11.52,11.52,0,0,0-16.43.07q-3.44,3.48-3.45,9.4t3.45,9.43A11.24,11.24,0,0,0,2171.41,380.6Z" transform="translate(-1846.09 -335.9)"/><path class="cls-2" d="M1912,369.39v9.35a12.35,12.35,0,0,1-10.07,12.13h0a12.21,12.21,0,0,1-2.27.22,12.37,12.37,0,0,1-9-3.86,12.4,12.4,0,0,0,.75-4.24v-9.35h-4.14V383a8.24,8.24,0,0,1-5.78,7.85l-0.15,0a12.59,12.59,0,0,1-4.58,0l-0.15,0a8.24,8.24,0,0,1-5.78-7.85v-9.35h-4.14V383a12.44,12.44,0,0,0,.75,4.23,12.24,12.24,0,0,1-11.24,3.65h0a12.36,12.36,0,0,1-10.06-12.13v-9.35h4.13v9.35a8.11,8.11,0,0,0,1,3.94c0.19,0.29,3.4,4.9,7,.78,2.32-2.69-.53-8.59-0.53-8.59l0,0a24.46,24.46,0,0,1-3.42-12.53,24.71,24.71,0,1,1,46,12.53l0,0s-2.86,5.9-.53,8.59c3.6,4.14,6.82-.55,7-0.78a8.1,8.1,0,0,0,1-3.94v-9.35H1912Z" transform="translate(-1846.09 -335.9)"/><path class="cls-1" d="M1888.59,356.88a9.55,9.55,0,1,1-5.92-8.85,4.88,4.88,0,1,0,5.25,5.34A9.37,9.37,0,0,1,1888.59,356.88Z" transform="translate(-1846.09 -335.9)"/><path class="cls-3" d="M1887.92,353.37a4.88,4.88,0,1,1-5.25-5.34A9.61,9.61,0,0,1,1887.92,353.37Z" transform="translate(-1846.09 -335.9)"/><path class="cls-3" d="M1875,371.84s0.51,0.14,1.27.3c0.38,0.09.82,0.15,1.29,0.23a9.82,9.82,0,0,0,1.48.13,7.92,7.92,0,0,0,1.48,0,8.07,8.07,0,0,0,1.28-.22,6.46,6.46,0,0,0,.89-0.27l0.34-.12a5.12,5.12,0,0,1-1.13.7,5.45,5.45,0,0,1-1.31.41,8.29,8.29,0,0,1-1.57.13,10.36,10.36,0,0,1-1.55-.21,8.65,8.65,0,0,1-1.3-.41A6.1,6.1,0,0,1,1875,371.84Z" transform="translate(-1846.09 -335.9)"/></svg>
             <div class="wpw-NotActivated">
            <div id="wpw_activation_requiered" class="required_activation wpw_hide"><?php _e('Activation required','wp-writup');?></div>
            <div id="wpw_activation_actif">
            <input type="hidden" id="wpw_button_actif_pugin" name="wpw_button_actif_pugin" <?php if($Get->power == 1 or !isset($Get->power)){ echo 'value="1"'; }else{ echo 'value="0"'; } ?>>
            <input type="checkbox" id="wpw_actif" name="wpw_actif" <?php if($Get->power == 1 or !isset($Get->power)){ echo 'checked'; } ?>>
                <label for="wpw_actif"><span class="ui"></span></label>
            </div>
            </div> 
        </div>  




    </div>
</div>
<?php }