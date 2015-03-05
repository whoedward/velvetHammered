$(document).ready(function(){
    count = 0;
    $("#singlebutton").click(function(){
        count++;
        if(count <=5){
            $("body").css("background-color", "#a20808");
        }else if(count >5 && count <= 10){
            $("body").css("background-color", "#8a0707");
        }else if(count > 10 && count <=15){
            $("body").css("background-color", "#720606");
        }else if(count >15 && count <=20){
            $("body").css("background-color", "#590505");
        }else{
            $("body").css("background-color", "#410303");
        }    
        $("#button-text").html(count);
    });
});

          