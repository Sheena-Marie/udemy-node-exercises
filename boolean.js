//var isValid = false;

//isValid = !isValid; //! <-- flips the value of isValid.

// if (!isValid) {
//   console.log('Data is true!');
// } else {
//   console.log('Data is Not valid!');
// }

//Challenge

var toggleBoolean = false;

toggleBoolean = !toggleBoolean;

if (typeof(toggleBoolean === 'boolean')) {
  console.log('It\'s a Boolean');
} else {
  console.log('It\'s not a Boolean');
}

/*
Teacher solution

var toggleBoolean = false;

function toggleBoolean (booleanVar) {
  if (typeof booleanVar === 'boolean') {
  return !booleanVar;
} else {
console.log('Warning, not a boolean!');
}

}

var newBoolean = toggleBoolean(isValid);
console.log(newBoolean);
*/
