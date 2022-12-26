// shallow copy v/s deepCopy

// shallow copy -----------
// (spread operator, Array.from(), Object.Assign())

// 1. Array
// object in array
let arr = [1, 2, 3, 4, { ok: "ok" }];
let newArray = [...arr];
console.log(arr);
// [1, 2, 3, 4, { ok: "ok" }];
console.log(newArray);
// [1, 2, 3, 4, { ok: "ok" }];
newArray[4]["ok"] = 5;
console.log(newArray);
// [1, 2, 3, 4, { ok: "5" }];
console.log(arr);
// [1, 2, 3, 4, { ok: "5" }];

// array in array
let arr2 = [1, 2, 3, [4, 5, 6]];
let newarr2 = [...arr2];
newarr2[3][0] = 44;
console.log(newarr2);
// [1, 2, 3, [44, 5, 6]];
console.log(arr2);
// [1, 2, 3, [44, 5, 6]];

// 2. Object
// object in object
let myObj = { 1: "1", 2: "2", 3: { 4: "4", 5: "5" } };
let newObj = { ...myObj };
newObj[3][4] = "44";
console.log(newObj);
// { 1: "1", 2: "2", 3: { 4: "44", 5: "5" } };
console.log(myObj);
// { 1: "1", 2: "2", 3: { 4: "44", 5: "5" } };
newObj[2] = "22";
console.log(newObj);
// { 1: "1", 2: "22", 3: { 4: "44", 5: "5" } };
console.log(myObj);
// { 1: "1", 2: "2", 3: { 4: "44", 5: "5" } };

// arr in object
let myObj2 = { 1: "1", 2: "2", 3: [3, 4, 5] };
let newObj2 = { ...myObj2 };
newObj2[3][0] = "33";
console.log(myObj2);
// { 1: "1", 2: "2", 3: [33, 4, 5] };
console.log(newObj2);
// { 1: "1", 2: "2", 3: [33, 4, 5] };

// --------------------
// deep copy
// array in object
let myObj3 = { 1: "1", 2: "2", 3: [3, 4, 5] };
let newObj3 = JSON.parse(JSON.stringify(myObj3));
newObj3[3][0] = "33";
console.log(myObj3);
// { 1: "1", 2: "2", 3: [3, 4, 5] };
console.log(newObj3);
// { 1: "1", 2: "2", 3: [33, 4, 5] };

// same for object in object
