// function othername() {
//   var input = document.getElementById("userInput").value;
//   alert(input);
// }

// function getInput() {
//   var num1 = document.getElementById("num1").value;
//   return num1;
// }


var getInput = function() {
  num1 = prompt("How high do you want to go?");
  return num1;
};
var checkInput = function(someNum) { // NOTE: someNum is the parameter--it's a variable declared in the definition of a function--FOR REUSABILITY WITH OTHER VARIABLES I WANT TO PASS IN...
  if (isNaN(someNum)) {
    alert("Must input numbers only");
    return false;
  }
  else
  {
    return true;
  }
};
var initializeArray = function (endNum) {
  for (var i = 0; i < endNum; i++) {
    myArray[i] = [i];
    // alert("initializing array: " + myArray[i] + "[" + i + "]");
  }
  return myArray;
};


var boolRunCode = true;
var num1;
var cleanInput;
var myArray = [];

while (boolRunCode === true) {
  num1 = getInput();
  cleanInput = checkInput(num1); // NOTE: num1 is the Argument--the actual value that's being passed to the function

  while (cleanInput !== true) {
    num1 = getInput();
    cleanInput = checkInput(num1);
  }
  myArray = initializeArray(num1);
  alert("MY ARRAY:" + myArray);
  boolRunCode = false;
}
