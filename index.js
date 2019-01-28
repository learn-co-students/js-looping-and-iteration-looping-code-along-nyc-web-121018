// Code your solutions in this file
function printBadges(names){
  for(let i = 0; i<names.length; i++){
    console.log("Welcome " + names[i] +"! You are employee #" + (i+1) + ".")
  }
  return names
}


function tailsNeverFails(){
  let flipping = true;
  let counter = 0;
  while (flipping == true){
    let coin = Math.random()
    if (coin >= .5){
      counter++;
    }else {
      flipping = false;

    }
  }
  return "You got " + counter + " tails in a row!"
}
