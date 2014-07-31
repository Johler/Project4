//alert("JavaScript works!");

// Jessica Ohler
// SDI 1407
// Project 4
// Problem-solving functions

// global variables
var patternNumber = "123-456-7890",
	email = "aaa@bbb.ccc"
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

var emailProblem = function(emailInQuestion) {
	var at = "@",
		emailReturn;
	if (emailInQuestion.lastIndexOf(".") > 2) {
	
		if (emailInQuestion.indexOf(at) > 0) {
			emailReturn = true;}
			
		}else{
			emailReturn = false;
		}
		return emailReturn;
};

var urlProblem = function(urlInQuestion) {
	var urlReturn;
	if (urlInQuestion.contains("http://" &&! "https://")) { // MAKEUP for Assignment 2: did not use boolean logic operators
		urlReturn = true;
	} else {
		urlReturn = false;
	}
	return urlReturn;
};

var upperCaseFirstLetter = function(string) {
	var 
		caseReturn
	;
}

var swappingStuff = function (stuff) {
	var
		stuffReturn
	;
	
};

// Number Functions
var roundDecimal = function(number) {
	return +number.toFixed(2);
};


// Array Functions


// main code with my function calls and other outputs
var chosenNumber = patternProblem("407-401-3456");
console.log("The string follows a 123-456-7890 pattern like a phone number : " + chosenNumber + ".");

var chosenNumber = patternProblem("4074013456")
console.log("The string follows a 123-456-7890 pattern like a phone number : " + chosenNumber + ".");

var chosenEmail = emailProblem("j.ohler@fullsail.edu");
console.log("The string follows an aaa@bbb.ccc pattern just like an email : " + chosenEmail + ".");

var chosenWebsite = urlProblem("fullsail.edu");
console.log("The string follows the patter of a true URL : " + chosenWebsite + ".");

var numberForRound = roundDecimal(3.26506856);
console.log("This number is rounded to the second decimal : " + numberForRound + ".");