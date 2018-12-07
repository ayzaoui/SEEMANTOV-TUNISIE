<?php
/********* Sécurité ************/

remove_action('wp_head', 'wlwmanifest_link');
remove_action('wp_head', 'rsd_link');
remove_action('wp_head', 'wp_generator');
remove_action('wp_head', 'feed_links_extra', 3 );
remove_action('wp_head', 'feed_links', 2 );
remove_action('wp_head', 'wp_shortlink_wp_head', 10, 0 );
remove_action('wp_head', 'index_rel_link' );
remove_action('wp_head', 'parent_post_rel_link', 10, 0);
remove_action('wp_head', 'start_post_rel_link', 10, 0);
remove_action('wp_head', 'adjacent_posts_rel_link', 10, 0);

/**************** End  ***********/

// Ajouter des menus dinamyquement 

add_theme_support("nav_menus");
register_nav_menu('main','Menu Principale');

/******** End Menu dynamique *****/

// définir les extraits 
function new_excerpt_length($length) {
return 20;
}
add_filter('excerpt_length', 'new_excerpt_length');
// Changer apparence extrait
function custom_excerpt_more($more)
{return '...';}
add_filter('excerpt_more','custom_excerpt_more');
// Modifier nombre de mots extrait

function excerpt($limit){

    $excerpt = explode(' ', get_the_excerpt(), $limit);
	if(count($excerpt) >= $limit)
	{
	array_pop($excerpt);
    $excerpt = implode(" ",$excerpt).'...';
	}
	
	else
	{
		$excerpt = implode(" ",$excerpt); 
	}
    
    $excerpt = preg_replace('`\[[^\]]*\]`',' ',$excerpt);
    return $excerpt;
}
/******** End extraits *****/

// post type offres

add_action( 'init', 'offres_init' );
/**
 * Register a offre post type.
 *
 * @link http://codex.wordpress.org/Function_Reference/register_post_type
 */
function offres_init() {
	$labels = array(
		'name'               => _x( 'offres', 'post type general name', 'your-plugin-textdomain' ),
		'singular_name'      => _x( 'offre', 'post type singular name', 'your-plugin-textdomain' ),
		'menu_name'          => _x( 'offres', 'admin menu', 'your-plugin-textdomain' ),
		'name_admin_bar'     => _x( 'offre', 'add new on admin bar', 'your-plugin-textdomain' ),
		'add_new'            => _x( 'Ajouter un nouveau', 'offre', 'your-plugin-textdomain' ),
		'add_new_item'       => __( 'Ajouter un nouveau offre', 'your-plugin-textdomain' ),
		'new_item'           => __( 'Nouveau offre', 'your-plugin-textdomain' ),
		'edit_item'          => __( 'Editer offre', 'your-plugin-textdomain' ),
		'view_item'          => __( 'View offre', 'your-plugin-textdomain' ),
		'all_items'          => __( 'Tous les offres', 'your-plugin-textdomain' ),
		'search_items'       => __( 'Rechercher offres', 'your-plugin-textdomain' ),
		'parent_item_colon'  => __( 'Parent offres:', 'your-plugin-textdomain' ),
		'not_found'          => __( 'No offres found.', 'your-plugin-textdomain' ),
		'not_found_in_trash' => __( 'No offres found in Trash.', 'your-plugin-textdomain' )
	);

	$args = array(
		'labels'             => $labels,
            'description'        => __( 'Description.', 'your-plugin-textdomain' ),
		'public'             => true,
		'publicly_queryable' => true,
		'show_ui'            => true,
		'show_in_menu'       => true,
		'query_var'          => true,
		'rewrite'            => array( 'slug' => 'offre' ),
		'capability_type'    => 'post',
		'has_archive'        => true,
		'hierarchical'       => false,
		'menu_position'      => 3,
		'supports'           => array( 'title','editor','thumbnail','custom-fields')
	);

	register_post_type( 'offre', $args );
}

/***** end post type offre ************/
// post type offres

add_action( 'init', 'banner_init' );
/**
 * Register a offre post type.
 *
 * @link http://codex.wordpress.org/Function_Reference/register_post_type
 */
function banner_init() {
	$labels = array(
		'name'               => _x( 'banners', 'post type general name', 'your-plugin-textdomain' ),
		'singular_name'      => _x( 'banner', 'post type singular name', 'your-plugin-textdomain' ),
		'menu_name'          => _x( 'banners', 'admin menu', 'your-plugin-textdomain' ),
		'name_admin_bar'     => _x( 'banner', 'add new on admin bar', 'your-plugin-textdomain' ),
		'add_new'            => _x( 'Ajouter un nouveau', 'banner', 'your-plugin-textdomain' ),
		'add_new_item'       => __( 'Ajouter un nouveau banner', 'your-plugin-textdomain' ),
		'new_item'           => __( 'Nouveau banner', 'your-plugin-textdomain' ),
		'edit_item'          => __( 'Editer banner', 'your-plugin-textdomain' ),
		'view_item'          => __( 'View banner', 'your-plugin-textdomain' ),
		'all_items'          => __( 'Tous les banners', 'your-plugin-textdomain' ),
		'search_items'       => __( 'Rechercher banners', 'your-plugin-textdomain' ),
		'parent_item_colon'  => __( 'Parent banners:', 'your-plugin-textdomain' ),
		'not_found'          => __( 'No banners found.', 'your-plugin-textdomain' ),
		'not_found_in_trash' => __( 'No banners found in Trash.', 'your-plugin-textdomain' )
	);

	$args = array(
		'labels'             => $labels,
            'description'        => __( 'Description.', 'your-plugin-textdomain' ),
		'public'             => true,
		'publicly_queryable' => true,
		'show_ui'            => true,
		'show_in_menu'       => true,
		'query_var'          => true,
		'rewrite'            => array( 'slug' => 'banner' ),
		'capability_type'    => 'post',
		'has_archive'        => true,
		'hierarchical'       => false,
		'menu_position'      => 3,
		'supports'           => array( 'title','editor','thumbnail','custom-fields')
	);

	register_post_type( 'banner', $args );
}

/***** end post type offre ************/

// gérer les images dinamyque
add_theme_support('post-thumbnails');
add_image_size('offre-emploi',200,200,true);
add_image_size('banner-index',858,500,true);

?>