/****** Menu Principale ***********/		
$(".navbar-collapse").attr("id","navbar");
$(".navbar-collapse ul li a").wrapInner("<span></span>");
$(".navbar-collapse ul li").removeClass("menu-item menu-item-type-post_type menu-item-object-page menu-item-home page_item page-item-9");
$(".current_page_item").addClass("active");
$("select").addClass("custom-select d-block w-100");
/*$(document).ready(function(){
  $('#slider-index').slick({
    dots: true,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear',
  autoplay: true,
  });
});*/

$("#slider-index").slick({nextArrow:'<button class="slick-next"><svg width="48" height="48" class="icon"><use xlink:href="#arrow-right"></use></svg></button>',prevArrow:'<button class="slick-prev"><svg width="48" height="48" class="icon"><use xlink:href="#arrow-left"></use></svg></button>',dots:!0,autoplay:!0,infinite:!0,fade:!0,speed:1e3,autoplaySpeed:6e3,slidesToShow:1,slidesToScroll:1,responsive:[{breakpoint:995,settings:{arrows:!1,dots:!0,autoplay:!0,fade:!0,slidesToShow:1,slidesToScroll:1}}]})



