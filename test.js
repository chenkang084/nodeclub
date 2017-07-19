var shell = require("shelljs");

shell.exec("cd D:/Program Files/MongoDB && ./mongod --dbpath ../db/node_club_dev/", { async: true }, function(
  code,
  stdout,
  stderr
) {

  // iconv.decode(stderr,'gbk')
  console.log("Exit code:", code);
  console.log("Program output:", stdout);
  console.log("Program stderr:", stderr);
});

console.log("....");
