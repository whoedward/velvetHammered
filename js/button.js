window.targetDrinks = 0;

$(document).ready(function () {
    $('#part2').hide();
    $('#forward').hide();
    $("#resetBtn").show();

    "use strict";
    
    $("#resetBtn").click(function(){
        $('#part1').show();
        $('#forward').hide();
        $("#resetBtn").hide();
        $("#height").val("");
        $("#height-inches").val("");
        $("#weight").val("");
        $("#part2").hide();
        $("#response").text("")
        $("body").css("background-color", "#FCFAE1");
//        window.score = 1;
        count = 0;
        window.adjust = 10;
        $("#pop-up").text("");
    });
    window.score = 1;  // 1 to 100 (calculated with user values)
    var count = 0;
    var max = window.targetDrinks;
    console.log("drinks is: " + targetDrinks);
    window.adjust = 10;    // amount that each drink increases score
    $("#undo").hide();
    $("#undo").click(function(){
        count--;
        if(count < window.targetDrinks){
            window.score-= window.adjust;
            $("#button-text").html(count);
            // $("body").css("background-color", "rgb(" + (255 - 2 * window.score) + "," + (255 - 3 * window.score) + "," + (255 - 3 * window.score) + ")");
            $("body").css("background-color", "#FCFAE1");
            $("#pop-up").text("");
        }
        if(count >= window.targetDrinks){
            $("#button-text").css("color", "black");
        }
         $("#button-text").html(count);
    });
    
    $("#singlebutton").click(function () {
        console.log(window.targetDrinks);
        $("#undo").show();
        count++;
        window.score += window.adjust;
        if (score > 50) { score = 50; }   // cap at 50
        if(count >=window.targetDrinks){
            $("#button-text").css("color", "white");
        }else{
            $("#button-text").css("color", "black");
        }
        
        if(count == window.targetDrinks){
            $("body").css("background-color", "#C23B22");
               $("#pop-up").text("Notification: Limit Reached!");
                $("#pop-up").css("color", "white");
        }

        if (count > window.targetDrinks){
            $("#pop-up").animate({
                opacity:0.5
            }, 300, function(){
                $("#pop-up").animate({
                    opacity:1
                },300);
            });
        }
        
        // $("body").css("background-color", "rgb(" + (255 - 2 * window.score) + "," + (255 - 3 * window.score) + "," + (255 - 3 * window.score) + ")");
        
        $("#button-text").html(count);
    });
        
});

function calcDrinks() {
    var heightFeet = Number($('#height').val());
    var heightInches = Number($('#height-inches').val());
    var weight = Number($('#weight').val());
    var sex = $('input[name=sex]:checked').val()

    // DEBUG PURPOSES
    console.log(heightFeet);
    console.log(heightInches);
    console.log(weight);
    console.log(sex);

    var genderConstant;
    if (sex === 'm') {
        genderConstant = 0.68;
    } else {
        genderConstant = 0.55;
    }

    // BAC  = drinks * 0.06 * 100% * 1.055/weight * gender constant, we are solving for drinks
    var targetBAC = Number($('input[name=amount]:checked').val());
    console.log(targetBAC);     // DEBUG PURPOSES

    var formula = 0.06 * 100 * (1.055 / weight) * genderConstant;
    var targetDrinksTemp = targetBAC / formula;
    targetDrinksTemp = Math.round(targetDrinksTemp);

    $('#response').text("Limit yourself to " + targetDrinksTemp + " drinks in the first hour. You can have 1 more per hour after that.")
    $('#forward').show();

    window.targetDrinks = targetDrinksTemp;
}

$('#forward').click(function() {
    $('#part1').hide();
    $('#part2').show();
    $("#resetBtn").show();
});