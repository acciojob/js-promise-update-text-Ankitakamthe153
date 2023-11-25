//your JS code here. If required.
function promiseFunction() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Hello, world!");
    }, 1000);
  });
}

promiseFunction().then((result) => {
  document.getElementById("output").innerHTML = result;
});

