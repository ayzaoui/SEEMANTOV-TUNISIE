var $ = jQuery.noConflict();
$(document).ready(function() {
    $('.wpw_searchkey').autocomplete({
        source: function (request, response) {
            var get_local = $("#wpw_language_p").val();  
            var postdata = {
                wpw_action: "autosuggest",
                wpw_search: request.term,
                wpw_local: get_local
            };

            var wpw_external_api = $("#wpw_autosuggest").attr('wpw_external_api');  
            $.post(wpw_external_api, postdata, function (data) {
                var obj = $.parseJSON(data);
                response($.map(obj.suggest, function (value, key) {
                    return {
                        label: value,
                        value: value
                    };
                }));
            });
        },
        minLength: 2, 
        delay: 100
    });
});