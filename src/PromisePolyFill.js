// Promise Polyfill

let S_OPTION = {
  PENDING: "PENDING",
  REJECTED: "REJECTED",
  FULFILLED: "FULFILLED"
};

function myPromise(callback) {
  let state = S_OPTION.PENDING;
  let value;
  let filledCallback = [];
  let catchCallback = [];
  let finallyCallback = [];

  let resolve = function (val) {
    if (state === S_OPTION.PENDING) {
      state = S_OPTION.FULFILLED;
      value = val;
      filledCallback.forEach((cbNew) => {
        cbNew(value);
      });
      catchCallback.forEach((cbNew) => {
        cbNew(value, 1);
      });
    }
  };
  let reject = function (val) {
    // console.log("rejected...");
    if (state === S_OPTION.PENDING) {
      // console.log("rejecting...", val);
      state = S_OPTION.REJECTED;
      value = val;
      // console.log("catchCallback", catchCallback);
      // console.log("filledCallback", filledCallback);
      catchCallback.forEach((cbNew) => {
        cbNew(value);
      });
      filledCallback.forEach((cbNew) => {
        cbNew(value, 1);
      });
    }
  };

  // for promise chaining this should also return a promise
  this.then = function (cb) {
    return new myPromise((res, rej) => {
      if (state === S_OPTION.FULFILLED) {
        let result = cb(value);
        res(result);
      } else if (state === S_OPTION.PENDING) {
        filledCallback.push((prev_result, pass) => {
          if (!pass) {
            try {
              let vall = cb(prev_result);
              res(vall);
            } catch (err) {
              rej(err);
            }
          } else {
            // console.log("passing prev value", prev_result);
            rej(prev_result);
          }
        });
      }
    });
  };
  // for promise chaining this should also return promise
  this.catch = function (cb) {
    // console.log("cb attached");
    return new myPromise((res, rej) => {
      if (state === S_OPTION.REJECTED) {
        let result = cb(value);
        res(result);
      } else if (state === S_OPTION.PENDING) {
        catchCallback.push((prev_result, pass) => {
          if (!pass) {
            try {
              let vall = cb(prev_result);
              res(vall);
            } catch (err) {
              rej(err);
            }
          } else {
            // console.log("catched called...", prev_result);
            res(prev_result);
          }
        });
      }
    });
  };
  this.finally = function (cb) {
    if (state === S_OPTION.REJECTED || state === S_OPTION.FULFILLED) {
      cb(value);
    } else if (state === S_OPTION.PENDING) {
      finallyCallback.push(cb);
    }
  };

  callback(resolve, reject);
}

let createPromise = (name, ms) => {
  return new myPromise((resolve, reject) => {
    setTimeout(() => {
      reject(name);
    }, ms);
  });
};

let p1 = createPromise("p1", 1000);
// console.log("p1 is", p1);
// p1.then((res) => {
//   console.log("res is", res);
// });
// p1.then((res) => {
//   console.log("res2 is", res);
// });
// p1.catch((err) => {
//   console.log("err is", err);
// });
// p1.catch((err) => {
//   console.log("err2 is", err);
// });

p1.then((res) => {
  console.log(res);
  return "nextpt";
})
  .then((res2) => {
    console.log("res2", res2);
    return "res2";
  })
  .catch((err) => {
    console.log(err);
    return "its okay";
  });

// console.log(
//   p1
//     .then((res) => {
//       console.log(res);
//       return "nextpt";
//     })
//     .catch((err) => console.log("errrr", err))
// );
