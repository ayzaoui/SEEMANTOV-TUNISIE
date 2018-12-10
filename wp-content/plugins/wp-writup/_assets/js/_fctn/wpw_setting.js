var $ = jQuery.noConflict();
$(document).ready(function($){
if($("#wpw_setting").attr('wpw_registration')!=''){
    wpw_subscription();
}else{
    $("#wpw_subscription_welcome").removeClass("wpw_hide").addClass("wpw_show");
}
$("#wpw_subscription_welcome .wpw_setting_button").click(function(){
    $("#wpw_subscription_welcome").removeClass("wpw_show").addClass("wpw_hide");
    $("#loader_id-S4sd5SZ0").removeClass("wpw_hide").addClass("wpw_show");
    wpw_startsubscription('true');
});
function wpw_subscription(){
var wpw_external_acc = $("#wpw_setting").attr('wpw_external_acc'); 
$.ajax({
   url : wpw_external_acc,
   type : 'POST',
   data: "wpw_api=subscription&wpw_path="+$("#wpw_setting").attr('wpw_path')+"&wpw_wpkey="+$("#wpw_setting").attr('wpw_wpkey')+"&wpw_license="+$("#wpw_setting").attr('wpw_license')+"&wpw_agreement="+$("#wpw_setting").attr('wpw_agreement')+"&wpw_install="+$("#wpw_setting").attr('wpw_install'),
   success : function(data){ 
       var obj = $.parseJSON(data);
       if(obj.success){
        if(obj.wp_subscription.activation=='trial'){
            if(obj.wp_subscription.remaining>=1){
                    $("#loader_id-S4sd5SZ0").removeClass("wpw_show").addClass("wpw_hide");
                    $("#wpw_subscription_trial").removeClass("wpw_hide").addClass("wpw_show");
                    $("#wpw_subscription_trial .numbers").html(obj.wp_subscription.remaining);
               }else{
                    $("#loader_id-S4sd5SZ0").removeClass("wpw_show").addClass("wpw_hide");
                    $("#wpw_subscription_expire").removeClass("wpw_hide").addClass("wpw_show");
               }
        }
        if(obj.wp_subscription.activation=='delete'){
            $("#loader_id-S4sd5SZ0").removeClass("wpw_show").addClass("wpw_hide");
            $("#wpw_subscription_delete").removeClass("wpw_hide").addClass("wpw_show"); 
              $.ajax({
               url :  $("#wpw_setting").attr('wpw_url_ajax'),
               type : 'POST',
               data: "action=wpw_update_dls",
               success : function(data){}
              });
        }
        if(obj.wp_subscription.activation=='warling'){
            $("#loader_id-S4sd5SZ0").removeClass("wpw_show").addClass("wpw_hide");
            $("#wpw_subscription_warling").removeClass("wpw_hide").addClass("wpw_show"); 
        }
        if(obj.wp_subscription.activation=='actived'){
            $("#loader_id-S4sd5SZ0").removeClass("wpw_show").addClass("wpw_hide");
            $("#wpw_subscription_actif").removeClass("wpw_hide").addClass("wpw_show"); 
            $("#wpw_setting_wpsub").removeClass("wpw_hide").addClass("wpw_show"); 
            $("#wpw_setting_wpsub .wpw_yoursub_title").html(obj.wp_subscription.subscription);
        }
       }
   }
});
}
function wpw_startsubscription(bull){
var wpw_external_acc = $("#wpw_setting").attr('wpw_external_acc'); 
  $.ajax({
   url : wpw_external_acc,
   type : 'POST',
   data: "wpw_api=startsub&wpw_path="+$("#wpw_setting").attr('wpw_path')+"&wpw_wpkey="+$("#wpw_setting").attr('wpw_wpkey')+"&wpw_install="+$("#wpw_setting").attr('wpw_install'),
   success : function(data){ 
       var obj = $.parseJSON(data);
       if(obj.success){
              $.ajax({
               url : $("#wpw_setting").attr('wpw_url_ajax'),
               type : 'POST',
               data: "action=wpw_update_act&wpw_wpkey="+obj.wp_installed.wpkey+"&wpw_path="+obj.wp_installed.path+"&wpw_registration="+obj.wp_installed.registration,
               success : function(data){               
                    if(obj.wp_installed.activation=='trial'){
                        if(obj.wp_installed.remaining>=1){
                                $("#loader_id-S4sd5SZ0").removeClass("wpw_show").addClass("wpw_hide");
                                $("#wpw_subscription_trial").removeClass("wpw_hide").addClass("wpw_show");
                                $("#wpw_subscription_trial .numbers").html(obj.wp_installed.remaining);
                                if(bull=='true'){
                                    $("#wpw_valid_trial").removeClass("wpw_hide").addClass("wpw_show");
                                }
                           }else{
                                $("#loader_id-S4sd5SZ0").removeClass("wpw_show").addClass("wpw_hide");
                                $("#wpw_subscription_expire").removeClass("wpw_hide").addClass("wpw_show");
                                if(bull=='true'){
                                    $("#wpw_error_trial").removeClass("wpw_hide").addClass("wpw_show");
                                }
                           }
                    }
                    if(obj.wp_installed.activation=='delete'){
                        $("#loader_id-S4sd5SZ0").removeClass("wpw_show").addClass("wpw_hide");
                        $("#wpw_subscription_delete").removeClass("wpw_hide").addClass("wpw_show"); 
                    }
                    if(obj.wp_installed.activation=='actived'){
                        $("#loader_id-S4sd5SZ0").removeClass("wpw_show").addClass("wpw_hide");
                        $("#wpw_subscription_actif").removeClass("wpw_hide").addClass("wpw_show"); 
                        if(bull=='true'){
                            $("#wpw_valid_activation").removeClass("wpw_hide").addClass("wpw_show");
                        }
                    }

                   }
              });
           }
       }
  });
}   
    $("#cd-login form.cd-form").submit(function(e){
        $("#wpw_submit_login").removeClass("wpw_show").addClass("wpw_hide");
        $("#loader_id-65df65d0").removeClass("wpw_hide").addClass("wpw_show");
        $("#wpw_error_login").removeClass("wpw_show").addClass("wpw_hide");
        wpw_account('login');
        return false;
    });
    $("#cd-signup form.cd-form").submit(function(e){
        $("#wpw_submit_signup").removeClass("wpw_show").addClass("wpw_hide");
        $("#loader_id-d5df4e0s").removeClass("wpw_hide").addClass("wpw_show");
        $("#wpw_error_signup").removeClass("wpw_show").addClass("wpw_hide");
        wpw_account('signup');
        return false;
    });
    $("#cd-reset-password form.cd-form").submit(function(e){
        $("#wpw_submit_resetpassword").removeClass("wpw_show").addClass("wpw_hide");
        $("#loader_id-ui4ui0y5").removeClass("wpw_hide").addClass("wpw_show");
        $("#wpw_error_resetpassword").removeClass("wpw_show").addClass("wpw_hide");
        wpw_account('resetpassword');
        return false;
    });
    $("#cd-change-password form.cd-form").submit(function(e){
        $("#wpw_submit_changepassword").removeClass("wpw_show").addClass("wpw_hide");
        $("#loader_id-tr048gfe").removeClass("wpw_hide").addClass("wpw_show");
        $("#wpw_error_changepassword").removeClass("wpw_show").addClass("wpw_hide");
        wpw_account('changepassword');
        return false;
    }); 
}); 