// Globals
var text = {
     'bill': "so much blach blah",
     'molly': "this is Molly's text",
     'anna': "hi im a new text box",
     'sue': "this is the final piece"
};

// You dont need to re-set this variable each time a click is done
// So we take it out of the click function
var fs = $("#full-size-image");
var tb = $("#text-box");

$(document).ready(function() {
    $("a").click(function (e) {
        e.preventDefault();
        var newClass = $(this).attr("id");
        var oldClass = fs.attr("class");

        // Change the image
        fs.fadeOut(function() {
			fs.removeClass(oldClass).addClass(newClass).fadeIn("slow");
        });

        // Change the text
        tb.fadeOut(function() {
        	tb.text(text[newClass]).fadeIn('slow');
        });
	});
});
