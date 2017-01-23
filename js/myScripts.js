// BACK-END
// NOTE: encapsulate the vars

var myArray = [];
var num1;
var mutatedArray = [];

function getFormInput(num1) {

  var boolRunCode = true;
  var cleanInput;

 while (boolRunCode === true) {
   num1 = getInput();
   cleanInput = checkInput(num1);

   while (cleanInput !== true) {
     num1 = getInput();
     cleanInput = checkInput(num1);
   }
   myArray = initializeArray(num1);
   alert("MY ARRAY:" + myArray);
   mutateArrayFunction(myArray);
   alert("MUTATED ARRAY: " + mutatedArray);

   boolRunCode = false;
 }
}

var getInput = function() {
  num1 = prompt("How high do you want to go?");
 return num1;
};
var checkInput = function(num1) { // NOTE: check input is unnecessary with "required" and added min-max values inside html submit
 if (isNaN(num1)) {
   alert("Must input numbers only");
   return false;
 }
 else
 {
   return true;
 }
};
var initializeArray = function (num1) {
 for (var i = 0; i < num1; i++) {
   myArray.push(myArray[i]);
   myArray[i] = i + 1;
 }
 return myArray;
};
var mutateArrayFunction = function(myArray) {
  for (var i = 0; i < myArray.length; i++) {
    if (myArray[i] % 15 === 0) {
      mutatedArray.push("ping-pong");
    }
    else if (myArray[i] % 5 === 0) {
      mutatedArray.push("pong");
    }
    else if (myArray[i] % 3 === 0) {
      mutatedArray.push("ping");
    }
    else {
      mutatedArray.push(myArray[i]);
    }
  }
};

// FRONT-END
$(document).ready(function(){
  $("#playButton").click(function(){
    $("html, body").animate({scrollTop: $("#gameContainer").offset().top}, "slow");
  });
  $("#submitButton").click(function(event){
    event.preventDefault();
    num1 = parseInt($("#userInput").val());
    getFormInput(num1);
    for (var i = 0; i < num1; i++){
      $("#outputList").append("<li>" + mutatedArray[i] + "</li>");
    }
  });

  $("form").submit(function(event){ //event used for prevent default
    event.preventDefault();
    num1 = parseInt($("#userInput").val());
    getFormInput(num1);
    // $("#output").text(mutatedArray);
    for (var i = 0; i < num1; i++){
      $("#outputList").append("<li>" + mutatedArray[i] + "</li>");
    }
  });
  $("#resetButton").click(function(){
    myArray = [];
    mutatedArray = [];
    $("#outputList").remove();
  });
});
