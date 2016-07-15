function jqUpdateSize(){
    var width = $(window).width();
    var height = $(window).height();
    $('.background-div').css('height', (height-50) + 'px')
};

$(document).ready(jqUpdateSize);
$(window).resize(jqUpdateSize);

// $(function() {
//   $('body').addClass('js');
//   var $menu = $('#menu'),
//       $menulink = $('.menu-link');
//
//   $menulink.click(function() {
//     $menulink.toggleClass('active');
//     $menu.toggleClass('active');
//     return false;
//   });
// });
