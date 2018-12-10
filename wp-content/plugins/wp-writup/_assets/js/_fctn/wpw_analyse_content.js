var $ = jQuery.noConflict();
function wpw_analyse_content(){
    var wpw_version = $("#wpw_analyse_content").attr('wpwv');
    var wpw_url_admin = $("#wpw_analyse_content").attr('wpw_url_adm');
    var wpw_external_update = $("#wpw_analyse_content").attr('wpw_external_update');    
      $.ajax({ 
       url : wpw_external_update,
       type : 'POST',
       data: "wpw_version="+wpw_version+"&wpw_admin="+wpw_url_admin,
       success : function(data){
           var obj = $.parseJSON(data);
           if(obj.success){
                if(obj.wpw_update.status == "available"){
                    $("#wpw_analyse").removeClass("wpw_hide").addClass("wpw_show");
                    $("#loader_id-3s5e0d5").removeClass("wpw_show").addClass("wpw_hide");          
                    $("#wpw_analyse_keyword").removeClass("wpw_show").addClass("wpw_hide");
                    $("#wpw_analyse_display").removeClass("wpw_show").addClass("wpw_hide");
                    $("#wpw_analyse_update").removeClass("wpw_hide").addClass("wpw_show");
                    $("#wpw_analyse_warling").removeClass("wpw_show").addClass("wpw_hide");   
                    $( "#wpw_analyse_update .corner-ribbon" ).html(wpw_ajx_translate("WPW_UPDATE_01"));
                    $( "#wpw_analyse_update .status" ).html(wpw_ajx_translate("WPW_UPDATE_02"));
                    var wpw_update_version = wpw_ajx_translate("WPW_UPDATE_03")+' : '+ obj.wpw_update.version;   
                    $( "#wpw_analyse_update .time" ).html(wpw_update_version);
                    $( "#wpw_analyse_update .wpw_sub_message" ).html(wpw_ajx_translate("WPW_UPDATE_04"));
                    var wpw_update_button = '<a href="'+obj.wpw_update.url+'" '+obj.wpw_update.type+' >' + wpw_ajx_translate("WPW_UPDATE_05") + '</a>';
                    $( "#wpw_analyse_update .wpw_sub_button" ).html(wpw_update_button);            
               }else{
function wpw_mark_keyword(keyword){
    wpw_mark_clean();
    var options = {
        "element": "wpwritup",
        "className": "wpw_mark",
        "separateWordSearch": false,
        "diacritics": false,
        "caseSensitive": false,
        "exclude": [],
        "iframes": true,
        "iframesTimeout": 5000,
    }; 
    $("#content_ifr").contents().find("body").mark(keyword, options);
}
 function wpw_mark_ranges(start,length){
    wpw_mark_clean();
    var options = {
        "element": "wpwritup",
        "className": "wpw_mark",
        "separateWordSearch": false,
        "diacritics": false,
        "caseSensitive": false,
        "exclude": [],
        "iframes": true,
        "iframesTimeout": 5000,
        "accuracy": {
            "value": "exactly",
            "limiters": [",", "."]
        }
    }; 
    $("#content_ifr").contents().find("body").markRanges([{
        start: start,
        length: length
    }],options); 
}
 function wpw_mark_multi_ranges(mark){
    var mark_split = mark.split('::');
    var mark_ranges = '';
    var x = 1;
    $.each(mark_split,function(i){
       if(mark_split[i]!=''){
    var options = {
        "element": "wpwritup",
        "className": "wpw_mark wpw_mark_c_"+x,
        "styleName" : "background:orange",
        "separateWordSearch": false,
        "diacritics": false,
        "caseSensitive": false,
        "exclude": [],
        "iframes": true,
        "iframesTimeout": 5000,
        "accuracy": {
            "value": "exactly",
            "limiters": [",", "."]
        }
    }; 
           var mark_ranges = mark_split[i].split('-');
             $("#content_ifr").contents().find("body").mark(mark_ranges[0], options);
    x++;
       }
    });     
}
    var wpw_wpkey = $("#wpw_analyse_content").attr('wpw_wpkey');
    var wpw_install = $("#wpw_analyse_content").attr('wpw_install');
    var wpw_license = $("#wpw_analyse_content").attr('wpw_license');
    var wpw_path = $("#wpw_analyse_content").attr('wpw_path');
    var wpw_agreement = $("#wpw_analyse_content").attr('wpw_agreement');
    var wpw_visual_composer = $("#wpb_visual_composer").css('display');
    var who_keyword = false;
    var keyword1 = '';
    var keyword2 = '';
    var keyword3 = '';
    var ckwd_1 = '';
    var ckwd_2 = '';
    var ckwd_3 = '';
   $('#wpw_box_bottom .keywords1 .keyword1.tab').filter(function() {
        keyword1 = keyword1 + $(this).prev().val().toLowerCase() + '::';
   });
   $('#wpw_box_bottom .keywords2 .keyword2.tab').filter(function() {
        keyword2 = keyword2 + $(this).prev().val().toLowerCase() + '::';
   });
   $('#wpw_box_bottom .keywords3 .keyword3.tab').filter(function() {
        keyword3 = keyword3 + $(this).prev().val().toLowerCase() + '::';
   });
    ckwd_1 = keyword1.split("::").length;
    ckwd_2 = keyword2.split("::").length;
    ckwd_3 = keyword3.split("::").length;
    if(ckwd_1 >= 2){
       if(ckwd_2 >= 2){
            if(ckwd_3 >= 2){
                who_keyword = true;
            }
        }  
    }
    
    //if(wpw_wpkey == '' ){
    //    who_keyword = true;
   // }

    var obj = '';
    var ttl = $('#title').val();
    if($("#wp-content-wrap").hasClass("html-active")){
        var targetId = 'content';
    }              
    if($("#wp-content-wrap").hasClass("tmce-active")){
        var targetId = 'tinymce';  
    }                  
    var tct = '';
    var received = '';                                
    switch ( targetId ) {
         case 'content':
             tct = encodeURIComponent($('#content').val().replace(/&nbsp;/g, " "));
             received = 'content';
             break;
         case 'tinymce':
             if ( tinymce.activeEditor.getContent()!=''){
                tct = encodeURIComponent(tinymce.activeEditor.getContent());
                received = 'tinymce';
             }else{
                if ( tinymce.editors.content.getContent()!=''){
                    tct = encodeURIComponent(tinymce.editors.content.getContent());
                    received = 'tinymce';
                }else{
                    tct = encodeURIComponent(tinyMCE.get('content').getContent());
                    received = 'tinymce';
                }
             } 
             break;
    }  

    wpw_mark_clean();
    var wpw_external_api = $("#wpw_analyse_content").attr('wpw_external_api');    
    $.ajax({
       url : wpw_external_api,
       type : 'POST',
       data: "wpw_action=analyse&wpw_wpkey="+wpw_wpkey+"&wpw_path="+wpw_path+"&wpw_install="+wpw_install+"&wpw_license="+wpw_license+"&wpw_agreement="+wpw_agreement+"&wp_text="+tct+"&wp_title="+ttl+"&type=content&keyword1="+keyword1+"&keyword2="+keyword2+"&keyword3="+keyword3+"&wpw_visual_composer="+wpw_visual_composer+"&wpw_received="+received,
           success : function(data){
        var obj = $.parseJSON(data);
           if(obj.success){
                if(obj.wp_subscription.activation == "trial"){
                    if(obj.wp_subscription.remaining == "0"){
                        var trial_expired = "yes";
                    }else{
                        var trial_expired = "no"; 
                    }
                }
                if(obj.wp_subscription.activation == "warling" || obj.wp_subscription.activation == "delete" || trial_expired == "yes"){
                    var wpw_setting = $("#wpw_analyse_content").attr('wpw_url_adm')+"admin.php?page=wpw-setting";
                    $("#wpw_analyse").removeClass("wpw_hide").addClass("wpw_show");
                    $("#loader_id-3s5e0d5").removeClass("wpw_show").addClass("wpw_hide");          
                    $("#wpw_analyse_keyword").removeClass("wpw_show").addClass("wpw_hide");
                    $("#wpw_analyse_display").removeClass("wpw_show").addClass("wpw_hide");
                    $("#wpw_analyse_update").removeClass("wpw_show").addClass("wpw_hide");
                    $("#wpw_analyse_warling").removeClass("wpw_hide").addClass("wpw_show");   
                    $( "#wpw_analyse_warling .wpw_sub_message" ).html(wpw_ajx_translate("WPW_SUBWARLING_01"));
                      wpw_update_button = '<a class="blue" href="'+ wpw_setting +'">' + wpw_ajx_translate("WPW_SUBWARLING_02") + '</a>';
                    $( "#wpw_analyse_warling .wpw_sub_button" ).html(wpw_update_button);
                    $("#wpw_activation_actif").removeClass("wpw_show").addClass("wpw_hide");
                    $("#wpw_activation_requiered").removeClass("wpw_hide").addClass("wpw_show"); 
                    $("#wpw_box_keyword").hide();
                    $("#wpw_box_bottom").hide();
                    $("#wpw-speech").show();
                    $("#wpw_speech_results").show();
                    $("#post-body-content").removeClass("wpw_hide_solo").addClass("wpw_show_solo");
                    $('html, body').animate({
                        scrollTop: $("#wpwrap").offset().top
                    }, 0);
                    if(obj.wp_subscription.activation == "delete"){
                      $.ajax({
                       url :  $("#wpw_analyse_content").attr('wpw_url_ajax'),
                       type : 'POST',
                       data: "action=wpw_update_dls",
                       success : function(data){}
                      });
                    }
               }   
               if(obj.wp_subscription.activation == "actived" || trial_expired == "no" ){
                if(who_keyword == false){
                    $("#wpw_analyse").removeClass("wpw_hide").addClass("wpw_show");
                    $("#loader_id-3s5e0d5").removeClass("wpw_show").addClass("wpw_hide");          
                    $("#wpw_analyse_keyword").removeClass("wpw_hide").addClass("wpw_show");
                    $("#wpw_analyse_display").removeClass("wpw_show").addClass("wpw_hide");
                    $("#wpw_analyse_update").removeClass("wpw_show").addClass("wpw_hide");
                    $("#wpw_analyse_warling").removeClass("wpw_show").addClass("wpw_hide");
                    $( "#wpw_analyse_keyword .wpw_whokeyword_1" ).html(wpw_ajx_translate("WHO_KEYWORD_01"));
                    $( "#wpw_analyse_keyword .wpw_whokeyword_2" ).html('<span class="wpw_whokeyword_span">1</span><span class="wpw_whokeyword_span_txt">' + wpw_ajx_translate("WHO_KEYWORD_02")+'</span>');
                    $( "#wpw_analyse_keyword .wpw_whokeyword_3" ).html('<span class="wpw_whokeyword_span">2</span><span class="wpw_whokeyword_span_txt">' + wpw_ajx_translate("WHO_KEYWORD_03")+'</span>');
                    $( "#wpw_analyse_keyword .wpw_whokeyword_4" ).html('<span class="wpw_whokeyword_span">3</span><span class="wpw_whokeyword_span_txt">' + wpw_ajx_translate("WHO_KEYWORD_04")+'</span>');
                }else{
                $("#loader_id-3s5e0d5").removeClass("wpw_show").addClass("wpw_hide");
                $("#wpw_analyse").removeClass("wpw_hide").addClass("wpw_show");
                $("#wpw_analyse_keyword").removeClass("wpw_show").addClass("wpw_hide");
                $("#wpw_analyse_display").removeClass("wpw_hide").addClass("wpw_show");
                $("#wpw_analyse_update").removeClass("wpw_show").addClass("wpw_hide");
                $("#wpw_analyse_warling").removeClass("wpw_show").addClass("wpw_hide");
                 
                $( "#wpw_grade .grade" ).removeClass( "lvl_A" );
                $( "#wpw_grade .grade" ).removeClass( "lvl_B" );
                $( "#wpw_grade .grade" ).removeClass( "lvl_C" );
                $( "#wpw_grade .grade" ).removeClass( "lvl_D" );
                $( "#wpw_grade .grade" ).removeClass( "lvl_E" );
                $( "#wpw_grade .grade" ).removeClass( "lvl_F" );
                
                $( "#wpw_grade .status_grade" ).html(wpw_ajx_translate(obj.wpw_grade.message));         
        
                if(obj.wpw_grade.additional!='null'){
                    $( "#wpw_grade .grade" ).html('<span>'+obj.wpw_grade.letter+'</span><sup>'+obj.wpw_grade.additional+'</sup>');
                    $( "#wpw_save_grade" ).val(obj.wpw_grade.letter);
                    $( "#wpw_save_grade_adi" ).val(obj.wpw_grade.additional);
                }else{
                    $( "#wpw_grade .grade" ).html(obj.wpw_grade.letter);
                    $( "#wpw_save_grade" ).val(obj.wpw_grade.letter);
                }
                $( "#wpw_grade .grade ").addClass('lvl_'+obj.wpw_grade.letter);
                $.map(obj.analyse_keyword.primary, function (value, key) {
                    $( '.keywords1bis span[data-value="'+key+'"] .NumberKeyword' ).html(value); 
                });
                $.map(obj.analyse_keyword.secondary, function (value, key) {
                    $( '.keywords2bis span[data-value="'+key+'"] .NumberKeyword' ).html(value); 
                });
                $.map(obj.analyse_keyword.lexical, function (value, key) {
                    $( '.keywords3bis span[data-value="'+key+'"] .NumberKeyword' ).html(value); 
                });
                $( "#analyse_h1 div" ).removeClass( "red" );
                $( "#analyse_h1 div" ).removeClass( "orange" );
                $( "#analyse_h1 div" ).removeClass( "green" );
                $( "#analyse_h1 div" ).addClass(obj.analyse_h1.status);
                $( "#analyse_h1 strong" ).html(wpw_ajx_translate(obj.analyse_h1.message));
                if(obj.analyse_h1.mark!="null"){
                    $( "#analyse_h1" ).click(function(){
                        mark_split = obj.analyse_h1.mark.split("-");
                        wpw_mark_ranges(mark_split[0],mark_split[1]);
                    });    
                    $( "#analyse_h1" ).removeClass( "wpw_noview" );   
                }else{
                    $( "#analyse_h1" ).click(function(){
                        wpw_mark_clean();
                    });
                    $( "#analyse_h1" ).addClass( "wpw_noview" );
                }
                $( "#analyse_h2 div" ).removeClass( "red" );
                $( "#analyse_h2 div" ).removeClass( "orange" );
                $( "#analyse_h2 div" ).removeClass( "green" );
                $( "#analyse_h2 div" ).addClass(obj.analyse_h2.status);
                $( "#analyse_h2 strong" ).html(wpw_ajx_translate(obj.analyse_h2.message)); 
                $( "#analyse_h3 div" ).removeClass( "red" );
                $( "#analyse_h3 div" ).removeClass( "orange" );
                $( "#analyse_h3 div" ).removeClass( "green" );
                $( "#analyse_h3 div" ).addClass(obj.analyse_h3.status);
                $( "#analyse_h3 strong" ).html(wpw_ajx_translate(obj.analyse_h3.message)); 
                $( "#analyse_h4h5h6 div" ).removeClass( "red" );
                $( "#analyse_h4h5h6 div" ).removeClass( "orange" );
                $( "#analyse_h4h5h6 div" ).removeClass( "green" );
                $( "#analyse_h4h5h6 div" ).removeClass( "neutral" );
                $( "#analyse_h4h5h6 div" ).addClass(obj.analyse_h4h5h6.status);
                $( "#analyse_h4h5h6 strong" ).html(wpw_ajx_translate(obj.analyse_h4h5h6.message)); 
                if(obj.analyse_wdc == null){
                    $( "#analyse_wdc").hide();
                }else{
                    $( "#analyse_wdc").show();    
                $( "#analyse_wdc div" ).removeClass( "red" );
                $( "#analyse_wdc div" ).removeClass( "orange" );
                $( "#analyse_wdc div" ).removeClass( "green" );
                $( "#analyse_wdc div" ).addClass(obj.analyse_wdc.status);
                if(obj.analyse_wdc.missword!="null"){
                    var message_wdc = wpw_ajx_translate(obj.analyse_wdc.message) + ' '+ obj.analyse_wdc.missword + ' ' + wpw_ajx_translate("WDC_0A")+  ' (' + wpw_ajx_translate("WDC_0B")+': '+ obj.analyse_wdc.score +'/20)';   
                }else{
                    var message_wdc = wpw_ajx_translate(obj.analyse_wdc.message)+ ' ' + wpw_ajx_translate("WDC_0A")+  ' (' + wpw_ajx_translate("WDC_0B")+': '+ obj.analyse_wdc.score +'/20)';
                }
                $( "#analyse_wdc strong" ).html(message_wdc); 
                }
        
                if(obj.analyse_p == null){
                    $( "#analyse_p").hide();
                }else{
                    $( "#analyse_p").show();   
                $( "#analyse_p div" ).removeClass( "red" );
                $( "#analyse_p div" ).removeClass( "orange" );
                $( "#analyse_p div" ).removeClass( "green" );
                $( "#analyse_p div" ).addClass(obj.analyse_p.status);
                if(obj.analyse_p.message_short!='null'){
                    var message_p_short = wpw_ajx_translate(obj.analyse_p.message_short);
                }else{
                    var message_p_short = "";
                }
                if(obj.analyse_p.message_long!='null'){
                    var message_p_long = wpw_ajx_translate(obj.analyse_p.message_long);
                }else{
                    var message_p_long = "";
                }
                $( "#analyse_p strong.title_short" ).html(message_p_short);
                $( "#analyse_p strong.title_long" ).html(message_p_long);
                if(obj.analyse_p.mark_short!="null"){
                    $( "#analyse_p strong.contenu_short" ).html("");
                    $.map( obj.analyse_p.mark_short, function( i, val ) {
                        $( "#analyse_p strong.contenu_short" ).append('<div data-value="'+i+'" class="wpw_p_key"><div class="icon_view wpw_show"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="wpw_svg_eye"> <g class="nc-icon-wrapper" fill="#124a66"> <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"></path> </g> </svg></div><span>'+val+'</span></div>');
                    });
                    $("#analyse_p").on('click', '.wpw_p_key svg.wpw_svg_eye', function (event) {
                        wpw_mark_clean();
                        wpw_mark_keyword($(this).parent().parent().attr('data-value'));
                   });
                }else{
                    $( "#analyse_p strong.contenu_short" ).html("");
                }
                if(obj.analyse_p.mark_long!="null"){
                    $( "#analyse_p strong.contenu_long" ).html("");
                    $.map( obj.analyse_p.mark_long, function( i, val ) {
                        $( "#analyse_p strong.contenu_long" ).append('<div data-value="'+i+'" class="wpw_p_key"><div class="icon_view wpw_show"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="wpw_svg_eye"> <g class="nc-icon-wrapper" fill="#124a66"> <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"></path> </g> </svg></div><span>'+val+'</span></div>');
                    });
                    $("#analyse_p").on('click', '.wpw_p_key svg.wpw_svg_eye', function (event) {
                        wpw_mark_clean();
                        wpw_mark_keyword($(this).parent().parent().attr('data-value'));
                   });
                }else{
                    $( "#analyse_p strong.contenu_long" ).html("");
                }
                }
                if(obj.analyse_wdp == null){
                    $( "#analyse_wdp").hide();
                }else{
                    $( "#analyse_wdp").show();   
                    $( "#analyse_wdp div" ).removeClass( "red" );
                    $( "#analyse_wdp div" ).removeClass( "orange" );
                    $( "#analyse_wdp div" ).removeClass( "green" );
                    $( "#analyse_wdp div" ).addClass(obj.analyse_wdp.status);
                    $( "#analyse_wdp strong" ).html(wpw_ajx_translate(obj.analyse_wdp.message)); 
                } 
                $( "#analyse_wdt div" ).removeClass( "red" );
                $( "#analyse_wdt div" ).removeClass( "orange" );
                $( "#analyse_wdt div" ).removeClass( "green" );
                $( "#analyse_wdt div" ).addClass(obj.analyse_wdt.status);
                if(obj.analyse_wdt.value!="null"){
                    var message_wdt = wpw_ajx_translate(obj.analyse_wdt.message) + ' '+ obj.analyse_wdt.value + '%, ' + wpw_ajx_translate("WDT_0A");   
                }else{
                    var message_wdt = wpw_ajx_translate(obj.analyse_wdt.message);
                }
                $( "#analyse_wdt strong" ).html(message_wdt); 
                if(obj.analyse_pk1 == null){
                    $( "#analyse_pk1").hide();
                }else{
                    $( "#analyse_pk1").show(); 
                    $( "#analyse_pk1 div" ).removeClass( "red" );
                    $( "#analyse_pk1 div" ).removeClass( "orange" );
                    $( "#analyse_pk1 div" ).removeClass( "green" );
                    $( "#analyse_pk1 div" ).addClass(obj.analyse_pk1.status);
                    if(obj.analyse_pk1.value!="null"){
                        var message_pk1 = wpw_ajx_translate(obj.analyse_pk1.message) + ' '+ obj.analyse_pk1.value + '%, ' + wpw_ajx_translate("PK1_0A");   
                    }else{
                        var message_pk1 = wpw_ajx_translate(obj.analyse_pk1.message);
                    }
                    if(obj.analyse_pk1.mark!="null"){
                        $( "#analyse_pk1" ).click(function(){
                            wpw_mark_keyword(obj.analyse_pk1.mark);
                        });    
                        $( "#analyse_pk1" ).removeClass( "wpw_noview" );   
                    }else{
                        $( "#analyse_pk1" ).click(function(){
                            wpw_mark_clean();
                        });
                        $( "#analyse_pk1" ).addClass( "wpw_noview" );
                    }
                    $( "#analyse_pk1 strong" ).html(message_pk1); 
                }
                $( "#analyse_pk23 div" ).removeClass( "red" );
                $( "#analyse_pk23 div" ).removeClass( "orange" );
                $( "#analyse_pk23 div" ).removeClass( "green" );
                $( "#analyse_pk23 div" ).addClass(obj.analyse_pk23.status);
                $( "#analyse_pk23 strong" ).html(wpw_ajx_translate(obj.analyse_pk23.message));
                if(obj.analyse_sk1 == null){
                    $( "#analyse_sk1").hide();
                }else{
                    $( "#analyse_sk1").show();
                    $( "#analyse_sk1 div" ).removeClass( "red" );
                    $( "#analyse_sk1 div" ).removeClass( "orange" );
                    $( "#analyse_sk1 div" ).removeClass( "green" );
                    $( "#analyse_sk1 div" ).addClass(obj.analyse_sk1.status);
                    $( "#analyse_sk1 strong" ).html(wpw_ajx_translate(obj.analyse_sk1.message));
                    if(obj.analyse_sk1.mark!="null"){
                        $( "#analyse_sk1" ).click(function(){
                            wpw_mark_keyword(obj.analyse_sk1.mark);
                        });    
                        $( "#analyse_sk1" ).removeClass( "wpw_noview" );   
                    }else{
                        $( "#analyse_sk1" ).click(function(){
                            wpw_mark_clean();
                        });
                        $( "#analyse_sk1" ).addClass( "wpw_noview" );
                    }
                }
                if(obj.analyse_wdf == null){
                    $( "#analyse_wdf").hide();
                }else{
                    var mark_val ='';
                    var val = '';
                    var mark_split = '';
                    $( "#analyse_wdf").show();    
                    $( "#analyse_wdf div" ).removeClass( "red" );
                    $( "#analyse_wdf div" ).removeClass( "orange" );
                    $( "#analyse_wdf div" ).removeClass( "green" );
                    $( "#analyse_wdf div" ).addClass(obj.analyse_wdf.status);
                    $( "#analyse_wdf strong.title" ).html(wpw_ajx_translate(obj.analyse_wdf.message));
                    $( "#analyse_wdf strong.contenu" ).html("");
                    $.map( obj.analyse_wdf.mark, function( i, val ) {
                        $( "#analyse_wdf strong.contenu" ).append('<div data-value="'+i+'" class="wpw_wdf_key"><div class="icon_view wpw_show"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="wpw_svg_eye"> <g class="nc-icon-wrapper" fill="#124a66"> <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"></path> </g> </svg></div><span>'+i+'</span></div>');
                    });
                    $("#analyse_wdf").on('click', '.wpw_wdf_key svg.wpw_svg_eye', function (event) {
                        wpw_mark_clean();
                        wpw_mark_keyword($(this).parent().parent().attr('data-value'));
                   });
                    
                    
                }
                if(obj.analyse_imgk1 == null){
                 $( "#analyse_imgk1").hide();
                }else{
                    $( "#analyse_imgk1").show();
                $( "#analyse_imgk1 div" ).removeClass( "neutral" );
                $( "#analyse_imgk1 div" ).removeClass( "red" );
                $( "#analyse_imgk1 div" ).removeClass( "orange" );
                $( "#analyse_imgk1 div" ).removeClass( "green" );
                $( "#analyse_imgk1 div" ).addClass(obj.analyse_imgk1.status);
                $( "#analyse_imgk1 strong" ).html(wpw_ajx_translate(obj.analyse_imgk1.message));
                }
                $( "#analyse_img div" ).removeClass( "neutral" );
                $( "#analyse_img div" ).removeClass( "red" );
                $( "#analyse_img div" ).removeClass( "orange" );
                $( "#analyse_img div" ).removeClass( "green" );
                $( "#analyse_img div" ).addClass(obj.analyse_img.status);
                $( "#analyse_img strong" ).html(wpw_ajx_translate(obj.analyse_img.message));
                   
                $( "#analyse_ttl div" ).removeClass( "red" );
                $( "#analyse_ttl div" ).removeClass( "orange" );
                $( "#analyse_ttl div" ).removeClass( "green" );
                $( "#analyse_ttl div" ).addClass(obj.analyse_ttl.status);
                $( "#analyse_ttl strong" ).html(wpw_ajx_translate(obj.analyse_ttl.message));
                if(obj.analyse_ttl.mark!="null"){
                    $( "#analyse_ttl" ).removeClass( "wpw_noview" );   
                    $( "#analyse_ttl" ).click(function(){
                        wpw_mark_clean();
                        $( '#title' ).addClass("WPW_highlighting_zone");
                    });
                }else{
                    $( "#analyse_ttl" ).click(function(){
                        wpw_mark_clean();
                    });
                    $( "#analyse_ttl" ).addClass( "wpw_noview" ); 
                }
        
                $( "#analyse_ttlc div" ).removeClass( "red" );
                $( "#analyse_ttlc div" ).removeClass( "orange" );
                $( "#analyse_ttlc div" ).removeClass( "green" );
                $( "#analyse_ttlc div" ).addClass(obj.analyse_ttlc.status);
                var gradient_css_title = '0';
                if(obj.analyse_ttlc.misschar!="null"){
                    var message_ttlc = wpw_ajx_translate(obj.analyse_ttlc.message)+ ' '+ obj.analyse_ttlc.misschar + ' ' + wpw_ajx_translate("TTLC_0A");
                    
                    if(obj.analyse_ttlc.message=="TTLC_01"){
                    if(obj.analyse_ttlc.misschar<=55 && obj.analyse_ttlc.misschar>=51){
                        gradient_css_title = '-55';
                    }
                    if(obj.analyse_ttlc.misschar<=50 && obj.analyse_ttlc.misschar>=46){
                        gradient_css_title = '-50';
                    }
                    if(obj.analyse_ttlc.misschar<=45 && obj.analyse_ttlc.misschar>=41){
                        gradient_css_title = '-45';
                    }
                    if(obj.analyse_ttlc.misschar<=40 && obj.analyse_ttlc.misschar>=36){
                        gradient_css_title = '-40';
                    }
                    if(obj.analyse_ttlc.misschar<=35 && obj.analyse_ttlc.misschar>=31){
                        gradient_css_title = '-35';
                    }
                    if(obj.analyse_ttlc.misschar<=30 && obj.analyse_ttlc.misschar>=26){
                        gradient_css_title = '-30';
                    }
                    if(obj.analyse_ttlc.misschar<=25 && obj.analyse_ttlc.misschar>=21){
                        gradient_css_title = '-25';
                    }
                    if(obj.analyse_ttlc.misschar<=20 && obj.analyse_ttlc.misschar>=16){
                        gradient_css_title = '-20';
                    }
                    if(obj.analyse_ttlc.misschar<=15 && obj.analyse_ttlc.misschar>=11){
                        gradient_css_title = '-15';
                    }
                    if(obj.analyse_ttlc.misschar<=10 && obj.analyse_ttlc.misschar>=6){
                        gradient_css_title = '-10';
                    }
                    if(obj.analyse_ttlc.misschar<=5 && obj.analyse_ttlc.misschar>=1){
                        gradient_css_title = '-5';
                    }
                    }else{
                        gradient_css_title = '15';
                    }
        
                }else{
                    var message_ttlc = wpw_ajx_translate(obj.analyse_ttlc.message);
                }
                if(obj.analyse_ttlc.mark!="null"){
                    $( "#analyse_ttlc" ).click(function(){
                        wpw_mark_clean();
                        $( '#title' ).addClass("WPW_highlighting_zone");
                    });    
                    $( "#analyse_ttlc" ).removeClass( "wpw_noview" );   
                }else{
                    $( "#analyse_ttlc" ).click(function(){
                        wpw_mark_clean();
                    });
                    $( "#analyse_ttlc" ).addClass( "wpw_noview" );
                }
                $( "#analyse_ttlc strong" ).html(message_ttlc);
                
                $('#wpw_box_title').remove();
                $('#titlewrap').after('<div id="wpw_box_title" class="wpw_title_gradient missing_'+gradient_css_title+'"></div>');
        
                if(obj.analyse_wdfk1 == null){
                    $( "#analyse_wdfk1").hide();
                }else{
                    $( "#analyse_wdfk1").show();    
                    $( "#analyse_wdfk1 div" ).removeClass( "red" );
                    $( "#analyse_wdfk1 div" ).removeClass( "orange" );
                    $( "#analyse_wdfk1 div" ).removeClass( "green" );
                    $( "#analyse_wdfk1 div" ).addClass(obj.analyse_wdfk1.status);
                    if(obj.analyse_wdfk1.misschar!="null"){
                        var message_wdfk1 = wpw_ajx_translate("WDFK1_01")+ ' '+ obj.analyse_wdfk1.misschar + ' ' + wpw_ajx_translate("WDFK1_0A") + '. ' + wpw_ajx_translate("WDFK1_02");  
                    }else{
                        var message_wdfk1 = wpw_ajx_translate(obj.analyse_wdfk1.message);
                    }
                    $( "#analyse_wdfk1 strong" ).html(message_wdfk1);
                    if(obj.analyse_wdfk1.mark!="null"){
                        $( "#analyse_wdfk1" ).click(function(){
                            mark_split = obj.analyse_wdfk1.mark.split("-");
                            wpw_mark_ranges(mark_split[0],mark_split[1]);
                        });    
                        $( "#analyse_wdfk1" ).removeClass( "wpw_noview" );   
                    }else{
                        $( "#analyse_wdfk1" ).click(function(){
                            wpw_mark_clean();
                        });
                        $( "#analyse_wdfk1" ).addClass( "wpw_noview" );
                    }
                }
                if(obj.analyse_hkp == null){
                    $( "#analyse_hkp").hide();
                }else{
                    var mark_val ='';
                    var val = '';
                    var mark_split = '';
                    $( "#analyse_hkp").show();    
                    $( "#analyse_hkp div" ).removeClass( "red" );
                    $( "#analyse_hkp div" ).removeClass( "orange" );
                    $( "#analyse_hkp div" ).removeClass( "green" );
                    $( "#analyse_hkp div" ).addClass(obj.analyse_hkp.status);
                    $( "#analyse_hkp strong.title" ).html(wpw_ajx_translate(obj.analyse_hkp.message));
                    $( "#analyse_hkp strong.contenu" ).html("");
                    $.map( obj.analyse_hkp.mark, function( i, val ) {
                        $( "#analyse_hkp strong.contenu" ).append('<div data-value="'+i+'" class="wpw_hkp_key"><div class="icon_view wpw_show"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="wpw_svg_eye"> <g class="nc-icon-wrapper" fill="#124a66"> <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"></path> </g> </svg></div><span>'+i+'</span></div>');
                    });
                    $("#analyse_hkp").on('click', '.wpw_hkp_key svg.wpw_svg_eye', function (event) {
                        wpw_mark_clean();
                        wpw_mark_keyword($(this).parent().parent().attr('data-value'));
                   });
                }
                if(obj.analyse_rot == null){
                    $( "#analyse_rot").hide();
                }else{
                    $( "#analyse_rot").show();
                    $( "#analyse_rot div" ).removeClass( "red" );
                    $( "#analyse_rot div" ).removeClass( "orange" );
                    $( "#analyse_rot div" ).removeClass( "green" );
                    $( "#analyse_rot div" ).removeClass( "neutral" );
                    $( "#analyse_rot div" ).addClass(obj.analyse_rot.status);
                    $( "#analyse_rot strong" ).html(wpw_ajx_translate("ROT_0A") + ' : ' + wpw_ajx_translate(obj.analyse_rot.message)); 
                } 
        
           }
           }
       }
           },
    timeout: 5000,
    error: function(jqXHR, textStatus, errorThrown) {
        $("#wpw_analyse").removeClass("wpw_hide").addClass("wpw_show");
        $("#loader_id-3s5e0d5").removeClass("wpw_show").addClass("wpw_hide");    
        $("#wpw_analyse_warling").removeClass("wpw_hide").addClass("wpw_show");   
        $( "#wpw_analyse_warling .wpw_sub_message" ).html(wpw_ajx_translate("ERRLOD_0A")+' ' + wpw_ajx_translate("ERRLOD_01") + '');
    } 
    });
               }
           }
       },
    timeout: 5000,
    error: function(jqXHR, textStatus, errorThrown) {
        $("#wpw_analyse").removeClass("wpw_hide").addClass("wpw_show");
        $("#loader_id-3s5e0d5").removeClass("wpw_show").addClass("wpw_hide");    
        $("#wpw_analyse_warling").removeClass("wpw_hide").addClass("wpw_show");   
        $( "#wpw_analyse_warling .wpw_sub_message" ).html(wpw_ajx_translate("ERRLOD_0A")+' ' + wpw_ajx_translate("ERRLOD_01") + '');
    } 
      });    
} 
var wpw_analyse_synonym = function () {
    var wpw_version = $("#wpw_analyse_content").attr('wpwv');
    var wpw_url_admin = $("#wpw_analyse_content").attr('wpw_url_adm');
    var wpw_external_update = $("#wpw_analyse_content").attr('wpw_external_update');    
    var wpw_country_p = $("#wpw_country_p").val().split("||");
    var wpw_language_p =  $("#wpw_language_p").val().split("||");
      $.ajax({ 
       url : wpw_external_update,
       type : 'POST',
       data: "wpw_version="+wpw_version+"&wpw_admin="+wpw_url_admin,
       success : function(data){
           var obj = $.parseJSON(data);
           if(obj.success){
                if(obj.wpw_update.status == "available"){                    
                    $( "#wpw_finish_2 .synonym_core" ).html('<div class="nosynonym">' + wpw_ajx_translate("WPW_UPDATE_06") + '</div>');
                    $("#loader_id-ds5d4syn0").removeClass("wpw_show").addClass("wpw_hide");
                    $("#wpw_finish_2 .synonym_core").removeClass("wpw_hide").addClass("wpw_show");
               }else{
    var wpw_wpkey = $("#wpw_analyse_content").attr('wpw_wpkey');
    var wpw_install = $("#wpw_analyse_content").attr('wpw_install');
    var wpw_license = $("#wpw_analyse_content").attr('wpw_license');
    var wpw_agreement = $("#wpw_analyse_content").attr('wpw_agreement');                   
    var who_keyword = false;
    var keyword1 = '';
    var keyword2 = '';
    var keyword3 = '';
    var ckwd_1 = '';
    var ckwd_2 = '';
    var ckwd_3 = '';
   $('#wpw_box_bottom .keywords1 .keyword1.tab').filter(function() {
        keyword1 = keyword1 + $(this).prev().val().toLowerCase() + '::';
   });
   $('#wpw_box_bottom .keywords2 .keyword2.tab').filter(function() {
        keyword2 = keyword2 + $(this).prev().val().toLowerCase() + '::';
   });
   $('#wpw_box_bottom .keywords3 .keyword3.tab').filter(function() {
        keyword3 = keyword3 + $(this).prev().val().toLowerCase() + '::';
   });
    ckwd_1 = keyword1.split("::").length;
    ckwd_2 = keyword2.split("::").length;
    ckwd_3 = keyword3.split("::").length;
    if(ckwd_1 >= 2){
        if(ckwd_2 >= 2){
            if(ckwd_3 >= 2){
                who_keyword = true;
            }
        }  
    }
    var obj = '';
    var wpw_external_api = $("#wpw_analyse_content").attr('wpw_external_api');                
    $.ajax({
       url : wpw_external_api,
       type : 'POST',
       data: "wpw_action=synonym&wpw_wpkey="+wpw_wpkey+"&wpw_install="+wpw_install+"&wpw_license="+wpw_license+"&wpw_agreement="+wpw_agreement+"&keyword1="+keyword1+"&wpw_country="+wpw_country_p[0]+"&wpw_language="+wpw_language_p[0],
       success : function(data){
       var obj = $.parseJSON(data);
       if(obj.success){

            if(obj.wp_subscription.activation == "trial"){
                if(obj.wp_subscription.remaining == "0"){
                    var trial_expired = "yes";
                }else{
                    var trial_expired = "no";
                }
            }
            if(obj.wp_subscription.activation == "warling" || obj.wp_subscription.activation == "delete" || trial_expired == "yes"){
                $("#loader_id-ds5d4syn0").removeClass("wpw_show").addClass("wpw_hide");
            }

           if(obj.wp_subscription.activation == "actived" || trial_expired == "no" ){
                if(who_keyword == false){
                    $("#loader_id-ds5d4syn0").removeClass("wpw_show").addClass("wpw_hide");
                }else{
                    $("#loader_id-ds5d4syn0").removeClass("wpw_show").addClass("wpw_hide");
                    
                    if(obj.wpw_synonymous.success=="false"){
                        $( "#wpw_finish_2 .synonym_core" ).html('<div class="nosynonym">' + wpw_ajx_translate("SYN_0C") + '</div>');
                        $("#loader_id-ds5d4syn0").removeClass("wpw_show").addClass("wpw_hide");
                        $("#wpw_finish_2 .synonym_core").removeClass("wpw_hide").addClass("wpw_show");
                    }else{
                        if(obj.wpw_synonymous.data=="language_not_available"){
                            $( "#wpw_finish_2 .synonym_core" ).html('<div class="nosynonym">' + wpw_ajx_translate("SYN_0E") + '</div>');
                            $("#loader_id-ds5d4syn0").removeClass("wpw_show").addClass("wpw_hide");
                            $("#wpw_finish_2 .synonym_core").removeClass("wpw_hide").addClass("wpw_show");
                        }else{
                            if(obj.wpw_synonymous.data=="null"){
                                $( "#wpw_finish_2 .synonym_core" ).html('<div class="nosynonym">' + wpw_ajx_translate("SYN_0A") + '</div>');
                                $("#loader_id-ds5d4syn0").removeClass("wpw_show").addClass("wpw_hide");
                                $("#wpw_finish_2 .synonym_core").removeClass("wpw_hide").addClass("wpw_show");
                            }else{
                                $( "#wpw_finish_2 .synonym_core" ).html("");
                                $.map(obj.wpw_synonymous.data, function (value, key) {
                                    $( "#wpw_finish_2 .synonym_core" ).append('<legend class="subtitle">' + wpw_ajx_translate("SYN_0B") + ' : '+ key +'</legend>'); 
                                    var get_syn = '';
                                    $.map(value, function (value, key) {
                                        get_syn += '<span class="keyword tab"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="wpw_svg_add"> <g class="nc-icon-wrapper" fill="#124a66"> <path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9h-4v4h-2v-4H9V9h4V5h2v4h4v2z"></path> </g> </svg>' + value + '</span>'; 
                                    });
                                    $( "#wpw_finish_2 .synonym_core" ).append('<span class="words">'+get_syn+'</span>'); 
                                });
                                
                                ///$( "#wpw_finish_2 .synonym_core" ).append('<legend class="subtitle">' + wpw_ajx_translate("SYN_0D")+'</legend> <div class="wpw_this_suggest scrollbar wpw_hide"><div class="vertical">sdsd</div></div><input class="wpw_searchsyn ui-autocomplete-input" autocomplete="off">'); 
                                
                                $("#loader_id-ds5d4syn0").removeClass("wpw_show").addClass("wpw_hide");
                                $("#wpw_finish_2 .synonym_core").removeClass("wpw_hide").addClass("wpw_show");
                            }
                        }
                    }
                }

           }
   
           

       }
       },
    timeout: 5000,
    error: function(jqXHR, textStatus, errorThrown) {
        $( "#wpw_finish_2 .synonym_core" ).html('<div class="nosynonym">' + wpw_ajx_translate("ERRLOD_0A") + ' ' + wpw_ajx_translate("ERRLOD_01") + ' </div>');
        $("#loader_id-ds5d4syn0").removeClass("wpw_show").addClass("wpw_hide");
        $("#wpw_finish_2 .synonym_core").removeClass("wpw_hide").addClass("wpw_show");        
    } 
    });
                   
               }
           }
       },
    timeout: 5000,
    error: function(jqXHR, textStatus, errorThrown) {
        $( "#wpw_finish_2 .synonym_core" ).html('<div class="nosynonym">' + wpw_ajx_translate("ERRLOD_0A") + ' ' + wpw_ajx_translate("ERRLOD_01") + ' </div>');
        $("#loader_id-ds5d4syn0").removeClass("wpw_show").addClass("wpw_hide");
        $("#wpw_finish_2 .synonym_core").removeClass("wpw_hide").addClass("wpw_show");        
    } 
          
          
      });             
}
var wpw_analyse_semantics = function () {
    var wpw_version = $("#wpw_analyse_content").attr('wpwv');
    var wpw_url_admin = $("#wpw_analyse_content").attr('wpw_url_adm');
    var wpw_external_update = $("#wpw_analyse_content").attr('wpw_external_update');    
      $.ajax({ 
       url : wpw_external_update,
       type : 'POST',
       data: "wpw_version="+wpw_version+"&wpw_admin="+wpw_url_admin,
       success : function(data){
           var obj = $.parseJSON(data);
           if(obj.success){
                if(obj.wpw_update.status == "available"){
                    $("#wpw_finish_3 .semantics_core" ).html('<div class="nosynonym">' + wpw_ajx_translate("WPW_UPDATE_06") + '</div>');
                    $("#wpw_progress_semantics").removeClass("wpw_show").addClass("wpw_hide");
                    $("#loader_id-6gdfr0ny9y8e").removeClass("wpw_show").addClass("wpw_hide");
                    $("#wpw_finish_3 .semantics_core").removeClass("wpw_hide").addClass("wpw_show");             
                    
               }else{
   var wpw_wpkey = $("#wpw_analyse_content").attr('wpw_wpkey');
    var wpw_install = $("#wpw_analyse_content").attr('wpw_install');
    var wpw_license = $("#wpw_analyse_content").attr('wpw_license');
    var wpw_agreement = $("#wpw_analyse_content").attr('wpw_agreement');
    var wpw_visual_composer = $("#wpb_visual_composer").css('display');
    var wpw_country_p = $("#wpw_country_p").val().split("||");
    var wpw_language_p =  $("#wpw_language_p").val().split("||");
    var who_keyword = false;
    var keyword1 = '';
    var keyword2 = '';
    var keyword3 = '';
    var ckwd_1 = '';
    var ckwd_2 = '';
    var ckwd_3 = '';
   $('#wpw_box_bottom .keywords1 .keyword1.tab').filter(function() {
        keyword1 = keyword1 + $(this).prev().val().toLowerCase() + '::';
   });
   $('#wpw_box_bottom .keywords2 .keyword2.tab').filter(function() {
        keyword2 = keyword2 + $(this).prev().val().toLowerCase() + '::';
   });
   $('#wpw_box_bottom .keywords3 .keyword3.tab').filter(function() {
        keyword3 = keyword3 + $(this).prev().val().toLowerCase() + '::';
   });
    ckwd_1 = keyword1.split("::").length;
    ckwd_2 = keyword2.split("::").length;
    ckwd_3 = keyword3.split("::").length;
    if(ckwd_1 >= 2){
        if(ckwd_2 >= 2){
            if(ckwd_3 >= 2){
                who_keyword = true;
            }
        }  
    }

    if(wpw_wpkey == '' ){
        who_keyword = true;
    }
    var obj = '';
    var ttl = $('#title').val();    
    if($("#wp-content-wrap").hasClass("html-active")){
        var targetId = 'content';
    }              
    if($("#wp-content-wrap").hasClass("tmce-active")){
        var targetId = 'tinymce';  
    }                  
    var tct = '';
    var received = '';
    switch ( targetId ) {
         case 'content':
             tct = encodeURIComponent($('#content').val().replace(/&nbsp;/g, " ")); 
             received = 'content';
             break;
         case 'tinymce':
             if ( tinymce.activeEditor.getContent()!=''){
                tct = encodeURIComponent(tinymce.activeEditor.getContent());
                 received = 'tinymce';
             }else{
                if ( tinymce.editors.content.getContent()!=''){
                    tct = encodeURIComponent(tinymce.editors.content.getContent());
                    received = 'tinymce';
                }else{
                    tct = encodeURIComponent(tinyMCE.get('content').getContent());
                    received = 'tinymce';
                }
             }
             break;
    }
    var wpw_external_api = $("#wpw_analyse_content").attr('wpw_external_api'); 
                   
    $.ajax({
       url : wpw_external_api,
       type : 'POST',
       data: "wpw_action=semantics&wpw_wpkey="+wpw_wpkey+"&wpw_install="+wpw_install+"&wpw_license="+wpw_license+"&wpw_agreement="+wpw_agreement+"&keyword1="+keyword1+"&wpw_country="+wpw_country_p[0]+"&wpw_language="+wpw_language_p[0]+"&wpw_received="+received,
       success : function(data){
       var obj = $.parseJSON(data);
       if(obj.success){
           if(obj.wpw_semantics.success=="false"){
                $( "#wpw_finish_3 .semantics_core" ).html('<div class="nosynonym">' + wpw_ajx_translate("SEM_0B") + '</div>');
                $("#wpw_progress_semantics").removeClass("wpw_show").addClass("wpw_hide");
                $("#wpw_finish_3 .semantics_core").removeClass("wpw_hide").addClass("wpw_show");
                $("#loader_id-6gdfr0ny9y8e").removeClass("wpw_show").addClass("wpw_hide");
            }else{
                if(obj.wpw_semantics.data=="null"){
                    $( "#wpw_finish_3 .semantics_core" ).html('<div class="nosynonym">' + wpw_ajx_translate("SEM_0A") + '</div>');
                    $("#wpw_progress_semantics").removeClass("wpw_show").addClass("wpw_hide");
                    $("#wpw_finish_3 .semantics_core").removeClass("wpw_hide").addClass("wpw_show");
                    $("#loader_id-6gdfr0ny9y8e").removeClass("wpw_show").addClass("wpw_hide");
                }else{
                    if(obj.wpw_semantics.data=="language_not_available"){
                        $( "#wpw_finish_3 .semantics_core" ).html('<div class="nosynonym">' + wpw_ajx_translate("SEM_0C") + '</div>');
                        $("#wpw_progress_semantics").removeClass("wpw_show").addClass("wpw_hide");
                        $("#wpw_finish_3 .semantics_core").removeClass("wpw_hide").addClass("wpw_show");
                        $("#loader_id-6gdfr0ny9y8e").removeClass("wpw_show").addClass("wpw_hide");
                    }else{
                        if(obj.wpw_semantics.data=="working"){
                            $("#wpw_progress_semantics").removeClass("wpw_hide").addClass("wpw_show");
                            $("#wpw_progress_semantics .wpw_bar-percentage").attr('data-percentage',obj.wpw_semantics.progress);
                            $("#wpw_finish_3 .semantics_core").removeClass("wpw_show").addClass("wpw_hide");
                            $("#wpw_progress_semantics .wpw_bar-percentage").html(obj.wpw_semantics.progress + "%");
                            $("#wpw_progress_semantics .wpw_bar-container").children().css('width',obj.wpw_semantics.progress+'%');
                            $("#loader_id-6gdfr0ny9y8e").removeClass("wpw_show").addClass("wpw_hide");
                            setTimeout(wpw_analyse_semantics, 30000);
                        }else{
                            $("#wpw_progress_semantics").removeClass("wpw_show").addClass("wpw_hide");
                            $("#wpw_finish_3 .semantics_core").removeClass("wpw_hide").addClass("wpw_show");
                            $("#wpw_finish_3 .semantics_core" ).html('<div class="tab_semantics_head"><div>'+wpw_ajx_translate("SEM_01")+'</div><div>'+wpw_ajx_translate("SEM_02")+'</div></div>');
                            $("#loader_id-6gdfr0ny9y8e").removeClass("wpw_show").addClass("wpw_hide");
                            var wpw_result_semantics = '';
                            $.map( obj.wpw_semantics.data, function( i, val ) {
                                var wskc = val.split('||');
                                if(wskc[1]<=150 && wskc[1]>=101){var this_wskc = 150;}if(wskc[1]<=100 && wskc[1]>=96){var this_wskc = 100;}if(wskc[1]<=95 && wskc[1]>=91){var this_wskc = 95;}if(wskc[1]<=90 && wskc[1]>=86){var this_wskc = 90;}if(wskc[1]<=85 && wskc[1]>=81){var this_wskc = 85;}if(wskc[1]<=80 && wskc[1]>=76){var this_wskc = 80;}if(wskc[1]<=75 && wskc[1]>=71){var this_wskc = 75;}if(wskc[1]<=70 && wskc[1]>=66){var this_wskc = 70;}if(wskc[1]<=65 && wskc[1]>=61){var this_wskc = 65;}if(wskc[1]<=60 && wskc[1]>=56){var this_wskc = 60;}if(wskc[1]<=55 && wskc[1]>=51){var this_wskc = 55;}if(wskc[1]<=50 && wskc[1]>=46){var this_wskc = 50;}if(wskc[1]<=45 && wskc[1]>=41){var this_wskc = 45;}if(wskc[1]<=40 && wskc[1]>=36){var this_wskc = 40;}if(wskc[1]<=35 && wskc[1]>=31){var this_wskc = 35;}if(wskc[1]<=30 && wskc[1]>=26){var this_wskc = 30;}if(wskc[1]<=25 && wskc[1]>=21){var this_wskc = 25;}if(wskc[1]<=20 && wskc[1]>=16){var this_wskc = 20;}if(wskc[1]<=15 && wskc[1]>=11){var this_wskc = 15;}if(wskc[1]<=10 && wskc[1]>=6){var this_wskc = 10;}if(wskc[1]<=5 && wskc[1]>=1){var this_wskc = 5;}if(wskc[1]==0){var this_wskc = 0;}
                                wpw_result_semantics += '<div class="tab_semantics_contenu wpw_semantics_keyword_color_'+this_wskc+'"><div>'+wskc[0]+' <small>('+wskc[1]+'%)</small></div><div>'+i+'</div></div>';
                            });
                             $( "#wpw_finish_3 .semantics_core" ).append('<div class="wpw_this_semantics scrollbar"><div class="vertical">'+wpw_result_semantics+'</div></div>');
                        }
                    }
                }
            }
       }
       },
    timeout: 10000,
    error: function(jqXHR, textStatus, errorThrown) {
        $( "#wpw_finish_3 .semantics_core" ).html('<div class="nosynonym">' + wpw_ajx_translate("ERRLOD_0A") + ' ' + wpw_ajx_translate("ERRLOD_01") + ' </div>');
        $("#wpw_progress_semantics").removeClass("wpw_show").addClass("wpw_hide");
        $("#wpw_finish_3 .semantics_core").removeClass("wpw_hide").addClass("wpw_show");
        $("#loader_id-6gdfr0ny9y8e").removeClass("wpw_show").addClass("wpw_hide");
    } 
    });
               }
           }
       },
    timeout: 10000,
    error: function(jqXHR, textStatus, errorThrown) {
        $( "#wpw_finish_3 .semantics_core" ).html('<div class="nosynonym">' + wpw_ajx_translate("ERRLOD_0A") + ' ' + wpw_ajx_translate("ERRLOD_01") + ' </div>');
        $("#wpw_progress_semantics").removeClass("wpw_show").addClass("wpw_hide");
        $("#wpw_finish_3 .semantics_core").removeClass("wpw_hide").addClass("wpw_show");
        $("#loader_id-6gdfr0ny9y8e").removeClass("wpw_show").addClass("wpw_hide");
    } 
      });                
                   
}
var wpw_analyse_synthesis = function () {
    var wpw_version = $("#wpw_analyse_content").attr('wpwv');
    var wpw_url_admin = $("#wpw_analyse_content").attr('wpw_url_adm');
    var wpw_external_update = $("#wpw_analyse_content").attr('wpw_external_update');    

      $.ajax({ 
       url : wpw_external_update,
       type : 'POST',
       data: "wpw_version="+wpw_version+"&wpw_admin="+wpw_url_admin,
       success : function(data){
           var obj = $.parseJSON(data);
           if(obj.success){
                if(obj.wpw_update.status == "available"){
                    $("#wpw_finish_4 .synthesis_core" ).html('<div class="nosynonym">' + wpw_ajx_translate("WPW_UPDATE_06") + '</div>');
                    $("#loader_id-ds62f0vyizD").removeClass("wpw_show").addClass("wpw_hide");
                    $("#wpw_finish_4 .synthesis_core").removeClass("wpw_hide").addClass("wpw_show");             
                    
               }else{
   var wpw_wpkey = $("#wpw_analyse_content").attr('wpw_wpkey');
    var wpw_install = $("#wpw_analyse_content").attr('wpw_install');
    var wpw_license = $("#wpw_analyse_content").attr('wpw_license');
    var wpw_agreement = $("#wpw_analyse_content").attr('wpw_agreement');
    var wpw_visual_composer = $("#wpb_visual_composer").css('display');
    var who_keyword = false;
    var keyword1 = '';
    var keyword2 = '';
    var keyword3 = '';
    var ckwd_1 = '';
    var ckwd_2 = '';
    var ckwd_3 = '';
   $('#wpw_box_bottom .keywords1 .keyword1.tab').filter(function() {
        keyword1 = keyword1 + $(this).prev().val().toLowerCase() + '::';
   });
   $('#wpw_box_bottom .keywords2 .keyword2.tab').filter(function() {
        keyword2 = keyword2 + $(this).prev().val().toLowerCase() + '::';
   });
   $('#wpw_box_bottom .keywords3 .keyword3.tab').filter(function() {
        keyword3 = keyword3 + $(this).prev().val().toLowerCase() + '::';
   });
    ckwd_1 = keyword1.split("::").length;
    ckwd_2 = keyword2.split("::").length;
    ckwd_3 = keyword3.split("::").length;
    if(ckwd_1 >= 2){
        if(ckwd_2 >= 2){
            if(ckwd_3 >= 2){
                who_keyword = true;
            }
        }  
    }
    if(wpw_wpkey == '' ){
        who_keyword = true;
    }
    var obj = '';
    var ttl = $('#title').val();    
    if($("#wp-content-wrap").hasClass("html-active")){
        var targetId = 'content';
    }              
    if($("#wp-content-wrap").hasClass("tmce-active")){
        var targetId = 'tinymce';  
    }                  
    var tct = '';
    var received = '';
    switch ( targetId ) {
         case 'content':
             tct = encodeURIComponent($('#content').val().replace(/&nbsp;/g, " ")); 
             received = 'content';
             break;
         case 'tinymce':
             if ( tinymce.activeEditor.getContent()!=''){
                tct = encodeURIComponent(tinymce.activeEditor.getContent());
                received = 'tinymce';
             }else{
                if ( tinymce.editors.content.getContent()!=''){
                    received = 'tinymce';
                    tct = encodeURIComponent(tinymce.editors.content.getContent());
                }else{
                    received = 'tinymce';
                    tct = encodeURIComponent(tinyMCE.get('content').getContent());
                }
             }
             break;

         case 'tinymce':
             if ( tinymce.activeEditor.getContent()!=''){
                tct = encodeURIComponent(tinymce.activeEditor.getContent());
                received = 'tinymce';
             }else{
                if ( tinymce.editors.content.getContent()!=''){
                    received = 'tinymce';
                    tct = encodeURIComponent(tinymce.editors.content.getContent());
                }else{
                    received = 'tinymce';
                    tct = encodeURIComponent(tinyMCE.get('content').getContent());
                }
             }
             break;

    }
    var wpw_external_api = $("#wpw_analyse_content").attr('wpw_external_api'); 
    $.ajax({
       url : wpw_external_api,
       type : 'POST',
       data: "wpw_action=synthesis&wpw_wpkey="+wpw_wpkey+"&wpw_install="+wpw_install+"&wpw_license="+wpw_license+"&wpw_agreement="+wpw_agreement+"&keyword1="+keyword1+"&keyword2="+keyword2+"&keyword3="+keyword3+"&wp_text="+tct+"&wp_title="+ttl+"&wpw_received="+received,
       success : function(data){
       var obj = $.parseJSON(data);
       if(obj.success){
           if(obj.wpw_synthesis.success=="false"){
                $( "#wpw_finish_4 .synthesis_core" ).html('<div class="nosynonym">' + wpw_ajx_translate("SYNT_0B") + '</div>');
                $("#loader_id-ds62f0vyizD").removeClass("wpw_show").addClass("wpw_hide");
                $("#wpw_finish_4 .synthesis_core").removeClass("wpw_hide").addClass("wpw_show");
            }else{
                if(obj.wpw_synthesis.data=="null"){
                    $( "#wpw_finish_4 .synthesis_core" ).html('<div class="nosynonym">' + wpw_ajx_translate("SYNT_0A") + ' <br/> ' + wpw_ajx_translate("SYNT_0C") + '</div>');
                    $("#loader_id-ds62f0vyizD").removeClass("wpw_show").addClass("wpw_hide");
                    $("#wpw_finish_4 .synthesis_core").removeClass("wpw_hide").addClass("wpw_show");
                }else{

                    $("#loader_id-ds62f0vyizD").removeClass("wpw_show").addClass("wpw_hide");
                    $("#wpw_finish_4 .synthesis_core").removeClass("wpw_hide").addClass("wpw_show");
                    $("#wpw_finish_4 .synthesis_core").css("display","grid");
                    wpw_words_synthesis = [];
                    $.map(obj.wpw_synthesis.data, function (value, key) {
                        item = {}
                        $.map(value, function (value, key) {
                            item [key] = value;
                        });
                        wpw_words_synthesis.push(item);
                    }); 
                    $('#wpw_cloud_keyword').jQCloud(wpw_words_synthesis, {
                      autoResize: true,
                      delay: 50
                    });   
                    $('#wpw_cloud_keyword').jQCloud('update', wpw_words_synthesis);
                }
            }
       }
       },
    timeout: 10000,
    error: function(jqXHR, textStatus, errorThrown) {
        $( "#wpw_finish_4 .synthesis_core" ).html('<div class="nosynonym">' + wpw_ajx_translate("ERRLOD_0A") + ' ' + wpw_ajx_translate("ERRLOD_01") + ' </div>');
        $("#loader_id-ds62f0vyizD").removeClass("wpw_show").addClass("wpw_hide");
        $("#wpw_finish_4 .synthesis_core").removeClass("wpw_hide").addClass("wpw_show");        
    } 
    });
               }
           }
       },
    timeout: 5000,
    error: function(jqXHR, textStatus, errorThrown) {
        $( "#wpw_finish_4 .synthesis_core" ).html('<div class="nosynonym">' + wpw_ajx_translate("ERRLOD_0A") + ' ' + wpw_ajx_translate("ERRLOD_01") + ' </div>');
        $("#loader_id-ds62f0vyizD").removeClass("wpw_show").addClass("wpw_hide");
        $("#wpw_finish_4 .synthesis_core").removeClass("wpw_hide").addClass("wpw_show");        
    } 
      });                
}
function wpw_get_lng(wpw_otan) {
    var wpw_external_api = $("#wpw_analyse_content").attr('wpw_external_api'); 
    var wpw_wpkey = $("#wpw_analyse_content").attr('wpw_wpkey');
    var wpw_install = $("#wpw_analyse_content").attr('wpw_install');
    var wpw_license = $("#wpw_analyse_content").attr('wpw_license');
    var wpw_agreement = $("#wpw_analyse_content").attr('wpw_agreement');
    
    if(wpw_otan!=null){
    $.ajax({
       url : wpw_external_api,
       type : 'POST',
       data: "wpw_action=language&wpw_wpkey="+wpw_wpkey+"&wpw_install="+wpw_install+"&wpw_license="+wpw_license+"&wpw_agreement="+wpw_agreement+"&wpw_otan="+wpw_otan,
       success : function(data){
           var obj = $.parseJSON(data);
           if(obj.success){
               if(obj.wpw_language.success=="false"){
                }else{
                    $("#wpw_language").removeClass("wpw_hide").addClass("wpw_show");
                    $("#wpw_language").html("");
                    $("#loader_id-gfg5y4t0").removeClass("wpw_show").addClass("wpw_hide");
                    $("#wpw_language").append('<option value="-1">'+wpw_ajx_translate("OTAN_02")+'</option>');
                    $.map(obj.wpw_language.data, function (value, key) {
                          $("#wpw_language").append('<option value="'+value+'">'+key+'</option>');
                    });
                }
           }
       },
    timeout: 5000,
    error: function(jqXHR, textStatus, errorThrown) {
    } 
    });
    $("#wpw_language").on('change',function () {
        if(this.value!='-1'){
            $("#wpw_language_p").val(this.value);
            $("#wpw_step_0 .wpw_next").removeClass("wpw_hide").addClass("wpw_show"); 
        }else{
            $("#wpw_language_p").val("");
           $("#wpw_step_0 .wpw_next").removeClass("wpw_show").addClass("wpw_hide");  
        }
    });
    
    }else{
        $("#wpw_language_p").val("");
        $("#loader_id-gfg5y4t0").removeClass("wpw_show").addClass("wpw_hide");
        $("#wpw_language").removeClass("wpw_show").addClass("wpw_hide");
    }
}
function wpw_get_country() {
    var wpw_external_api = $("#wpw_analyse_content").attr('wpw_external_api'); 
    var wpw_wpkey = $("#wpw_analyse_content").attr('wpw_wpkey');
    var wpw_install = $("#wpw_analyse_content").attr('wpw_install');
    var wpw_license = $("#wpw_analyse_content").attr('wpw_license');
    var wpw_agreement = $("#wpw_analyse_content").attr('wpw_agreement');
    $("#wpw_country_p").val("");
    $("#wpw_language_p").val("");
    $.ajax({
       url : wpw_external_api,
       type : 'POST',
       data: "wpw_action=country&wpw_wpkey="+wpw_wpkey+"&wpw_install="+wpw_install+"&wpw_license="+wpw_license+"&wpw_agreement="+wpw_agreement,
       success : function(data){
           var obj = $.parseJSON(data);
           if(obj.success){
               if(obj.wpw_country.success=="false"){
                }else{
                    $("#wpw_step_0 .wpw_next").removeClass("wpw_show").addClass("wpw_hide");  
                    $("#wpw_country").removeClass("wpw_hide").addClass("wpw_show");
                    $("#wpw_country").html("");
                    $("#loader_id-fdg45fdg4r").removeClass("wpw_show").addClass("wpw_hide");
                    $("#wpw_country").append('<option value="-1">'+wpw_ajx_translate("OTAN_01")+'</option>');
                    $.map(obj.wpw_country.data, function (value, key) {
                          $("#wpw_country").append('<option data-value="'+value.otan+'" value="'+value.code+'">'+wpw_ajx_translate(key)+'</option>');
                    });          
                }
           }
       },
    timeout: 5000,
    error: function(jqXHR, textStatus, errorThrown) {
    } 
    });
    $("#wpw_country").on('change',function () {
        $("#wpw_step_0 .wpw_next").removeClass("wpw_show").addClass("wpw_hide"); 
        $("#wpw_language").removeClass("wpw_hide").addClass("wpw_show");
        $("#loader_id-gfg5y4t0").removeClass("wpw_hide").addClass("wpw_show");
            $("#wpw_country_p").val(this.value);
            wpw_get_lng($(this).find(':selected').attr('data-value'));
    });
}
