<?php /* Template Name: Accueil */ ?>
<?php get_header();?>

<div id="slider-index">
  <?php query_posts('post_type=banner&showposts=-1&order=DESC') ?>
  <?php  while ( have_posts() ) : the_post(); ?>
  <section class="fh5co-home" data-section="home" style="background-image: url(<?php the_post_thumbnail_url('banner-index', array('class' => 'img-responsive')); ?>);" data-stellar-background-ratio="0.5">
    <div class="gradient"></div>
    <div class="container">
      <div class="text-wrap">
        <div class="text-inner">
          <div class="row">
            <div class="col-md-8 col-md-offset-2">
              <h1 class="to-animate">
                <?php the_title(); ?>
              </h1>
              <h2 class="to-animate">
                <?php the_content(); ?>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="slant"></div>
  </section>
  <?php endwhile; ?>
  <?php wp_reset_query(); ?>
</div>
<section id="fh5co-intro" data-section="work">
  <div class="container">
    <div class="row row-bottom-padded-lg">
      <?php query_posts('page_id=61'); ?>
      <?php while (have_posts()) : the_post(); ?>
      <div class="fh5co-block to-animate" style="background-image: url(<?php bloginfo("stylesheet_directory"); ?>/assets/images/img_10.jpg);">
        <div class="overlay-darker"></div>
        <div class="overlay"></div>
        <div class="fh5co-text"> <i class="fh5co-intro-icon icon-rocket"></i>
          <h2>
            <?php the_title(); ?>
          </h2>
          <p><?php echo excerpt(20); ?></p>
          <p><a href="<?php echo site_url(); ?>/nos-services/recrutement/" class="btn btn-primary">Commencez la mission!</a></p>
          <?php endwhile;?>
          <?php wp_reset_query(); ?>
        </div>
      </div>
      <?php query_posts('page_id=63'); ?>
      <?php while (have_posts()) : the_post(); ?>
      <div class="fh5co-block to-animate" style="background-image: url(<?php bloginfo("stylesheet_directory"); ?>/assets/images/img_8.jpg);">
        <div class="overlay-darker"></div>
        <div class="overlay"></div>
        <div class="fh5co-text"> <i class="fh5co-intro-icon icon-wrench"></i>
          <h2>
            <?php the_title(); ?>
          </h2>
          <p><?php echo excerpt(20); ?></p>
          <p><a href="<?php echo site_url(); ?>/nos-services/developpement/" class="btn btn-primary">Besoin d'un développeur ?</a></p>
          <?php endwhile;?>
          <?php wp_reset_query(); ?>
        </div>
      </div>
    </div>
  </div>
</section>
<section id="fh5co-work" data-section="about">
  <div class="container">
    <div class="row">
      <?php query_posts('page_id=17'); ?>
      <?php while (have_posts()) : the_post(); ?>
      <div class="col-md-12 section-heading text-center">
        <h2 class="to-animate">Nos offres</h2>
        <div class="row">
          <div class="col-md-8 col-md-offset-2 subtext to-animate">
            <h3><?php echo excerpt(20); ?></h3>
          </div>
        </div>
      </div>
      <?php endwhile;?>
      <?php wp_reset_query(); ?>
    </div>
    <div class="row">
      <?php query_posts('post_type=offre&showposts=3&order=DESC') ?>
      <?php  while ( have_posts() ) : the_post(); ?>
      <div class="col-md-4 offre-emploi">
        <div class="fh5co-person text-center to-animate">
          <figure>
          <img src="<?php the_post_thumbnail('offre-emploi', array('class' => 'img-responsive')); ?></figure>
          <a href="<?php the_permalink(); ?>">
          <h3>
            <?php the_title(); ?>
          </h3>
          </a>
          <div class="detail-offre"><a href="<?php the_permalink(); ?>">
            <?php the_excerpt(); ?>
            </a></div>
          <?php $id = get_the_ID(); ?>
          <div class="voir-detail"><a href="<?php the_permalink(); ?>">Détail</a></div>
         <?php /*?> <div class="postulez"><a href="#<?php echo $id; ?>" data-toggle="modal">Postulez</a></div><?php */?>
        </div>
<?php /*?>        <!-- Modal -->
      <div id="<?php echo $id; ?>" class="modal fade">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
              <div class="bloc-center title-poste"> Postulez pour la poste :
                <?php the_title(); ?>
              </div>
            </div>
            <div class="modal-body">
              
              <?php echo do_shortcode('[vfb id=3]'); ?> </div>
          </div>
        </div>
      </div>
      
      <!-- Modal --><?php */?>
      </div>
      
      <?php endwhile; ?>
      
      <?php wp_reset_query(); ?>
    </div>
  </div>
  <div class="see-all bloc-center"><a href="<?php echo site_url(); ?>/offres-demploi/">Voir Tous</a></div>
</section>
<section id="fh5co-services" data-section="services">
  <div class="container">
    <div class="row">
      <div class="col-md-12 section-heading text-left">
        <h2 class=" left-border to-animate">Nos Services</h2>
        <div class="row">
          <div class="col-md-8 subtext to-animate">
            <h3>Nos développeurs sont experts dans les domaines du web, du mobile et de la conception de logiciels informatiques</h3>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6 col-sm-6 fh5co-service to-animate"> <i class="icon to-animate-2 icon-anchor"></i>
        <h3>Web</h3>
        <p>Nos développeurs s'occupent de la conception de votre site vitrine, e-commerce en intégrant les fonctionnalités des plus simples aux plus complexes.</p>
      </div>
      <div class="col-md-6 col-sm-6 fh5co-service to-animate"> <i class="icon to-animate-2 icon-layers2"></i>
        <h3>Mobile</h3>
        <p>Besoin d'une application mobile ? Nos développeurs se chargent de la conception et de réalisation de votre application selon vos besoins.</p>
      </div>
      <div class="clearfix visible-sm-block"></div>
      <div class="col-md-6 col-sm-6 fh5co-service to-animate"> <i class="icon to-animate-2 icon-video2"></i>
        <h3>Conception logiciels</h3>
        <p>Notre selection de développeurs comprend également des experts dans le domaine de la conception de logiciels et pro-logiciels.</p>
      </div>
      <div class="col-md-6 col-sm-6 fh5co-service to-animate"> <i class="icon to-animate-2 icon-monitor"></i>
        <h3>Mise à jour et entretien de site ou application</h3>
        <p>Nos développeurs s'occupent d'ajouter ou de mettre à jour des fonctionnalités à votre site/application. Ils prennent aussi en charge les disfonctionnements rencontrés sur votre site/application.</p>
      </div>
    </div>
  </div>
</section>
<?php get_footer();?>
