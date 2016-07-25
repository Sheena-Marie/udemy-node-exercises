var grades = [
  100,
  50,
  75,
  97
];

grades.push(89);

// console.log(grades[0]);
//
// grades.push(97);
//
// // grades.push(79); //push adds to the end
// // grades.unshift(48); //adds to the front.
// // var grade = grades.pop(); //takes no arguments. removes from the and returns from the end of an array.
// // var grade = grades.shift(); //does the same as pop, but from the begining of the array.
// //
// // console.log(grade);
// // console.log(grades);
//
// grades.forEach( function(grade) {
//   console.log(grade);
// }); //forEach takes as a function and argument
//
// console.log(grades.length);

var totalGrade = 0;

grades.forEach(function (grade) {
  totalGrade = totalGrade + grade;
  console.log('Current total is : ' + totalGrade);
});

var average = totalGrade / grades.length;

console.log('Average is : ' + average);
