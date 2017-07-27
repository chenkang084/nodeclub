// var shell = require("shelljs");

// shell.exec("cd D:/test && tail  a.log", { async: true }, function(
//   code,
//   stdout,
//   stderr
// ) {

//   // iconv.decode(stderr,'gbk')
//   console.log("Exit code:", code);
//   console.log("Program output:", stdout);
//   console.log("Program stderr:", stderr);
// });

const fs = require("fs");

const convertPromise = fn => {
  return new Promise((resolve, reject) => {
    fn.resolve = resolve;
    fn.reject = reject;
    fn.call(fn);
  });
};

const readFileFn = filename => {
  return function() {
    fs.readFile(filename, (err, data) => {
      if (err) this.reject(err);
      this.resolve(data);
    });
  };
};


Promise.all([
  convertPromise(readFileFn("./README.md")),
  convertPromise(readFileFn("./README.md"))
]).then(result => {
  console.log()
});
