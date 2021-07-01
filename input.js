let connection;

// Handling user input from stdin.on
const handleUserInput = function (key) {
  if (key === '\u0003') {
    process.exit();
  }
  if (key === "w") {
    connection.write("Move: up")
  }
  else if(key ===  'a'){
    connection.write("Move: left")
  }
  else if(key ===  's'){
    connection.write("Move: down")
  }
  else if(key ===  'd'){
    connection.write("Move: right")
  }
  else if(key ===  '1'){
    connection.write("Say: my message")
  }
  else if(key ===  '2'){
    connection.write("Say: hello snake")
  }
  else if(key ===  '4'){
    connection.write("Say: hello welcome")
  }
 };
const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};
module.exports = {setupInput}