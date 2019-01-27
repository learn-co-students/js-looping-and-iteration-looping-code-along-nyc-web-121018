function printBadges(array){
  let x = 0
  while (x < array.length) {
    console.log("Welcome " + array[x] + "! You are employee #" + (x+1) + ".")
    x += 1
  }
  return array
}

function tailsNeverFails() {
  let tails = 0

  while (Math.random()>= 0.5) {
    tails++
  }
return 'You got '+ tails +' tails in a row!'
}
