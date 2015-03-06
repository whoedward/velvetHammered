$(document).ready(function() {
	$('#part2').hide();
	$('#forward').hide();
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
	console.log(targetBAC);		// DEBUG PURPOSES

	var formula = 0.06 * 100 * 1.055 / weight * genderConstant;
	var targetDrinks = targetBAC / formula;
	targetDrinks = Math.round(targetDrinks);

	$('#response').text("Limit yourself to " + targetDrinks + " drinks total. You can have 1 more per hour after that.")
	$('#forward').show();
}
