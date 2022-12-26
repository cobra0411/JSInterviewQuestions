// setInterval PolyFill using setTimeout
// syntax - setInterval(cb, interval)
//        - clearInterval(intervalID)
function Interval() {
  let intervalMap = new Map();
  let counter2 = 1;
  function setInterval(cb, time) {
    let counter = counter2++;

    const repeat = function () {
      intervalMap[counter] = setTimeout(() => {
        cb();
        if (intervalMap[counter]) {
          repeat();
        }
      }, time);
    };

    repeat();
    return counter;
  }
  function clearInterval(intervalID) {
    delete intervalMap[intervalID];
  }
  return { clearInterval, setInterval };
}
const { setInterval, clearInterval } = Interval();

// Tests
// Interval 1
let count1 = 0;
let id1 = setInterval(() => {
  console.log("hello");
  count1 += 1;
  if (count1 === 5) {
    clearInterval(id1);
  }
}, 3000);

// Interval 2
let count2 = 0;
let id2 = setInterval(() => {
  console.log("Hi");
  count2 += 1;
  if (count2 === 5) {
    clearInterval(id2);
  }
}, 2000);
console.log(id1, id2);
