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
	var caseReturn;
	
    caseReturn = string.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
	return caseReturn
};

var swappingStuff = function (string) {
	var stuffReturn
	;
	newstr = string.replace(/text/i, "txt");
		return newstr;
};

// Number Functions
var roundDecimal = function(number) {
	return +number.toFixed(2);
};

var fuzzyMatch = function() {
	var array = [5, 10, 50],
		arrayReturn
	;
	if (array[0] < array[1]) {
		console.log(array[0] + " is less than " + array[1]);
		if ((array[2] / array[0]) * 100) {
			console.log(array[0] + " is 50% of " + array[2]);
	}else{
		console.log("Did not work.");
		return arrayReturn;}}
};

var dates = function() {
	var anniversary = new Date(2007, 12, 25),
		today = new Date(2014, 07, 30),
		oneDay = 1000 * 60 * 60 * 24
	;
	yearsTogether = (Math.ceil((today.getTime() - anniversary.getTime()) / oneDay));
	return yearsTogether
};

var realNumber = function(stringNumber) {
	var 
	change = Math.floor(stringNumber);
	return change;
};

// Array Functions
var smallestValue = function(givenNumber) {
	var randomArrayOfNumbers = [1, 5, 15, 16, 19, 20, 25]
	;
	randomArrayOfNumbers[randomArrayOfNumbers.length] = givenNumber
	
	return Math.min.apply( Math, randomArrayOfNumbers)
};

var sumNumbers = function() {
	var sillyArray = ["pickles", 7, "14", 2, 3, "Jabba", "montser"],
	totalVar = 0
	;
	Array.prototype.slice[1, 3, 4];
		sum = sillyArray[1] + sillyArray[3] + sillyArray[4];
		return sum;
};

// main code with my function calls and other outputs
var chosenNumber = patternProblem("407-401-3456");
console.log("The string follows a 123-456-7890 pattern like a phone number : " + chosenNumber + ".");

var chosenNumber = patternProblem("4074013456")
console.log("The string follows a 123-456-7890 pattern like a phone number : " + chosenNumber + ".");

var chosenEmail = emailProblem("j.ohler@fullsail.edu");
console.log("The string follows an aaa@bbb.ccc pattern just like an email : " + chosenEmail + ".");

var chosenWebsite = urlProblem("fullsail.edu");
console.log("The string follows the patter of a true URL : " + chosenWebsite + ".");

var titleCase = upperCaseFirstLetter("my name is jessica");
console.log(titleCase);

var replace = swappingStuff("Kids shorten words like text.");
console.log(replace);

var numberForRound = roundDecimal(3.26506856);
console.log("This number is rounded to the second decimal : " + numberForRound + ".");

var results = fuzzyMatch();
console.log(results);

var daysBeenTogether = dates();
console.log("Jason and I have been together for " +daysBeenTogether + " days.");

var realNumberChanged = realNumber("24");
console.log("I am now a number : " + realNumberChanged + ".");

var smallestValueIs = smallestValue(42);
console.log("The smallest number is : " + smallestValueIs + ".");

var sumOfNumbers = sumNumbers();
console.log("The total sum in my silly array is " + sumOfNumbers + ".");
