$(document).ready(function(){
  $("#provideLogin").on("click", function(){
    $("#login_popup").css("display", "block");
    $("body").addClass("popupactive");
  });
  $("#login_close").on("click", function(){
    $("#login_popup").css("display", "none");
    $("body").removeClass("popupactive");
  });
});
