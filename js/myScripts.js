var getInput = function() {
  num1 = prompt("How high do you want to go?");
  return num1;
};

var checkInput = function() {
  if (isNaN(num1)) {
    alert("Must input numbers only");
    return false;
  }
  else
  {
    return true;
  }
};
// NOTE: DO I NEED TO RENAME THE PASSED IN ARGUMENTS? OR PARAMETERS, I FORGET WHICH IS WHICH
var initializeArray = function (endNum) {
  for (var i = 0; i < endNum; i++) {
    myArray[i] = [i]; // NOTE: is myArray global? why doesn't it have to be passed in?
    alert("initializing array: " + myArray[i] + "[" + i + "]");
  }
  return myArray;
};


var boolRunCode = true;
var num1;
var cleanInput;
var myArray = [];

while (boolRunCode === true) {
  num1 = getInput();
  cleanInput = checkInput(num1);

  while (cleanInput !== true) {
    num1 = getInput();
    cleanInput = checkInput(num1);
  }
  myArray = initializeArray(num1);
  alert("MY ARRAY:" + myArray);
  boolRunCode = false;
}
