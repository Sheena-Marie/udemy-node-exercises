/* jshint esversion:6 */

// var name = 'Sheena';
//
// name = undefined;
//
// // console.log(name);
//
// function doesNothing(age) {
//   console.log(age);
// }
//
// // console.log(doesNothing());
// doesNothing();

// var name = undefined;
//
// if (typeof x === 'undefined') {
//   console.log('x is undefined!');
// }

var name = 'Sheena';

console.log(name);

function greetUser(name) {
  if (typeof name === 'undefined') {
    console.log('Hello world!');
  } else {
    console.log('Hello Sheena');
  }
}
