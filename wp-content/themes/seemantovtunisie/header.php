<!DOCTYPE html>
<html class="no-js">
<head>
<meta charset="<?php bloginfo( 'charset' ); ?>" />
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<title>
<?php wp_title( $sep = '&nbsp;'); ?>
</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="description" content="Nous ne proposons pas de moutons à 5 pattes mais nous conseillons le meilleur profil en tenant compte de son potentiel..." />
<meta name="keywords" content="SEEMANTOV TUNISIE, Talon IT, RECRUTEMENT, CANDIDATS, RECRUTEURS" />
<link rel='dns-prefetch' href='http://s.w.org/' />
<link rel="shortcut icon" href="<?php bloginfo("stylesheet_directory"); ?>/assets/images/favicon.png">
<link href='https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,300,600,400italic,700' rel='stylesheet' type='text/css'>
<!-- Animate.css -->
<link rel="stylesheet" href="<?php bloginfo("stylesheet_directory"); ?>/assets/css/animate.css">
<!-- Icomoon Icon Fonts-->
<link rel="stylesheet" href="<?php bloginfo("stylesheet_directory"); ?>/assets/css/icomoon.css">
<!-- Simple Line Icons -->
<link rel="stylesheet" href="<?php bloginfo("stylesheet_directory"); ?>/assets/css/simple-line-icons.css">
<!-- Slick Slider -->
<link rel="stylesheet" type="text/css" href="<?php bloginfo("stylesheet_directory"); ?>/assets/slick/slick/slick.css"/>
<link rel="stylesheet" type="text/css" href="<?php bloginfo("stylesheet_directory"); ?>/assets/slick/slick/slick-theme.css"/>
<!-- Magnific Popup -->
<link rel="stylesheet" href="<?php bloginfo("stylesheet_directory"); ?>/assets/css/magnific-popup.css">
<!-- Bootstrap  -->
<link rel="stylesheet" href="<?php bloginfo("stylesheet_directory"); ?>/assets/css/bootstrap.css">
<!-- font-awesome  -->
<link rel="stylesheet" href="<?php bloginfo("stylesheet_directory"); ?>/assets/css/font-awesome.min.css">
<!-- Style.css  -->
<link href="<?php bloginfo("stylesheet_url"); ?>" rel="stylesheet"  media="all">
<link rel="stylesheet" href="<?php bloginfo("stylesheet_directory"); ?>/assets/css/variations.css">
<!-- Modernizr JS -->
<script src="<?php bloginfo("stylesheet_directory"); ?>/assets/js/modernizr-2.6.2.min.js"></script>
<?php
function hook_css() {
?>
<style>
html {
	margin-top: 0px !important;
}
</style>
<?php } add_action('wp_head', 'hook_css'); ?>
<?php wp_head(); ?>
</head>
<body>
<header role="banner" id="fh5co-header">
  <div class="container-full"> 
    <!-- <div class="row"> -->
    <nav class="navbar navbar-default">
      <div class="navbar-header col-sm-3"> 
        <!-- Mobile Toggle Menu Button --> 
        <a href="#" class="js-fh5co-nav-toggle fh5co-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i></i></a> <a class="navbar-brand" href="<?php bloginfo("url"); ?>"><img src="<?php bloginfo("stylesheet_directory"); ?>/assets/images/seemantov.png" alt="SEEMANTOV TUNISIE" title="SEEMANTOV TUNISIE" class="img-responsive" /></a> </div>
        <?php wp_nav_menu(array(
					  
					  "theme_location" =>"main",
					  "container" => "div",
					  "container_class" => "navbar-collapse collapse",
					  "items_wrap" => '<ul class="nav navbar-nav navbar-right">%3$s</ul>'
					  
					  )); 
		?>
      <?php /*?><div id="navbar" class="navbar-collapse collapse">
        <ul class="nav navbar-nav navbar-right">
          <li class="active"><a href="#" data-nav-section="home"><span>Accueil</span></a></li>
          <li><a href="#" data-nav-section="work"><span>Comment ça marche ?</span></a></li>
          <li><a href="#" data-nav-section="devs"><span>Nos développeurs</span></a></li>
          <li><a href="#" data-nav-section="services"><span>Services</span></a></li>
          <li><a href="#" data-nav-section="about"><span>Notre offre</span></a></li>
          <li><a href="#" data-nav-section="contact"><span>Contactez nous</span></a></li>
        </ul>
      </div><?php */?>
    </nav>
    <!-- </div> --> 
  </div>
</header>
