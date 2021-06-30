const {connect} = require("./client");

// Handling user input from stdin.on
const handleUserInput = function (key) {
  if (key === '\u0003') {
    process.exit();
  }
  if (key === "w") {
    console.log("up")
  }
 };
const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

connect();
setupInput();

