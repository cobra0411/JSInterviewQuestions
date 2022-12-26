// comparism operator

// 1. ==
// It does only value comparism (doest take care of type)
function looseCompare(a, b) {
  return a == b ? true : false;
}

// 2. ===
// It compares value as well as type on both sides
function strictCompare(a, b) {
  return a === b ? true : false;
}

console.log(looseCompare(1, 1)); // true
console.log(strictCompare(1, 1)); // true

console.log(looseCompare(1, "1")); // true
console.log(strictCompare(1, "1")); // false

console.log(looseCompare(1, {})); // false
console.log(strictCompare(1, {})); // false

console.log(looseCompare(1, true)); // true
console.log(strictCompare(1, true)); // false

console.log(looseCompare("1", true)); // true
console.log(strictCompare("1", true)); // false

console.log(looseCompare(null, true)); // false
console.log(strictCompare(null, true)); // false

console.log(looseCompare(null, false)); // false
console.log(strictCompare(null, false)); // false

console.log(looseCompare(undefined, false)); // false
console.log(strictCompare(undefined, false)); // false

console.log(looseCompare(undefined, 0)); // false
console.log(strictCompare(undefined, 0)); // false

console.log(looseCompare(undefined, null)); // true
console.log(strictCompare(undefined, null)); // false

console.log(looseCompare(null, null)); // true
console.log(strictCompare(null, null)); // true

console.log(looseCompare(undefined, undefined)); // true
console.log(strictCompare(undefined, undefined)); // true

console.log(looseCompare({}, {})); // false
console.log(strictCompare({}, {})); // false

// null == undefined => true
// null === anything => false
// null == anything => false
// undefined == anything => false
