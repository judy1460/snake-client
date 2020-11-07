
const net = require('net');


const connect = function() {
  const conn = net.createConnection({ 
    host: '192.168.2.21',
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 

  return conn;
}

console.log('you ded cuz you idled');
connect();