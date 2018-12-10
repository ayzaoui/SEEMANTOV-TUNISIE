var $ = jQuery.noConflict();
function wpw_mark_clean(){
    $('#title').removeClass("WPW_highlighting_zone");
    $('.mce-tinymce.mce-container').removeClass("WPW_highlighting_zone");
}
$(document).ready(function() {
    $(window).load(function() {
        $("#wpw_actif").change(function() {
            var thisvalactif = this.checked ? 1 : 0;
            $('#wpw_button_actif_pugin').val(thisvalactif);
            wpw_mark_clean();
            if(this.checked){
                wpw_load_global();
                $("#wpw_box_title").show();
                $("#wpw_box_analyse").show();
                $("#wpw_box_keyword").show();
                $("#wpw_box_bottom").show();
                //$("#wpw-speech").removeClass("wpw_hide").addClass("wpw_show");
                $("#wpw_speech_results").removeClass("wpw_hide").addClass("wpw_show");

                var keyword1 = '';
                var keyword2 = '';
                var keyword3 = '';
                var ckwd_1 = '';
                var ckwd_2 = '';
                var ckwd_3 = '';
                var who_keyword = false;
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
                    if(who_keyword != false){
                        $("#post-body-content").removeClass("wpw_hide_solo").addClass("wpw_show_solo");
                    }else{
                        $("#post-body-content").removeClass("wpw_show_solo").addClass("wpw_hide_solo");
                    }
                    wpw_analyse_content();
            } else {
                $("#wpw_box_title").hide();
                $("#wpw_box_analyse").hide();
                $("#wpw_box_keyword").hide();
                $("#wpw_box_bottom").hide();
                //$("#wpw-speech").removeClass("wpw_show").addClass("wpw_hide");
                $("#wpw_speech_results").removeClass("wpw_show").addClass("wpw_hide");
                $("#post-body-content").removeClass("wpw_hide_solo").addClass("wpw_show_solo");
                $('html, body').animate({
                    scrollTop: $("#wpwrap").offset().top
                }, 0);
            }
        });
    }); 
});