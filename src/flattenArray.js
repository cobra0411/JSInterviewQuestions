// Flatten An array
// standard question
// input - [1,2,3,[4,5], [6,7,[8, 9]]]
// output - [1,2,3,4,5,6,7,8,9]

const flatten = function (arr) {
  let newArray = [];
  arr.forEach((item) => {
    if (Array.isArray(item)) {
      newArray.push(...flatten(item));
    } else {
      newArray.push(item);
    }
  });
  return newArray;
};
let arr = [1, 2, 3, [4, 5], [6, 7, [8, 9]]];
console.log(flatten(arr));
// [1,2,3,4,5,6,7,8,9]
