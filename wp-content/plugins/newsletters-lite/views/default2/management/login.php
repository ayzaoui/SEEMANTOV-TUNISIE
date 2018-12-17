<?php
	
$updated = esc_html($_REQUEST['updated']);
$success = esc_html($_REQUEST['success']);
$error = esc_html($_REQUEST['error']);	
	
?>

<div class="newsletters newsletters-management-login">
	<?php if (!empty($errors)) : ?>
		<?php $this -> render('error', array('errors' => $errors), true, 'default'); ?>
	<?php endif; ?>

	<?php if (!empty($updated)) : ?>
		<?php if (!empty($success)) : ?>
			<div class="alert alert-success">
				<p><i class="fa fa-check"></i> <?php echo stripslashes($success); ?></p>
			</div>
		<?php endif; ?>
		<?php if (!empty($error)) : ?>
			<div class="alert alert-danger">
				<p><i class="fa fa-exclamation-triangle"></i> <?php echo stripslashes($error); ?></p>
			</div>
		<?php endif; ?>
	<?php endif; ?>

	<?php

	$email = (!empty($_POST['email'])) ? esc_html($_POST['email']) : false;
	$email = (!empty($_GET['email'])) ? esc_html($_GET['email']) : $email;

	$management_password = $this -> get_option('management_password');
	$col = (empty($management_password)) ? 12 : 6;

	?>

	<div class="row">
		<?php if (!empty($management_password)) : ?>
			<div class="col-md-<?php echo $col; ?>">
				<div class="newsletters newsletters_management_login">
					<h2><?php _e('Login', 'wp-mailinglist'); ?></h2>
					<p><?php _e('Login with your email and password below for access:', 'wp-mailinglist'); ?></p>
					<form action="<?php echo add_query_arg(array('newsletters_method' => "management_loginp", 'method' => "login"), $this -> get_managementpost(true)); ?>" method="post">
						<div class="form-group <?php echo (!empty($errors['emailp'])) ? 'has-error' : ''; ?>">
							<label for="emailp" class="control-label"><?php _e('Email Address:', 'wp-mailinglist'); ?></label>
							<input class="form-control" type="text" name="email" value="<?php echo esc_attr(stripslashes($_POST['email'])); ?>" id="emailp" />
						</div>

						<div class="form-group <?php echo (!empty($errors['password'])) ? 'has-error' : ''; ?>">
							<label for="password" class="control-label"><?php _e('Password', 'wp-mailinglist'); ?></label>
							<input class="form-control" type="password" name="password" value="<?php echo esc_attr(stripslashes($_POST['password'])); ?>" id="password" />
						</div>

						<div class="form-group">
							<button value="1" type="submit" name="login" class="newsletters_button btn btn-primary">
								<?php _e('Log In', 'wp-mailinglist'); ?>
							</button>
						</div>
					</form>
				</div>
			</div>
		<?php endif; ?>

		<div class="col-md-<?php echo $col; ?>">
			<div class="newsletters <?php echo $this -> pre; ?>" id="subscriberauthloginformdiv">
				<h2><?php _e('Send Login Link', 'wp-mailinglist'); ?></h2>
				<p><?php _e('Please fill in your subscriber email address below to get a login link.', 'wp-mailinglist'); ?></p>
			    <form class="form-inline" id="subscriberauthloginform" action="<?php echo $Html -> retainquery('newsletters_method=management_login&method=login', get_permalink($this -> get_managementpost())); ?>" method="post">
				    <div class="form-group <?php echo (!empty($errors['email'])) ? 'has-error' : ''; ?>">
			        	<label for="email" class="control-label"><?php _e('Email Address:', 'wp-mailinglist'); ?></label>
						<input class="form-control" type="text" placeholder="<?php echo esc_attr(stripslashes(__('Enter email address', 'wp-mailinglist'))); ?>" name="email" value="<?php echo esc_attr(stripslashes($email)); ?>" id="email" />
				    </div>
				    
				    <div class="form-group">
			        	<button value="1" type="submit" name="authenticate" class="newsletters_button btn btn-primary" id="authenticate">
			        		<?php _e('Send Link', 'wp-mailinglist'); ?>
			        	</button>
				    </div>
			    </form>
			</div>
		</div>
	</div>
</div>