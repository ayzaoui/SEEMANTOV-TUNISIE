var $ = jQuery.noConflict();
function wpw_load_global(){
    var n_0A = $("input[name='wpw_country_p']").val();
    var n_0B = $("input[name='wpw_language_p']").val();
    var n_1 = $("input[name='keyword1[]']").size();
    if(n_1 == 0){
        $("#add_keyword1").removeClass("wpw_hide").addClass("wpw_show"); 
        $("#wpw_step_1_badd").removeClass("wpw_hide").addClass("wpw_show");
        $("#wpw_step_1 .wpw_next").removeClass("wpw_show").addClass("wpw_hide");
    }
    if(n_1 >= 1){
        $("#add_keyword1").removeClass("wpw_show").addClass("wpw_hide"); 
        $("#wpw_step_1_badd").removeClass("wpw_show").addClass("wpw_hide");
        $("#wpw_step_1 .wpw_next").removeClass("wpw_hide").addClass("wpw_show");
    }
    var n_2 = $("input[name='keyword2[]']").size();
    if(n_2 == 0){
        $("#add_keyword2 #lgd_4").removeClass("wpw_hide").addClass("wpw_show");  
        $("#add_keyword2").removeClass("wpw_hide").addClass("wpw_show");
        $("#wpw_step_2_badd").removeClass("wpw_hide").addClass("wpw_show");
        $("#wpw_step_2 .wpw_next").removeClass("wpw_show").addClass("wpw_hide");
    }
    if(n_2 == 1){
        $("#add_keyword2 #lgd_3").removeClass("wpw_hide").addClass("wpw_show");  
        $("#add_keyword2").removeClass("wpw_hide").addClass("wpw_show");
        $("#wpw_step_2_badd").removeClass("wpw_hide").addClass("wpw_show");
        $("#wpw_step_2 .wpw_next").removeClass("wpw_hide").addClass("wpw_show");
    }
    if(n_2 == 2){
        $("#add_keyword2 #lgd_2").removeClass("wpw_hide").addClass("wpw_show");  
        $("#add_keyword2").removeClass("wpw_hide").addClass("wpw_show");
        $("#wpw_step_2_badd").removeClass("wpw_hide").addClass("wpw_show");
        $("#wpw_step_2 .wpw_next").removeClass("wpw_hide").addClass("wpw_show");
    }
    if(n_2 == 3){
        $("#add_keyword2 #lgd_1").removeClass("wpw_hide").addClass("wpw_show");  
        $("#add_keyword2").removeClass("wpw_hide").addClass("wpw_show");
        $("#wpw_step_2_badd").removeClass("wpw_hide").addClass("wpw_show");
        $("#wpw_step_2 .wpw_next").removeClass("wpw_hide").addClass("wpw_show");
    }
    if(n_2 >= 4){
        $("#add_keyword2").removeClass("wpw_show").addClass("wpw_hide");
        $("#wpw_step_2_badd").removeClass("wpw_show").addClass("wpw_hide");
        $("#wpw_step_2 .wpw_next").removeClass("wpw_hide").addClass("wpw_show");
    }
    
    var n_3 = $("input[name='keyword3[]']").size();
    if(n_3 == 0){
        $("#add_keyword3 #lgd_8").removeClass("wpw_hide").addClass("wpw_show");
        $("#wpw_step_3 .wpw_next") .removeClass("wpw_show").addClass("wpw_hide");
    }
    if(n_3 == 1){
        $("#add_keyword3 #lgd_7").removeClass("wpw_hide").addClass("wpw_show");
        $("#wpw_step_3 .wpw_next") .removeClass("wpw_hide").addClass("wpw_show");
    }
    if(n_3 == 2){
        $("#add_keyword3 #lgd_6").removeClass("wpw_hide").addClass("wpw_show");
        $("#wpw_step_3 .wpw_next") .removeClass("wpw_hide").addClass("wpw_show");
    }
    if(n_3 == 3){
        $("#add_keyword3 #lgd_5").removeClass("wpw_hide").addClass("wpw_show");
        $("#wpw_step_3 .wpw_next") .removeClass("wpw_hide").addClass("wpw_show");
    }
    if(n_3 == 4){
        $("#add_keyword3 #lgd_4").removeClass("wpw_hide").addClass("wpw_show");
        $("#wpw_step_3 .wpw_next") .removeClass("wpw_hide").addClass("wpw_show");
    }
    if(n_3 == 5){
        $("#add_keyword3 #lgd_3").removeClass("wpw_hide").addClass("wpw_show");
        $("#wpw_step_3 .wpw_next") .removeClass("wpw_hide").addClass("wpw_show");
    }
    if(n_3 == 6){
        $("#add_keyword3 #lgd_2").removeClass("wpw_hide").addClass("wpw_show");
        $("#wpw_step_3 .wpw_next") .removeClass("wpw_hide").addClass("wpw_show");
    }
    if(n_3 == 7){
        $("#add_keyword3 #lgd_1").removeClass("wpw_hide").addClass("wpw_show");
        $("#wpw_step_3 .wpw_next") .removeClass("wpw_hide").addClass("wpw_show");
    }
    if(n_3 >= 8){
        $("#add_keyword3 #lgd_x").removeClass("wpw_hide").addClass("wpw_show");
        $("#wpw_step_3 .wpw_next") .removeClass("wpw_hide").addClass("wpw_show");
    }
    
if(n_0A !== '' && n_0B != '' && n_0A !== 'Array' && n_0B != 'Array'){
    $("#wpw_select_lng").removeClass("wpw_show").addClass("wpw_hide");
    $("#wpw_lang_displyslc").removeClass("wpw_hide").addClass("wpw_show");
    var n_0A_s = n_0A.split("||");
    var n_0B_s = n_0B.split("||");
    if(n_0A_s[1] == null || n_0B_s[1] == null){
        $("#wpw_select_lng").removeClass("wpw_hide").addClass("wpw_show");
        $("#wpw_lang_displyslc").removeClass("wpw_show").addClass("wpw_hide");
        $("#wpw_lang_displyslc .keyword").html("");
        $("#wpw_country_p").val("");
        $("#wpw_language_p").val("");

        $("#wpw_step_0").removeClass("wpw_hide").addClass("wpw_show");
        $("#wpw_step_1").removeClass("wpw_show").addClass("wpw_hide");
        $("#wpw_step_2").removeClass("wpw_show").addClass("wpw_hide");
        $("#wpw_step_3").removeClass("wpw_show").addClass("wpw_hide");
        $("#wpw_step_finish").removeClass("wpw_show").addClass("wpw_hide");
        $("#wpw_menu_bottom").removeClass("wpw_show").addClass("wpw_hide");
        $("#wpw_box_sb_1").removeClass("actif");
        $("#wpw_box_keyword").removeClass("this_finish");
        $("#wpw_finish_1").removeClass("wpw_show").addClass("wpw_hide");
        $("#wpw_box_sb_2").removeClass("actif");
        $("#wpw_finish_2").removeClass("wpw_show").addClass("wpw_hide");
        $("#wpw_finish_3").removeClass("wpw_show").addClass("wpw_hide");
        $("#wpw_finish_4").removeClass("wpw_show").addClass("wpw_hide");
        $("#post-body-content").removeClass("wpw_show_solo").addClass("wpw_hide_solo");
        $("#wpw_step_1 .wpw_next") .removeClass("wpw_hide").addClass("wpw_show");
        //$("#wpw-speech").removeClass("wpw_show").addClass("wpw_hide");
        $("#wpw_speech_results").removeClass("wpw_show").addClass("wpw_hide");
        $('html, body').animate({
            scrollTop: $("#wpw_box_top").offset().top
        }, 100);
        wpw_get_country();   
    }else{
        $("#wpw_lang_displyslc .keyword").html(wpw_ajx_translate(n_0A_s[1]) + ' / ' + n_0B_s[1]);
        $("#wpw_step_0 .wpw_next").removeClass("wpw_hide").addClass("wpw_show"); 
    }
    if(n_1 >= 1){
        if(n_2 >= 1){
            if(n_3 >= 1){
                $("#wpw_step_0").removeClass("wpw_show").addClass("wpw_hide");
                $("#wpw_step_1").removeClass("wpw_show").addClass("wpw_hide");
                $("#wpw_step_2").removeClass("wpw_show").addClass("wpw_hide");
                $("#wpw_step_3").removeClass("wpw_show").addClass("wpw_hide");
                $("#wpw_step_finish").removeClass("wpw_hide").addClass("wpw_show");
                $("#wpw_menu_bottom").removeClass("wpw_hide").addClass("wpw_show");
                $("#wpw_box_sb_1").addClass("actif");
                $("#wpw_box_keyword").addClass("this_finish");
                $("#wpw_finish_1").removeClass("wpw_hide").addClass("wpw_show");
                $("#wpw_box_sb_2").removeClass("actif");
                $("#wpw_finish_2").removeClass("wpw_show").addClass("wpw_hide");
                $("#wpw_finish_3").removeClass("wpw_show").addClass("wpw_hide");
                $("#wpw_finish_4").removeClass("wpw_show").addClass("wpw_hide");
                $("#post-body-content").removeClass("wpw_hide_solo").addClass("wpw_show_solo");
                //$("#wpw-speech").removeClass("wpw_hide").addClass("wpw_show");
                $("#wpw_speech_results").removeClass("wpw_hide").addClass("wpw_show");
            }else{
                $("#wpw_step_0").removeClass("wpw_show").addClass("wpw_hide");
                $("#wpw_step_1").removeClass("wpw_show").addClass("wpw_hide");
                $("#wpw_step_2").removeClass("wpw_show").addClass("wpw_hide");
                $("#wpw_step_3").removeClass("wpw_hide").addClass("wpw_show");
                $("#wpw_step_finish").removeClass("wpw_show").addClass("wpw_hide");
                $("#wpw_menu_bottom").removeClass("wpw_show").addClass("wpw_hide");
                $("#wpw_box_sb_1").removeClass("actif");
                $("#wpw_box_keyword").removeClass("this_finish");
                $("#wpw_finish_1").removeClass("wpw_show").addClass("wpw_hide");
                $("#wpw_box_sb_2").removeClass("actif");
                $("#wpw_finish_2").removeClass("wpw_show").addClass("wpw_hide");
                $("#wpw_finish_3").removeClass("wpw_show").addClass("wpw_hide");
                $("#wpw_finish_4").removeClass("wpw_show").addClass("wpw_hide");
                $("#post-body-content").removeClass("wpw_show_solo").addClass("wpw_hide_solo");
                //$("#wpw-speech").removeClass("wpw_show").addClass("wpw_hide");
                $("#wpw_speech_results").removeClass("wpw_show").addClass("wpw_hide");;
            } 
        }else{
            $("#wpw_step_0").removeClass("wpw_show").addClass("wpw_hide");
            $("#wpw_step_1").removeClass("wpw_show").addClass("wpw_hide");
            $("#wpw_step_2").removeClass("wpw_hide").addClass("wpw_show");
            $("#wpw_step_3").removeClass("wpw_show").addClass("wpw_hide");
            $("#wpw_step_finish").removeClass("wpw_show").addClass("wpw_hide");
            $("#wpw_menu_bottom").removeClass("wpw_show").addClass("wpw_hide");
            $("#wpw_box_sb_1").removeClass("actif");
            $("#wpw_box_keyword").removeClass("this_finish");
            $("#wpw_finish_1").removeClass("wpw_show").addClass("wpw_hide");
            $("#wpw_box_sb_2").removeClass("actif");
            $("#wpw_finish_2").removeClass("wpw_show").addClass("wpw_hide");
            $("#wpw_finish_3").removeClass("wpw_show").addClass("wpw_hide");
            $("#wpw_finish_4").removeClass("wpw_show").addClass("wpw_hide");
            $("#wpw_addkey_step_previous").removeClass("wpw_hide").addClass("wpw_show");
            $("#post-body-content").removeClass("wpw_show_solo").addClass("wpw_hide_solo");
            //$("#wpw-speech").removeClass("wpw_show").addClass("wpw_hide");
            $("#wpw_speech_results").removeClass("wpw_show").addClass("wpw_hide");
        } 

    }else{
        $("#wpw_step_0").removeClass("wpw_show").addClass("wpw_hide");
        $("#wpw_step_1").removeClass("wpw_hide").addClass("wpw_show");
        $("#wpw_step_2").removeClass("wpw_show").addClass("wpw_hide");
        $("#wpw_step_3").removeClass("wpw_show").addClass("wpw_hide");
        $("#wpw_step_finish").removeClass("wpw_show").addClass("wpw_hide");
        $("#wpw_menu_bottom").removeClass("wpw_show").addClass("wpw_hide");
        $("#wpw_box_sb_1").removeClass("actif");
        $("#wpw_box_keyword").removeClass("this_finish");
        $("#wpw_finish_1").removeClass("wpw_show").addClass("wpw_hide");
        $("#wpw_box_sb_2").removeClass("actif");
        $("#wpw_finish_2").removeClass("wpw_show").addClass("wpw_hide");
        $("#wpw_finish_3").removeClass("wpw_show").addClass("wpw_hide");
        $("#wpw_finish_4").removeClass("wpw_show").addClass("wpw_hide");
        $("#post-body-content").removeClass("wpw_show_solo").addClass("wpw_hide_solo");
        //$("#wpw-speech").removeClass("wpw_show").addClass("wpw_hide");
        $("#wpw_speech_results").removeClass("wpw_show").addClass("wpw_hide");
    }
}else{
    wpw_get_country();       
    $("#wpw_step_0").removeClass("wpw_hide").addClass("wpw_show");
    $("#wpw_step_1").removeClass("wpw_show").addClass("wpw_hide");
    $("#wpw_step_2").removeClass("wpw_show").addClass("wpw_hide");
    $("#wpw_step_3").removeClass("wpw_show").addClass("wpw_hide");
    $("#wpw_step_finish").removeClass("wpw_show").addClass("wpw_hide");
    $("#wpw_menu_bottom").removeClass("wpw_show").addClass("wpw_hide");
    $("#wpw_box_sb_1").removeClass("actif");
    $("#wpw_box_keyword").removeClass("this_finish");
    $("#wpw_finish_1").removeClass("wpw_show").addClass("wpw_hide");
    $("#wpw_box_sb_2").removeClass("actif");
    $("#wpw_finish_2").removeClass("wpw_show").addClass("wpw_hide");
    $("#wpw_finish_3").removeClass("wpw_show").addClass("wpw_hide");
    $("#wpw_finish_4").removeClass("wpw_show").addClass("wpw_hide");
    $("#post-body-content").removeClass("wpw_show_solo").addClass("wpw_hide_solo");
    //$("#wpw-speech").removeClass("wpw_show").addClass("wpw_hide");
    $("#wpw_speech_results").removeClass("wpw_show").addClass("wpw_hide");
}
    
    $("#loader_id-5s20e03").removeClass("wpw_show").addClass("wpw_hide");
    $(".wpw_next").click(function(){
        if($("#wpw_step_0").is(':visible')){
            $("#wpw_step_0").removeClass("wpw_show").addClass("wpw_hide");
            $("#wpw_step_1").removeClass("wpw_hide").addClass("wpw_show");
            $("#wpw_step_2").removeClass("wpw_show").addClass("wpw_hide");
            $("#wpw_step_3").removeClass("wpw_show").addClass("wpw_hide");
            $("#wpw_step_finish").removeClass("wpw_show").addClass("wpw_hide");
            $("#post-body-content").removeClass("wpw_show_solo").addClass("wpw_hide_solo");
            //$("#wpw-speech").removeClass("wpw_show").addClass("wpw_hide");
            $("#wpw_speech_results").removeClass("wpw_show").addClass("wpw_hide");
        }else{
            if($("#wpw_step_1").is(':visible')){
                $("#wpw_step_0").removeClass("wpw_show").addClass("wpw_hide");
                $("#wpw_step_1").removeClass("wpw_show").addClass("wpw_hide");
                $("#wpw_step_2").removeClass("wpw_hide").addClass("wpw_show");
                $("#wpw_step_3").removeClass("wpw_show").addClass("wpw_hide");
                $("#wpw_step_finish").removeClass("wpw_show").addClass("wpw_hide");
                $("#post-body-content").removeClass("wpw_show_solo").addClass("wpw_hide_solo");
                //$("#wpw-speech").removeClass("wpw_show").addClass("wpw_hide");
                $("#wpw_speech_results").removeClass("wpw_show").addClass("wpw_hide");
            }else{
                if($("#wpw_step_2").is(':visible')){
                    $("#wpw_step_0").removeClass("wpw_show").addClass("wpw_hide");
                    $("#wpw_step_1").removeClass("wpw_show").addClass("wpw_hide");
                    $("#wpw_step_2").removeClass("wpw_show").addClass("wpw_hide");
                    $("#wpw_step_3").removeClass("wpw_hide").addClass("wpw_show");
                    $("#wpw_step_finish").removeClass("wpw_show").addClass("wpw_hide");
                    $("#post-body-content").removeClass("wpw_show_solo").addClass("wpw_hide_solo");
                    //$("#wpw-speech").removeClass("wpw_show").addClass("wpw_hide");
                    $("#wpw_speech_results").removeClass("wpw_show").addClass("wpw_hide");
                }else{
                    if($("#wpw_step_3").is(':visible')){
                        $("#wpw_step_0").removeClass("wpw_show").addClass("wpw_hide");
                        $("#wpw_step_1").removeClass("wpw_show").addClass("wpw_hide");
                        $("#wpw_step_2").removeClass("wpw_show").addClass("wpw_hide");
                        $("#wpw_step_3").removeClass("wpw_show").addClass("wpw_hide");
                        $("#wpw_step_finish").removeClass("wpw_hide").addClass("wpw_show");
                        $("#wpw_menu_bottom").removeClass("wpw_hide").addClass("wpw_show");
                        $("#wpw_box_sb_1").addClass("actif");
                        $("#wpw_box_keyword").addClass("this_finish");
                        $("#wpw_finish_1").removeClass("wpw_hide").addClass("wpw_show");
                        $("#wpw_box_sb_2").removeClass("actif");
                        $("#wpw_finish_2").removeClass("wpw_show").addClass("wpw_hide");
                        $("#wpw_finish_3").removeClass("wpw_show").addClass("wpw_hide");
                        $("#wpw_finish_4").removeClass("wpw_show").addClass("wpw_hide");
                        $("#post-body-content").removeClass("wpw_hide_solo").addClass("wpw_show_solo"); 
                        //$("#wpw-speech").removeClass("wpw_hide").addClass("wpw_show");
                        $("#wpw_speech_results").removeClass("wpw_hide").addClass("wpw_show");
                        $('html, body').animate({
                            scrollTop: $("#wpwrap").offset().top
                        }, 0);
                    }
                }
            }
        }
    });
    $(".wpw_previous").click(function(){
    if($("#wpw_step_1").is(':visible')){
        $("#wpw_step_0").removeClass("wpw_hide").addClass("wpw_show");
        $("#wpw_step_1").removeClass("wpw_show").addClass("wpw_hide");
        $("#wpw_step_2").removeClass("wpw_show").addClass("wpw_hide");
        $("#wpw_step_3").removeClass("wpw_show").addClass("wpw_hide");
        $("#wpw_step_finish").removeClass("wpw_show").addClass("wpw_hide");
        $("#post-body-content").removeClass("wpw_show_solo").addClass("wpw_hide_solo");
        //$("#wpw-speech").removeClass("wpw_show").addClass("wpw_hide");
        $("#wpw_speech_results").removeClass("wpw_show").addClass("wpw_hide");
    }else{     
        if($("#wpw_step_2").is(':visible')){
            $("#wpw_step_0").removeClass("wpw_show").addClass("wpw_hide");
            $("#wpw_step_1").removeClass("wpw_hide").addClass("wpw_show");
            $("#wpw_step_2").removeClass("wpw_show").addClass("wpw_hide");
            $("#wpw_step_3").removeClass("wpw_show").addClass("wpw_hide");
            $("#wpw_step_finish").removeClass("wpw_show").addClass("wpw_hide");
            $("#post-body-content").removeClass("wpw_show_solo").addClass("wpw_hide_solo");
            //$("#wpw-speech").removeClass("wpw_show").addClass("wpw_hide");
            $("#wpw_speech_results").removeClass("wpw_show").addClass("wpw_hide");
        }else{
            if($("#wpw_step_3").is(':visible')){
                $("#wpw_step_0").removeClass("wpw_show").addClass("wpw_hide");
                $("#wpw_step_1").removeClass("wpw_show").addClass("wpw_hide");
                $("#wpw_step_2").removeClass("wpw_hide").addClass("wpw_show");
                $("#wpw_step_3").removeClass("wpw_show").addClass("wpw_hide");
                $("#wpw_step_finish").removeClass("wpw_show").addClass("wpw_hide");
                $("#post-body-content").removeClass("wpw_show_solo").addClass("wpw_hide_solo");
                //$("#wpw-speech").removeClass("wpw_show").addClass("wpw_hide");
                $("#wpw_speech_results").removeClass("wpw_show").addClass("wpw_hide");
            }
        }
    }
    });
    $("#wpw_addkey_step_changelng").click(function(){
        $("#wpw_select_lng").removeClass("wpw_hide").addClass("wpw_show");
        $("#wpw_lang_displyslc").removeClass("wpw_show").addClass("wpw_hide");
        $("#wpw_lang_displyslc .keyword").html("");
        $("#wpw_country_p").val("");
        $("#wpw_language_p").val("");
        $("#wpw_step_0 .wpw_next").removeClass("wpw_show").addClass("wpw_hide");
        $("#wpw_step_1_sg .keywords1 .words").html("");
            $(".keywords1bis .words").html("");
            $("#add_keyword1").removeClass("wpw_hide").addClass("wpw_show");  
            $("#wpw_step_1_badd").removeClass("wpw_hide").addClass("wpw_show");
            $("#wpw_step_1 .wpw_next").removeClass("wpw_show").addClass("wpw_hide");
            $("#wpw_step_1 .this_add_key").removeClass("wpw_show").addClass("wpw_hide");
        $("#wpw_step_2_sg .keywords2 .words").html("");
            $(".keywords2bis .words").html("");
            $("#add_keyword2").removeClass("wpw_hide").addClass("wpw_show");
            $("#wpw_step_2_badd").removeClass("wpw_hide").addClass("wpw_show");
            $("#add_keyword2 #lgd_4").removeClass("wpw_hide").addClass("wpw_show");
            $("#add_keyword2 #lgd_3").removeClass("wpw_show").addClass("wpw_hide");  
            $("#add_keyword2 #lgd_2").removeClass("wpw_show").addClass("wpw_hide");  
            $("#add_keyword2 #lgd_1").removeClass("wpw_show").addClass("wpw_hide"); 
            $("#wpw_step_2 .wpw_next").removeClass("wpw_show").addClass("wpw_hide");
            $("#wpw_step_2 .this_add_key").removeClass("wpw_show").addClass("wpw_hide");
        $("#wpw_step_3_sg .keywords3 .words").html("");
            $(".keywords3bis .words").html("");
            $("#add_keyword3").removeClass("wpw_hide").addClass("wpw_show");  
            $("#add_keyword3 #lgd_x").removeClass("wpw_show").addClass("wpw_hide");
            $("#add_keyword3 #lgd_8").removeClass("wpw_hide").addClass("wpw_show");
            $("#add_keyword3 #lgd_7").removeClass("wpw_show").addClass("wpw_hide");
            $("#add_keyword3 #lgd_6").removeClass("wpw_show").addClass("wpw_hide");
            $("#add_keyword3 #lgd_5").removeClass("wpw_show").addClass("wpw_hide");
            $("#add_keyword3 #lgd_4").removeClass("wpw_show").addClass("wpw_hide");
            $("#add_keyword3 #lgd_3").removeClass("wpw_show").addClass("wpw_hide");  
            $("#add_keyword3 #lgd_2").removeClass("wpw_show").addClass("wpw_hide");  
            $("#add_keyword3 #lgd_1").removeClass("wpw_show").addClass("wpw_hide");  
            $("#wpw_step_3 .wpw_next").removeClass("wpw_show").addClass("wpw_hide");
            $("#wpw_step_3 .this_add_key").removeClass("wpw_show").addClass("wpw_hide");
        wpw_get_country();   
    });
    
    $("#wpw_addkey_step_first").click(function(){
        $("#wpw_step_0").removeClass("wpw_hide").addClass("wpw_show");
        $("#wpw_step_1").removeClass("wpw_show").addClass("wpw_hide");
        $("#wpw_step_2").removeClass("wpw_show").addClass("wpw_hide");
        $("#wpw_step_3").removeClass("wpw_show").addClass("wpw_hide");
        $("#wpw_step_finish").removeClass("wpw_show").addClass("wpw_hide");
        $("#wpw_menu_bottom").removeClass("wpw_show").addClass("wpw_hide");
        $("#wpw_box_sb_1").removeClass("actif");
        $("#wpw_box_keyword").removeClass("this_finish");
        $("#wpw_finish_1").removeClass("wpw_show").addClass("wpw_hide");
        $("#wpw_box_sb_2").removeClass("actif");
        $("#wpw_finish_2").removeClass("wpw_show").addClass("wpw_hide");
        $("#wpw_finish_3").removeClass("wpw_show").addClass("wpw_hide");
        $("#wpw_finish_4").removeClass("wpw_show").addClass("wpw_hide");
        $("#wpw_finish_5").removeClass("wpw_show").addClass("wpw_hide");
        $("#post-body-content").removeClass("wpw_show_solo").addClass("wpw_hide_solo");
        $("#wpw_step_1 .wpw_next") .removeClass("wpw_hide").addClass("wpw_show");
        $("#wpw-speech").removeClass("wpw_show").addClass("wpw_hide");
        $("#wpw_speech_results").removeClass("wpw_show").addClass("wpw_hide");
        $('html, body').animate({
            scrollTop: $("#wpw_box_top").offset().top
        }, 100);
    });
    $("#wpw_box_sb_1").click(function(){
        $("#wpw_finish_1").removeClass("wpw_hide").addClass("wpw_show");
        $("#wpw_finish_2").removeClass("wpw_show").addClass("wpw_hide");
        $("#wpw_finish_3").removeClass("wpw_show").addClass("wpw_hide");
        $("#wpw_finish_4").removeClass("wpw_show").addClass("wpw_hide");
        $("#wpw_finish_5").removeClass("wpw_show").addClass("wpw_hide");
        $("#wpw_box_sb_1").addClass("actif");
        $("#wpw_box_sb_2").removeClass("actif");
        $("#wpw_box_sb_3").removeClass("actif");
        $("#wpw_box_sb_4").removeClass("actif");
        $("#wpw_box_sb_5").removeClass("actif");
    });
    $("#wpw_box_sb_2").click(function(){
        $("#wpw_finish_1").removeClass("wpw_show").addClass("wpw_hide");
        $("#wpw_finish_2").removeClass("wpw_hide").addClass("wpw_show");
        $("#wpw_finish_3").removeClass("wpw_show").addClass("wpw_hide");
        $("#wpw_finish_4").removeClass("wpw_show").addClass("wpw_hide");
        $("#wpw_finish_5").removeClass("wpw_show").addClass("wpw_hide");
        $("#wpw_box_sb_1").removeClass("actif");
        $("#wpw_box_sb_2").addClass("actif");
        $("#wpw_box_sb_3").removeClass("actif");
        $("#wpw_box_sb_4").removeClass("actif");
        $("#wpw_box_sb_5").removeClass("actif");
        $("#loader_id-ds5d4syn0").removeClass("wpw_hide").addClass("wpw_show");
        $("#wpw_finish_2 .synonym_core").removeClass("wpw_show").addClass("wpw_hide");
        wpw_analyse_synonym();
    });
    $("#wpw_box_sb_3").click(function(){
        $("#wpw_finish_1").removeClass("wpw_show").addClass("wpw_hide");
        $("#wpw_finish_2").removeClass("wpw_show").addClass("wpw_hide");
        $("#wpw_finish_3").removeClass("wpw_hide").addClass("wpw_show");
        $("#wpw_finish_4").removeClass("wpw_show").addClass("wpw_hide");
        $("#wpw_finish_5").removeClass("wpw_show").addClass("wpw_hide");
        $("#wpw_box_sb_1").removeClass("actif");
        $("#wpw_box_sb_2").removeClass("actif");
        $("#wpw_box_sb_3").addClass("actif");
        $("#wpw_box_sb_4").removeClass("actif");
        $("#wpw_bxo_sb_5").removeClass("actif");
        $("#wpw_finish_3 .semantics_core" ).html('');
        $("#wpw_finish_3 .semantics_core").removeClass("wpw_show").addClass("wpw_hide");
        $("#wpw_progress_semantics").removeClass("wpw_show").addClass("wpw_hide");
        $("#loader_id-6gdfr0ny9y8e").removeClass("wpw_hide").addClass("wpw_show");
        wpw_analyse_semantics();
    });
    $("#wpw_box_sb_4").click(function(){
        $("#wpw_finish_1").removeClass("wpw_show").addClass("wpw_hide");
        $("#wpw_finish_2").removeClass("wpw_show").addClass("wpw_hide");
        $("#wpw_finish_3").removeClass("wpw_show").addClass("wpw_hide");
        $("#wpw_finish_4").removeClass("wpw_hide").addClass("wpw_show");
        $("#wpw_finish_5").removeClass("wpw_show").addClass("wpw_hide");
        $("#wpw_box_sb_1").removeClass("actif");
        $("#wpw_box_sb_2").removeClass("actif");
        $("#wpw_box_sb_3").removeClass("actif");
        $("#wpw_box_sb_4").addClass("actif");
        $("#wpw_box_sb_5").removeClass("actif");
        $("#loader_id-ds62f0vyizD").removeClass("wpw_hide").addClass("wpw_show");
        $("#wpw_finish_4 .synthesis_core").removeClass("wpw_show").addClass("wpw_hide");    
        wpw_analyse_synthesis();
    });
    $("#wpw_box_sb_5").click(function(){
        $("#wpw_finish_1").removeClass("wpw_show").addClass("wpw_hide");
        $("#wpw_finish_2").removeClass("wpw_show").addClass("wpw_hide");
        $("#wpw_finish_3").removeClass("wpw_show").addClass("wpw_hide");
        $("#wpw_finish_4").removeClass("wpw_show").addClass("wpw_hide");
        $("#wpw_finish_5").removeClass("wpw_hide").addClass("wpw_show");
        $("#wpw_box_sb_1").removeClass("actif");
        $("#wpw_box_sb_2").removeClass("actif");
        $("#wpw_box_sb_3").removeClass("actif");
        $("#wpw_box_sb_4").removeClass("actif");
        $("#wpw_box_sb_5").addClass("actif");
    });
  $(".wpw_searchkey").keydown(function(event){
    if(event.keyCode == 13) {
      event.preventDefault();
      $(this).next().trigger( "click" );
      return false;
    }
  });
$("#wpw_box_bottom").on('click', 'span.suggestion_keyword', function (event) {
	var keyword_name = $(this).children().text();
    $(this).next(".wpw_searchkey").val(keyword_name);
    $(this).parent().parent().parent().next().find("input").val(keyword_name);
    $(this).parent().parent().parent().next().find("span").trigger( "click" );
    $(this).remove();    
});
$("#wpw_finish_2").on('click', '.keyword.tab svg.wpw_svg_add', function (event) {
	var keyword_name = $(this).parent().text();    
    tinymce.activeEditor.execCommand('mceInsertContent', false, keyword_name);
    $('html, body').animate({
        scrollTop: $("#wpwrap").offset().top
    }, 0);
}); 
$("#wpw_finish_1").on('click', '.keyword.tab svg.wpw_svg_add', function (event) {
	var keyword_name = $(this).parent().attr("data-value");    
    tinymce.activeEditor.execCommand('mceInsertContent', false, keyword_name);
    $('html, body').animate({
        scrollTop: $("#wpwrap").offset().top
    }, 0);
});
function wpw_suggestLoad(){
    if($("#wpw_step_2").is(':visible')){
        $("#wpw_addkey_step_previous").removeClass("wpw_hide").addClass("wpw_show");
        $("#wpw_addkey_step_next").removeClass("wpw_hide").addClass("wpw_show");
        $("#loader_id-wpw_step_2_badd").removeClass("wpw_hide").addClass("wpw_show");
        $("#wpw_step_2_badd .wpw_this_suggest ").removeClass("wpw_show").addClass("wpw_hide");
        wpw_suggest_slurm(2);
    }
    if($("#wpw_step_3").is(':visible')){
        $("#wpw_addkey_step_previous").removeClass("wpw_hide").addClass("wpw_show");
        $("#wpw_addkey_step_next").removeClass("wpw_hide").addClass("wpw_show");
        $("#loader_id-wpw_step_3_badd").removeClass("wpw_hide").addClass("wpw_show");
        $("#wpw_step_3_badd .wpw_this_suggest ").removeClass("wpw_show").addClass("wpw_hide");
        wpw_suggest_slurm(3);
    } 
}
}
var wpw_external_delay = (function(){
  var wpw_timer = 0;
  return function(callback){
  var wpw_ms = 650;
    clearTimeout (wpw_timer);
    wpw_timer = setTimeout(callback, wpw_ms);
  };
})();