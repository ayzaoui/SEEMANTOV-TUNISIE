<?php /* Template Name: CMS */ ?>
<?php get_header(); ?>

<section id="banner">
  <div class="container-full"> <img class="img-responsive banner-interne" src="<?php the_post_thumbnail_url();?>" title="<?php echo get_the_title(); ?>" alt="<?php echo get_the_title(); ?>" /> 
  <div class="title-page"><?php echo the_title(); ?></div>
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
<?php get_footer(); ?>
