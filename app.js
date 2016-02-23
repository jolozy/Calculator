//BASIC CALCULATOR
function calculateBasic (num1, num2)
{
  var num1 = parseInt(document.getElementById('basic-num-1').value)
  var num2 = parseInt(document.getElementById('basic-num-2').value)
  var basicOp = document.getElementById('basic-operation').selectedIndex;
  var basicAnswer = document.getElementById('basic-answer-alert');
  //basicOp[0] = plus, basicOp[1] =  minus, basicOp[32 = multiplied, basicOp[3] = divided
  //parseInt changes the value or textContent into a number that you can pass into a function
  if (basicOp == 0) {
    console.log(num1+num2);
    total = num1 + num2;
    basicAnswer.innerHTML = total;
  } else if (basicOp == 1) {
    console.log(num1-num2);
    total = num1 - num2;
    basicAnswer.innerHTML = total;
  } else if (basicOp === 2) {
    console.log(num1*num2);
    total = num1 * num2;
    basicAnswer.innerHTML = total;
  } else {
    console.log(num1/num2);
    total = num1 / num2;
    basicAnswer.innerHTML = total;
  }
}//end calculateBasic function
var calculate = document.getElementById('basic-calc');
calculate.addEventListener('click', calculateBasic);


//TRIP COST CALCULATOR
function calculateTCost (distance, mpg, cost, speed)
{
  var distance = parseInt(document.getElementById('trip-distance').value);
  var mpg = parseInt(document.getElementById('trip-mpg').value);
  var cost = parseInt(document.getElementById('trip-cost').value);
  var speed = parseInt(document.getElementById('trip-speed').value);
  var tripAnswer = document.getElementById('trip-answer-alert');
  if (speed <= 60) {
    TCost = (distance/(mpg*cost));
    tripAnswer.innerHTML = TCost;
    console.log((distance/(mpg*cost)));
  } else {
    TCost = (distance/(mpg - (speed-60)*2)* cost);
    tripAnswer.innerHTML = TCost;
    console.log((distance/(mpg - (speed-60)*2)* cost));
  }
}//end calculateTCost function
var calculateTrip = document.getElementById('trip-calc');
calculateTrip.addEventListener('click', calculateTCost);


//BMI CALCULATOR; thought process penned
//2. Define function that processes everything together to give you final answer
function calculateBMI (mass, height)
{
//1a. grab elements (without the event listener) first
var mass = parseInt(document.getElementById('bmi-mass').value);
var height = parseInt(document.getElementById('bmi-height').value);
//1b. parseInt to change it into an integer that you can use
var BMIanswer = document.getElementById('bmi-answer-alert');
//3. Write out function: what do you want it to do with your parameters?
//Assigning another bmi function to the answer
  bmi = ((mass * 2.20462)/Math.pow((height/0.393701),2));
//checking via console log to see if answer comes out
  console.log (((mass * 2.20462)/Math.pow((height/0.393701),2)));
  BMIanswer.innerHTML = bmi;
}//end of calculateBMI function

//4. Add the event listener to reflect answer on page
var calculateThis = document.getElementById('bmi-calc');
calculateThis.addEventListener('click', calculateBMI);


//MORTGAGE CALCULATOR
function calculateMortgage (loan, apr, term)
{
var loan = parseInt(document.getElementById('mortgage-loan').value);
var apr = parseFloat(document.getElementById('mortgage-apr').value/100);
var term = parseInt(document.getElementById('mortgage-term').value/12);
var mortgageAnswer = document.getElementById('mortgage-answer');
  monthlyCost = (loan * apr * Math.pow((1+apr),term) / ((Math.pow((1+apr),term))-1));
  console.log((loan*apr*Math.pow((1+apr),term) / ((Math.pow((1+apr),term))-1)));
  mortgageAnswer.innerHTML = monthlyCost;
}
var finalCost = document.getElementById('mortgage-calc');
finalCost.addEventListener('click',calculateMortgage);
