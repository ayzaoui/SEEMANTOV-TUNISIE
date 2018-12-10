var $ = jQuery.noConflict();
$(document).ready(function($) {    
    $("#wpw_help_box").removeClass("wpw_hide").addClass("wpw_show");
    $("#wpw_help_step1").removeClass("wpw_hide").addClass("wpw_show");
    $("#wpw_help_step2").removeClass("wpw_show").addClass("wpw_hide");
    $("#wpw_help_step3").removeClass("wpw_show").addClass("wpw_hide");
    $("#wpcontent").addClass("wpw_modal_actif");
    
    $("#wpw_help_step1 .wpw_help_bouttom").click(function(){
        $("#wpw_help_box").removeClass("wpw_hide").addClass("wpw_show");
        $("#wpw_help_step1").removeClass("wpw_show").addClass("wpw_hide");
        $("#wpw_help_step2").removeClass("wpw_hide").addClass("wpw_show");
        $("#wpw_help_step3").removeClass("wpw_show").addClass("wpw_hide");
        $("#wpcontent").addClass("wpw_modal_actif");
    });
    $("#wpw_help_step2 .wpw_help_bouttom").click(function(){
        $("#wpw_help_box").removeClass("wpw_hide").addClass("wpw_show");
        $("#wpw_help_step1").removeClass("wpw_show").addClass("wpw_hide");
        $("#wpw_help_step2").removeClass("wpw_show").addClass("wpw_hide");
        $("#wpw_help_step3").removeClass("wpw_hide").addClass("wpw_show");
        $("#wpcontent").addClass("wpw_modal_actif");
    });
    $("#wpw_help_step3 .wpw_help_bouttom").click(function(){
        $("#wpw_help_box").removeClass("wpw_show").addClass("wpw_hide");
        $("#wpw_help_step1").removeClass("wpw_show").addClass("wpw_hide");
        $("#wpw_help_step2").removeClass("wpw_show").addClass("wpw_hide");
        $("#wpw_help_step3").removeClass("wpw_show").addClass("wpw_hide");
        $("#wpcontent").removeClass("wpw_modal_actif");
    }); 
});