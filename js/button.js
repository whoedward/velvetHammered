$(document).ready(function () {
    "use strict";
    window.score = 1;  // 1 to 100 (calculated with user values)
    var count = 0;
    
    window.adjust = 10;    // amount that each drink increases score
    $("#undo").hide();
    $("#undo").click(function(){
        if(count >= 1){
            window.score-= window.adjust;
            count--;   
            $("#button-text").html(count);
            $("body").css("background-color", "rgb(" + (255 - 2 * window.score) + "," + (255 - 3 * window.score) + "," + (255 - 3 * window.score) + ")");
        }
        if(count < 8){
            $("#button-text").css("color", "black");
        }
    });
    
    $("#singlebutton").click(function () {
        $("#undo").show();
        count++;
        window.score += window.adjust;
        if (score > 100) { score = 100; }   // cap at 100
        if(count >=8){
            $("#button-text").css("color", "white");
        }else{
            $("#button-text").css("color", "black");
        }
        
        if(count == 25){
               $("#pop-up").text("PLEASE SLOW DOWN CONSUMPTION");
                $("#pop-up").css("color", "white");
        }

        if (count > 25){
            $("#pop-up").animate({
                opacity:0.5
            }, 300, function(){
                $("#pop-up").animate({
                    opacity:1
                },300);
            });
        }
        
        $("body").css("background-color", "rgb(" + (255 - 2 * window.score) + "," + (255 - 3 * window.score) + "," + (255 - 3 * window.score) + ")");
        $("#button-text").html(count);
    });
        
});

          