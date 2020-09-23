const { builtinModules } = require("module");

/**
 * Establishes connection with the game server
 */
const net = require('net');

 const connect = function() {               //uses net.Create to create a new connect
  const conn = net.createConnection({     // assign it to conn
    host: '135.23.222.131',
    port: 50542
  });
  // interpret incoming data as text
  conn.setEncoding('utf8');                 // interpret incoming data as text

  conn.on('connect', () => {                //conn.on is connecting you to above server
    // when a connection is established
    console.log("successfully connected to the game server");
    conn.write("Name: SAA");
    // setInterval(() => {conn.write("Move: up")}, 500);
    // setInterval(() => {conn.write("Move: right")}, 1000);
    // conn.write("Move: left");
    // conn.write("Move: right");
  });
  
  conn.on('data', (data) => {
    console.log(`Incoming: ${data}`);
  });
  
  return conn;
}

module.exports = { connect };


