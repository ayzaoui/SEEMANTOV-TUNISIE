<?php
if(!defined('ABSPATH'))exit; 

function wpw_pages_columns( $columns ){
    $new_columns = array();
    foreach( $columns as $key => $value ) {
       $new_columns[ $key ] = $value;
       if ( $key == 'date' )
          $new_columns[ 'wpwritup' ] = '<svg id="wpw_writup_logo_min" data-name="wpw_writup_logo_min" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29.44 23.89" style=" height: 18px; "><defs><style>.cls-1{fill:#29c5e5;}.cls-2{fill:#fff;}.cls-3{fill:#393f3f;}</style></defs><path class="cls-1" d="M29.71,17.27v4.18a5.52,5.52,0,0,1-4.5,5.42h0a5.46,5.46,0,0,1-1,.1,5.53,5.53,0,0,1-4-1.73,5.54,5.54,0,0,0,.34-1.9V19.17H18.66v4.18a3.68,3.68,0,0,1-2.58,3.51l-0.07,0a5.63,5.63,0,0,1-2,0l-0.07,0a3.68,3.68,0,0,1-2.58-3.51V19.17H9.46v4.18a5.56,5.56,0,0,0,.34,1.89,5.47,5.47,0,0,1-5,1.63h0a5.53,5.53,0,0,1-4.5-5.42V17.27H2.12v4.18a3.62,3.62,0,0,0,.46,1.76c0.08,0.13,1.52,2.19,3.12.35,1-1.2-.24-3.84-0.24-3.84h0a10.93,10.93,0,0,1-1.53-5.6,11,11,0,1,1,20.56,5.6h0s-1.28,2.64-.24,3.84c1.61,1.85,3-.25,3.12-0.35a3.62,3.62,0,0,0,.45-1.76V17.27h1.85Z" transform="translate(-0.27 -3.09)"/><path class="cls-2" d="M19.27,11.68a4.27,4.27,0,1,1-2.65-4A2.18,2.18,0,1,0,19,10.11,4.19,4.19,0,0,1,19.27,11.68Z" transform="translate(-0.27 -3.09)"/><path class="cls-3" d="M19,10.11a2.18,2.18,0,1,1-2.35-2.39A4.3,4.3,0,0,1,19,10.11Z" transform="translate(-0.27 -3.09)"/><path class="cls-3" d="M13.19,18.37l0.57,0.13c0.17,0,.37.07,0.58,0.1a4.39,4.39,0,0,0,.66.06,3.54,3.54,0,0,0,.66,0,3.61,3.61,0,0,0,.57-0.1,2.89,2.89,0,0,0,.4-0.12l0.15-.05a2.29,2.29,0,0,1-.5.31,2.43,2.43,0,0,1-.59.18,3.7,3.7,0,0,1-.7.06,4.63,4.63,0,0,1-.69-0.1,3.87,3.87,0,0,1-.58-0.18A2.73,2.73,0,0,1,13.19,18.37Z" transform="translate(-0.27 -3.09)"/></svg>';
    }
    return $new_columns;
}

