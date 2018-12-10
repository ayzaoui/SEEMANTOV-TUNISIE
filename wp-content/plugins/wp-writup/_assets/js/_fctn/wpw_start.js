var $ = jQuery.noConflict();
$(document).ready(function($) {
if($('#wpw_actif').attr('checked')) {
    $(window).load(function() {
        wpw_load_global();
        wpw_analyse_content();
        $('#title').keyup(function(e) {
            wpw_external_delay(function(){wpw_analyse_content(e)});
        });
        $('textarea #content').keyup(function(e) {
            wpw_external_delay(function(){wpw_analyse_content(e)});
        });  
        
        if($("#wpw_step_2").is(':visible')){
            wpw_suggest_slurm(2);
        }
        if($("#wpw_step_3").is(':visible')){
            wpw_suggest_slurm(3);
        }
    });
    $("a.wpw_click_button").click(function(){
        if($("#wpw_step_1").is(':visible')){
            $("#loader_id-wpw_step_2_badd").removeClass("wpw_hide").addClass("wpw_show");
            $("#wpw_step_2_badd .wpw_this_suggest ").removeClass("wpw_show").addClass("wpw_hide");
            wpw_suggest_slurm(2);
        }
        if($("#wpw_step_2").is(':visible')){
            $("#loader_id-wpw_step_2_badd").removeClass("wpw_hide").addClass("wpw_show");
            $("#wpw_step_2_badd .wpw_this_suggest ").removeClass("wpw_show").addClass("wpw_hide");
            wpw_suggest_slurm(3);
        }
        if($("#wpw_step_3").is(':visible')){
            $("#loader_id-wpw_step_3_badd").removeClass("wpw_hide").addClass("wpw_show");
            $("#wpw_step_3_badd .wpw_this_suggest ").removeClass("wpw_show").addClass("wpw_hide");
            wpw_suggest_slurm(2);
        } 
    });
    $("a.wpw_addkey_btnfinish").click(function(){
        var keyword1 = '';
        if($('#title').val()==''){
           $('#wpw_box_bottom .keywords1 .keyword1.tab').filter(function() {
                keyword1 = $(this).prev().val().toLowerCase();
           });
            $('#title').val(keyword1);
            $('#title-prompt-text').addClass("screen-reader-text");
        }
        wpw_analyse_semantics();
    });
  }else{
    $("#wpw_box_title").hide();
    $("#wpw_box_analyse").hide();
    $("#wpw_box_keyword").hide();
    $("#wpw_box_bottom").hide();
    //$("#wpw-speech").hide();
    $("#wpw_speech_results").hide();
    $("#post-body-content").removeClass("wpw_hide_solo").addClass("wpw_show_solo");
    $('html, body').animate({
        scrollTop: $("#wpwrap").offset().top
    }, 0);          
  };
$("#synthesis_label").on('click', function(event) {
    if($(this).hasClass('actif')){
        $("#synthesis_small").removeClass("wpw_hide").addClass("wpw_show");
        $("#synthesis_medium").removeClass("wpw_show").addClass("wpw_hide");
        $("#synthesis_large").removeClass("wpw_show").addClass("wpw_hide");
        $("#synthesis_surligner").removeClass("wpw_show").addClass("wpw_hide");
        $("#synthesis_select").removeClass("wpw_hide").addClass("wpw_show");
        $("#synthesis_label").removeClass("actif");
        $("#synthesis_select .small").addClass("active");
        $("#synthesis_select").addClass("selected-1");
    }else{
        $("#synthesis_small").removeClass("wpw_show").addClass("wpw_hide");
        $("#synthesis_medium").removeClass("wpw_show").addClass("wpw_hide");
        $("#synthesis_large").removeClass("wpw_show").addClass("wpw_hide");
        $("#synthesis_surligner").removeClass("wpw_hide").addClass("wpw_show");
        $("#synthesis_select").removeClass("wpw_show").addClass("wpw_hide");
        $("#synthesis_label").addClass("actif");
        $("#synthesis_select .small").removeClass("active");
        $("#synthesis_select .medium").removeClass("active");
        $("#synthesis_select .large").removeClass("active");
        $("#synthesis_select").removeClass("selected-1 selected-2 selected-3");
    }
});
$("#synthesis_select").on('click', function(event) {
    var selected = $(this);
    selected.toggleClass('is-open');
    if($(event.target).is('li')) {
        var activeItem = $(event.target),
            index = activeItem.index() + 1;
        activeItem.addClass('active').siblings().removeClass('active');
        selected.removeClass('selected-1 selected-2 selected-3').addClass('selected-'+index);
        selected.hasClass('color') && updateSlider(selected, index-1);
        
        if(index=='1'){
            var value_select = "small";            
        }
        if(index=='2'){
            var value_select = "medium";            
        }
        if(index=='3'){
            var value_select = "large";            
        }
        $("#synthesis_small").removeClass("wpw_show").addClass("wpw_hide");
        $("#synthesis_medium").removeClass("wpw_show").addClass("wpw_hide");
        $("#synthesis_large").removeClass("wpw_show").addClass("wpw_hide");
        $("#synthesis_surligner").removeClass("wpw_show").addClass("wpw_hide");
        $("#synthesis_select").removeClass("wpw_hide").addClass("wpw_show");
        $("#synthesis_label").removeClass("actif");
        $("#synthesis_"+value_select).addClass("wpw_show");
    }
});
        WPW_GoogleSeoTtile();  
        WPW_GoogleSeoDesc(); 
$('#iptgp_title').keyup(function(e) {
    WPW_GoogleSeoTtile();
});
$('#iptgp_desc').keyup(function(e) {
    WPW_GoogleSeoDesc();
});

function WPW_GoogleSeoDesc(){
    $("#gp_dsc_gradient").removeClass();
    var gp_dsc_len = $( "#iptgp_desc" ).val().length;
    if(gp_dsc_len!=0){
        if(gp_dsc_len<=155){
            $(".GooglePreview .GP_descp").html($( "#iptgp_desc" ).val());
        }else{
            $(".GooglePreview .GP_descp").html($( "#iptgp_desc" ).val().slice(0,155)+'...');
        }
    }else{
        $(".GooglePreview .GP_descp").html('...');
    }
    $("#limit_decp").html(gp_dsc_len+"/155");
}
function WPW_GoogleSeoTtile(){
    $("#gp_title_gradient").removeClass();
    var gp_title_len = $( "#iptgp_title" ).val().length;
    var title_len = $("#title").val().length;
    if(gp_title_len==0){
        if(title_len<=75){
            $(".GooglePreview .GP_title").html($("#title").val());
        }else{
            $(".GooglePreview .GP_title").html($( "#title" ).val().slice(0,75)+'...');
        }
    }else{
        if(gp_title_len<=75){
            $(".GooglePreview .GP_title").html($( "#iptgp_title" ).val());
        }else{
            $(".GooglePreview .GP_title").html($( "#iptgp_title" ).val().slice(0,75)+'...');
        }
    }
    $("#limit_title").html(gp_title_len+"/75");
}

});