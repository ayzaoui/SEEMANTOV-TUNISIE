<?php /* Template Name: CMS */ ?>
<?php get_header(); ?>

<section id="banner">
  <div class="container-full"> <img class="img-responsive banner-interne" src="<?php the_post_thumbnail_url();?>" title="<?php echo get_the_title(); ?>" alt="<?php echo get_the_title(); ?>" /> 
  <h1 class="title-page"><?php echo the_title(); ?></h1>
  </div>
</section>
<section id="content">
  <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
  <div class="container container-medium">
    <?php the_content(); ?>
  </div>
  <?php endwhile;  ?>
  <?php endif; ?>
</section>
<?php /*?><div class="json-test">
<?php $request = wp_remote_get( 'https://pippinsplugins.com/edd-api/products' );

if( is_wp_error( $request ) ) {
	return false; // Bail early
}

$body = wp_remote_retrieve_body( $request );

$data = json_decode( $body );
if( ! empty( $data ) ) {
	
	echo '<ul>';
	foreach( $data->products as $product ) {
		echo '<li>';
			echo '<a href="' . esc_url( $product->info->link ) . '">' . $product->info->title . '</a>';
		echo '</li>';
	}
	echo '</ul>';
}
?>
</div><?php */?>
<?php get_footer(); ?>
