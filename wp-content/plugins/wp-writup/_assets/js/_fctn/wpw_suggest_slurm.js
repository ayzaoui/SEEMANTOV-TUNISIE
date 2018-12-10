var $ = jQuery.noConflict();
function wpw_suggest_slurm(e){
    var keyword1 = '';
    var keyword2 = '';
   $('#wpw_box_bottom .keywords1 .keyword1.tab').filter(function() {
        keyword1 = keyword1 + $(this).prev().val().toLowerCase() + '::';
   });
   $('#wpw_box_bottom .keywords2 .keyword2.tab').filter(function() {
        keyword2 = keyword2 + $(this).prev().val().toLowerCase() + '::';
   });
    if(e == 2){
        var wpw_id_suggest = 'wpw_step_2_badd';
        var wpw_data = 'wpw_keyword1='+keyword1;
    }
    if(e == 3){
        if(keyword2 === ''){
            var wpw_id_suggest = 'wpw_step_3_badd';
            var wpw_data = 'wpw_keyword2='+keyword1;
        }else{
            var wpw_id_suggest = 'wpw_step_3_badd';
            var wpw_data = 'wpw_keyword2='+keyword2;
        }
    }
    var wpw_local = $("#wpw_language_p").val();
    var wpw_external_api = $("#wpw_suggest_slurm").attr('wpw_external_api');
      $.ajax({ 
       url : wpw_external_api,
       type : 'POST',
       data: "wpw_action=keysuggest&"+wpw_data+"&wpw_local="+wpw_local,
       success : function(data){ 
           var obj = $.parseJSON(data);
           if(obj.success){
            $( ".wpw_this_suggest div" ).html("");
            $.map(obj.suggest, function (value, key) {
                 $( "#"+wpw_id_suggest + " .wpw_this_suggest div" ).append( '<span class="suggestion_keyword"><span class="tab gray sugg_keyword"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g class="nc-icon-wrapper" fill="#124a66"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path></g></svg>'+value+'</span></span>' );
            });
                $("#loader_id-"+wpw_id_suggest).removeClass("wpw_show").addClass("wpw_hide");
                $("#"+wpw_id_suggest+" .wpw_this_suggest ").removeClass("wpw_hide").addClass("wpw_show");
               }
           }
      });
}