function jqUpdateSize(){
    var width = $(window).width();
    var height = $(window).height();
    $('.background-div').css('height', ((height-185)-50) + 'px')
};

$(document).ready(jqUpdateSize);
$(window).resize(jqUpdateSize);

$(function() {

  var $menu = $('#menu'),
      $menulink = $('.menu-link');

  $menulink.click(function() {
    $menulink.toggleClass('active');
    $menu.toggleClass('active');
    return false;
  });
});
