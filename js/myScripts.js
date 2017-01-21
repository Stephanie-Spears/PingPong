var getInput = function() {
  var getNumber1 = parseInt(prompt("Enter finishing point number: "));
  return [getNumber1];
};

var userInputArray = getInput();
var num1= userInputArray[0];
var myArray = [];

alert(myArray);

var displayNum = function (num1) {
  for (var i = 0; i < num1; i++) {
    myArray = [i];
    alert(myArray[i]);
  }
  return myArray;
};

alert(myArray);
// var displayNum = [
//   function (num1) {for (var i = 0; i < num1; i++) {
//     var myArray = [i];
//     return myArray;}
//   },
//   function (num1, num2) {return num1 - num2;},
//   function (num1, num2) {return num1 / num2;},
//   function (num1, num2) {return num1 * num2;},
// ];

// input allows for decimals (ie. 1.2 is accepted. Specify non-floating point? setPrecision funct?)
// Should make it immediately check input and only store the int in the array if it's valid...return false immediately, so user doesn't have to go through the motions of finishing input if the first num is wrong
function checkInput(userInputArray) {
  for (var i = 0; i < userInputArray.length; i++) {
    if (isNaN(userInputArray[i])) {
      alert("RAY SAYS user input of '" + userInputArray[i] + "[" + i + "]" + "' is NOT A NUMBER");
      return false;
    }
    else if (i === 0) {
      if (lowRange > userInputArray[i] || userInputArray[i] > highRange) {
        alert("RAY SAYS 'YA RETAAAD'ED OR SOMTHIN??" + "...and he says user input of '" + userInputArray[i] + "' is not within options range of " + lowRange + " and " + highRange);
        return false;
      }
    }
    else if (i === (userInputArray.length - 1)) {
      // alert("Each item in the array has been validated");
      return true;
    }
  }
}

var cleanInput = checkInput(userInputArray);

while (cleanInput === false) {
  alert("invalid choice. TRY AGAIN!");

  var userInputArray = getInput();
  var num1= userInputArray[1];
  var num2= userInputArray[2];
  var userChoice = userInputArray[0];
  var cleanInput = checkInput(userInputArray);
}
if(cleanInput === true) {
  // alert("User input has been validated");
}
var calcSymb = ["+", "-", "/", "*"];

var displayCalcOperation = function (num1, num2) {
  var numValue;
  alert(num1 + calcSymb[userChoice-1] + num2 + " = " + (numValue = calculateNum[userChoice-1](num1, num2)));
};

displayCalcOperation(num1, num2);

$(function() {
    $( "#button1" ).click(function() {
        $( "#item1" ).toggle();
    });
});

$(function() {
    $( "#button2" ).click(function() {
        $( "#item2" ).toggle();
    });
});
$(function() {
    $( "#button3" ).click(function() {
        $( "#item3" ).toggle();
    });
});
