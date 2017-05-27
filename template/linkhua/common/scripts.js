//选择器
jQuery("document").ready(function($){
var pos = $('.n5_dhys').offset().top;
var nav = $('.n5_dhys');

$(window).scroll(function () {
if ($(this).scrollTop() > pos) {
nav.addClass("f-n5_dhys");
} else {
nav.removeClass("f-n5_dhys");
}
});
});