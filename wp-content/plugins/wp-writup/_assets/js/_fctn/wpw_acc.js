var $ = jQuery.noConflict();
function wpw_account(wpw_act){
if(wpw_act=='login'){
    var wpw_email = $('#signin-email').val();
    var wpw_password = $('#signin-password').val();
    var wpw_external_acc = $("#wpw_acc").attr('wpw_external_acc');    
    
  $.ajax({
   url : wpw_external_acc,
   type : 'POST',
   data: "wpw_api=account&wpw_type=singin&wpw_email="+wpw_email+"&wpw_password="+wpw_password,
   success : function(data){ 
       var obj = $.parseJSON(data);
       if(obj.success){
            if(obj.wp_account.authentication=='true'){
              $.ajax({
               url :  $("#wpw_acc").attr('wpw_url_ajax'),
               type : 'POST',
               data: "action=wpw_update_acc&wpw_ukey="+obj.wp_account.ukey+"&wpw_token="+obj.wp_account.token,
               success : function(data){
                   $(location).attr('href', $("#wpw_acc").attr('wpw_url_adm')+'admin.php?page=wpw-subscription');
                   }
              });       
            }else{
                $("#wpw_submit_login").removeClass("wpw_hide").addClass("wpw_show");
                $("#loader_id-65df65d0").removeClass("wpw_show").addClass("wpw_hide");
                $("#wpw_error_login").removeClass("wpw_hide").addClass("wpw_show");
                $("#wpw_error_login").html(wpw_ajx_translate(obj.wp_account.message));
                $("#wpw_success_login").removeClass("wpw_show").addClass("wpw_hide");
            }
       }
   }
  });
}
if(wpw_act=='signup'){
    var wpw_username = $('#signup-username').val();
    var wpw_email = $('#signup-email').val();
    var wpw_password = $('#signup-password').val();
    var wpw_external_acc = $("#wpw_acc").attr('wpw_external_acc');    

  $.ajax({
   url : wpw_external_acc,
   type : 'POST',
   data: "wpw_api=account&wpw_type=signup&wpw_username="+wpw_username+"&wpw_email="+wpw_email+"&wpw_password="+wpw_password,
   success : function(data){ 
       var obj = $.parseJSON(data);
       if(obj.success){
            if(obj.wp_account.registration=='true'){
              $.ajax({
               url :  $("#wpw_acc").attr('wpw_url_ajax'),
               type : 'POST',
               data: "action=wpw_update_acc&wpw_ukey="+obj.wp_account.ukey+"&wpw_token="+obj.wp_account.token,
               success : function(data){
                   $(location).attr('href', $("#wpw_acc").attr('wpw_url_adm')+'/admin.php?page=wpw-subscription');
                   }
              });       
            }else{
                $("#wpw_submit_signup").removeClass("wpw_hide").addClass("wpw_show");
                $("#loader_id-d5df4e0s").removeClass("wpw_show").addClass("wpw_hide");
                $("#wpw_error_sigup").removeClass("wpw_hide").addClass("wpw_show");
                $("#wpw_error_sigup").html(wpw_ajx_translate(obj.wp_account.message));
            }
       }
   }
  });
}
if(wpw_act=='resetpassword'){
    var wpw_email = $('#reset-email').val();
    var wpw_external_acc = $("#wpw_acc").attr('wpw_external_acc');    
  $.ajax({
   url : wpw_external_acc,
   type : 'POST',
   data: "wpw_api=account&wpw_type=resetpassword&wpw_email="+wpw_email,
   success : function(data){ 
       var obj = $.parseJSON(data);
       if(obj.success){
            if(obj.wp_account.reset=='true'){
                $("#wpw_submit_resetpassword").removeClass("wpw_hide").addClass("wpw_show");
                $("#loader_id-ui4ui0y5").removeClass("wpw_show").addClass("wpw_hide");   
                
                $("#cd-login").removeClass("is-selected");
                $("#cd-signup").removeClass("is-selected");
                $("#cd-reset-password").removeClass("is-selected");
                $("#cd-change-password").addClass("is-selected");
                $("#change-user").val(obj.wp_account.user);
            }else{
                $("#wpw_submit_resetpassword").removeClass("wpw_hide").addClass("wpw_show");
                $("#loader_id-ui4ui0y5").removeClass("wpw_show").addClass("wpw_hide");
                $("#wpw_error_resetpassword").removeClass("wpw_hide").addClass("wpw_show");
                $("#wpw_error_resetpassword").html(wpw_ajx_translate(obj.wp_account.message));
            }
       }
   }
  });
}
if(wpw_act=='changepassword'){
    var wpw_code = $('#change-code').val();
    var wpw_newpassword = $('#change-password').val();
    var wpw_user = $('#change-user').val();
    var wpw_external_acc = $("#wpw_acc").attr('wpw_external_acc');    

  $.ajax({
   url : wpw_external_acc,
   type : 'POST',
   data: "wpw_api=account&wpw_type=changepassword&wpw_user="+wpw_user+"&wpw_code="+wpw_code+"&wpw_newpassword="+wpw_newpassword,
   success : function(data){ 
       var obj = $.parseJSON(data);
       if(obj.success){
            if(obj.wp_account.change=='true'){
                $("#wpw_submit_changepassword").removeClass("wpw_hide").addClass("wpw_show");
                $("#loader_id-tr048gfe").removeClass("wpw_show").addClass("wpw_hide");   
                
                $("#cd-login").addClass("is-selected");
                $("#cd-signup").removeClass("is-selected");
                $("#cd-reset-password").removeClass("is-selected");
                $("#cd-change-password").removeClass("is-selected");
                $("#wpw_success_login").removeClass("wpw_hide").addClass("wpw_show");
                $("#wpw_success_login").html(wpw_ajx_translate(obj.wp_account.message));
                $("#wpw_error_changepassword").removeClass("wpw_show").addClass("wpw_hide");
            }else{
                $("#wpw_submit_changepassword").removeClass("wpw_hide").addClass("wpw_show");
                $("#loader_id-tr048gfe").removeClass("wpw_show").addClass("wpw_hide");
                $("#wpw_error_changepassword").removeClass("wpw_hide").addClass("wpw_show");
                $("#wpw_error_changepassword").html(wpw_ajx_translate(obj.wp_account.message));
            }
       }
   }
  });
}
}