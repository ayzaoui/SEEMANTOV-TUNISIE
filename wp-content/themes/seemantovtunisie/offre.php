<?php /* Template Name: Offre Emploi */ ?>
<?php get_header(); ?>

<section id="banner">
  <div class="container-full"> <img class="img-responsive banner-interne" src="<?php the_post_thumbnail_url();?>" title="<?php echo get_the_title(); ?>" alt="<?php echo get_the_title(); ?>" /> 
  <div class="title-page"><?php echo the_title(); ?></div>
  </div>
</section>
<section id="fh5co-work" data-section="about">
      <?php
     $args = array(
                   
                   'post_type' => 'offre',
                   'posts_per_page' => 9,
                   'paged' => ( get_query_var('paged') ? get_query_var('paged') : 1),
                   );

    query_posts($args);
	?>
      <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
  <div class="col-md-4 offre-emploi">
        <div class="fh5co-person text-center to-animate">
          <figure>
          <img src="<?php the_post_thumbnail('offre-emploi', array('class' => 'img-responsive')); ?></figure>
          <a href="<?php the_permalink(); ?>">
          <h3>
            <?php the_title(); ?>
          </h3>
          </a>
          <?php /*?> <span class="fh5co-position">par rapport aux tarifs en France</span><?php */?>
          <div class="detail-offre"><a href="<?php the_permalink(); ?>"<?php the_excerpt(); ?></a></div>
          <div>
          <div class="voir-detail"><a href="<?php the_permalink(); ?>">Détail</a></div>
          <div class="postulez"><a href="<?php echo site_url(); ?>/candidature-spontanee/">Postulez</a></div>
          </div>
        </div>
      </div>
      <?php endwhile;  ?>
      <?php endif; ?>
      <div class="clear">
      <?php wp_pagenavi(); ?>
      </div>
      <?php wp_reset_query(); ?>
      
</section>
<?php get_footer(); ?>
