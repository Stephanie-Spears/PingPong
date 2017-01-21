var getInput = function() {
  var getNumber1 = parseInt(prompt("Enter finishing point number: "));
  return [getNumber1];
};

var userInputArray = getInput();
var num1= userInputArray[0];
var myArray = [];


var displayNum = function (num1) {
  for (var i = 0; i < num1; i++) {
    myArray[i] = [i];
    alert("inside for loop: " + myArray[i]);
  }
  return myArray;
};

displayNum(num1);

alert("outside loop: " + myArray);
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
      alert("user input of '" + userInputArray[i] + "[" + i + "]" + "' is Not a Number");
      return false;
    }
    else if (i === (userInputArray.length - 1)) {
      return true;
    }
  }
}

var cleanInput = checkInput(userInputArray);

while (cleanInput === false) {
  alert("invalid choice. TRY AGAIN!");
  var userInputArray = getInput();
  var num1= userInputArray[0];
  var cleanInput = checkInput(userInputArray);
}
if(cleanInput === true) {
  alert("User input has been validated");
  alert("cleanInput Array: " + myArray);
}

// var displayCalcOperation = function (num1, num2) {
//   var numValue;
//   alert(num1 + calcSymb[userChoice-1] + num2 + " = " + (numValue = calculateNum[userChoice-1](num1, num2)));
// };
//
// displayCalcOperation(num1, num2);

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
