// serial v/s parallel execution of promises
const createPromise = function (name, ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(name);
    }, ms);
  });
};
const ip = [
  { name: "p1", ms: 1000 },
  { name: "p2", ms: 2000 },
  { name: "p3", ms: 4000 },
  { name: "p4", ms: 1000 }
];

// 1. parallel execution

for (let i = 0; i < ip.length; i++) {
  createPromise(ip[i].name, ip[i].ms)
    .then((res) => {
      console.log("res =>", res);
    })
    .catch((err) => {
      console.log("err=> ", err);
    });
}

// 2. serial execution - IMPORTANT

let myPromise = createPromise(ip[0].name, ip[0].ms);
for (let i = 1; i <= ip.length; i++) {
  myPromise = myPromise
    .then((res) => {
      console.log("res =>", res);
      if (i !== ip.length) {
        return createPromise(ip[i].name, ip[i].ms);
      }
    })
    .catch((err) => {
      console.log("err=> ", err);
    });
}
