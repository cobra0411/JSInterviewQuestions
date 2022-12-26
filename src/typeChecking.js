// type of operator

console.log(typeof 1);
// number
console.log(typeof 123n);
// bigint
console.log(typeof true);
// boolean
console.log(typeof "string");
// string
console.log(typeof Symbol("ashish"));
// symbol
console.log(typeof undefined);
// undefined
console.log(typeof null);
// object
console.log(typeof {});
// object
console.log(typeof [1, 2]);
// object

// to check if object is Array
// Array provides static prototype method which return true of false depends on passed object
// Array.isArray();
console.log(Array.isArray([]));
// true
console.log(Array.isArray(""));
// false
