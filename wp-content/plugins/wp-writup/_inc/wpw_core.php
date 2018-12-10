<?php 
if(!defined('ABSPATH'))exit;
class wpw_core {
	public function __construct() {
		add_action( 'add_meta_boxes', array( $this, 'add_meta_box' ) );
		add_action( 'save_post', array( $this, 'save_fields' ) );
	}
	public function default_options() {
        $options = array(
            'post_types' => array( 'post', 'page' )
        );
		return $options;
	}
	public function add_meta_box() {
		$options = $this->default_options();
		$post_types = $options['post_types'];
		$post_type = get_post_type();
		if( ! empty( $post_type ) ) {
			if( is_array( $post_types ) && in_array( $post_type, $post_types ) ) {
				add_meta_box(
						'wpw_box_analyse',
						__("Analysis","wp-writup"),
						array( $this, 'wpw_box_analyse' ),
						$post_type,
						'side',
						'high'
				);
				add_meta_box(
						'wpw_box_bottom',
						__("Your keywords","wp-writup"),
						array( $this, 'wpw_box_bottom' ),
						$post_type,
						'normal',
						'high'
				);
			}
		}
	}
	function save_fields( $post_id ) {
        if (defined('DOING_AJAX') ) {
            return $post_id;
        }
		if ( 'page' == $_POST['post_type']) {
			if ( ! current_user_can( 'edit_page', $post_id ) )
				return;
		} else {
			if ( ! current_user_can( 'edit_post', $post_id ) )
				return;
		}
		if ( defined('DOING_AUTOSAVE') && DOING_AUTOSAVE ) return;
        
   
        if(isset($_POST['wpw_button_actif_pugin']))
        {
            $sch_keywords['power'] = sanitize_text_field($_POST['wpw_button_actif_pugin']);
        }else{
            if($Get->power == 2){
                $sch_keywords['power'] = 2;
            }else{ 
                $sch_keywords['power'] = 1;
            }
        } 
        $sch_keywords['keywords1'] = PostArraySanitizeText($_POST['keyword1']);
        $sch_keywords['keywords2'] = PostArraySanitizeText($_POST['keyword2']);
        $sch_keywords["keywords3"] = PostArraySanitizeText($_POST["keyword3"]);
        $sch_keywords['grade'] = sanitize_text_field($_POST['wpw_save_grade']);
        $sch_keywords['grade_adi'] = sanitize_text_field($_POST['wpw_save_grade_adi']);
        $sch_keywords['country'] = sanitize_text_field($_POST['wpw_country_p']);
        $sch_keywords['language'] = sanitize_text_field($_POST['wpw_language_p']);
        $sch_keywords['wpw_metatitle'] = sanitize_text_field($_POST['wpw_metatitle']);
        $sch_keywords['wpw_metadesc'] = sanitize_text_field($_POST['wpw_metadesc']);
         
        update_post_meta( $post_id, 'WPWriting', $sch_keywords);
	} 
function wpw_box_bottom($post_type) {
		$Get = new wpw_get_data( $post_type );
    	global $post; 
		?>
 <div id="wpw_box_bottom">
    <div id="wpw_box_keyword" class="padd10 this_finish">
       <div class="tabs" class="keyword-tabs">
        <div id="wpw_menu_bottom" class="wpw_hide"> 
            <div id="wpw_box_sb_1" class="wpw_button_bottom"><?php _e('Keywords','wp-writup');?></div>
            <div id="wpw_box_sb_2" class="wpw_button_bottom"><?php _e('Synonyms','wp-writup');?></div>
            <div id="wpw_box_sb_3" class="wpw_button_bottom"><?php _e('Semantics','wp-writup');?></div>
            <div id="wpw_box_sb_4" class="wpw_button_bottom"><?php _e('Synthesis','wp-writup');?></div>
            <div id="wpw_box_sb_5" class="wpw_button_bottom"><?php _e('Titles and descriptions','wp-writup');?></div>
        </div>
        <div id="wpw_step_0" class="wpw_hide">
            <div class="wpw_step_key">
                <div class="flag_box"><?php _e('Step','wp-writup');?> : 1 </div>
                <div class="helpin">
                    <div class="wpw_step_title"><?php _e('Please give us some information','wp-writup');?></div>
                    <div class="wpw_step_icon">
                        <div class="cd-single-point">
                            <a class="cd-img-replace" href="#0"><span>i</span></a>
                            
                             <?php echo wpw_lng_conversely_string('<div class="cd-more-info cd-left">','','<div class="cd-more-info cd-right">'); ?>
                                <p>
                                    <?php _e('Before you begin, you should give us some information to better target your future readers.','wp-writup');?>
                                </p>
                                 <p>
                                    <?php _e('The country allows us to be very relevant to the habits, expressions and trends of your readers.','wp-writup');?>
                                </p>
                                <p>
                                    <?php _e('The language allows us to use the linguistics library to suit the language of your readers.','wp-writup');?>
                                </p>
                                <p>
                                    <?php _e('Localization is optional, but it is useful for targeting a very presente place like writing an article about a city.','wp-writup');?>
                                </p>
                            
                            <a href="#0" class="cd-close-info cd-img-replace">Close</a>
                            <?php echo '</div>'; ?>
                        </div>
                    </div>
                </div> 
           </div>
            <div class="contenu">
              <fieldset>
                <div id="wpw_step_0_sg" class="wpw_left">
                <div id="wpw_step_0_badd" class="wpw_left">
                <div id="wpw_select_lng" class="add-form">
                <input name="wpw_country_p" id="wpw_country_p" value="<?php echo $Get->country; ?>" type="hidden">
                <input name="wpw_language_p" id="wpw_language_p" value="<?php echo $Get->language; ?>"  type="hidden"> 
                <li id="loader_id-fdg45fdg4r" class="laoder_ajax">
                    <div class="Loader Loader--full"></div>
                </li>
                <select id="wpw_country" name="wpw_country" class="wpw_hide wpw_select_lng"></select>
                <li id="loader_id-gfg5y4t0" class="laoder_ajax wpw_hide">
                    <div class="Loader Loader--full"></div>
                </li>
                <select name="wpw_language" id="wpw_language" class="wpw_hide wpw_select_lng"></select>
                </div>
                <div id="wpw_lang_displyslc" class="wpw_hide">
                    <a class="wpw_first" id="wpw_addkey_step_changelng"><?php _e('change the language','wp-writup');?></a>
                    <div class="wlngchangelng_rdc"><?php _e('Attention, the change of the language delete the selection of your keywords','wp-writup');?></div>
                    <legend class="subtitle" ><?php _e('Country and language selected','wp-writup');?></legend>
                    <span class="words">
                        <span class="keyword tab noico"></span>
                    </span>
                </div>
                </div>

                </div>
              </fieldset>
            </div>
            <a class="wpw_next wpw_hide wpw_click_button">
                <?php echo wpw_lng_conversely_string('<div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"> <g class="nc-icon-wrapper" fill="#ffffff"> <path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"></path> </g> </svg></div>',__('Next','wp-writup'),'<div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"> <g class="nc-icon-wrapper" fill="#ffffff"> <path d="M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"></path> </g> </svg></div>'); ?>
            </a>
        </div>
        <div id="wpw_step_1" class="wpw_hide">
            <div class="wpw_step_key">
                <div class="flag_box"><?php _e('Step','wp-writup');?> : 2 </div>
                <div class="helpin">
                    <div class="wpw_step_title"><?php _e('Your main keyword','wp-writup');?></div>
                    <div class="wpw_step_icon">
                        <div class="cd-single-point">
                            <a class="cd-img-replace" href="#0"><span>i</span></a>
                            
                             <?php echo wpw_lng_conversely_string('<div class="cd-more-info cd-left">','','<div class="cd-more-info cd-right">'); ?>
                                <p>
                                    <?php _e('For a good SEO, you need to start setting up a content strategy. The first thing to do is to choose the right keywords to position your web pages.','wp-writup');?>
                                </p> 
                                <p>
                                    <?php _e("Do not forget that this is a crucial phase for your SEO and at the same time it's not that simple. Use our suggestion system that will help you during your keyword search.","wp-writup");?>
                                </p>
                                <p>
                                    <?php _e("Writup will display as you type your keyword, proposals of the best queries based on the keyword you have indicated.","wp-writup");?>
                                </p>
                                
                                <a href="#0" class="cd-close-info cd-img-replace">Close</a>
                            <?php echo '</div>'; ?>
                        </div>
                    </div>
                </div> 
           </div>
            <div class="contenu">
              <fieldset>
                <div id="wpw_step_1_sg" class="wpw_left">
                <div id="wpw_step_1_badd" class="wpw_left">
                <div id="add_keyword1" class="add-form">
                    <select style="display:none;">
                        <option value="keyword1" data-position="1"><?php _e('Primary Kewords','wp-writup');?></option>
                    </select>
                    <legend class="subtitle"><?php _e('Add the main keyword', 'wp-writup' ); ?> :</legend>
                    <input class="wpw_searchkey"/>
                    <span class="submit-keywords button wpw_submit_key"><div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g class="nc-icon-wrapper" fill="#ffffff"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path></g></svg></div><?php _e('Add','wp-writup');?></span>
                </div>
                </div>
                <legend class="subtitle this_add_key wpw_hide"><?php _e('Main keyword','wp-writup');?> :</legend>
				<div class="keywords1">
					<span class="words">
						<?php if( ! empty( $Get->keywords1 ) ) : ?>
							<?php foreach( $Get->keywords1 as $keyword1 ) :?>
								<input type="hidden" name="keyword1[]" value="<?php echo $keyword1; ?>" data-value="<?php echo $keyword1; ?>">
								<span class="keyword keyword1 tab" data-value="<?php echo $keyword1; ?>"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"> <g class="nc-icon-wrapper" fill="#124a66"> <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12l1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z"></path> </g> </svg><?php echo $keyword1; ?> </span>
							<?php endforeach; ?>
						<?php endif; ?>
					</span>
                </div>
                </div>
              </fieldset>
            </div>
            <a class="wpw_previous wpw_click_button">
            <?php echo wpw_lng_conversely_string('<div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"> <g class="nc-icon-wrapper" fill="#ffffff"> <path d="M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"></path> </g> </svg></div>',__('Previous','wp-writup'),'<div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"> <g class="nc-icon-wrapper" fill="#ffffff"> <path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"></path> </g> </svg></div>'); ?>
            </a>
            <a class="wpw_next wpw_hide wpw_click_button">
                <?php echo wpw_lng_conversely_string('<div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"> <g class="nc-icon-wrapper" fill="#ffffff"> <path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"></path> </g> </svg></div>',__('Next','wp-writup'),'<div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"> <g class="nc-icon-wrapper" fill="#ffffff"> <path d="M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"></path> </g> </svg></div>'); ?>
            </a>
        </div>
        <div id="wpw_step_2" class="wpw_hide">
            <div class="wpw_step_key">
                <div class="flag_box"><?php _e('Step','wp-writup');?> : 3 </div>
                <div class="helpin">
                    <div class="wpw_step_title"><?php _e('Your secondary keywords','wp-writup');?></div>
                    <div class="wpw_step_icon">
                        <div class="cd-single-point">
                            <a class="cd-img-replace" href="#0"><span>i</span></a>
                            <?php echo wpw_lng_conversely_string('<div class="cd-more-info cd-left">','','<div class="cd-more-info cd-right">'); ?>
                                <p>
                                    <?php _e("Secondary keywords are declinations of your main keyword. To enrich the semantics of your content, not forgetting that it is the easiest way to google to notice you and appreciate your editorial.","wp-writup");?>
                                </p> 
                                <p>
                                    <?php _e("Having a relationship between keywords will promote understanding of your content by search engine robots. We advise you to put between 2 and 4 secondary keywords.","wp-writup");?>
                                </p>
                                <a href="#0" class="cd-close-info cd-img-replace">Close</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="contenu">
              <fieldset>
                <div id="wpw_step_2_sg" class="wpw_left">
                <div id="wpw_step_2_badd" class="wpw_left" style="margin-bottom: 20px;float: left;width: 100%;">
                    <legend class="subtitle" ><?php _e('Suggestion based on the main keyword','wp-writup');?> <small>(<?php _e('Click to add','wp-writup');?>)</small></legend>
                    <li id="loader_id-wpw_step_2_badd" class="laoder_ajax">
                        <div class="Loader Loader--full">
                        </div>
                    </li>
                    <div class="wpw_this_suggest scrollbar wpw_hide"><div class="vertical"></div></div>
                </div> 
                <div id="wpw_step_2_badd" class="wpw_left">
                    <div id="add_keyword2" class="add-form">
                        <select style="display:none;">
                            <option value="keyword2" data-position="2"><?php _e('Secondary Kewords','wp-writup');?></option>
                        </select>
                        <legend id="lgd_1" class="subtitle wpw_hide"><?php echo sprintf(_n('Add Keyword (recomend)','Add %s Keywords (recommend)','1', 'wp-writup' ), '1' ); ?></legend>
                        <legend id="lgd_2" class="subtitle wpw_hide"><?php echo sprintf(_n('Add Keyword (recomend)','Add %s Keywords (recommend)','2', 'wp-writup' ), '2' ); ?></legend>
                        <legend id="lgd_3" class="subtitle wpw_hide"><?php echo sprintf(_n('Add Keyword (recomend)','Add %s Keywords (recommend)','3', 'wp-writup' ), '3' ); ?></legend>
                        <legend id="lgd_4" class="subtitle wpw_hide"><?php echo sprintf(_n('Add Keyword','Add %s Keywords','1', 'wp-writup' ),'4' ); ?></legend>
                        <input class="wpw_searchkey"/>
                        <span class="submit-keywords button wpw_submit_key"><div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g class="nc-icon-wrapper" fill="#ffffff"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path></g></svg></div><?php _e('Add','wp-writup');?></span>
                    </div>
                </div>
                <legend class="subtitle this_add_key wpw_hide"><?php _e("Secondary keywords","wp-writup");?> :</legend>
				<div class="keywords2">
					<span class="words">
						<?php if( ! empty( $Get->keywords2 ) ) : ?>
							<?php foreach( $Get->keywords2 as $keyword2 ) :?>
								<input type="hidden" name="keyword2[]" value="<?php echo $keyword2; ?>" data-value="<?php echo $keyword2; ?>">
								<span class="keyword keyword2 tab" data-value="<?php echo $keyword2; ?>"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"> <g class="nc-icon-wrapper" fill="#124a66"> <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12l1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z"></path> </g> </svg><?php echo $keyword2; ?></span>
							<?php endforeach; ?>
						<?php endif; ?>
					</span>
				</div>
                </div>
              </fieldset>
            </div>
            <a class="wpw_previous wpw_click_button">
            <?php echo wpw_lng_conversely_string('<div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"> <g class="nc-icon-wrapper" fill="#ffffff"> <path d="M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"></path> </g> </svg></div>',__('Previous','wp-writup'),'<div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"> <g class="nc-icon-wrapper" fill="#ffffff"> <path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"></path> </g> </svg></div>'); ?>
                    </a>
            <a class="wpw_next wpw_hide wpw_click_button">
                
            <?php echo wpw_lng_conversely_string('<div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"> <g class="nc-icon-wrapper" fill="#ffffff"> <path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"></path> </g> </svg></div>',__('Next','wp-writup'),'<div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"> <g class="nc-icon-wrapper" fill="#ffffff"> <path d="M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"></path> </g> </svg></div>'); ?>
            </a>
        </div>
        <div id="wpw_step_3" class="wpw_hide">
            <div class="wpw_step_key">
                <div class="flag_box"><?php _e('Step','wp-writup');?> : 4 </div>
                <div class="helpin">
                    <div class="wpw_step_title"><?php _e('Your keywords lexical','wp-writup');?></div>
                    <div class="wpw_step_icon">
                        <div class="cd-single-point">
                            <a class="cd-img-replace" href="#0"><span>i</span></a>
                            <?php echo wpw_lng_conversely_string('<div class="cd-more-info cd-left">','','<div class="cd-more-info cd-right">'); ?>
                                <p>
                                    <?php _e("Lexical keywords are terms related to your main and secondary keywords, which are only intended to show the search engines that you master all the vocabulary surrounding the subject.","wp-writup");?>
                                </p> 
                                <a href="#0" class="cd-close-info cd-img-replace">Close</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                <div class="contenu">
              <fieldset>
                <div id="wpw_step_3_sg" class="wpw_left">
                <div id="wpw_step_3_badd" class="wpw_left" style="margin-bottom: 20px;float: left;width: 100%;">
                    <legend class="subtitle" ><?php _e('Suggestion based on the main keyword','wp-writup');?> <small>(<?php _e('Click to add','wp-writup');?>)</small></legend>
                    <li id="loader_id-wpw_step_3_badd" class="laoder_ajax">
                        <div class="Loader Loader--full">
                        </div>
                    </li>
                    <div class="wpw_this_suggest scrollbar"><div class="vertical"></div></div>

                </div>  
                <div id="wpw_step_3_badd" class="wpw_left">
                    <div id="add_keyword3" class="add-form">
                        <select style="display:none;">
                            <option value="keyword3" data-position="3"><?php _e('Lexical Kewords','wp-writup');?></option>
                        </select>
                        <legend id="lgd_1" class="subtitle wpw_hide" ><?php echo sprintf(_n('Add Keyword (recomend)','Add %s Keywords (recommend)','1', 'wp-writup' ), '1' ); ?></legend>
                        <legend id="lgd_2" class="subtitle wpw_hide"><?php echo sprintf(_n('Add Keyword (recomend)','Add %s Keywords (recommend)','2', 'wp-writup' ), '2' ); ?></legend>
                        <legend id="lgd_3" class="subtitle wpw_hide"><?php echo sprintf(_n('Add Keyword (recomend)','Add %s Keywords (recommend)','3', 'wp-writup' ), '3' ); ?></legend>
                        <legend id="lgd_4" class="subtitle wpw_hide"><?php echo sprintf(_n('Add Keyword (recomend)','Add %s Keywords (recommend)','4', 'wp-writup' ), '4' ); ?></legend>
                        <legend id="lgd_5" class="subtitle wpw_hide"><?php echo sprintf(_n('Add Keyword (recomend)','Add %s Keywords (recommend)','5', 'wp-writup' ), '5' ); ?></legend>
                        <legend id="lgd_6" class="subtitle wpw_hide"><?php echo sprintf(_n('Add Keyword (recomend)','Add %s Keywords (recommend)','6', 'wp-writup' ), '6' ); ?></legend>
                        <legend id="lgd_7" class="subtitle wpw_hide"><?php echo sprintf(_n('Add Keyword (recomend)','Add %s Keywords (recommend)','7', 'wp-writup' ), '7' ); ?></legend>
                        <legend id="lgd_8" class="subtitle wpw_hide"><?php echo sprintf(_n('Add Keyword','Add %s Keywords','1', 'wp-writup' ), '8' ); ?></legend>
                        <legend id="lgd_x" class="subtitle wpw_hide"><?php _e('Add additional keywords','wp-writup' ); ?></legend>
                        <input class="wpw_searchkey"/>
                        <span class="submit-keywords button wpw_submit_key"><div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g class="nc-icon-wrapper" fill="#ffffff"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path></g></svg></div><?php _e('Add','wp-writup');?></span>
                    </div>  
                </div>
                <legend class="subtitle this_add_key wpw_hide"><?php _e('Lexical keywords','wp-writup');?> :</legend> 
				<div class="keywords3">
					<span class="words">
						<?php if( ! empty( $Get->keywords3 ) ) : ?>
							<?php foreach( $Get->keywords3 as $keyword3 ) :?>
								<input type="hidden" name="keyword3[]" value="<?php echo $keyword3; ?>" data-value="<?php echo $keyword3; ?>">
								<span class="keyword keyword3 tab" data-value="<?php echo $keyword3; ?>"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"> <g class="nc-icon-wrapper" fill="#124a66"> <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12l1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z"></path> </g> </svg><?php echo $keyword3; ?> </span>
							<?php endforeach; ?>
						<?php endif; ?>
					</span>
				</div>
                </div>
              </fieldset>
            </div>            
            <a class="wpw_previous wpw_click_button">
            <?php echo wpw_lng_conversely_string('<div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"> <g class="nc-icon-wrapper" fill="#ffffff"> <path d="M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"></path> </g> </svg></div>',__('Previous','wp-writup'),'<div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"> <g class="nc-icon-wrapper" fill="#ffffff"> <path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"></path> </g> </svg></div>'); ?>
                    </a>
            <a class="wpw_addkey_btnfinish wpw_next wpw_hide wpw_click_button">
                
            <?php echo wpw_lng_conversely_string('<div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"> <g class="nc-icon-wrapper" fill="#ffffff"> <path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"></path> </g> </svg></div>',__('Finish','wp-writup'),'<div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"> <g class="nc-icon-wrapper" fill="#ffffff"> <path d="M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"></path> </g> </svg></div>'); ?>
            </a>
        </div>
            <div id="wpw_step_finish" class="wpw_hide">
                <div id="wpw_finish_1" class="wpw_hide">
                    <legend class="subtitle"><?php _e('Main keyword','wp-writup');?> :</legend>
                    <div class="keywords1bis">
                        <span class="words">
                            <?php if( ! empty( $Get->keywords1 ) ) : ?>
                                <?php foreach( $Get->keywords1 as $keyword1 ) :
                                    $keyword_count = ' <div class="NumberKeyword">0</div>';
                                ?>
                                    <span class="keyword keyword1bis tab" data-value="<?php echo $keyword1; ?>">
                                        <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="wpw_svg_add"> <g class="nc-icon-wrapper" fill="#124a66"> <path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9h-4v4h-2v-4H9V9h4V5h2v4h4v2z"></path> </g> </svg><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="wpw_svg_eye"> <g class="nc-icon-wrapper" fill="#124a66"> <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"></path> </g> </svg><?php echo $keyword1; ?> <?php echo $keyword_count;?> 
                                        </div>
                                    </span>
                                <?php endforeach; ?>
                            <?php endif; ?>
                        </span>
                    </div>
                    <legend class="subtitle"><?php _e('Secondary keywords','wp-writup');?> :</legend>
                    <div class="keywords2bis">
                        <span class="words">
                            <?php if( ! empty( $Get->keywords2 ) ) : ?>
                                <?php foreach( $Get->keywords2 as $keyword2 ) :
                                    $keyword_count = ' <div class="NumberKeyword">0</div>';
                                 ?>
                                    <span class="keyword keyword2bis tab" data-value="<?php echo $keyword2; ?>"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="wpw_svg_add"> <g class="nc-icon-wrapper" fill="#124a66"> <path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9h-4v4h-2v-4H9V9h4V5h2v4h4v2z"></path> </g> </svg><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="wpw_svg_eye"> <g class="nc-icon-wrapper" fill="#124a66"> <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"></path> </g> </svg><?php echo $keyword2; ?> <?php echo $keyword_count;?>
                                    </span>
                                <?php endforeach; ?>
                            <?php endif; ?>
                        </span>
                    </div>
                    <legend class="subtitle"><?php _e('Lexical keywords','wp-writup');?> :</legend> 
                    <div class="keywords3bis">
                        <span class="words">
                            <?php if( ! empty( $Get->keywords3 ) ) : ?>
                                <?php foreach( $Get->keywords3 as $keyword3 ) :
                                    $keyword_count = ' <div class="NumberKeyword">0</div>';
                                 ?>
                                    <span class="keyword keyword3bis tab" data-value="<?php echo $keyword3; ?>"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="wpw_svg_add"> <g class="nc-icon-wrapper" fill="#124a66"> <path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9h-4v4h-2v-4H9V9h4V5h2v4h4v2z"></path> </g> </svg><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="wpw_svg_eye"> <g class="nc-icon-wrapper" fill="#124a66"> <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"></path> </g> </svg><?php echo $keyword3; ?> <?php echo $keyword_count;?>
                                    </span>
                                <?php endforeach; ?>
                            <?php endif; ?>
                        </span>
                    </div>
                <div class="wpw_edit">
                <a class="wpw_first" id="wpw_addkey_step_first">
                    <div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"> <g class="nc-icon-wrapper" fill="#ffffff"> <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path> </g> </svg></div>
                    <?php _e('Edit','wp-writup');?>
                </a>
                </div>
            </div>
            <div id="wpw_finish_2" class="wpw_hide">
                <li id="loader_id-ds5d4syn0" class="laoder_ajax wpw_hide">
                    <div class="Loader Loader--full"></div>
                    <div><?php _e('We are looking for available synonyms','wp-writup');?></div>
                </li>
                <div class="synonym_core"></div>
            </div>
            <div id="wpw_finish_3" class="wpw_hide">
                <li id="loader_id-6gdfr0ny9y8e" class="laoder_ajax">
                    <div class="Loader Loader--full"></div>
                    <div><?php _e("Octave collects the information necessary to carry out the semantic analysis of your text.","wp-writup");?></div>
                </li>
                <div id="wpw_progress_semantics" class="wpw_hide">
                    <div id="bar-1" class="wpw_bar-main-container wpw_azure">
                        <div class="wpw_wrap">
                          <div class="wpw_bar-percentage" data-percentage="0"></div>
                          <div class="wpw_bar-container">
                            <div class="wpw_bar"></div>
                          </div>
                        </div> 
                    </div>
                    <div class="load_text"><?php _e('Octave prepares the semantics of this writing, this operation takes a few minutes.',"wp-writup");?> <br /><?php _e('The operation is carried out in the background, you can continue your work, your navigation or close your browser.',"wp-writup");?></div>
                </div>
                <div class="semantics_core"></div>
            </div>
            <div id="wpw_finish_4" class="wpw_hide">
                <li id="loader_id-ds62f0vyizD" class="laoder_ajax wpw_hide">
                    <div class="Loader Loader--full"></div>
                    <div><?php _e('We prepare your synthesis','wp-writup');?></div>
                </li>
                <div class="synthesis_core">
                    <legend class="subtitle"><?php _e('cloud of your words','wp-writup');?> :</legend>
                    <div id="wpw_cloud_keyword" class="jqcloud wpw_cloud"></div>
                </div>
                 
            </div>
            <div id="wpw_finish_5" class="wpw_hide">
                <div class="configuratio_core">
                    <div class="conf_left">
                        <legend class="subtitle"><?php _e('Meta title','wp-writup');?> : <div id="limit_title" class="gp_limit">0/75</div></legend>
                        <input class="wpw_inputf" name="wpw_metatitle" id="iptgp_title" placeholder="<?php _e('Enter your meta title','wp-writup');?>"  value="<?php if(!empty($Get->wpw_metatitle)){ echo $Get->wpw_metatitle; }else{ echo the_title();} ?>" />
                        <div id="gp_title_gradient" class="wpw_title_gradient"></div>
                        <legend class="subtitle"><?php _e('Meta description','wp-writup');?> : <div id="limit_decp" class="gp_limit">0/155</div></legend> 
                        <textarea class="wpw_inputf" rows="4" id="iptgp_desc" name="wpw_metadesc" placeholder="<?php _e('Enter your meta description','wp-writup');?>"><?php if(!empty($Get->wpw_metadesc)){ echo $Get->wpw_metadesc; }else{ $content = get_post_field( 'post_content', get_the_ID() ); echo substr(trim(preg_replace('/\s\s+/', ' ', strip_tags($content))), 0, 155).'...';
                        } ?></textarea>
                        <div id="gp_dsc_gradient" class="wpw_dsc_gradient"></div>
                    </div>
                    <div class="conf_right">
                        <legend class="subtitle"><?php _e('Preview Google Preview','wp-writup');?> :</legend>
                        <div class="GooglePreview">
                            <div id="GP_title" class="GP_title"></div>
                            <div class="GP_link"><?php echo get_page_link( $id, $leavename, $sample );?> </div>
                            <div id="GP_descp" class="GP_descp"></div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
        <li id="loader_id-5s20e03" class="laoder_ajax">
            <div class="Loader Loader--full">
            </div>
        </li>
    </div>
        <li id="loader_id-1s4z06" class="laoder_ajax wpw_hide">
            <div class="Loader Loader--full">
            </div>
        </li>
    </div>
        </div>
<?php }   
public function wpw_box_analyse() { ?>
		<div id="wpw_box_analyse_result">
            <ul class="sections">
                <li id="loader_id-3s5e0d5" class="laoder_ajax">
                    <div class="Loader Loader--full">
                    </div>
                </li>
                <li id="wpw_analyse" class="section wpw_hide">
                    <div id="wpw_analyse_keyword" class="sub-section wpw_hide">
                        <div class="wpw_whokeyword_1"></div>
                        <div class="wpw_whokeyword_2"></div>
                        <div class="wpw_whokeyword_3"></div>
                        <div class="wpw_whokeyword_4"></div>
                    </div>
                    <div id="wpw_analyse_display" class="sub-section wpw_hide">
                        <div id="wpw_grade">
                            <input type="hidden" id="wpw_save_grade" name="wpw_save_grade">
                            <input type="hidden" id="wpw_save_grade_adi" name="wpw_save_grade_adi">
                            <div class="status_grade"></div>
                            <div class="grade"></div>
                        </div>
                        <div id="analyse_rot" class="analyseur_blz wpw_noview">
                            <div class="icon_view wpw_hide"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="wpw_svg_eye"> <g class="nc-icon-wrapper" fill="#124a66"> <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"></path> </g> </svg></div>
                            <div class="status_analyse"></div>
                            <strong></strong>
                        </div> 
                        <div id="analyse_ttl" class="analyseur_blz wpw_noview">
                            <div class="icon_view wpw_hide"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="wpw_svg_eye"> <g class="nc-icon-wrapper" fill="#124a66"> <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"></path> </g> </svg></div>
                            <div class="status_analyse"></div>
                            <strong></strong>
                        </div>
                        <div id="analyse_ttlc" class="analyseur_blz wpw_noview">
                            <div class="icon_view wpw_hide"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="wpw_svg_eye"> <g class="nc-icon-wrapper" fill="#124a66"> <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"></path> </g> </svg></div>
                            <div class="status_analyse"></div>
                            <strong></strong>
                        </div>
                        <div id="analyse_h1" class="analyseur_blz wpw_noview">
                            <div class="icon_view wpw_hide"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="wpw_svg_eye"> <g class="nc-icon-wrapper" fill="#124a66"> <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"></path> </g> </svg></div>
                            <div class="status_analyse"></div>
                            <strong></strong>
                        </div>
                        <div id="analyse_h2" class="analyseur_blz wpw_noview">
                            <div class="icon_view wpw_hide"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="wpw_svg_eye"> <g class="nc-icon-wrapper" fill="#124a66"> <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"></path> </g> </svg></div>
                            <div class="status_analyse"></div>
                            <strong></strong>
                        </div> 
                        <div id="analyse_h3" class="analyseur_blz wpw_noview">
                            <div class="icon_view wpw_hide"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="wpw_svg_eye"> <g class="nc-icon-wrapper" fill="#124a66"> <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"></path> </g> </svg></div>
                            <div class="status_analyse"></div>
                            <strong></strong>
                        </div>  
                        <div id="analyse_h4h5h6" class="analyseur_blz wpw_noview">
                            <div class="icon_view wpw_hide"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="wpw_svg_eye"> <g class="nc-icon-wrapper" fill="#124a66"> <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"></path> </g> </svg></div>
                            <div class="status_analyse"></div>
                            <strong></strong>
                        </div>
                        <div id="analyse_hkp" class="analyseur_blz disabled_cursor">
                            <div class="status_analyse"></div>
                            <strong class="title"></strong>
                            <strong class="contenu"></strong>
                        </div>
                        <div id="analyse_p" class="analyseur_blz disabled_cursor">
                            <div class="status_analyse"></div>
                            <strong class="title_short"></strong>
                            <strong class="contenu_short"></strong>
                            <strong class="title_long"></strong>
                            <strong class="contenu_long"></strong>
                        </div>   
                        <div id="analyse_wdc" class="analyseur_blz wpw_noview">
                            <div class="icon_view wpw_hide"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="wpw_svg_eye"> <g class="nc-icon-wrapper" fill="#124a66"> <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"></path> </g> </svg></div>
                            <div class="status_analyse"></div>
                            <strong></strong>
                        </div>  
                        <div id="analyse_wdp" class="analyseur_blz wpw_noview">
                            <div class="icon_view wpw_hide"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="wpw_svg_eye"> <g class="nc-icon-wrapper" fill="#124a66"> <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"></path> </g> </svg></div>
                            <div class="status_analyse"></div>
                            <strong></strong>
                        </div>  
                        <div id="analyse_wdt" class="analyseur_blz wpw_noview">
                            <div class="icon_view wpw_hide"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="wpw_svg_eye"> <g class="nc-icon-wrapper" fill="#124a66"> <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"></path> </g> </svg></div>
                            <div class="status_analyse"></div>
                            <strong></strong>
                        </div>    
                        <div id="analyse_pk1" class="analyseur_blz wpw_noview">
                            <div class="icon_view wpw_hide"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="wpw_svg_eye"> <g class="nc-icon-wrapper" fill="#124a66"> <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"></path> </g> </svg></div>
                            <div class="status_analyse"></div>
                            <strong></strong>
                        </div>    
                        <div id="analyse_pk23" class="analyseur_blz wpw_noview">
                            <div class="icon_view wpw_hide"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="wpw_svg_eye"> <g class="nc-icon-wrapper" fill="#124a66"> <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"></path> </g> </svg></div>
                            <div class="status_analyse"></div>
                            <strong></strong>
                        </div>  
                        <div id="analyse_sk1" class="analyseur_blz wpw_noview">
                            <div class="icon_view wpw_hide"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="wpw_svg_eye"> <g class="nc-icon-wrapper" fill="#124a66"> <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"></path> </g> </svg></div>
                            <div class="status_analyse"></div>
                            <strong></strong>
                        </div>   
                        <div id="analyse_wdf" class="analyseur_blz disabled_cursor">
                            <div class="status_analyse"></div>
                            <strong class="title"></strong>
                            <strong class="contenu"></strong>
                        </div>
                        <div id="analyse_imgk1" class="analyseur_blz wpw_noview">
                            <div class="icon_view wpw_hide"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="wpw_svg_eye"> <g class="nc-icon-wrapper" fill="#124a66"> <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"></path> </g> </svg></div>
                            <div class="status_analyse"></div>
                            <strong></strong>
                        </div>
                        <div id="analyse_img" class="analyseur_blz wpw_noview">
                            <div class="icon_view wpw_hide"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="wpw_svg_eye"> <g class="nc-icon-wrapper" fill="#124a66"> <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"></path> </g> </svg></div>
                            <div class="status_analyse"></div>
                            <strong></strong>
                        </div>
                        <div id="analyse_wdfk1" class="analyseur_blz last wpw_noview">
                            <div class="icon_view wpw_hide"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="wpw_svg_eye"> <g class="nc-icon-wrapper" fill="#124a66"> <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"></path> </g> </svg></div>
                            <div class="status_analyse"></div>
                            <strong></strong>
                        </div>
                    </div>
                    <div id="wpw_analyse_update" class="sub-section wpw_hide">
                        <div id="wpw_subscription">
                            <div class="corner-ribbon top-left sticky blue shadow"></div>
                            <div class="status"></div>
                            <div class="time"></div>
                        </div>
                        <div>
                            <div class="wpw_sub_message"></div>
                            <div class="wpw_sub_button"></div>
                        </div>
                    </div>
                    <div id="wpw_analyse_warling" class="sub-section wpw_hide">
                        <div class="wpw_warling">
                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><g class="nc-icon-wrapper" fill="#e21b1b"><path d="M2 42h44L24 4 2 42zm24-6h-4v-4h4v4zm0-8h-4v-8h4v8z"></path></g></svg>
                        </div>
                        <div>
                            <div class="wpw_sub_message"></div>
                            <div class="wpw_sub_button"></div>
                        </div>
                    </div>
                </li>
            </ul>
		</div>
<?php }
}
new wpw_core;