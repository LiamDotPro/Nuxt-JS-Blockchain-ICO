let express = require('express');
let os = require('os');
let R = require('ramda');
let app = express();
let http = require('http').Server(app);
let io = require('socket.io')(http);

app.use(express.static(__dirname + '/server'));

app.get('/', (req, res) => {


});

app.get('/', () => {

});

http.listen(2000, () => {
  // Log available hosts for the server, based on external addresses.
  'use strict';

  const isInternal = address => address.internal;
  const isIpv4 = address => address.family === 'IPv4';
  const isExternalIpv4 = R.both(R.complement(isInternal), isIpv4);

  const urls = networkInterfaces => R.pipe(
    R.props(R.keys(networkInterfaces)),
    R.flatten(),
    R.filter(isExternalIpv4),
    R.map(R.prop('address')),
    R.concat(['127.0.0.1', os.hostname()]),
    R.map(address => `http://${address}`),
    R.join(', ')
  )(networkInterfaces);

  console.log(`Server available at: ${urls(os.networkInterfaces())}.`)
});

io.on('connection', (socket) => {

  socket.on('test', (data) => {
    console.log(data.hello)
  })

});
