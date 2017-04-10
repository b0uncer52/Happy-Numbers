
function splitNumber(passedValue) {
	passedValue = passedValue.toString();
	var arrayOfNumbers = passedValue.split("");
	for (var i = 0; i < arrayOfNumbers.length; i++) {
		arrayOfNumbers[i] = Number(arrayOfNumbers[i]);
	}
	squareNumber(arrayOfNumbers);
}

function squareNumber(passedValue) {
	var total = 0;
	for (var i = 0; i < passedValue.length; i++) {
		total += Math.pow(passedValue[i], 2);
	}
	value = total;
}

function evaluate(passedValue) {
	value = Number(passedValue);
	while(value > 9) {
	splitNumber(value);
	}
	if(value === 1 || value === 7) {
		output.innerHTML = initValue + " is happy.";
	}else {
		output.innerHTML = initValue + " is sad.";
	}
}

var button = document.getElementById("btn-checkvalue");
var initValue;
var value;
var output = document.getElementById("output");
 
button.addEventListener("click", function(){
	initValue = document.getElementById("numberVal").value;
	evaluate(initValue);
});