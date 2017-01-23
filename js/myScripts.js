// BACK-END

function myControlStructure(){
  var boolRunCode = true;
  var validInput;
  var myArray = [];
  var myMutatedArray = [];

  var num1 = parseInt($("#userInput").val());
  while(boolRunCode === true)
  {
    validInput = checkInput(num1);

    while(validInput !== true)
    {
      num1 = parseInt($("#userInput").val());
      validInput = checkInput(num1);
    }

    myArray = initializeArray(num1);
    myMutatedArray = mutateArray(myArray);

    alert("MY ARRAY: " + myArray);
    alert("MY MUTATED ARRAY: " + myMutatedArray);
    boolRunCode = false;
  }
  displayArray(myMutatedArray);
  return(myMutatedArray);
}

function checkInput(num1){ //unnecessary now, min/max/required specified in html class
  if (isNaN(num1)){
    alert("Must Input Numbers Only");
    return false;
  }
  else {
    return true;
  }
}

function initializeArray(num1){
  var returnMyArray = [];
  for (var i = 0; i < num1; i++){
    returnMyArray.push(returnMyArray[i]);
    returnMyArray[i] = i + 1;
  }
  return (returnMyArray);
}

function mutateArray(myArray){
  var returnMutatedArray = [];
  for (var i = 0; i < myArray.length; i++){
    if (myArray[i] % 15 === 0){
      returnMutatedArray.push("ping-pong");
    }
    else if (myArray[i] % 5 === 0){
      returnMutatedArray.push("pong");
    }
    else if (myArray[i] % 3 === 0){
      returnMutatedArray.push("ping");
    }
    else{
      returnMutatedArray.push(myArray[i]);
    }
  }
  return (returnMutatedArray);
}

function displayArray(myMutatedArray){
  $("#outputList").html("");
  $("html, body").animate({
    scrollTop: $("#listSection").offset().top
  }, "slow");
  if(myMutatedArray.length > 15){
    $("displayWords").show().fadeIn(1000).fadeOut(1000);
    $("#pong1Img").show().fadeIn(1000).fadeOut(1000);
  }
  else if(myMutatedArray.length > 5){
    $("displayWords").show().fadeIn(1000).fadeOut(1000);
    $("#pong2Img").show().fadeIn(1000).fadeOut(1000);
  }
  else if(myMutatedArray.length > 3){
    $("displayWords").show().fadeIn(1000).fadeOut(1000);
    $("#pong3Img").show().fadeIn(800).fadeOut(800);
  }
  else if(myMutatedArray.length > 0){
    $("displayWords").show().fadeIn(1000).fadeOut(1000);
    $("#pong4Img").show().fadeIn(1000).fadeOut(1000);
  }
  for(var i = 0; i < myMutatedArray.length; i++){

    $("#outputList").append("<li>" + myMutatedArray[i] + "</li>");
  }
}


$(document).ready(function(){
  $("#playButton").click(function(){
    $("html, body").animate({
      scrollTop: $("#rulesSection").offset().top
    }, "slow");
  });
  $("form").submit(function(event){
    event.preventDefault();
    myControlStructure();
  });
});
