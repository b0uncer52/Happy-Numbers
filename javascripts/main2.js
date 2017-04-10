console.log("hello main2.js");

var testThisNumber = "19";

var splitValues = function(passedValue) {
	console.log("passedValue", passedValue);
	passedValue = passedValue.toString();
	var arrayOfNumbers = passedValue.split("");
	for (var i = 0; i < arrayOfNumbers.length; i++) {
		arrayOfNumbers[i] = Number(arrayOfNumbers[i]);
	}
	return arrayOfNumbers;
}

function splitValues2(passedValue) {
	console.log("passedValue", passedValue);
}

var isHappy = splitValues(testThisNumber);
console.log("isHappy", isHappy);