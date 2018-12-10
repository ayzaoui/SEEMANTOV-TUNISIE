<?php
if(!defined('ABSPATH'))exit;
function wpw_setting_callback(){
require_once dirname( __FILE__ ) . '/wpw_ajx_translate.php';
?>
<?php 
if($_GET['windows']=='login'){
    echo '<script type="application/javascript">$(document).ready(function() {$(".wpw_activate").trigger("click");});</script>';
}
if($_GET['windows']=='solveproblems'){
	WPWriting_SolveProblemsAuto();
    echo '<script type="application/javascript"> window.location.replace("'.WPW_URL_ADM.'admin.php?page=wpw-setting");</script>';
}
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

<div class="wrap">
    <div id="wpw_setting">
        <div id="wpw_setting_top">
            <div class="logo"><svg id="svg_logowritup" data-name="svg_logowritup" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 336.88 72.78"><defs><style>.cls-1{fill:#fff;}.cls-2{fill:#29c5e5;}.cls-3{fill:#393f3f;}</style></defs><title>logo-writup</title><path class="cls-1" d="M2007.28,342.55v26a14.68,14.68,0,0,1-29.35.52c0-.17,0-0.35,0-0.52v-16.7h-7.42v16.7c0,0.16,0,.31,0,0.46a14.68,14.68,0,0,1-29.35-.46v-26h-7.39v26a22.07,22.07,0,0,0,40.43,12.24,22.07,22.07,0,0,0,40.44-12.24v-26h-7.39Z" transform="translate(-1846.09 -335.9)"/><path class="cls-2" d="M2129.2,342.55v26a14.68,14.68,0,0,1-29.36,0v-26h-7.39v26a22.07,22.07,0,1,0,44.15,0v-26h-7.39Z" transform="translate(-1846.09 -335.9)"/><path class="cls-1" d="M2029.64,352.09v6.68q3.69-7.31,11.49-7.31v8.21h-2q-4.66,0-7.07,2.37t-2.4,8.21v20.19h-7.93V352.09h7.93Z" transform="translate(-1846.09 -335.9)"/><path class="cls-1" d="M2057.49,341a5,5,0,1,1-1.46-3.62A4.92,4.92,0,0,1,2057.49,341Zm-9,49.46V352.09h7.93v38.36h-7.93Z" transform="translate(-1846.09 -335.9)"/><path class="cls-1" d="M2085.41,358.56h-9.33V379.8a4.07,4.07,0,0,0,1,3.1,5,5,0,0,0,3.44.94h4.87v6.61h-6.27q-11.07,0-11.07-10.65V358.56h-4.52v-6.47h4.52v-9.54h8v9.54h9.33v6.47Z" transform="translate(-1846.09 -335.9)"/><path class="cls-2" d="M2164.94,351.46a17,17,0,0,1,12.88,5.47q5.15,5.47,5.15,14.2t-5.19,14.34a16.8,16.8,0,0,1-12.84,5.61A14.71,14.71,0,0,1,2157,389a15.74,15.74,0,0,1-5.43-5.68v25.41h-7.93v-56.6h7.93v6.82a15,15,0,0,1,5.4-5.4A15.3,15.3,0,0,1,2164.94,351.46Zm6.47,29.14a13.06,13.06,0,0,0,3.48-9.5q0-5.92-3.45-9.33a11.52,11.52,0,0,0-16.43.07q-3.44,3.48-3.45,9.4t3.45,9.43A11.24,11.24,0,0,0,2171.41,380.6Z" transform="translate(-1846.09 -335.9)"/><path class="cls-2" d="M1912,369.39v9.35a12.35,12.35,0,0,1-10.07,12.13h0a12.21,12.21,0,0,1-2.27.22,12.37,12.37,0,0,1-9-3.86,12.4,12.4,0,0,0,.75-4.24v-9.35h-4.14V383a8.24,8.24,0,0,1-5.78,7.85l-0.15,0a12.59,12.59,0,0,1-4.58,0l-0.15,0a8.24,8.24,0,0,1-5.78-7.85v-9.35h-4.14V383a12.44,12.44,0,0,0,.75,4.23,12.24,12.24,0,0,1-11.24,3.65h0a12.36,12.36,0,0,1-10.06-12.13v-9.35h4.13v9.35a8.11,8.11,0,0,0,1,3.94c0.19,0.29,3.4,4.9,7,.78,2.32-2.69-.53-8.59-0.53-8.59l0,0a24.46,24.46,0,0,1-3.42-12.53,24.71,24.71,0,1,1,46,12.53l0,0s-2.86,5.9-.53,8.59c3.6,4.14,6.82-.55,7-0.78a8.1,8.1,0,0,0,1-3.94v-9.35H1912Z" transform="translate(-1846.09 -335.9)"/><path class="cls-1" d="M1888.59,356.88a9.55,9.55,0,1,1-5.92-8.85,4.88,4.88,0,1,0,5.25,5.34A9.37,9.37,0,0,1,1888.59,356.88Z" transform="translate(-1846.09 -335.9)"/><path class="cls-3" d="M1887.92,353.37a4.88,4.88,0,1,1-5.25-5.34A9.61,9.61,0,0,1,1887.92,353.37Z" transform="translate(-1846.09 -335.9)"/><path class="cls-3" d="M1875,371.84s0.51,0.14,1.27.3c0.38,0.09.82,0.15,1.29,0.23a9.82,9.82,0,0,0,1.48.13,7.92,7.92,0,0,0,1.48,0,8.07,8.07,0,0,0,1.28-.22,6.46,6.46,0,0,0,.89-0.27l0.34-.12a5.12,5.12,0,0,1-1.13.7,5.45,5.45,0,0,1-1.31.41,8.29,8.29,0,0,1-1.57.13,10.36,10.36,0,0,1-1.55-.21,8.65,8.65,0,0,1-1.3-.41A6.1,6.1,0,0,1,1875,371.84Z" transform="translate(-1846.09 -335.9)"/></svg></div>
        </div>
        <div id="wpw_setting_content">
            <div class="inside">
                <div>
                <div class="wpw_span_title">
                        <?php _e('Activation status','wp-writup');?>
                </div>
                <div class="wpw_box">
                <div id="wpw_valid_trial" class="validation_success wpw_hide">
                    <svg class="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"><circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none"></circle><path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"></path></svg>
                    <p><?php _e('It is done ! We have activated your trial version, enjoy it well.', 'wp-writup');?></p>
                </div>
                <div id="wpw_valid_activation" class="validation_success wpw_hide">
                    <svg class="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"><circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none"></circle><path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"></path></svg>
                    <p><?php _e('Awesome ! The plugin is enabled on this wordpress, enjoy writing your articles!', 'wp-writup');?></p>
                </div>
                <div id="wpw_error_trial" class="validation_error wpw_hide">
                    <?php _e("Little scoundrel! You've already taken advantage of the trial version, it's time to checkout. We have an offer to suit your budget.", "wp-writup");?>
                </div>
                <li id="loader_id-S4sd5SZ0" class="laoder_ajax wpw_hide">
                    <div class="Loader Loader--full">
                    </div>
                    <div class="text"><?php _e('We check a few things','wp-writup');?> ...</div>
                </li>
                <div id="wpw_subscription_welcome" class="DayRemaining wpw_hide">
                    <div class="float_left wpw_actif">
                        <svg version="1.1" id="wpw_svg_welcome" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"viewBox="0 0 465.2 465.2" style="enable-background:new 0 0 465.2 465.2;" xml:space="preserve"><g><g id="Layer_2_16_"><g><path d="M279.591,423.714c-3.836,0.956-7.747,1.805-11.629,2.52c-10.148,1.887-16.857,11.647-14.98,21.804c0.927,4.997,3.765,9.159,7.618,11.876c3.971,2.795,9.025,4.057,14.175,3.099c4.623-0.858,9.282-1.867,13.854-3.008c10.021-2.494,16.126-12.646,13.626-22.662C299.761,427.318,289.618,421.218,279.591,423.714z"/><path d="M417.887,173.047c1.31,3.948,3.811,7.171,6.97,9.398c4.684,3.299,10.813,4.409,16.662,2.475c9.806-3.256,15.119-13.83,11.875-23.631c-1.478-4.468-3.118-8.95-4.865-13.314c-3.836-9.59-14.714-14.259-24.309-10.423c-9.585,3.834-14.256,14.715-10.417,24.308C415.271,165.528,416.646,169.293,417.887,173.047z"/><path d="M340.36,397.013c-3.299,2.178-6.704,4.286-10.134,6.261c-8.949,5.162-12.014,16.601-6.854,25.546c1.401,2.433,3.267,4.422,5.416,5.942c5.769,4.059,13.604,4.667,20.127,0.909c4.078-2.352,8.133-4.854,12.062-7.452c8.614-5.691,10.985-17.294,5.291-25.912C360.575,393.686,348.977,391.318,340.36,397.013z"/><path d="M465.022,225.279c-0.407-10.322-9.101-18.356-19.426-17.953c-10.312,0.407-18.352,9.104-17.947,19.422c0.155,3.945,0.195,7.949,0.104,11.89c-0.145,6.473,3.021,12.243,7.941,15.711c2.931,2.064,6.488,3.313,10.345,3.401c10.322,0.229,18.876-7.958,19.105-18.285C465.247,234.756,465.208,229.985,465.022,225.279z"/><path d="M414.835,347.816c-8.277-6.21-19.987-4.524-26.186,3.738c-2.374,3.164-4.874,6.289-7.434,9.298c-6.69,7.86-5.745,19.666,2.115,26.361c0.448,0.38,0.901,0.729,1.371,1.057c7.814,5.509,18.674,4.243,24.992-3.171c3.057-3.59,6.037-7.323,8.874-11.102C424.767,365.735,423.089,354.017,414.835,347.816z"/><path d="M442.325,280.213c-9.855-3.09-20.35,2.396-23.438,12.251c-1.182,3.765-2.492,7.548-3.906,11.253c-3.105,8.156-0.13,17.13,6.69,21.939c1.251,0.879,2.629,1.624,4.126,2.19c9.649,3.682,20.454-1.159,24.132-10.812c1.679-4.405,3.237-8.906,4.646-13.382C457.66,293.795,452.178,283.303,442.325,280.213z"/><path d="M197.999,426.402c-16.72-3.002-32.759-8.114-47.968-15.244c-0.18-0.094-0.341-0.201-0.53-0.287c-3.584-1.687-7.162-3.494-10.63-5.382c-0.012-0.014-0.034-0.023-0.053-0.031c-6.363-3.504-12.573-7.381-18.606-11.628C32.24,331.86,11.088,209.872,73.062,121.901c13.476-19.122,29.784-35.075,47.965-47.719c0.224-0.156,0.448-0.311,0.67-0.468c64.067-44.144,151.06-47.119,219.089-1.757l-14.611,21.111c-4.062,5.876-1.563,10.158,5.548,9.518l63.467-5.682c7.12-0.64,11.378-6.799,9.463-13.675L387.61,21.823c-1.908-6.884-6.793-7.708-10.859-1.833l-14.645,21.161C312.182,7.638,252.303-5.141,192.87,5.165c-5.986,1.036-11.888,2.304-17.709,3.78c-0.045,0.008-0.081,0.013-0.117,0.021c-0.225,0.055-0.453,0.128-0.672,0.189C123.122,22.316,78.407,52.207,46.5,94.855c-0.269,0.319-0.546,0.631-0.8,0.978c-1.061,1.429-2.114,2.891-3.145,4.353c-1.686,2.396-3.348,4.852-4.938,7.308c-0.199,0.296-0.351,0.597-0.525,0.896C10.762,149.191-1.938,196.361,0.24,244.383c0.005,0.158-0.004,0.317,0,0.479c0.211,4.691,0.583,9.447,1.088,14.129c0.027,0.302,0.094,0.588,0.145,0.89c0.522,4.708,1.177,9.427,1.998,14.145c8.344,48.138,31.052,91.455,65.079,125.16c0.079,0.079,0.161,0.165,0.241,0.247c0.028,0.031,0.059,0.047,0.086,0.076c9.142,9.017,19.086,17.357,29.793,24.898c28.02,19.744,59.221,32.795,92.729,38.808c10.167,1.827,19.879-4.941,21.703-15.103C214.925,437.943,208.163,428.223,197.999,426.402z"/><path d="M221.124,83.198c-8.363,0-15.137,6.78-15.137,15.131v150.747l137.87,71.271c2.219,1.149,4.595,1.69,6.933,1.69c5.476,0,10.765-2.982,13.454-8.185c3.835-7.426,0.933-16.549-6.493-20.384l-121.507-62.818V98.329C236.243,89.978,229.477,83.198,221.124,83.198z"/></g></svg>
                    </div>
                    <div class="float_left boxtext">
                        <div class="wpw_alert">
                        	<?php _e('If you have never used our plugin, you can activate it now.','wp-writup'); ?>
                        	</div>
                        <div class="wpw_setting_button"><?php _e('Activate now!','wp-writup');?></div>
                    </div>
                </div>
                <div id="wpw_subscription_trial" class="DayRemaining wpw_hide">
                    <div class="float_left wpw_actif">
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1000 1000" enable-background="new 0 0 1000 1000" xml:space="preserve"><g><path d="M500,10C229.8,10,10,229.8,10,500c0,270.2,219.8,490,490,490c270.2,0,490-219.8,490-490C990,229.8,770.2,10,500,10z M500,954.6C249.3,954.6,45.4,750.7,45.4,500C45.4,249.3,249.3,45.4,500,45.4c250.7,0,454.6,203.9,454.6,454.6C954.6,750.7,750.7,954.6,500,954.6z"/><path d="M647.3,356.9L431.8,572.4l-95.7-95.7c-13.8-13.8-36.2-13.8-50.1,0c-13.8,13.8-13.8,36.3,0,50.1l120.7,120.7c6.9,6.9,16,10.4,25,10.4c9.1,0,18.1-3.5,25-10.4L697.4,407c13.8-13.8,13.8-36.3,0-50.1S661.1,343.1,647.3,356.9z"/></g></svg>
                    </div>
                    <div class="float_left boxtext">
                        <div class="wpw_alert"><?php _e("Thanks for using WP WritUp! Your license is activated on your wordpress. To offer you a plugin that is always more efficient, we regularly update you. Each update of our plugin includes improvements in speed and reliability. As soon as other features are available, we will highlight them in the plugin.","wp-writup");?></div>
                        <a href="<?php echo WPW_URL_ADM.'post-new.php'; ?>"><div class="wpw_setting_button"><?php _e('Writing an article','wp-writup');?></div></a>
                        <a href="<?php echo WPW_URL_ADM.'post-new.php?post_type=page';?>"><div class="wpw_setting_button_2"><?php _e('Write a page','wp-writup');?></div></a>
                    </div>
                </div>
                
                <div id="wpw_subscription_expire" class="DayRemaining wpw_hide">
                    <div class="float_left boxnumber">
                        <div class="box">
                            <div class="numbers DayExpire">0</div>
                            <div class="text"><?php echo sprintf(_n('Day ramaining','Days ramainings', '0', 'wp-writup' ) ); ?></div>
                        </div>
                    </div>
                    <div class="float_left boxtext">
                        <div class="wpw_alert"><?php _e("The best things have an end, your trial version is over. You do not need to be sad, it's time for you to activate your version, no data will be lost during this process.","wp-writup");?></div>
                        <div class="wpw_setting_button wpw_activate"><?php _e('Activate now!','wp-writup');?></div>
                    </div>
                </div>
                    
                <div id="wpw_subscription_delete" class="DayRemaining wpw_hide">
                    <div class="float_left wpw_delete">
                        <svg version="1.1" id="wpw_svg_delect" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 511.999 511.999" style="enable-background:new 0 0 511.999 511.999;" xml:space="preserve"><circle style="fill:#E21B1B;" cx="255.999" cy="255.999" r="255.999"/><g><rect x="244.002" y="120.008" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -106.0397 256.0022)" style="fill:#FFFFFF;" width="24" height="271.988"/><rect x="120.008" y="244.007" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -106.0428 256.0035)" style="fill:#FFFFFF;" width="271.988" height="24"/></g></svg>
                    </div>
                    <div class="float_left boxtext">
                        <div class="wpw_alert"><?php _e("It's a bad day for Octave. You may have turned off wordpress from your license or some unusual things to product deactivating the license. To continue using the plugin you need to activate your wordpress.","wp-writup");?></div>
                        <div class="wpw_setting_button wpw_activate "><?php _e('Activate now!','wp-writup');?></div>
                    </div>
                </div>
                    
                <div id="wpw_subscription_warling" class="DayRemaining wpw_hide">
                    <div class="float_left wpw_warling">
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"> <g class="nc-icon-wrapper" fill="#e21b1b"> <path d="M2 42h44L24 4 2 42zm24-6h-4v-4h4v4zm0-8h-4v-8h4v8z"></path> </g> </svg>
                    </div>
                    <div class="float_left boxtext">
                        <div class="wpw_alert"><?php _e("It did not go well. We can check and try to correct the problem automatically for that click on the button 'Correct the problem'. If the problem persists, you must disable and then reactivate the plug-in, we advise you to install the latest version available in the WordPress library.","wp-writup");?></div>
						<a href="<?php echo WPW_URL_ADM.'admin.php?page=wpw-setting&windows=solveproblems';?>"><div class="wpw_setting_button"><?php _e('Correct the problem','wp-writup');?></div></a>
                    </div>
                </div>
                    
                <div id="wpw_subscription_actif" class="DayRemaining wpw_hide">
                    <div class="float_left wpw_actif">
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1000 1000" enable-background="new 0 0 1000 1000" xml:space="preserve"><g><path d="M500,10C229.8,10,10,229.8,10,500c0,270.2,219.8,490,490,490c270.2,0,490-219.8,490-490C990,229.8,770.2,10,500,10z M500,954.6C249.3,954.6,45.4,750.7,45.4,500C45.4,249.3,249.3,45.4,500,45.4c250.7,0,454.6,203.9,454.6,454.6C954.6,750.7,750.7,954.6,500,954.6z"/><path d="M647.3,356.9L431.8,572.4l-95.7-95.7c-13.8-13.8-36.2-13.8-50.1,0c-13.8,13.8-13.8,36.3,0,50.1l120.7,120.7c6.9,6.9,16,10.4,25,10.4c9.1,0,18.1-3.5,25-10.4L697.4,407c13.8-13.8,13.8-36.3,0-50.1S661.1,343.1,647.3,356.9z"/></g></svg>
                    </div>
                    <div class="float_left boxtext">
                        <div class="wpw_alert"><?php _e("Thanks for using WP WritUp! Your license is activated on your wordpress. To offer you a plugin that is always more efficient, we regularly update you. Each update of our plugin includes improvements in speed and reliability. As soon as other features are available, we will highlight them in the plugin.","wp-writup");?></div>
                        <a href="<?php echo WPW_URL_ADM.'post-new.php'; ?>"><div class="wpw_setting_button"><?php _e('Writing an article','wp-writup');?></div></a>
                        <a href="<?php echo WPW_URL_ADM.'post-new.php?post_type=page';?>"><div class="wpw_setting_button_2"><?php _e('Write a page','wp-writup');?></div></a>
                    </div>
                </div>
                </div>
            </div>
            <div id="wpw_setting_wpsub" class="wpw_hide">
                <div class="wpw_span_title">
                        <?php _e('Subscribe to this wordpress','wp-writup');?>
                </div>
                <div class="wpw_box">
                    <div class="wpw_yoursub_box_title">
                        <div class="wpw_yoursub_title"></div>
                        <div class="wpw_yoursub_bttadd wpw_activate">
                            <div class="ico_add"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"> <g class="nc-icon-wrapper" fill="#ffffff"> <path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"></path> </g> </svg></div><?php _e('Manage your subscription','wp-writup');?></div> 
                    </div>
                </div>  
            </div>
            </div>
        </div>
    </div>
</div>
<?php
}