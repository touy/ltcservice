const WebSocket = require('ws');

const wss = new WebSocket.Server({
  port: 8081,
  perMessageDeflate: {
    zlibDeflateOptions: { // See zlib defaults.
      chunkSize: 1024,
      memLevel: 7,
      level: 3,
    },
    zlibInflateOptions: {
      chunkSize: 10 * 1024
    },
    // Other options settable:
    clientNoContextTakeover: true, // Defaults to negotiated value.
    serverNoContextTakeover: true, // Defaults to negotiated value.
    clientMaxWindowBits: 10,       // Defaults to negotiated value.
    serverMaxWindowBits: 10,       // Defaults to negotiated value.
    // Below options specified as default values.
    concurrencyLimit: 10,          // Limits zlib concurrency for perf.
    threshold: 1024,               // Size (in bytes) below which messages
                                   // should not be compressed.
  }
});




var ltc = require("./ltcservice")('ea9uZEit0E7sXPeYoCJZDZWZVT+o10ZthvuldL8cJtQ=', 'ITCENTER',5000);
//var ltc=require("./ltctopup")('kP0SwtIzUA1pLBwsnZz3VA==','THEFRIEND');
//2054445447
ltc.sendSMS('2077868868','Hi','ITCENTER').then((res)=>{
    console.log(JSON.stringify(res));
}).catch((err)=>{
    console.log(JSON.stringify(err));
});
// ltc.testDirectTopup('2056706660',5000).then(res=>{
//     console.log(res.TopupResult.resultCode);
// }).catch((err)=>{
//     console.log(JSON.stringify(err));
// });

// ltc.directTopup('2056706660',5000).then(res=>{
//     console.log("topup result");
//     console.log(res);
// }).catch((err)=>{
//     console.log(JSON.stringify(err));
// });

// ltc.checkCenterBalance().then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(JSON.stringify(err));
// });
// ltc.checkPhoneBalance('2055280960','IMEI','TEST').then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(JSON.stringify(err));
// });

wss.on('connection', function connection(ws, req) {
    const ip = req.connection.remoteAddress;
    //const ip = req.headers['x-forwarded-for'];
    ws.isAlive = true;
    ws.on('pong', heartbeat);
    // ws.on('message', function incoming(message) {
    //     console.log('received: %s', message);
    //   });
    
    // ws.send('something');
  });
function noop() {}

function heartbeat() {
  this.isAlive = true;
}
ws.on('open', function open() {
    console.log('connected');
    ws.send(Date.now());
  });

ws.on('close', function close() {
console.log('disconnected');
});

ws.on('message', function incoming(data) {
console.log(`Roundtrip time: ${Date.now() - data} ms`);

setTimeout(function timeout() {
    ws.send(Date.now());
}, 500);
});
const interval = setInterval(function ping() {
    wss.clients.forEach(function each(ws) {
      if (ws.isAlive === false) return ws.terminate();
  
      ws.isAlive = false;
      ws.ping(noop);
    });
  }, 30000);