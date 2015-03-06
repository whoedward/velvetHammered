$(document).ready(function () {
    "use strict";
    var score = 1;  // 1 to 100 (calculated with user values)
    var count = 0;
    
    var adjust = 10;    // amount that each drink increases score
    
    $("#singlebutton").click(function () {
        count++;
        score += adjust;
        if (score > 100) { score = 100; }   // cap at 100
        
        $("body").css("background-color", "rgb(" + (255 - 2 * score) + "," + (255 - 3 * score) + "," + (255 - 3 * score) + ")");
        $("#button-text").html(count);
    });
});

          