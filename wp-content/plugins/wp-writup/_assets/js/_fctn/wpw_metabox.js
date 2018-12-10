var $ = jQuery.noConflict();
$(document).ready(function($) {    
	// Add
	$('#wpw_box_bottom').on("click", '.add.tab', function(e){
		$('#wpw_box_bottom .add-form').toggle();
		$('#wpw_box_bottom .add-form select').val( 'keyword' + $(this).attr('data-position') );
		$('#wpw_box_bottom .add.tab').toggleClass('active');
	});
	// Edit
	$('#wpw_box_bottom').on("click", '.keyword.tab', function(e){
        $('#wpw_box_bottom .add.tab').removeClass('active');
        if( $(this).hasClass('keyword1') ) {
          var edit_form_text = $(this).prev().val();
          var selected = "keyword1";
        }
        if( $(this).hasClass('keyword2') ) {
          var edit_form_text = $(this).prev().val();
          var selected = "keyword2";
        }
        if( $(this).hasClass('keyword3') ) {
          var edit_form_text = $(this).prev().val();
          var selected = "keyword3";
        }
        
      //KEYWORK 1
        if(selected=="keyword1"){
            $('#wpw_box_bottom .keyword1.tab').filter(function() {
                if( $(this).attr('data-value') == edit_form_text ) {
                    $(this).prev().remove();
                    $(this).remove();
                    $("#add_keyword1").removeClass("wpw_hide").addClass("wpw_show");  
                    $("#wpw_step_1_badd").removeClass("wpw_hide").addClass("wpw_show");
                }
            });
            $('#wpw_box_bottom .keyword1bis.tab').filter(function() {
                if( $(this).attr('data-value') == edit_form_text ) {
                    $(this).prev().remove();
                    $(this).remove();
                    $("#add_keyword1").removeClass("wpw_hide").addClass("wpw_show");  
                    $("#wpw_step_1_badd").removeClass("wpw_hide").addClass("wpw_show");
                }
            });
            var n = $("input[name='keyword1[]']").size();
            if(n == 0){
                $("#wpw_step_1 .wpw_next").removeClass("wpw_show").addClass("wpw_hide");
                $("#wpw_step_1 .this_add_key").removeClass("wpw_show").addClass("wpw_hide");
            }
            if(n >= 1){
                $("#add_keyword1").removeClass("wpw_show").addClass("wpw_hide"); 
                $("#wpw_step_1 .wpw_next").removeClass("wpw_hide").addClass("wpw_show");
                $("#wpw_step_1 .this_add_key").removeClass("wpw_hide").addClass("wpw_show");
            }
            
        }
        //KEYWORK 2
        if(selected=="keyword2"){
            $('#wpw_box_bottom .keyword2.tab').filter(function() {
                if( $(this).attr('data-value') == edit_form_text ) {
                    $(this).prev().remove();
                    $(this).remove();
                    $("#add_keyword2").removeClass("wpw_hide").addClass("wpw_show");
                    $("#wpw_step_2_badd").removeClass("wpw_hide").addClass("wpw_show");
   
                }
            });
            $('#wpw_box_bottom .keyword2bis.tab').filter(function() {
                if( $(this).attr('data-value') == edit_form_text ) {
                    $(this).prev().remove();
                    $(this).remove();
                    $("#add_keyword2").removeClass("wpw_hide").addClass("wpw_show");
                    $("#wpw_step_2_badd").removeClass("wpw_hide").addClass("wpw_show");
   
                }
            });
            var n = $("input[name='keyword2[]']").size();
            
            if(n == 0){
                $("#add_keyword2 #lgd_4").removeClass("wpw_hide").addClass("wpw_show");
                $("#add_keyword2 #lgd_3").removeClass("wpw_show").addClass("wpw_hide");  
                $("#add_keyword2 #lgd_2").removeClass("wpw_show").addClass("wpw_hide");  
                $("#add_keyword2 #lgd_1").removeClass("wpw_show").addClass("wpw_hide"); 
                $("#wpw_step_2 .wpw_next").removeClass("wpw_show").addClass("wpw_hide");
                $("#wpw_step_2 .this_add_key").removeClass("wpw_show").addClass("wpw_hide");
            }
            if(n == 1){
                $("#add_keyword2 #lgd_3").removeClass("wpw_hide").addClass("wpw_show");  
                $("#add_keyword2 #lgd_4").removeClass("wpw_show").addClass("wpw_hide");  
                $("#add_keyword2 #lgd_2").removeClass("wpw_show").addClass("wpw_hide");  
                $("#add_keyword2 #lgd_1").removeClass("wpw_show").addClass("wpw_hide");
                $("#wpw_step_2 .wpw_next").removeClass("wpw_hide").addClass("wpw_show");
                $("#wpw_step_2 .this_add_key").removeClass("wpw_hide").addClass("wpw_show");
            }
            if(n == 2){
                $("#add_keyword2 #lgd_2").removeClass("wpw_hide").addClass("wpw_show");  
                $("#add_keyword2 #lgd_3").removeClass("wpw_show").addClass("wpw_hide");  
                $("#add_keyword2 #lgd_4").removeClass("wpw_show").addClass("wpw_hide");  
                $("#add_keyword2 #lgd_1").removeClass("wpw_show").addClass("wpw_hide");
                $("#wpw_step_2 .wpw_next").removeClass("wpw_hide").addClass("wpw_show");
                $("#wpw_step_2 .this_add_key").removeClass("wpw_hide").addClass("wpw_show");
            }
            if(n == 3){
                $("#add_keyword2 #lgd_1").removeClass("wpw_hide").addClass("wpw_show");  
                $("#add_keyword2 #lgd_3").removeClass("wpw_show").addClass("wpw_hide");  
                $("#add_keyword2 #lgd_2").removeClass("wpw_show").addClass("wpw_hide");  
                $("#add_keyword2 #lgd_4").removeClass("wpw_show").addClass("wpw_hide");
                $("#wpw_step_2 .wpw_next").removeClass("wpw_hide").addClass("wpw_show");
                $("#wpw_step_2 .this_add_key").removeClass("wpw_hide").addClass("wpw_show");
            }
            if(n >= 4){
                $("#add_keyword2 #lgd_1").removeClass("wpw_show").addClass("wpw_hide");  
                $("#add_keyword2 #lgd_3").removeClass("wpw_show").addClass("wpw_hide");  
                $("#add_keyword2 #lgd_2").removeClass("wpw_show").addClass("wpw_hide");  
                $("#add_keyword2 #lgd_4").removeClass("wpw_show").addClass("wpw_hide");  
                $("#wpw_step_2 .wpw_next").removeClass("wpw_hide").addClass("wpw_show");
                $("#wpw_step_2 .this_add_key").removeClass("wpw_hide").addClass("wpw_show");
           
            }

        } 
        //KEYWORK 3
        if(selected=="keyword3"){
            $('#wpw_box_bottom .keyword3.tab').filter(function() {
                if( $(this).attr('data-value') == edit_form_text ) {
                    $(this).prev().remove();
                    $(this).remove();
                    $("#add_keyword3").removeClass("wpw_hide").addClass("wpw_show");  
                }
            });
            $('#wpw_box_bottom .keyword3bis.tab').filter(function() {
                if( $(this).attr('data-value') == edit_form_text ) {
                    $(this).prev().remove();
                    $(this).remove();
                    $("#add_keyword3").removeClass("wpw_hide").addClass("wpw_show");  
                }
            });
            var n = $("input[name='keyword3[]']").size();
            if(n == 0){
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
            }
            if(n == 1){
                $("#add_keyword3 #lgd_x").removeClass("wpw_show").addClass("wpw_hide");
                $("#add_keyword3 #lgd_8").removeClass("wpw_show").addClass("wpw_hide");
                $("#add_keyword3 #lgd_7").removeClass("wpw_hide").addClass("wpw_show");
                $("#add_keyword3 #lgd_6").removeClass("wpw_show").addClass("wpw_hide");
                $("#add_keyword3 #lgd_5").removeClass("wpw_show").addClass("wpw_hide");
                $("#add_keyword3 #lgd_4").removeClass("wpw_show").addClass("wpw_hide");
                $("#add_keyword3 #lgd_3").removeClass("wpw_show").addClass("wpw_hide");  
                $("#add_keyword3 #lgd_2").removeClass("wpw_show").addClass("wpw_hide");  
                $("#add_keyword3 #lgd_1").removeClass("wpw_show").addClass("wpw_hide"); 
                $("#wpw_step_3 .wpw_next").removeClass("wpw_hide").addClass("wpw_show");
                $("#wpw_step_3 .this_add_key").removeClass("wpw_hide").addClass("wpw_show");
            }
            if(n == 2){
                $("#add_keyword3 #lgd_x").removeClass("wpw_show").addClass("wpw_hide");
                $("#add_keyword3 #lgd_8").removeClass("wpw_show").addClass("wpw_hide");
                $("#add_keyword3 #lgd_7").removeClass("wpw_show").addClass("wpw_hide");
                $("#add_keyword3 #lgd_6").removeClass("wpw_hide").addClass("wpw_show");
                $("#add_keyword3 #lgd_5").removeClass("wpw_show").addClass("wpw_hide");
                $("#add_keyword3 #lgd_4").removeClass("wpw_show").addClass("wpw_hide");
                $("#add_keyword3 #lgd_3").removeClass("wpw_show").addClass("wpw_hide");  
                $("#add_keyword3 #lgd_2").removeClass("wpw_show").addClass("wpw_hide");  
                $("#add_keyword3 #lgd_1").removeClass("wpw_show").addClass("wpw_hide");
                $("#wpw_step_3 .wpw_next").removeClass("wpw_hide").addClass("wpw_show");
                $("#wpw_step_3 .this_add_key").removeClass("wpw_hide").addClass("wpw_show");
            }
            if(n == 3){
                $("#add_keyword3 #lgd_x").removeClass("wpw_show").addClass("wpw_hide");
                $("#add_keyword3 #lgd_8").removeClass("wpw_show").addClass("wpw_hide");
                $("#add_keyword3 #lgd_7").removeClass("wpw_show").addClass("wpw_hide");
                $("#add_keyword3 #lgd_6").removeClass("wpw_show").addClass("wpw_hide");
                $("#add_keyword3 #lgd_5").removeClass("wpw_hide").addClass("wpw_show");
                $("#add_keyword3 #lgd_4").removeClass("wpw_show").addClass("wpw_hide");
                $("#add_keyword3 #lgd_3").removeClass("wpw_show").addClass("wpw_hide");  
                $("#add_keyword3 #lgd_2").removeClass("wpw_show").addClass("wpw_hide");  
                $("#add_keyword3 #lgd_1").removeClass("wpw_show").addClass("wpw_hide");
                $("#wpw_step_3 .wpw_next").removeClass("wpw_hide").addClass("wpw_show");
                $("#wpw_step_3 .this_add_key").removeClass("wpw_hide").addClass("wpw_show");
            } 
            if(n == 4){
                $("#add_keyword3 #lgd_x").removeClass("wpw_show").addClass("wpw_hide");
                $("#add_keyword3 #lgd_8").removeClass("wpw_show").addClass("wpw_hide");
                $("#add_keyword3 #lgd_7").removeClass("wpw_show").addClass("wpw_hide");
                $("#add_keyword3 #lgd_6").removeClass("wpw_show").addClass("wpw_hide");
                $("#add_keyword3 #lgd_5").removeClass("wpw_show").addClass("wpw_hide");
                $("#add_keyword3 #lgd_4").removeClass("wpw_hide").addClass("wpw_show");
                $("#add_keyword3 #lgd_3").removeClass("wpw_show").addClass("wpw_hide");  
                $("#add_keyword3 #lgd_2").removeClass("wpw_show").addClass("wpw_hide");  
                $("#add_keyword3 #lgd_1").removeClass("wpw_show").addClass("wpw_hide");
                $("#wpw_step_3 .wpw_next").removeClass("wpw_hide").addClass("wpw_show");
                $("#wpw_step_3 .this_add_key").removeClass("wpw_hide").addClass("wpw_show");
            }
            if(n == 5){
                $("#add_keyword3 #lgd_x").removeClass("wpw_show").addClass("wpw_hide");
                $("#add_keyword3 #lgd_8").removeClass("wpw_show").addClass("wpw_hide");
                $("#add_keyword3 #lgd_7").removeClass("wpw_show").addClass("wpw_hide");
                $("#add_keyword3 #lgd_6").removeClass("wpw_show").addClass("wpw_hide");
                $("#add_keyword3 #lgd_5").removeClass("wpw_show").addClass("wpw_hide");
                $("#add_keyword3 #lgd_4").removeClass("wpw_show").addClass("wpw_hide");
                $("#add_keyword3 #lgd_3").removeClass("wpw_hide").addClass("wpw_show");  
                $("#add_keyword3 #lgd_2").removeClass("wpw_show").addClass("wpw_hide");  
                $("#add_keyword3 #lgd_1").removeClass("wpw_show").addClass("wpw_hide");
                $("#wpw_step_3 .wpw_next").removeClass("wpw_hide").addClass("wpw_show");
                $("#wpw_step_3 .this_add_key").removeClass("wpw_hide").addClass("wpw_show");
            }
            if(n == 6){
                $("#add_keyword3 #lgd_x").removeClass("wpw_show").addClass("wpw_hide");
                $("#add_keyword3 #lgd_8").removeClass("wpw_show").addClass("wpw_hide");
                $("#add_keyword3 #lgd_7").removeClass("wpw_show").addClass("wpw_hide");
                $("#add_keyword3 #lgd_6").removeClass("wpw_show").addClass("wpw_hide");
                $("#add_keyword3 #lgd_5").removeClass("wpw_show").addClass("wpw_hide");
                $("#add_keyword3 #lgd_4").removeClass("wpw_show").addClass("wpw_hide");
                $("#add_keyword3 #lgd_3").removeClass("wpw_show").addClass("wpw_hide");  
                $("#add_keyword3 #lgd_2").removeClass("wpw_hide").addClass("wpw_show");  
                $("#add_keyword3 #lgd_1").removeClass("wpw_show").addClass("wpw_hide");
                $("#wpw_step_3 .wpw_next").removeClass("wpw_hide").addClass("wpw_show");
                $("#wpw_step_3 .this_add_key").removeClass("wpw_hide").addClass("wpw_show");
            }
            if(n == 7){
                $("#add_keyword3 #lgd_x").removeClass("wpw_show").addClass("wpw_hide");
                $("#add_keyword3 #lgd_8").removeClass("wpw_show").addClass("wpw_hide");
                $("#add_keyword3 #lgd_7").removeClass("wpw_show").addClass("wpw_hide");
                $("#add_keyword3 #lgd_6").removeClass("wpw_show").addClass("wpw_hide");
                $("#add_keyword3 #lgd_5").removeClass("wpw_show").addClass("wpw_hide");
                $("#add_keyword3 #lgd_4").removeClass("wpw_show").addClass("wpw_hide");
                $("#add_keyword3 #lgd_3").removeClass("wpw_show").addClass("wpw_hide");  
                $("#add_keyword3 #lgd_2").removeClass("wpw_show").addClass("wpw_hide");  
                $("#add_keyword3 #lgd_1").removeClass("wpw_hide").addClass("wpw_show");
                $("#wpw_step_3 .wpw_next").removeClass("wpw_hide").addClass("wpw_show");
                $("#wpw_step_3 .this_add_key").removeClass("wpw_hide").addClass("wpw_show");
            }
            if(n >= 8){
                $("#add_keyword3 #lgd_x").removeClass("wpw_hide").addClass("wpw_show");
                $("#add_keyword3 #lgd_8").removeClass("wpw_show").addClass("wpw_hide");
                $("#add_keyword3 #lgd_7").removeClass("wpw_show").addClass("wpw_hide");
                $("#add_keyword3 #lgd_6").removeClass("wpw_show").addClass("wpw_hide");
                $("#add_keyword3 #lgd_5").removeClass("wpw_show").addClass("wpw_hide");
                $("#add_keyword3 #lgd_4").removeClass("wpw_show").addClass("wpw_hide");
                $("#add_keyword3 #lgd_3").removeClass("wpw_show").addClass("wpw_hide");  
                $("#add_keyword3 #lgd_2").removeClass("wpw_show").addClass("wpw_hide");  
                $("#add_keyword3 #lgd_1").removeClass("wpw_show").addClass("wpw_hide");
                $("#wpw_step_3 .wpw_next").removeClass("wpw_hide").addClass("wpw_show");
                $("#wpw_step_3 .this_add_key").removeClass("wpw_hide").addClass("wpw_show");
            }
        } 
        
	});

	// Save keyword
	$('#wpw_box_bottom').on("keyup", '.edit-form input[type="text"]', function(e){
        var selected = $(this).parent().find('select').val();
		if( selected == 'keyword1') {
			position = '1';
		} else if ( selected == 'keyword2' ) {
			position = '2';
		} else if ( selected == 'keyword3' ) {
			position = '3';
		}
      //KEYWORK 1
        if(selected=="keyword1"){
            $('#wpw_box_bottom .keyword1.tab').filter(function() {
                var keyword = $('#wpw_box_bottom #edit_keyword1 .edit-keyword');
                var select_priority = $('#wpw_box_bottom #edit_keyword1 select');
                if( $(this).prev().val() == keyword.attr('data-old-keyword') ) {
                    $(this).html( keyword.val() );

                    $(this).attr('data-value', keyword.val() );
                    $(this).prev().attr('data-value', keyword.val() );

                    $(this).prev().val( keyword.val() );
                    keyword.attr( 'data-old-keyword', keyword.val() );
                    $(this).removeClass('found not-found keyword1 keyword2 keyword3');

                    $(this).prev().attr( 'name', select_priority.val() + '[]' );
                    $(this).addClass( select_priority.val() );
                }
            });
        }
      //KEYWORK 2
        if(selected=="keyword2"){
            $('#wpw_box_bottom .keyword2.tab').filter(function() {
                var keyword = $('#wpw_box_bottom #edit_keyword2 .edit-keyword');
                var select_priority = $('#wpw_box_bottom #edit_keyword2 select');
                if( $(this).prev().val() == keyword.attr('data-old-keyword') ) {
                    $(this).html(  keyword.val() );

                    $(this).attr('data-value', keyword.val() );
                    $(this).prev().attr('data-value', keyword.val() );

                    $(this).prev().val( keyword.val() );
                    keyword.attr( 'data-old-keyword', keyword.val() );
                    $(this).removeClass('found not-found keyword1 keyword2 keyword3');

                    $(this).prev().attr( 'name', select_priority.val() + '[]' );
                    $(this).addClass( select_priority.val() );
                }
            });
        }
      //KEYWORK 3
        if(selected=="keyword3"){
            $('#wpw_box_bottom .keyword3.tab').filter(function() {
                var keyword = $('#wpw_box_bottom #edit_keyword3 .edit-keyword');
                var select_priority = $('#wpw_box_bottom #edit_keyword3 select');
                if( $(this).prev().val() == keyword.attr('data-old-keyword') ) {
                    $(this).html( keyword.val() );

                    $(this).attr('data-value', keyword.val() );
                    $(this).prev().attr('data-value', keyword.val() );

                    $(this).prev().val( keyword.val() );
                    keyword.attr( 'data-old-keyword', keyword.val() );
                    $(this).removeClass('found not-found keyword1 keyword2 keyword3');

                    $(this).prev().attr( 'name', select_priority.val() + '[]' );
                    $(this).addClass( select_priority.val() );
                }
            });
        }

	});

	// Save add
	$("#wpw_box_bottom").on("click", ".submit-keywords", function(e){
		e.preventDefault();
		var keyword_type = $(this).parent().find('select').val();

		var lines = $(this).prev().val().split(/\n/);
		var texts = []
		for (var i=0; i < lines.length; i++) {
			if (/\S/.test(lines[i])) {
				texts.push($.trim(lines[i]));
			}
		}
        var selected = $(this).parent().find('select').val();
		if( selected == 'keyword1') {
			position = '1';
		} else if ( selected == 'keyword2' ) {
			position = '2';
		} else if ( selected == 'keyword3' ) {
			position = '3';
		}

		$.each(texts, function(index, value) {
			$('#wpw_box_keyword .keywords' + position + ' .words').prepend('<span class="keyword ' + keyword_type + ' tab" data-value="' + value.toLowerCase() + '"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"> <g class="nc-icon-wrapper" fill="#124a66"> <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12l1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z"></path> </g> </svg> ' + value.toLowerCase() + '</span>');
			$('#wpw_box_bottom .keywords' + position + 'bis .words').prepend('<span class="keyword ' + keyword_type + 'bis tab" data-value="' + value.toLowerCase() + '">' + '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"> <g class="nc-icon-wrapper" fill="#124a66"> <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"></path> </g> </svg>' + '' + value.toLowerCase() + '<div class="NumberKeyword">0</div></span>');
			$('#wpw_box_keyword .keywords' + position + ' .words').prepend('<input type="hidden" name="' + keyword_type + '[]" value="' + value.toLowerCase() + '" data-value="' + value.toLowerCase() + '">');
		});
		$(this).parent().find('input').val('');
		$('#wpw_box_bottom .add.tab').removeClass('active');
        //KEYWORK 1
        if(selected=="keyword1"){
            var n_1 = $("input[name='keyword1[]']").size();
            if(n_1 == 0){
                $("#wpw_step_1 .wpw_next").removeClass("wpw_show").addClass("wpw_hide");
                $("#wpw_step_1 .this_add_key").removeClass("wpw_show").addClass("wpw_hide");
            }
            if(n_1 >= 1){
                $("#add_keyword1").removeClass("wpw_show").addClass("wpw_hide");  
                $("#wpw_step_1_badd").removeClass("wpw_show").addClass("wpw_hide");
                $("#wpw_step_1 .this_add_key").removeClass("wpw_hide").addClass("wpw_show");
                
                $("#wpw_step_1").removeClass("wpw_show").addClass("wpw_hide");
                $("#wpw_step_2").removeClass("wpw_hide").addClass("wpw_show");
                $("#wpw_step_3").removeClass("wpw_show").addClass("wpw_hide");
                $("#add_keyword2 .wpw_searchkey").focus();
                $("#wpw_addkey_step_previous").removeClass("wpw_hide").addClass("wpw_show");
                $("#loader_id-wpw_step_2_badd").removeClass("wpw_hide").addClass("wpw_show");
                $("#wpw_step_2_badd .wpw_this_suggest ").removeClass("wpw_show").addClass("wpw_hide");
                $("#wpw_step_1 .wpw_next").removeClass("wpw_hide").addClass("wpw_show");
                wpw_suggest_slurm(2);
            }
        }
        //KEYWORK 2
        if(selected=="keyword2"){
            var n_2 = $("input[name='keyword2[]']").size();
            if(n_2 == 0){
                $("#add_keyword2 #lgd_4").removeClass("wpw_hide").addClass("wpw_show");
                $("#add_keyword2 #lgd_3").removeClass("wpw_show").addClass("wpw_hide");  
                $("#add_keyword2 #lgd_2").removeClass("wpw_show").addClass("wpw_hide");  
                $("#add_keyword2 #lgd_1").removeClass("wpw_show").addClass("wpw_hide");  
                $("#add_keyword2").removeClass("wpw_hide").addClass("wpw_show");  
                $("#wpw_step_2_badd").removeClass("wpw_hide").addClass("wpw_show");
                $("#wpw_step_2 .wpw_next").removeClass("wpw_show").addClass("wpw_hide");
                $("#wpw_step_2 .this_add_key").removeClass("wpw_show").addClass("wpw_hide");
            }
            if(n_2 == 1){
                $("#add_keyword2 #lgd_4").removeClass("wpw_show").addClass("wpw_hide");  
                $("#add_keyword2 #lgd_3").removeClass("wpw_hide").addClass("wpw_show");  
                $("#add_keyword2 #lgd_2").removeClass("wpw_show").addClass("wpw_hide");  
                $("#add_keyword2 #lgd_1").removeClass("wpw_show").addClass("wpw_hide");  
                $("#add_keyword2").removeClass("wpw_hide").addClass("wpw_show");  
                $("#wpw_step_2_badd").removeClass("wpw_hide").addClass("wpw_show");
                $("#wpw_step_2 .wpw_next").removeClass("wpw_hide").addClass("wpw_show");
                $("#wpw_step_2 .this_add_key").removeClass("wpw_hide").addClass("wpw_show");

            }
            if(n_2 == 2){
                $("#add_keyword2 #lgd_4").removeClass("wpw_show").addClass("wpw_hide");  
                $("#add_keyword2 #lgd_3").removeClass("wpw_show").addClass("wpw_hide");  
                $("#add_keyword2 #lgd_2").removeClass("wpw_hide").addClass("wpw_show");  
                $("#add_keyword2 #lgd_1").removeClass("wpw_show").addClass("wpw_hide");   
                $("#add_keyword2").removeClass("wpw_hide").addClass("wpw_show");  
                $("#wpw_step_2_badd").removeClass("wpw_hide").addClass("wpw_show");
                $("#wpw_step_2 .wpw_next").removeClass("wpw_hide").addClass("wpw_show");
                $("#wpw_step_2 .this_add_key").removeClass("wpw_hide").addClass("wpw_show");
            }
            if(n_2 == 3){
                $("#add_keyword2 #lgd_4").removeClass("wpw_show").addClass("wpw_hide");  
                $("#add_keyword2 #lgd_3").removeClass("wpw_show").addClass("wpw_hide");  
                $("#add_keyword2 #lgd_2").removeClass("wpw_show").addClass("wpw_hide");  
                $("#add_keyword2 #lgd_1").removeClass("wpw_hide").addClass("wpw_show");  
                $("#add_keyword2").removeClass("wpw_hide").addClass("wpw_show");  
                $("#wpw_step_2_badd").removeClass("wpw_hide").addClass("wpw_show");
                $("#wpw_step_2 .wpw_next").removeClass("wpw_hide").addClass("wpw_show");
                $("#wpw_step_2 .this_add_key").removeClass("wpw_hide").addClass("wpw_show");
            }
            if(n_2 >= 4){
                $("#add_keyword2 #lgd_4").removeClass("wpw_show").addClass("wpw_hide");  
                $("#add_keyword2 #lgd_3").removeClass("wpw_show").addClass("wpw_hide");  
                $("#add_keyword2 #lgd_2").removeClass("wpw_show").addClass("wpw_hide");  
                $("#add_keyword2 #lgd_1").removeClass("wpw_show").addClass("wpw_hide");  
                $("#add_keyword2").removeClass("wpw_show").addClass("wpw_hide");  
                $("#wpw_step_2_badd").removeClass("wpw_show").addClass("wpw_hide");
                $("#wpw_step_2 .this_add_key").removeClass("wpw_hide").addClass("wpw_show");

                $("#wpw_step_1").removeClass("wpw_show").addClass("wpw_hide");
                $("#wpw_step_2").removeClass("wpw_show").addClass("wpw_hide");
                $("#wpw_step_3").removeClass("wpw_hide").addClass("wpw_show");
                $("#add_keyword3 .wpw_searchkey").focus();
                $("#wpw_addkey_step_previous").removeClass("wpw_hide").addClass("wpw_show");
                $("#loader_id-wpw_step_3_badd").removeClass("wpw_hide").addClass("wpw_show");
                $("#wpw_step_3_badd .wpw_this_suggest ").removeClass("wpw_show").addClass("wpw_hide");
                wpw_suggest_slurm(3);
                $("#wpw_step_2 .wpw_next").removeClass("wpw_hide").addClass("wpw_show");
            }
        } 
        //KEYWORK 3
        if(selected=="keyword3"){
            var n_3 = $("input[name='keyword3[]']").size();
            if(n_3 == 0){
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
            }
            if(n_3 == 1){
                $("#add_keyword3 #lgd_x").removeClass("wpw_show").addClass("wpw_hide");
                $("#add_keyword3 #lgd_8").removeClass("wpw_show").addClass("wpw_hide");
                $("#add_keyword3 #lgd_7").removeClass("wpw_hide").addClass("wpw_show");
                $("#add_keyword3 #lgd_6").removeClass("wpw_show").addClass("wpw_hide");
                $("#add_keyword3 #lgd_5").removeClass("wpw_show").addClass("wpw_hide");
                $("#add_keyword3 #lgd_4").removeClass("wpw_show").addClass("wpw_hide");
                $("#add_keyword3 #lgd_3").removeClass("wpw_show").addClass("wpw_hide");  
                $("#add_keyword3 #lgd_2").removeClass("wpw_show").addClass("wpw_hide");  
                $("#add_keyword3 #lgd_1").removeClass("wpw_show").addClass("wpw_hide");
                $("#wpw_step_3 .wpw_next").removeClass("wpw_hide").addClass("wpw_show");
                $("#wpw_step_3 .this_add_key").removeClass("wpw_hide").addClass("wpw_show");                
            }
            if(n_3 == 2){
                $("#add_keyword3 #lgd_x").removeClass("wpw_show").addClass("wpw_hide");
                $("#add_keyword3 #lgd_8").removeClass("wpw_show").addClass("wpw_hide");
                $("#add_keyword3 #lgd_7").removeClass("wpw_show").addClass("wpw_hide");
                $("#add_keyword3 #lgd_6").removeClass("wpw_hide").addClass("wpw_show");
                $("#add_keyword3 #lgd_5").removeClass("wpw_show").addClass("wpw_hide");
                $("#add_keyword3 #lgd_4").removeClass("wpw_show").addClass("wpw_hide");
                $("#add_keyword3 #lgd_3").removeClass("wpw_show").addClass("wpw_hide");  
                $("#add_keyword3 #lgd_2").removeClass("wpw_show").addClass("wpw_hide");  
                $("#add_keyword3 #lgd_1").removeClass("wpw_show").addClass("wpw_hide");
                $("#wpw_step_3 .wpw_next").removeClass("wpw_hide").addClass("wpw_show");
                $("#wpw_step_3 .this_add_key").removeClass("wpw_hide").addClass("wpw_show");
            }
            if(n_3 == 3){
                $("#add_keyword3 #lgd_x").removeClass("wpw_show").addClass("wpw_hide");
                $("#add_keyword3 #lgd_8").removeClass("wpw_show").addClass("wpw_hide");
                $("#add_keyword3 #lgd_7").removeClass("wpw_show").addClass("wpw_hide");
                $("#add_keyword3 #lgd_6").removeClass("wpw_show").addClass("wpw_hide");
                $("#add_keyword3 #lgd_5").removeClass("wpw_hide").addClass("wpw_show");
                $("#add_keyword3 #lgd_4").removeClass("wpw_show").addClass("wpw_hide");
                $("#add_keyword3 #lgd_3").removeClass("wpw_show").addClass("wpw_hide");  
                $("#add_keyword3 #lgd_2").removeClass("wpw_show").addClass("wpw_hide");  
                $("#add_keyword3 #lgd_1").removeClass("wpw_show").addClass("wpw_hide");
                $("#wpw_step_3 .wpw_next").removeClass("wpw_hide").addClass("wpw_show");
                $("#wpw_step_3 .this_add_key").removeClass("wpw_hide").addClass("wpw_show");
            }
            if(n_3 == 4){
                $("#add_keyword3 #lgd_x").removeClass("wpw_show").addClass("wpw_hide");
                $("#add_keyword3 #lgd_8").removeClass("wpw_show").addClass("wpw_hide");
                $("#add_keyword3 #lgd_7").removeClass("wpw_show").addClass("wpw_hide");
                $("#add_keyword3 #lgd_6").removeClass("wpw_show").addClass("wpw_hide");
                $("#add_keyword3 #lgd_5").removeClass("wpw_show").addClass("wpw_hide");
                $("#add_keyword3 #lgd_4").removeClass("wpw_hide").addClass("wpw_show");
                $("#add_keyword3 #lgd_3").removeClass("wpw_show").addClass("wpw_hide");  
                $("#add_keyword3 #lgd_2").removeClass("wpw_show").addClass("wpw_hide");  
                $("#add_keyword3 #lgd_1").removeClass("wpw_show").addClass("wpw_hide");
                $("#wpw_step_3 .wpw_next").removeClass("wpw_hide").addClass("wpw_show");
                $("#wpw_step_3 .this_add_key").removeClass("wpw_hide").addClass("wpw_show");
            }
            if(n_3 == 5){
                $("#add_keyword3 #lgd_x").removeClass("wpw_show").addClass("wpw_hide");
                $("#add_keyword3 #lgd_8").removeClass("wpw_show").addClass("wpw_hide");
                $("#add_keyword3 #lgd_7").removeClass("wpw_show").addClass("wpw_hide");
                $("#add_keyword3 #lgd_6").removeClass("wpw_show").addClass("wpw_hide");
                $("#add_keyword3 #lgd_5").removeClass("wpw_show").addClass("wpw_hide");
                $("#add_keyword3 #lgd_4").removeClass("wpw_show").addClass("wpw_hide");
                $("#add_keyword3 #lgd_3").removeClass("wpw_hide").addClass("wpw_show");  
                $("#add_keyword3 #lgd_2").removeClass("wpw_show").addClass("wpw_hide");  
                $("#add_keyword3 #lgd_1").removeClass("wpw_show").addClass("wpw_hide");
                $("#wpw_step_3 .wpw_next").removeClass("wpw_hide").addClass("wpw_show");
                $("#wpw_step_3 .this_add_key").removeClass("wpw_hide").addClass("wpw_show");
            }
            if(n_3 == 6){
                $("#add_keyword3 #lgd_x").removeClass("wpw_show").addClass("wpw_hide");
                $("#add_keyword3 #lgd_8").removeClass("wpw_show").addClass("wpw_hide");
                $("#add_keyword3 #lgd_7").removeClass("wpw_show").addClass("wpw_hide");
                $("#add_keyword3 #lgd_6").removeClass("wpw_show").addClass("wpw_hide");
                $("#add_keyword3 #lgd_5").removeClass("wpw_show").addClass("wpw_hide");
                $("#add_keyword3 #lgd_4").removeClass("wpw_show").addClass("wpw_hide");
                $("#add_keyword3 #lgd_3").removeClass("wpw_show").addClass("wpw_hide");  
                $("#add_keyword3 #lgd_2").removeClass("wpw_hide").addClass("wpw_show");  
                $("#add_keyword3 #lgd_1").removeClass("wpw_show").addClass("wpw_hide");
                $("#wpw_step_3 .wpw_next").removeClass("wpw_hide").addClass("wpw_show");
                $("#wpw_step_3 .this_add_key").removeClass("wpw_hide").addClass("wpw_show");
            }
            if(n_3 == 7){
                $("#add_keyword3 #lgd_x").removeClass("wpw_show").addClass("wpw_hide");
                $("#add_keyword3 #lgd_8").removeClass("wpw_show").addClass("wpw_hide");
                $("#add_keyword3 #lgd_7").removeClass("wpw_show").addClass("wpw_hide");
                $("#add_keyword3 #lgd_6").removeClass("wpw_show").addClass("wpw_hide");
                $("#add_keyword3 #lgd_5").removeClass("wpw_show").addClass("wpw_hide");
                $("#add_keyword3 #lgd_4").removeClass("wpw_show").addClass("wpw_hide");
                $("#add_keyword3 #lgd_3").removeClass("wpw_show").addClass("wpw_hide");  
                $("#add_keyword3 #lgd_2").removeClass("wpw_show").addClass("wpw_hide");  
                $("#add_keyword3 #lgd_1").removeClass("wpw_hide").addClass("wpw_show");
                $("#wpw_step_3 .wpw_next").removeClass("wpw_hide").addClass("wpw_show");
                $("#wpw_step_3 .this_add_key").removeClass("wpw_hide").addClass("wpw_show");
            }
            if(n_3 >= 8){
                $("#add_keyword3 #lgd_x").removeClass("wpw_hide").addClass("wpw_show");
                $("#add_keyword3 #lgd_8").removeClass("wpw_show").addClass("wpw_hide");
                $("#add_keyword3 #lgd_7").removeClass("wpw_show").addClass("wpw_hide");
                $("#add_keyword3 #lgd_6").removeClass("wpw_show").addClass("wpw_hide");
                $("#add_keyword3 #lgd_5").removeClass("wpw_show").addClass("wpw_hide");
                $("#add_keyword3 #lgd_4").removeClass("wpw_show").addClass("wpw_hide");
                $("#add_keyword3 #lgd_3").removeClass("wpw_show").addClass("wpw_hide");  
                $("#add_keyword3 #lgd_2").removeClass("wpw_show").addClass("wpw_hide");  
                $("#add_keyword3 #lgd_1").removeClass("wpw_show").addClass("wpw_hide");
                $("#wpw_step_3 .wpw_next").removeClass("wpw_hide").addClass("wpw_show");
                $("#wpw_step_3 .this_add_key").removeClass("wpw_hide").addClass("wpw_show");
            }
        }
        
	});

	// Accordion
	$("#wpw_box_bottom").on("click", ".accordion > li > .title", function(e){
		$('#wpw_box_bottom .accordion .title').removeClass('active');
		if (!$(this).next().is(':visible')) {
			$(this).parent().siblings().children("ul").slideUp(0);
			$(this).addClass('active');
		}
		$(this).next().slideToggle(0);
	});

	// Accordion sub
	$('.titles .title-nag:first-child').addClass('active');
	$('.sections .section:first-child').addClass('active');
	$("#wpw_box_bottom").on("click", ".titles > .title-nag", function(e){
		$('.sections .section').removeClass('active');
		$('#wpw_box_bottom .titles > .title-nag').removeClass('active');
		$(this).addClass('active');
		//var listItem = $(this);
		var index = $(this).index('#wpw_box_bottom .titles > .title-nag');
		$('.sections .section:nth-child(' + (index+1) + ')').addClass('active');
	});
});