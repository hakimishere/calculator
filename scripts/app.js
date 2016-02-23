// var nOne = document.getElementById("basic-num-1").value;
// var nTwo = document.getElementById("basic-num-2").value;
//var opSel = document.querySelectorAll("div.container div.row form.form-horizontal fieldset div.form-group div.col-sm-2 select.form-control option");
//var opSel = document.getElementById("basic-operation").value;


var bCalc = document.getElementById("basic-calc"); //Basic Calculate Button
bCalc.addEventListener('click', basicCalc);
var bAns = document.getElementById("basic-answer-alert");
var tCalc = document.getElementById("trip-calc"); //Trip Calculate Button
tCalc.addEventListener('click', tripCalc);
var tAns = document.getElementById("trip-answer-alert");
var bmCalc = document.getElementById("bmi-calc"); //BMI Calculate Button
bmCalc.addEventListener('click', bmiCalc);
var bmiAns = document.getElementById("bmi-answer-alert");
var mCalc = document.getElementById("mortgage-calc"); //Basic Calculate Button
mCalc.addEventListener('click', mortCalc);
var mortAns = document.getElementById("mortgage-answer-alert");

function basicCalc() {
	var opSel = document.getElementById("basic-operation").value;
	var nOne = Number(document.getElementById("basic-num-1").value);
	var nTwo = Number(document.getElementById("basic-num-2").value);
	if(opSel === "+") {
		var add = nOne + nTwo;
		bAns.innerHTML = add
	}
	else if(opSel === "-") {
		var minus = nOne - nTwo;
		bAns.innerHTML = minus
	}
	else if(opSel === "*") {
		var mult = nOne * nTwo;
		bAns.innerHTML = mult;
	}
	else if(opSel === "/") {
		var divd = nOne/nTwo;
		bAns.innerHTML = divd;
	}
};

function tripCalc() {
	var dist = Number(document.getElementById("trip-distance").value);
	var mpg = Number(document.getElementById("trip-mpg").value);
	var cost = Number(document.getElementById("trip-cost").value);
	var speed = Number(document.getElementById("trip-speed").value);
	if(speed<60) {
		var slow = (dist / (mpg * cost));
		tAns.innerHTML = slow;
	}
	else if(speed>=60) {
		var fast = (dist / ((mpg - (speed - 60) * 2) * cost));
		tAns.innerHTML = fast;
	}
};

function bmiCalc() {
	var unitSel = document.getElementById("bmi-units").value;
	var mass = Number(document.getElementById("bmi-mass").value);
	var height = Number(document.getElementById("bmi-height").value);
	if(unitSel === "metric") {
		var met = mass/(height * height);
		bmiAns.innerHTML = met;
	}
	else if(unitSel === "imperial") {
		var imp = (((mass*2.20462)/(Math.pow(height*39.3701, 2)))*703);
		bmiAns.innerHTML = imp;
	}
};

function mortCalc() {
	var loan = Number(document.getElementById("mortgage-loan").value);
	var apr = Number(document.getElementById("mortgage-apr").value);
	var term = Number(document.getElementById("mortgage-term").value);
		var mortPay = loan * (apr/100) * ((Math.pow((1+(apr/100)),term))/((Math.pow((1+(apr/100)),term)-1)));
		mortAns.innerHTML = mortPay;
}
