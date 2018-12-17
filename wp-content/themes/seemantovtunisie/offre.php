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
      <?php $id = get_the_ID(); ?>
      <?php /*?> <span class="fh5co-position">par rapport aux tarifs en France</span><?php */?>
      <div class="detail-offre"><a href="<?php the_permalink(); ?>"<?php the_excerpt(); ?></a></div>
      <div>
        <div class="voir-detail"><a href="<?php the_permalink(); ?>">Détail</a></div>
        <?php /*?><div class="postulez"><a href="#<?php echo $id; ?>" data-toggle="modal">Postulez</a></div><?php */?>
      </div>
    </div>
    <?php /*?><!-- Modal -->
    <div id="<?php echo $id; ?>" class="modal fade">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
            <div class="bloc-center title-poste"> Postulez pour la poste :
              <?php the_title(); ?>
            </div>
          </div>
          <div class="modal-body"> <?php echo do_shortcode('[vfb id=3]'); ?> </div>
        </div>
      </div>
    </div>
   <!-- Modal --> <?php */?>
    
  </div>
  <?php endwhile;  ?>
  <?php endif; ?>
  <div class="clear">
    <?php wp_pagenavi(); ?>
  </div>
  <?php wp_reset_query(); ?>
</section>
<?php get_footer(); ?>
