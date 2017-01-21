// function othername() {
//   var input = document.getElementById("userInput").value;
//   alert(input);
// }

// function getInput() {
//   var num1 = document.getElementById("num1").value;
//   return num1;
// }

// function validateForm() {
//     var num1 = document.forms["myForm"]["fname"].value; //document-html, forms[index(gets the id of the first "form" element in a document)]
//     if (num1 == "") {
//         alert("This section must be filled out");
//         return false;
//     }
//
// }
function myFunction() {
    var x, text;

    // Get the value of the input field with id="numb"
    x = document.getElementById("numb").value;

    // If x is Not a Number or less than one or greater than 10
    if (isNaN(x) || x < 1 || x > 10) {
        text = "Input not valid";
    } else {
        text = "Input OK";
    }
    document.getElementById("demo").innerHTML = text;
}


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

// NOTE forgot to do the three functions!
//Numbers divisible by 3 are replaced with "ping"
//Numbers divisible by 5 are replaced with "pong"
//Numbers divisible by 15 are replaced with "ping-pong"


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
