var $ = jQuery.noConflict();
$(document).ready(function(){
var wpw_external_acc = $("#wpw_manage_sub").attr('wpw_external_acc'); 
  $.ajax({
   url : wpw_external_acc,
   type : 'POST',
   data: "wpw_api=usubs&wpw_path="+ $("#wpw_manage_sub").attr('wpw_path') +"&wpw_ukey="+ $("#wpw_manage_sub").attr('wpw_ukey') +"&wpw_token="+  $("#wpw_manage_sub").attr('wpw_token')+"&wpw_license="+$("#wpw_manage_sub").attr('wpw_license'),
   success : function(data){ 
       var obj = $.parseJSON(data);
       if(obj.success){
            if(obj.wp_yoursubscriptions.status=='true'){    
                if(obj.wp_yoursubscriptions.list=='null'){
                    $("#wpw_nosubscriptions").removeClass("wpw_hide").addClass("wpw_show");
                    $("#loader_id-gh9547fe0").removeClass("wpw_show").addClass("wpw_hide");
                }else{
                    $("#wpw_nosubscriptions").removeClass("wpw_show").addClass("wpw_hide");
                    $("#loader_id-gh9547fe0").removeClass("wpw_show").addClass("wpw_hide");  
                       $( "#yoursubscriptions" ).html("");
                       $.map(obj.wp_yoursubscriptions.list, function (index, key) {
                           var remove_btt_add = 0;
                           var boxing = '';
                           if(index.domains!='null'){
                           $.map(index.domains, function (index, domains) {
                                boxing += '<div class="boxing"><div class="domain"> : '+domains+'</div><div data-value="'+index+'" data-name="wpw_wp_delect" class="trash cd-popup-trigger"><svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 48 48"> <g class="nc-icon-wrapper" fill="#e00000"> <path d="M12 38c0 2.2 1.8 4 4 4h16c2.2 0 4-1.8 4-4V14H12v24zm4.93-14.24l2.83-2.83L24 25.17l4.24-4.24 2.83 2.83L26.83 28l4.24 4.24-2.83 2.83L24 30.83l-4.24 4.24-2.83-2.83L21.17 28l-4.24-4.24zM31 8l-2-2H19l-2 2h-7v4h28V8z"></path> </g> </svg></div></div>';
                           });
                               if($("#wpw_manage_sub").attr('wpw_path')==index){
                                    remove_btt_add = 1;       
                               }
                           }else{
                               boxing = '<div class="boxing txt">'+wpw_ajx_translate("YSU_05")+'</div>'
                           }
                           if(index.ended_at!='null'){
                           if(index.available>=1 && remove_btt_add!=1){
                               var wpw_yoursub_button = '<div class="wpw_yoursub_bttexp"><div class="ico_add"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"> <g class="nc-icon-wrapper" fill="#ffffff"> <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"></path> </g> </svg></div>'+wpw_ajx_translate("YSU_07")+' : '+index.ended_at+'</div> <div data-value="'+index.license+'" class="wpw_yoursub_bttadd"><div class="ico_add"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"> <g class="nc-icon-wrapper" fill="#ffffff"> <path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"></path> </g> </svg></div>'+wpw_ajx_translate("YSU_01")+'</div> ';
                                var wpw_yoursub_message_remaining = '<div class="status wpw_green">'+wpw_ajx_translate("YSU_03")+' '+index.available+' '+wpw_ajx_translate("YSU_04")+'</div>';
                           }else{
                                var wpw_yoursub_button = '<div class="wpw_yoursub_bttexp"><div class="ico_add"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"> <g class="nc-icon-wrapper" fill="#ffffff"> <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"></path> </g> </svg></div>'+wpw_ajx_translate("YSU_07")+' : '+index.ended_at+'</div> ';
                                var wpw_yoursub_message_remaining = '<div class="status wpw_red">'+wpw_ajx_translate("YSU_02")+'</div>';
                           }
                           }else{
                           if(index.available>=1 && remove_btt_add!=1){
                               var wpw_yoursub_button = '<div data-value="'+index.license+'" data-name="wpw_su_delect"  class="wpw_yoursub_bttdel cd-popup-trigger"><div class="ico_add"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"> <g class="nc-icon-wrapper" fill="#ffffff"> <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"></path> </g> </svg></div>'+wpw_ajx_translate("YSU_06")+'</div> <div data-value="'+index.license+'" class="wpw_yoursub_bttadd"><div class="ico_add"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"> <g class="nc-icon-wrapper" fill="#ffffff"> <path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"></path> </g> </svg></div>'+wpw_ajx_translate("YSU_01")+'</div> ';
                                var wpw_yoursub_message_remaining = '<div class="status wpw_green">'+wpw_ajx_translate("YSU_03")+' '+index.available+' '+wpw_ajx_translate("YSU_04")+'</div>';
                           }else{
                                var wpw_yoursub_button = '<div data-value="'+index.license+'" data-name="wpw_su_delect" class="wpw_yoursub_bttdel cd-popup-trigger"><div class="ico_add"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"> <g class="nc-icon-wrapper" fill="#ffffff"> <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"></path> </g> </svg></div>'+wpw_ajx_translate("YSU_06")+'</div> ';
                                var wpw_yoursub_message_remaining = '<div class="status wpw_red">'+wpw_ajx_translate("YSU_02")+'</div>';
                           }
                           }

                             $( "#yoursubscriptions" ).append('<div class="wpw_box"><div class="wpw_yoursub_box_title"><div class="wpw_yoursub_title">'+index.name+'</div>'+ wpw_yoursub_button + '</div><div class="wpw_yoursub_cont">'+wpw_yoursub_message_remaining+' '+boxing+'</div></div>');
                        });
                }
            }else{
                $(location).attr('href',$("#wpw_manage_sub").attr('wpw_url_adm')+"admin.php?page=wpw-setting");
            }
       }
	$('.cd-popup-trigger').on('click', function(event){
		event.preventDefault();
        $("#modal_alert #wpw_yes").parent().removeClass("wpw_su_delect");  
        $("#modal_alert #wpw_yes").parent().removeClass("wpw_wp_delect");  
		$('.cd-popup').addClass('is-visible');
        if($(this).attr('data-name')=='wpw_wp_delect'){
            $("#modal_alert p").html(wpw_ajx_translate("MODAL_01"));
            $("#modal_alert #wpw_yes").parent().addClass("wpw_wp_delect");    
            $("#modal_alert #wpw_yes").attr('data-value',$(this).attr('data-value'));
        }
        if($(this).attr('data-name')=='wpw_su_delect'){
            $("#modal_alert p").html(wpw_ajx_translate("MODAL_02"));
            $("#modal_alert #wpw_yes").parent().addClass("wpw_su_delect");    
            $("#modal_alert #wpw_yes").attr('data-value',$(this).attr('data-value'));
        }  
    $('.wpw_wp_delect').on('click', function(event){
        $('.cd-popup').removeClass('is-visible');
        $("#loader_id-gh9547fe0").removeClass("wpw_hide").addClass("wpw_show");
        $("#yoursubscriptions .wpw_box").removeClass("wpw_show").addClass("wpw_hide");
        var wpw_external_acc = $("#wpw_manage_sub").attr('wpw_external_acc'); 
          $.ajax({
           url : wpw_external_acc,
           type : 'POST',
           data: "wpw_api=dsubs&wpw_action=delc&wpw_dus="+$(this).children().attr('data-value')+"&wpw_ukey="+ $("#wpw_manage_sub").attr('wpw_ukey') +"&wpw_token="+  $("#wpw_manage_sub").attr('wpw_token'),
           success : function(data){
            var obj = $.parseJSON(data);
              if(obj.success){
                  if(obj.wp_yoursubscriptions.status=='true'){
                      location.reload();
                  }else{
                      $(location).attr('href',$("#wpw_manage_sub").attr('wpw_url_adm')+"/admin.php?page=wpw-setting");
                  }
              }
           }
          });
	   });
    $('.wpw_su_delect').on('click', function(event){
        $('.cd-popup').removeClass('is-visible');
        $("#loader_id-gh9547fe0").removeClass("wpw_hide").addClass("wpw_show");
        $("#yoursubscriptions .wpw_box").removeClass("wpw_show").addClass("wpw_hide");
        var wpw_external_acc = $("#wpw_manage_sub").attr('wpw_external_acc'); 
          $.ajax({
           url : wpw_external_acc,
           type : 'POST',
           data: "wpw_api=delpay&wpw_type=stripe&wpw_license="+$(this).children().attr('data-value')+"&wpw_ukey="+ $("#wpw_manage_sub").attr('wpw_ukey') +"&wpw_token="+  $("#wpw_manage_sub").attr('wpw_token'),
           success : function(data){
            var obj = $.parseJSON(data);
              if(obj.success){
                  if(obj.wp_delect_license.result=='true'){
                      location.reload();
                  }else{
                      $(location).attr('href',$("#wpw_manage_sub").attr('wpw_url_adm')+"/admin.php?page=wpw-setting");
                  }
              }
           }
          });
	   });  
	});
	$('.cd-popup').on('click', function(event){
		if( $(event.target).is('.cd-popup-close') || $(event.target).is('.cd-popup') ) {
			event.preventDefault();
			$(this).removeClass('is-visible');
		} 
	});
    $(".cd_popup_closed").click(function(){
        $('.cd-popup').removeClass('is-visible');
	});   
	$(document).keyup(function(event){
    	if(event.which=='27'){
    		$('.cd-popup').removeClass('is-visible');
	    }
    }); 
    $(".wpw_yoursub_bttadd").click(function(){
        $("#loader_id-gh9547fe0").removeClass("wpw_hide").addClass("wpw_show");
        $("#yoursubscriptions .wpw_box").removeClass("wpw_show").addClass("wpw_hide");
        var wpw_external_acc = $("#wpw_manage_sub").attr('wpw_external_acc'); 
          $.ajax({
           url : wpw_external_acc,
           type : 'POST',
           data: "wpw_api=dsubs&wpw_action=add&wpw_ukey="+ $("#wpw_manage_sub").attr('wpw_ukey') +"&wpw_token="+  $("#wpw_manage_sub").attr('wpw_token') + "&wpw_path=" +$("#wpw_manage_sub").attr('wpw_path')+ "&wpw_ysu=" +$(this).attr('data-value')+ "&wpw_wpkey=" +$("#wpw_manage_sub").attr('wpw_wpkey')+ "&wpw_install="+ $("#wpw_manage_sub").attr('wpw_install'),
           success : function(data){
            var obj = $.parseJSON(data);
              if(obj.success){
                  if(obj.wp_adding_license.status=='true'){
                      $.ajax({
                       url :  $("#wpw_manage_sub").attr('wpw_url_ajax'),
                       type : 'POST',
                       data: "action=wpw_update_acs&wpw_license="+obj.wp_adding_license.license+"&wpw_agreement="+obj.wp_adding_license.agreement+"&wpw_wpkey="+obj.wp_adding_license.wpkey+"&wpw_path="+obj.wp_adding_license.path+"&wpw_registration="+obj.wp_adding_license.registration,
                       success : function(data){
                         $(location).attr('href', $("#wpw_manage_sub").attr('wpw_url_adm')+'admin.php?page=wpw-setting')
                        }
                      });
                  }else{
                    $(location).attr('href',$("#wpw_manage_sub").attr('wpw_url_adm')+"admin.php?page=wpw-setting");
                  }
              } 
           }
          });
    });
   }
  });
var wpw_external_acc = $("#wpw_manage_sub").attr('wpw_external_acc'); 
  $.ajax({
   url : wpw_external_acc,
   type : 'POST',
   data: "wpw_api=paye&wpw_type=offers",
   success : function(data){
       var obj = $.parseJSON(data);
       if(obj.success){
           if(obj.wpw_offers == "null"){
                $( "#wpw_offers" ).html(wpw_ajx_translate("OFF_01")); 
                $("#wpw_bloc_offers").removeClass("wpw_hide").addClass("wpw_show");
                $("#loader_id-4df4fr0gre54").removeClass("wpw_show").addClass("wpw_hide");
           }else{
               var get_offers = '';
               $( "#wpw_offers" ).html();
                $.map(obj.wpw_offers, function (value, key) {
                    get_offers += '<li><header class="cd-pricing-header"><div class="wpw_h2title">'+value.name+'</div><div class="cd-price"><span>'+value.price_sub+'</span><span>' + wpw_ajx_translate("OFF_0B") + '</span></div></header><div class="cd-pricing-features"><ul><li class="available"><em>'+value.wp_limit+' Wordpress</em></li><li class="'+value.option_1+'"><em>Synonymes</em></li><li class="'+value.option_2+'"><em>Sémantique</em></li></ul></div> <footer class="cd-pricing-footer"><a wpw_sub_pay="'+value.sub_pay+'" wpw_price_sub="'+value.price_sub+'" wpw_price_stripe="'+value.price_stripe+'" wpw_price_pay="'+value.price_pay+'" href="#0">' + wpw_ajx_translate("OFF_0A") + '</a></footer> </li>'; 
                });
                $( "#wpw_offers" ).append(get_offers); 
                $("#wpw_bloc_offers").removeClass("wpw_hide").addClass("wpw_show");
                $("#loader_id-4df4fr0gre54").removeClass("wpw_show").addClass("wpw_hide");
           }
       }
   }
  }); 

});