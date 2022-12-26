// private variable in  javascript
// concepts used
//  - IIFE
//  -closures
const myObject = (function () {
  let temp = 0;
  const getTemp = function () {
    return temp;
  };
  const setTemp = function (newTemp) {
    temp = newTemp;
  };

  return {
    getTemp,
    setTemp
  };
})();
// temp is private variable here..
const { getTemp, setTemp } = myObject;
setTemp(5);
console.log(getTemp());
setTemp(3);
console.log(getTemp());
