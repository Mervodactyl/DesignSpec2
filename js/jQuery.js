
$(document).ready(function() {
  $("img").click(function(e) {
    var newClass = $(this).attr("id");
    var oldClass = $("#full-size").attr("class");
      $("#full-size").fadeOut(function() {
      $("#full-size").removeClass(oldClass).addClass(newClass).fadeIn("slow");
    });
  });
});
