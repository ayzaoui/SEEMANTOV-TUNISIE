<?php if (!empty($message)) : ?>
	<div id="error" class="notice notice-success notice-newsletters <?php echo (!empty($dismissable)) ? 'is-dismissible' : ''; ?>" data-notice="<?php echo esc_attr($type); ?>">
		<p><i class="fa fa-check fa-fw"></i> <?php echo $message; ?></p>
	</div>
<?php endif; ?>