function wpw_posts_columns( $columns, $post_type ) {
   switch ( $post_type ) {
      case $post_type:
         $new_columns = array();
         foreach( $columns as $key => $value ) {
            $new_columns[ $key ] = $value;
            if ( $key == 'date' )
               $new_columns[ 'wpwritup' ] = '<svg id="wpw_writup_logo_min" data-name="wpw_writup_logo_min" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29.44 23.89" style=" height: 18px; "><defs><style>.cls-1{fill:#29c5e5;}.cls-2{fill:#fff;}.cls-3{fill:#393f3f;}</style></defs><path class="cls-1" d="M29.71,17.27v4.18a5.52,5.52,0,0,1-4.5,5.42h0a5.46,5.46,0,0,1-1,.1,5.53,5.53,0,0,1-4-1.73,5.54,5.54,0,0,0,.34-1.9V19.17H18.66v4.18a3.68,3.68,0,0,1-2.58,3.51l-0.07,0a5.63,5.63,0,0,1-2,0l-0.07,0a3.68,3.68,0,0,1-2.58-3.51V19.17H9.46v4.18a5.56,5.56,0,0,0,.34,1.89,5.47,5.47,0,0,1-5,1.63h0a5.53,5.53,0,0,1-4.5-5.42V17.27H2.12v4.18a3.62,3.62,0,0,0,.46,1.76c0.08,0.13,1.52,2.19,3.12.35,1-1.2-.24-3.84-0.24-3.84h0a10.93,10.93,0,0,1-1.53-5.6,11,11,0,1,1,20.56,5.6h0s-1.28,2.64-.24,3.84c1.61,1.85,3-.25,3.12-0.35a3.62,3.62,0,0,0,.45-1.76V17.27h1.85Z" transform="translate(-0.27 -3.09)"/><path class="cls-2" d="M19.27,11.68a4.27,4.27,0,1,1-2.65-4A2.18,2.18,0,1,0,19,10.11,4.19,4.19,0,0,1,19.27,11.68Z" transform="translate(-0.27 -3.09)"/><path class="cls-3" d="M19,10.11a2.18,2.18,0,1,1-2.35-2.39A4.3,4.3,0,0,1,19,10.11Z" transform="translate(-0.27 -3.09)"/><path class="cls-3" d="M13.19,18.37l0.57,0.13c0.17,0,.37.07,0.58,0.1a4.39,4.39,0,0,0,.66.06,3.54,3.54,0,0,0,.66,0,3.61,3.61,0,0,0,.57-0.1,2.89,2.89,0,0,0,.4-0.12l0.15-.05a2.29,2.29,0,0,1-.5.31,2.43,2.43,0,0,1-.59.18,3.7,3.7,0,0,1-.7.06,4.63,4.63,0,0,1-.69-0.1,3.87,3.87,0,0,1-.58-0.18A2.73,2.73,0,0,1,13.19,18.37Z" transform="translate(-0.27 -3.09)"/></svg>';
         }
         return $new_columns;
   }
   return $columns;
}
function wpw_posts_columns_contenu( $column_name, $post_id ) {
   switch( $column_name ) {
      case 'wpwritup':
           $WPW_PostmetaArray = get_post_meta( $post_id, 'WPWriting', true );
           if(isset($WPW_PostmetaArray['grade'])){
               $WPW_Grade = $WPW_PostmetaArray['grade']; 
           }
           if(isset($WPW_PostmetaArray['grade_adi'])){
               $WPW_Gsup = $WPW_PostmetaArray['grade_adi'];
           }
           if(!empty($WPW_Grade)){
               if(!empty($WPW_Gsup)){
                   $wpw_dispkay_gsup = '<sup>'.$WPW_Gsup.'</sup>';
               }
               $wpw_display_grade = '<div class="wpw_grade_txt grade lvl_'.$WPW_Grade.'"><span>'.$WPW_Grade.'</span>'.$wpw_dispkay_gsup.'</div>';
           }else{
               $wpw_display_grade = ' — ';
           }
         echo '<div id="wpw_grade-' . $post_id . '">' .$wpw_display_grade. '</div>';
         break;
   }
}
function PostArraySanitizeText($ArrayPost){
    if(!empty($ArrayPost)){
    foreach ( $ArrayPost as $key => &$value ) {
        if ( is_array( $value ) ) {
            $value = recursive_sanitize_text_field($value);
        }
        else {
            $value = sanitize_text_field( $value );
        }
    }
    }
    return $ArrayPost;
}
function wpw_lng_conversely_string($left,$center,$right){
    if(get_locale()!="ar"){
        return $left.' '.$center;
    }else{
        return $right.' '.$center;
    }
}
function wpw_get_excerpt($post_id) {
    $temp = $post;
    $post = get_post( $post_id );
    setup_postdata( $post );

    $excerpt = esc_attr(strip_tags(get_the_excerpt()));
    wp_reset_postdata();
    $post = $temp;
    return $excerpt;
    //$excerpt = wpw_get_excerpt(get_the_ID());
    // bloginfo('description');
}
function wpw_metatags() {
  if ( is_single() || is_page() ) {  
    $WPW_PostmetaArray = get_post_meta( get_the_ID(), 'WPWriting', true );
    if(isset($WPW_PostmetaArray['wpw_metadesc']) and !empty($WPW_PostmetaArray['wpw_metatitle'])){ 
       $WPW_metadesc = $WPW_PostmetaArray['wpw_metadesc']; 
       echo '<meta name="description" content="'.$WPW_metadesc.'" />
';
    }
  }
}
function wpw_metatitle($title_parts) {
  if ( is_single() || is_page() ) {  
    $WPW_PostmetaArray = get_post_meta( get_the_ID(), 'WPWriting', true );
    if(isset($WPW_PostmetaArray['wpw_metatitle']) and !empty($WPW_PostmetaArray['wpw_metatitle'])){ 
      $WPW_metatitle = $WPW_PostmetaArray['wpw_metatitle']; 
      $title_parts['title'] = $WPW_metatitle;
      return $title_parts;
    }else{
      $title_parts['title'] = $title_parts['title'];
      return $title_parts;
    }
  }
}