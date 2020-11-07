const net = require('net');
const { IP, PORT } = require('./constants');
const connect = function() {
  const conn = net.createConnection({ 
    host: '192.168.2.21',
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 
   conn.on('connect',() =>{
  console.log('Successfully connected to game server');
  })
  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });

  conn.on('connect', () => {
    conn.write("Name: MYN");
  return conn;
});
}

module.exports = { connect };