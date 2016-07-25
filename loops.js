// var i = 0;
//
// var countLimit = 8;
//
// //the goal is to count 8 times, starting with 0 and ending with 8.
//
// //While loop.
//
// while (i < countLimit) {
//   console.log('while: ' + i);
//   i++; // i = i + 1;
// }
//
// //For Loop.
//
// for (i = 0; i < countLimit; i++) {
//   console.log('for: ' + i);
// }

//function countDown (startingPoint, stoppingPoint) 10: startingPoint, 0 stoppingPoint
//use a For Loop and a While Loop.

//countDownWhile

function countDownWhile (startingPoint, stoppingPoint) {
  while (startingPoint >= stoppingPoint) {
    console.log('countDownWhile: ' + startingPoint);
    startingPoint--;
  }
}

countDownWhile(10, 0);

//countDownFor

function countDownFor (startingPoint, stoppingPoint) {
  for (; startingPoint >= stoppingPoint; startingPoint--) {
    console.log('countDownFor: ' + startingPoint);
  }
}

countDownFor(20, 10);
