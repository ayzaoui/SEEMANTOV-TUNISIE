<?php
if(!defined('ABSPATH'))exit;
function wpw_subscription_callback(){
    global $wpdb;
    $wpw_select = "select * from ".$wpdb->prefix."wp_writup where id='1'";
    $wpw_res = $wpdb->get_results($wpw_select);
    $wpw_row = $wpw_res[0];
    require_once dirname( __FILE__ ) . '/wpw_ajx_translate.php';
?>
	<div class="cd-user-modal">
		<div class="cd-user-modal-container">
			<ul class="cd-switcher">
				<li><a href="#0"><?php _e('Sign in','wp-writup');?></a></li>
				<li><a href="#0"><?php _e('New account','wp-writup');?></a></li>
			</ul>
            <div id="cd-login">
				<form class="cd-form">
                <div id="wpw_error_login" class="validation_error wpw_hide"></div>
                <div id="wpw_success_login" class="validation_success wpw_hide"></div>
					<p class="fieldset">
						<label class="image-replace cd-email" for="signin-email"><?php _e('E-mail','wp-writup');?></label>
						<input class="full-width has-padding has-border" id="signin-email" type="email" placeholder="<?php _e('E-mail','wp-writup');?>">
						<span class="cd-error-message"><?php _e('Error message here!','wp-writup');?></span>
					</p>

					<p class="fieldset">
						<label class="image-replace cd-password" for="signin-password"><?php _e('Password','wp-writup');?></label>
						<input class="full-width has-padding has-border" id="signin-password" type="password" autocomplete="new-password" placeholder="<?php _e('Password','wp-writup');?>">
						<a href="#0" class="hide-password"><?php _e('Show','wp-writup');?></a>
						<span class="cd-error-message"><?php _e('Error message here!','wp-writup');?></span>
					</p>
					<p id="wpw_submit_login" class="fieldset">
						<input class="full-width" type="submit" value="<?php _e('Login','wp-writup');?>">
					</p>
                    <li id="loader_id-65df65d0" class="laoder_ajax wpw_hide">
                        <div class="Loader Loader--full">
                        </div>
                    </li>
				</form>
				
				<p class="cd-form-bottom-message"><a href="#0"><?php _e('Forgot your password?','wp-writup');?></a></p>
			</div> 

			<div id="cd-signup">
				<form class="cd-form">
                <div id="wpw_error_sigup" class="validation_error wpw_hide"></div>
					<p class="fieldset">
						<label class="image-replace cd-username" for="signup-username"><?php _e('Username','wp-writup');?></label>
						<input class="full-width has-padding has-border" id="signup-username" type="text" placeholder="<?php _e('Username','wp-writup');?>">
						<span class="cd-error-message"><?php _e('Error message here!','wp-writup');?></span>
					</p>

					<p class="fieldset">
						<label class="image-replace cd-email" for="signup-email"><?php _e('E-mail','wp-writup');?></label>
						<input class="full-width has-padding has-border" id="signup-email" type="email" placeholder="<?php _e('E-mail','wp-writup');?>">
						<span class="cd-error-message"><?php _e('Error message here!','wp-writup');?></span>
					</p>

					<p class="fieldset">
						<label class="image-replace cd-password" for="signup-password"><?php _e('Password','wp-writup');?></label>
						<input class="full-width has-padding has-border" id="signup-password" type="password" autocomplete="new-password" placeholder="<?php _e('Password','wp-writup');?>">
						<a href="#0" class="hide-password"><?php _e('Show','wp-writup');?></a>
						<span class="cd-error-message"><?php _e('Error message here!','wp-writup');?></span>
                    </p>
					<p id="wpw_submit_signup" class="fieldset">
						<input class="full-width has-padding" type="submit" value="<?php _e('Create account','wp-writup');?>">
					</p>
                    <li id="loader_id-d5df4e0s" class="laoder_ajax wpw_hide">
                        <div class="Loader Loader--full">
                        </div>
                    </li>
				</form>
			</div>

			<div id="cd-reset-password"> 
				<p class="cd-form-message"><?php _e('Lost your password? Please enter your email address. You will receive a link to create a new password.','wp-writup');?></p>

				<form class="cd-form">
                <div id="wpw_error_resetpassword" class="validation_error wpw_hide"></div>
					<p class="fieldset">
						<label class="image-replace cd-email" for="reset-email"><?php _e('E-mail','wp-writup');?></label>
						<input class="full-width has-padding has-border" id="reset-email" type="email" placeholder="<?php _e('E-mail','wp-writup');?>">
						<span class="cd-error-message"><?php _e('Error message here!','wp-writup');?></span>
					</p>

					<p id="wpw_submit_resetpassword" class="fieldset">
						<input class="full-width has-padding" type="submit" value="<?php _e('Reset password','wp-writup');?>">
					</p>
                
                    <li id="loader_id-ui4ui0y5" class="laoder_ajax wpw_hide">
                        <div class="Loader Loader--full">
                        </div>
                    </li>
				</form>

				<p class="cd-form-bottom-message"><a href="#0"><?php _e('Back to log-in','wp-writup');?></a></p>
			</div>
            
			<div id="cd-change-password"> 
				<p class="cd-form-message"><?php _e('Enter your new password and validation code received by email.','wp-writup');?></p>

				<form class="cd-form">
				<input id="change-user" type="hidden" value="">
                <div id="wpw_error_changepassword" class="validation_error wpw_hide"></div>
					<p class="fieldset">
						<label class="image-replace cd-pincode" for="change-code"><?php _e('Code received by mail','wp-writup');?></label>
						<input class="full-width has-padding has-border" id="change-code" type="text" placeholder="<?php _e('Code received by mail','wp-writup');?>">
						<span class="cd-error-message"><?php _e('Error message here!','wp-writup');?></span>
					</p>

					<p class="fieldset">
						<label class="image-replace cd-password" for="change-password"><?php _e('New Password','wp-writup');?></label>
						<input class="full-width has-padding has-border" id="change-password" type="password" autocomplete="new-password" placeholder="<?php _e('New Password','wp-writup');?>">
						<a href="#0" class="hide-password"><?php _e('Show','wp-writup');?></a>
						<span class="cd-error-message"><?php _e('Error message here!','wp-writup');?></span>
					</p>
                    
					<p id="wpw_submit_changepassword" class="fieldset">
						<input class="full-width has-padding" type="submit" value="<?php _e('Validate password','wp-writup');?>">
					</p>
                    <li id="loader_id-tr048gfe" class="laoder_ajax wpw_hide">
                        <div class="Loader Loader--full">
                        </div>
                    </li>
				</form>

				<p class="cd-form-bottom-message"><a href="#0"><?php _e('Cancel','wp-writup');?></a></p>
			</div>
            
            
			<a href="#0" class="cd-close-form"><?php _e('Close','wp-writup');?></a>
		</div>
	</div>
<div id="modal_alert" class="cd-popup" role="alert">
	<div class="cd-popup-container">
		<p></p>
		<ul class="cd-buttons">
			<li><a id="wpw_yes" href="#"><?php _e('Yes','wp-writup');?></a></li>
			<li class="cd_popup_closed"><a href="#"><?php _e('No','wp-writup');?></a></li>
		</ul>
		<a href="#0" class="cd-popup-close img-replace"><?php _e('Close','wp-writup');?></a>
	</div>
</div>
<div class="wrap">
    <div id="wpw_setting">
        <div id="wpw_setting_top">
            <div class="logo"><svg id="svg_logowritup" data-name="svg_logowritup" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 336.88 72.78"><defs><style>.cls-1{fill:#fff;}.cls-2{fill:#29c5e5;}.cls-3{fill:#393f3f;}</style></defs><title>logo-writup</title><path class="cls-1" d="M2007.28,342.55v26a14.68,14.68,0,0,1-29.35.52c0-.17,0-0.35,0-0.52v-16.7h-7.42v16.7c0,0.16,0,.31,0,0.46a14.68,14.68,0,0,1-29.35-.46v-26h-7.39v26a22.07,22.07,0,0,0,40.43,12.24,22.07,22.07,0,0,0,40.44-12.24v-26h-7.39Z" transform="translate(-1846.09 -335.9)"/><path class="cls-2" d="M2129.2,342.55v26a14.68,14.68,0,0,1-29.36,0v-26h-7.39v26a22.07,22.07,0,1,0,44.15,0v-26h-7.39Z" transform="translate(-1846.09 -335.9)"/><path class="cls-1" d="M2029.64,352.09v6.68q3.69-7.31,11.49-7.31v8.21h-2q-4.66,0-7.07,2.37t-2.4,8.21v20.19h-7.93V352.09h7.93Z" transform="translate(-1846.09 -335.9)"/><path class="cls-1" d="M2057.49,341a5,5,0,1,1-1.46-3.62A4.92,4.92,0,0,1,2057.49,341Zm-9,49.46V352.09h7.93v38.36h-7.93Z" transform="translate(-1846.09 -335.9)"/><path class="cls-1" d="M2085.41,358.56h-9.33V379.8a4.07,4.07,0,0,0,1,3.1,5,5,0,0,0,3.44.94h4.87v6.61h-6.27q-11.07,0-11.07-10.65V358.56h-4.52v-6.47h4.52v-9.54h8v9.54h9.33v6.47Z" transform="translate(-1846.09 -335.9)"/><path class="cls-2" d="M2164.94,351.46a17,17,0,0,1,12.88,5.47q5.15,5.47,5.15,14.2t-5.19,14.34a16.8,16.8,0,0,1-12.84,5.61A14.71,14.71,0,0,1,2157,389a15.74,15.74,0,0,1-5.43-5.68v25.41h-7.93v-56.6h7.93v6.82a15,15,0,0,1,5.4-5.4A15.3,15.3,0,0,1,2164.94,351.46Zm6.47,29.14a13.06,13.06,0,0,0,3.48-9.5q0-5.92-3.45-9.33a11.52,11.52,0,0,0-16.43.07q-3.44,3.48-3.45,9.4t3.45,9.43A11.24,11.24,0,0,0,2171.41,380.6Z" transform="translate(-1846.09 -335.9)"/><path class="cls-2" d="M1912,369.39v9.35a12.35,12.35,0,0,1-10.07,12.13h0a12.21,12.21,0,0,1-2.27.22,12.37,12.37,0,0,1-9-3.86,12.4,12.4,0,0,0,.75-4.24v-9.35h-4.14V383a8.24,8.24,0,0,1-5.78,7.85l-0.15,0a12.59,12.59,0,0,1-4.58,0l-0.15,0a8.24,8.24,0,0,1-5.78-7.85v-9.35h-4.14V383a12.44,12.44,0,0,0,.75,4.23,12.24,12.24,0,0,1-11.24,3.65h0a12.36,12.36,0,0,1-10.06-12.13v-9.35h4.13v9.35a8.11,8.11,0,0,0,1,3.94c0.19,0.29,3.4,4.9,7,.78,2.32-2.69-.53-8.59-0.53-8.59l0,0a24.46,24.46,0,0,1-3.42-12.53,24.71,24.71,0,1,1,46,12.53l0,0s-2.86,5.9-.53,8.59c3.6,4.14,6.82-.55,7-0.78a8.1,8.1,0,0,0,1-3.94v-9.35H1912Z" transform="translate(-1846.09 -335.9)"/><path class="cls-1" d="M1888.59,356.88a9.55,9.55,0,1,1-5.92-8.85,4.88,4.88,0,1,0,5.25,5.34A9.37,9.37,0,0,1,1888.59,356.88Z" transform="translate(-1846.09 -335.9)"/><path class="cls-3" d="M1887.92,353.37a4.88,4.88,0,1,1-5.25-5.34A9.61,9.61,0,0,1,1887.92,353.37Z" transform="translate(-1846.09 -335.9)"/><path class="cls-3" d="M1875,371.84s0.51,0.14,1.27.3c0.38,0.09.82,0.15,1.29,0.23a9.82,9.82,0,0,0,1.48.13,7.92,7.92,0,0,0,1.48,0,8.07,8.07,0,0,0,1.28-.22,6.46,6.46,0,0,0,.89-0.27l0.34-.12a5.12,5.12,0,0,1-1.13.7,5.45,5.45,0,0,1-1.31.41,8.29,8.29,0,0,1-1.57.13,10.36,10.36,0,0,1-1.55-.21,8.65,8.65,0,0,1-1.3-.41A6.1,6.1,0,0,1,1875,371.84Z" transform="translate(-1846.09 -335.9)"/></svg></div>
            <a href="<?php echo admin_url('admin.php?page=wpw-setting&windows=login'); ?>">
                <div class="wpw_yoursub_login">
                    <div class="ico_add"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"> <g class="nc-icon-wrapper" fill="#ffffff"> <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"></path> </g> </svg></div><?php _e('Change account','wp-writup');?>
                </div>
            </a>
        </div>
        <div id="wpw_setting_content">
            <div class="inside">
                <div class="wpw_span_title">
                    <?php _e('Your subscriptions','wp-writup');?>
                </div>
                <div id="wpw_nosubscriptions" class="wpw_box wpw_hide">
                    <?php _e('You do not have any active subscription','wp-writup'); ?>  
                </div>
                <div id="yoursubscriptions"></div>
                <li id="loader_id-gh9547fe0" class="laoder_ajax">
                    <div class="Loader Loader--full"></div>
                </li>
                <div class="wpw_span_title wpw_mt20">
                    <?php _e('Subscribes to a subscription','wp-writup');?>
                </div>
                <div id="wpw_bloc_offers" class="wpw_hide">
                <div id="cd-form">
                <div id="wpw_BlocSub">
                    <ul id="wpw_offers" class="cd-pricing"></ul>
                    </div>
                    <div class="cd-form">
                        <div class="cd-plan-info"></div>
                        <div class="cd-more-info">
                            <div id="pay_secure"><img src="<?php echo plugins_url( '_assets/img/secure_https.png', __DIR__ ); ?>"/></div>
                            <p><?php _e('You can pay safely. The transaction is secured by SSL, it is done via the online payment systems stripe.','wp-writup');?></p>
                        </div>
                        <div id="stripe_secrue_logo">
                            <img src="<?php echo plugins_url( '_assets/img/stripe_secure.png', __DIR__ ); ?>"/>
                        </div>
                        <form action="/charge" mcd-formethod="post" id="payment-form">        
                            <input type="hidden" name="wpw_sub_pay" id="wpw_sub_pay">
                            <input type="hidden" name="wpw_ukey_pay" id="wpw_ukey_pay" value="<?php echo WPW_UKEY;?>">
                            <input type="hidden" name="wpw_token_pay" id="wpw_token_pay" value="<?php echo WPW_TOKEN;?>">
                            <input type="hidden" name="wpw_wpkey_pay" id="wpw_wpkey_pay" value="<?php echo WPW_WPKEY;?>">
                            <input type="hidden" name="wpw_install_pay" id="wpw_install_pay" value="<?php echo WPW_INSTALL;?>">
                            <li id="loader_id-stripe" class="laoder_ajax wpw_hide">
                                <div class="Loader Loader--full"></div>
                                <div class="text"><?php _e('We proceed to payment','wp-writup');?>...</div>
                            </li>
                            <fieldset id="wpw_accord" class="wpw_show">
                                <legend><?php _e('Validation of contracts','wp-writup');?></legend>
                                <p>
                                    <input type="checkbox" id="accept_trm_01">
                                    <label for="accept_trm_01"><?php echo sprintf(__('I have read the %s General Conditions of Sale and Use %s','wp-writup'), '<a target="_blanc" href="https://wp-writup.fr/cgv-cgu/">', '</a>'); ?></label>
                                </p>
                                <p>
                                    <input type="checkbox" id="accept_trm_02">
                                    <label for="accept_trm_02"><?php _e('I acknowledge that Dailycom will proceed to the immediate execution of the service as of the validation of my order and as such I expressly waive my right of withdrawal in accordance with the provisions of Article L.221-28 1 ° Of the Consumer Code.','wp-writup');?></label>
                                </p>
                            </fieldset>
                            <fieldset id="form_stripe" class="wpw_hide">
                                <legend><?php _e('Make payment for your subscription','wp-writup');?></legend>
                                <div class="cd-credit-card">
                                      <div class="form-row">
                                        <label for="card-element">
                                          <?php _e('Credit or debit card','wp-writup');?>
                                        </label>
                                        <div id="card-element"></div>
                                        <div id="card-errors" role="alert"></div>
                                      </div>
                                    <button><?php _e('Get started','wp-writup');?></button>
                                </div>
                                <div class="PaymentDesc">
                                    <div>
                                        <div class="tdsc"><?php _e('Subscription','wp-writup');?></div>
                                        <div id="wpw_price_sub" class="tpric"></div>
                                    </div>
                                    <div>
                                        <div class="tdsc"><?php _e('Stripe Fees','wp-writup');?></div>
                                        <div id="wpw_price_stripe" class="tpric"></div>
                                    </div>
                                </div>
                                <div class="PaymentTD">
                                   <div>
                                        <div class="desc"><?php _e('Amount charged','wp-writup');?></div>
                                        <div id="wpw_price_pay" class="price"></div>
                                    </div>
                                </div>
                            </fieldset>
                        </form>
                        <a href="#0" class="cd-close"></a>
                    </div> 
                    <div class="cd-overlay"></div>
                </div>
                    </div>
                <li id="loader_id-4df4fr0gre54" class="laoder_ajax">
                    <div class="Loader Loader--full"></div>
                </li>
            </div>   
        </div>
    </div>
</div>

<?php
}