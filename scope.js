// This is a global variable. accesible anywhere in teh program.
var age = 24;

function localFunction() {
  // var age = 0;

  age = 0;
}

localFunction();
console.log(age);
