const WebSocket = require('ws');
const express = require('express');
const http = require('http');
const url = require('url');
const ltc = require("./ltcservice")('ea9uZEit0E7sXPeYoCJZDZWZVT+o10ZthvuldL8cJtQ=', 'ITCENTER',0);
const app = express();
const path=require('path');
const Q=require('q');
const server = http.createServer(app);
const wss = new WebSocket.Server({server
//port: 8081,
//   perMessageDeflate: {
//     zlibDeflateOptions: { // See zlib defaults.
//       chunkSize: 1024,
//       memLevel: 7,
//       level: 3,
//     },
//     zlibInflateOptions: {
//       chunkSize: 10 * 1024
//     },
//     // Other options settable:
//     clientNoContextTakeover: true, // Defaults to negotiated value.
//     serverNoContextTakeover: true, // Defaults to negotiated value.
//     clientMaxWindowBits: 10,       // Defaults to negotiated value.
//     serverMaxWindowBits: 10,       // Defaults to negotiated value.
//     // Below options specified as default values.
//     concurrencyLimit: 10,          // Limits zlib concurrency for perf.
//     threshold: 1024,               // Size (in bytes) below which messages
//                                    // should not be compressed.
//   }
});


//var ltc=require("./ltctopup")('kP0SwtIzUA1pLBwsnZz3VA==','THEFRIEND');
// //2054445447
// ltc.sendSMS('2077868868','Hi','ITCENTER').then((res)=>{
//     console.log(JSON.stringify(res));
// }).catch((err)=>{
//     console.log(JSON.stringify(err));
// });
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
var _client={
    username:'',
    logintoken:'',
    logintime:'',
    loginip:'',
    prefix:'gij',
    data:{
        users:{},
        message:{},
        command:''
    }
}
function topup(value,phone,resp){
    ltc.directTopup(phone,value).then(res=>{
        resp.send(res)
    }).catch((err)=>{
        resp.send(err);
    });

}
function sendsms(content,phonenumber,resp){
    ltc.sendSMS(phonenumber,content,'ITCENTER').then((res)=>{
        console.log(JSON.stringify(res));
        resp.send(res);
    }).catch((err)=>{
        console.log(err);
        resp.send(err);
    });
}
function directTopup(){

}
function checkCenterBalance(resp){
    ltc.checkCenterBalance().then((res)=>{
        ///console.log(res);
        resp.send(res);
    }).catch((err)=>{
        //console.log(JSON.stringify(err));
        resp.send(err);
    });
}
function checkPhoneBalance(phone,username,sender,resp){
    ltc.checkPhoneBalance(phone,username,sender).then((res)=>{
        resp.send(res);
    }).catch((err)=>{
        resp.send(err);
    });
}


function TopupResult(){

}
function topupHistory(){

}
function validateTopup(client){
    // check if value is number
    // check if username and login token is valid
    // check if ip OK
    // 
    return [];
}
function commandReader(client){
    const deferred=Q.defer();

    const isValid=validateTopup(client);
    if(!isValid.length)
    switch (client.data.command) {
        case 'heartbeat':
            
            break;
        case 'send-sms':
            sendsms(client.content,client.phone,client.resp);
            break;
        case 'topup':
            topup(client.topup,client.phone,client.resp);
            break;
        case 'direct-topup':
            break;
        case 'check-center-balance':
            checkCenterBalance(client.resp);
            break;
        case 'check-balance':
            checkPhoneBalance(client.phone,client.username,client.sender,client.resp);
            break;
        case 'topup-history':
            break;
        default :
            deferred.reject('ERROR NO COMMAND');
        break;
    }
    else{
        deferred.reject(isValid);
    }
    return deferred.promise;
}
app.all('/',function(req,res){
    res.sendFile(path.join(__dirname+'/index.html'));
});

wss.on('connection', function connection(ws, req) {
    const ip = req.connection.remoteAddress;
    console.log('connection from '+ip);
    //const ip = req.headers['x-forwarded-for'];
    ws.isAlive = true;
    ws.on('pong', heartbeat);
    ws.on('message', function incoming(data) {
        //console.log(data); 
        data.resp=ws;
        commandReader(data).then(res=>{
            setTimeout(function timeout() {
                data.clientip=ip;// need to handle when IP changed
                data.data.message='OK';
                data.data.TopupResult=res;
                ws.send(data);
            }, 500);
        }).catch(err=>{
            data.data.message=err;
            ws.send(data);
        }) ;
    });
    
  });
function noop() {}

function heartbeat() {
  this.isAlive = true;
  console.log('HEART BEAT');
  this.send('Heart beat OK');
}
const interval = setInterval(function ping() {
    wss.clients.forEach(function each(ws) {
      if (ws.isAlive === false) return ws.terminate();
    console.log('TIME INTERVAL');
      ws.isAlive = false;
      ws.ping(noop);
    });
  }, 30000);

  server.listen(8081, function listening() {
    console.log('Listening on %d', server.address().port);
  });