<?php get_header(); ?>

<section id="banner">
  <div class="container-full"> <img class="img-responsive banner-interne" src="<?php echo wp_get_attachment_url( get_post_thumbnail_id( 17 ) ); ?>" title="<?php echo get_the_title(); ?>" alt="<?php echo get_the_title(); ?>" /> 
  <div class="title-page"><?php echo the_title(); ?></div>
  </div>
</section>
<section id="content">
  <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
  <div class="container container-medium">
  <div class="bloc-img"><?php the_post_thumbnail('offre-emploi', array('class' => 'img-responsive  bloc-center')); ?></div>
    <?php the_content(); ?>
  </div>
   <div class="postulez bloc-center"><a href="#exampleModalCenter" data-toggle="modal">Postulez</a></div>
  <?php endwhile;  ?>
  <?php endif; ?>
</section>
<?php get_footer(); ?>
