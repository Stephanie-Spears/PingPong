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
   myArray.push(myArray[i]); // NOTE: check--if push is after statement below, it pushes an extra value into the array--but how is it pushing nothing into myArray[0]...shouldnt this statement be pushing a NaN into MyArray[0] if it's executing before the value-setting?
   myArray[i] = i + 1;

  //  alert("initializing array: " + myArray[i] + "[" + i + "]");
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


$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    num1 = parseInt($("#input").val());
    getFormInput(num1);
    // mutateArrayFunction(getFormInput(num1));
    $("#output").text(mutatedArray);
  });
});


// //<!-- Back End -->
// function numberList(number) {
//   var list = [];
//   for (var i=1; i<=number; i++) {
//     var result = number-(number-i);
//     list.push(result);
//   }
//   return list;
// }
//
// function pingPong(array) {
//   var pingPongArray = [];
//   for (var i=0; i<array.length; i++){
//     if(array[i] % 15 === 0){
//       pingPongArray.push("ping-pong");
//     } else if(array[i] % 5 === 0){
//       pingPongArray.push("pong");
//     } else if(array[i] % 3 === 0){
//       pingPongArray.push("ping");
//     } else {
//       pingPongArray.push(array[i]);
//     }
//   }
//   return pingPongArray;
// }
//
// //<!-- Front End -->
// $(document).ready(function(){
//   $("#play-btn").click(function() {
//     $("html,body").animate({
//       scrollTop: $("#game").offset().top},"slow");
//   });
//   $("form").submit(function(event){
//     event.preventDefault();
//     $("#output li").remove();
//     $("#input-form").removeClass("has-error");
//     $(".help-block").hide();
//     var inputNumber = parseInt($("#input").val());
//     var output = pingPong(numberList(inputNumber));
//     for (var i=0; i<output.length; i++){
//       $("ul").append("<li>" + output[i] + "</li>");
//     }
//     if(inputNumber<1) {
//       $("#input-form").addClass("has-error");
//       $(".help-block").show();
//     } else {
//       $("h2").show().fadeIn(1000).fadeOut(1000);
//       if(inputNumber<35){
//       $("#player1").show().fadeIn(1000).fadeOut(1000);
//       } else if(inputNumber<70){
//         $("#player2").show().fadeIn(1000).fadeOut(1000);
//       } else if(inputNumber<100){
//         $("#player3").show().fadeIn(1000).fadeOut(1000);
//       } else {
//         $("#player4").show().fadeIn(1000).fadeOut(1000);
//       }
//     }
//   });
//   $("#reset").click(function(){
//     $("#output li").remove();
//   });
// });
