const { Server } = require("http");
const net = require("net");
const { IP, PORT } = require("./constants");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP,  // IP address here,
    port: PORT, // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  //snake initials
  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write("Name: NIB");
  });

  //Move Commands
  // conn.on("connect", () => {
  //   setTimeout(() => {
  //     conn.write("Move: up");
  //   }, 100)
  // });

  conn.on("data", (data) => {
    console.log("Server says",data);
  });
  return conn;
};

console.log("Connecting ...");
//connect();
module.exports = { connect };