<?php
if(!defined('ABSPATH'))exit;
class wpw_get_data {
	public $keywords = array();
	public $keywords1 = array();
	public $keywords2 = array();
	public $keywords3 = array();
    public $power = array();
    public $country = array();
    public $language = array();
    public $wpw_metatitle = array();
    public $wpw_metadesc = array();
	public $single_keywords1 = array();
	public $single_keywords2 = array();
	public $single_keywords3 = array();
    public $single_power = array();
    public $single_country = array();
    public $single_language = array();
    public $single_wpw_metatitle = array();
    public $single_wpw_metadesc = array();


    

	public function __construct( $post ) {
		$Format = new wpw_format();
		$this->keywords = get_post_meta( $post->ID, 'WPWriting', true );
		$this->set_keywords( $this->keywords );
		$this->single_keywords1 = $Format->get_single_keywords( $this->keywords1 );
		$this->single_keywords2 = $Format->get_single_keywords( $this->keywords2 );
        $this->single_keywords3 = $Format->get_single_keywords( $this->keywords3 );
        $this->single_power = $this->power;
	}
	public function set_keywords() {
		if( ! empty( $this->keywords ) )
		{
			$this->keywords1 = $this->keywords['keywords1'];
			$this->keywords2 = $this->keywords['keywords2'];
            $this->keywords3 = $this->keywords['keywords3'];
            $this->power = $this->keywords['power'];
            $this->country = $this->keywords['country'];
            $this->language = $this->keywords['language'];
            $this->wpw_metatitle = $this->keywords['wpw_metatitle'];
            $this->wpw_metadesc = $this->keywords['wpw_metadesc'];
			if( ! empty( $this->keywords1 ) )
				sort( $this->keywords1 );
			if( ! empty( $this->keywords2 ) )
				sort( $this->keywords2 );
            if( ! empty( $this->keywords3 ) )
				sort( $this->keywords3 );
		}
	}
}