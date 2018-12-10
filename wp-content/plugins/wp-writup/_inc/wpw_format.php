<?php 
if(!defined('ABSPATH'))exit;
class wpw_format {
	function get_single_keywords( $keywords ) {
		if( ! empty( $keywords ) ) {
			foreach( $keywords as $keyword ) {
				$keywords_split = explode( ' ', $keyword );
				foreach( $keywords_split as $keyword_split ) {
					$single_keywords[] = $keyword_split;
				}
			}
			return $single_keywords;
		}
	}
}