$(document).ready(function(){

$('a[href^="#"]').on('click', function(event){
  event.preventDefault();

  var target = this.hash; 
  var $target = $(target);

  $('html, body').animate({
    'scrollTop': $target.offset().top
  }, 1000, function(){
      window.location.hash = target;
  }); 

});


$("#loadNews").click(function(){
  $("#loadNews").remove();
  $("#loadMoreSection").slideDown();
});






});
