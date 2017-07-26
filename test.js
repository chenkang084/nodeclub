var shell = require("shelljs");

shell.exec("cd D:/test && tail  a.log", { async: true }, function(
  code,
  stdout,
  stderr
) {

  // iconv.decode(stderr,'gbk')
  console.log("Exit code:", code);
  console.log("Program output:", stdout);
  console.log("Program stderr:", stderr);
});


