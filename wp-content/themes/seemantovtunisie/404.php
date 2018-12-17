<?php /* Template Name: 404 */ ?>
<?php get_header(); ?>

<section id="banner">
  <div class="container-full"> <img class="img-responsive banner-interne" src="<?php echo site_url(); ?>/wp-content/uploads/2018/12/404.jpg" title="<?php echo get_the_title(); ?>" alt="<?php echo get_the_title(); ?>" />
    <h1 class="title-page">404 Page n'existe pas</h1>
  </div>
</section>
<section id="content">
  <div class="container container-medium">
    <h2 class="title-article-single">404 Page n'existe pas</h2>
    <div class="retour-1 margin-bottom-20"> <a href="<?php echo site_url(); ?>" class="retour">Retour à la page d'accueil</a> </div>
  </div>
</section>
<?php get_footer(); ?>
