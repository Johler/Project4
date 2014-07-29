//alert("JavaScript works!");

// Jessica Ohler
// SDI 1407
// Project 4
// Problem-solving functions

// global variables
var patternNumber = "123-456-7890"
;

// String Functions

var patternProblem = function(phoneNumber) {
	var numberReturn;
	if (patternNumber.length === phoneNumber.length) { 
		
		if (phoneNumber.charAt(4, 9) === patternNumber.charAt(4, 9)) {
				numberReturn = true;}
		
	} else {
		numberReturn = false;
	}
	return numberReturn //returns correctly named MAKEUP for Assignment 2
};



// Number Functions


// Array Functions


// main code with my function calls and other outputs
var chosenNumber = patternProblem("407-401-3456");
console.log("The string follows a 123-456-7890 pattern like a phone number : " + chosenNumber + ".");