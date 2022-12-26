// printing index value in setTimeout function

// this is normal flow with var
// since var is functional scope - inside this whole scope
// var value can't be different for different iteration of for loop
for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log("i is ", i);
  }, 1000);
}
// i is 3
// i is 3
// i is 3
// --------------------------------------

// normal flow with let
// since let is block scope each iteration block can have
// different values of i
for (let i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log("i is ", i);
  }, 1000);
}
// i is 0
// i is 1
// i is 2

// ------------------------------------

// fixing var issue with let

for (var i = 0; i < 3; i++) {
  let j = i;
  setTimeout(() => {
    console.log("i is ", j);
  }, 1000);
}
// i is 0
// i is 1
// i is 2

// -------------------------------------
// fixing var issue without using let/const
// concept - IIFE + scope chain(passing i value as a variable in funciton)
for (var i = 0; i < 3; i++) {
  (function (i) {
    setTimeout(() => {
      console.log("i is ", i);
    }, 1000);
  })(i);
}
// i is 0
// i is 1
// i is 2

// or
// concept - IIFE + closure

for (var i = 0; i < 3; i++) {
  (function () {
    var j = i;
    setTimeout(() => {
      console.log("i is ", j);
    }, 1000);
  })();
}
// i is 0
// i is 1
// i is 2
