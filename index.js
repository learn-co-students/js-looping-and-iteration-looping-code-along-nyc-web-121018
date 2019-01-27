//
// for ([initialization]; [condition]; [iteration]) {
//   [loop body]
// }
// As soon as the condition evaluates to false, exit the loop.
//
const arr = ['Lisa', 'Kaitlin', 'Jan'];

function printBadges(arr){
  for (let i = 0; i < arr.length; i++){
      console.log(`Welcome ${arr[i]}! You are employee #${i + 1}.`);
  }
  return arr;
}

//
// while ([condition]) {
//   [loop body]
// }

function tailsNeverFails(){
  let tails = 0;
  while (Math.random() >= 0.5){
    tails++;
  }

  return `You got ${tails} tails in a row!`;// console.log(`You got ${2} tails in a row!`);
}
