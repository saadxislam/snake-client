const net = require('net'); //acquiring it 

/**
 * Establishes connection with the game server
 */
const connect = function() {               //uses net.Create to create a new connect
  const conn = net.createConnection({     // assign it to conn
    host: '135.23.222.131',
    port: 50542
  });
  // interpret incoming data as text
  conn.setEncoding('utf8');               // make sure it's not hexa

  conn.on('connect', () => {                //conn.on is connecting you to above server
    // when a connection is established
    console.log("successfully connected to server");
    conn.write("Name: Saad");
  });
  
  conn.on('data', (data) => {
    console.log(`Incoming: ${data}`);
  });
  
  return conn;
}


console.log('Connecting ...');
connect();

