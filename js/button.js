var targetDrinks = 0;

$(document).ready(function () {
    $('#part2').hide();
    $('#forward').hide();

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

function calcDrinks() {
    var heightFeet = Number($('#height').val());
    var heightInches = Number($('#height-inches').val());
    var weight = Number($('#weight').val());
    var sex = $('input[name=sex]:checked').val()

    if ($('#height').val() === "" || heightFeet < 0) {
        alert("Please enter a valid height (feet)");
        return;
    } else if ($('#height-inches').val() === "" || heightInches < 0) {
        alert("Please enter a valid height (inches)");
        return;
    } else if ($('#weight').val() === "" || weight < 0) {
        alert("Please enter a valid weight");
        return;
    }

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

    $('#response').text("Limit yourself to " + targetDrinksTemp + " drinks total. You can have 1 more per hour after that.")
    $('#forward').show();

    targetDrinks = targetDrinksTemp;
}

$('#forward').click(function() {
    $('#part1').hide();
    $('#part2').show();
});