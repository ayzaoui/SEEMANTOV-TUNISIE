var $ = jQuery.noConflict();
function wpw_mark_clean(){
    $('#title').removeClass("WPW_highlighting_zone");
    $('.mce-tinymce.mce-container').removeClass("WPW_highlighting_zone");
    $("#content_ifr").contents().find("body").unmark()
}
$(document).ready(function() {
    $("#wpw_finish_1").on('click', '.keyword.tab svg.wpw_svg_eye', function (event) {
        wpw_mark_keyword($(this).parent().attr("data-value"));
        $('html, body').animate({
            scrollTop: $("#wpwrap").offset().top
        }, 0);
    });
    function wpw_mark_keyword(keyword){
        wpw_mark_clean();
        var options = {
            "element": "wpwritup",
            "accuracy": "complementary",
            "className": "wpw_mark",
            "separateWordSearch": false,
            "diacritics": false,
            "caseSensitive": false,
            "acrossElements": false,
            "exclude": [],
            "iframes": true,
            "iframesTimeout": 5000,
        }; 
        $("#content_ifr").contents().find("body").mark(keyword, options);
    }        
});