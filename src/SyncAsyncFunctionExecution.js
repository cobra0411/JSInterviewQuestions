// sync v/s async function execution

console.log("printing ", 1);
function f1() {
  console.log("printing ", 2);
}
f1();
console.log("printin ", 3);

async function f2() {
  console.log("printin ", 4);
}
f2();
console.log("printing ", 5);

async function f3() {
  await 1;
  console.log("printing ", 6);
}
f3();
console.log("printing ", 7);

async function f4() {
  console.log("printing ", 8);
  await 1; // when code execution comes here it pushes to message queue and execution continues when call stack becomes empty
  console.log("printing ", 9);
}
f4();
console.log("printing ", 10);
console.log("printing ", 11);
console.log("printing ", 12);

// printing 1
// printing 2
// printing 3
// printing 4
// printing 5
// printing 7
// printing 8
// printing 10
// printing 11
// printing 12
// printing 6
// printing 9
