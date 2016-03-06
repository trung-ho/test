//= require home/main
//= require shared/main
//= require devise/main
//= require user/main

jQuery(window).load(function() {
  jQuery("#loading-page").fadeOut("slow");
})

$( document ).ready(function() {
  new WOW().init();
  SharedMainJs.init();
});