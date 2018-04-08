const WebSocket = require('ws');
const express = require('express');
const http = require('http');
const url = require('url');
const ltc = require("./ltcservice")('ea9uZEit0E7sXPeYoCJZDZWZVT+o10ZthvuldL8cJtQ=', 'ITCENTER',0);
const app = express();
const path=require('path');
const Q=require('q');
const uuidV4 = require('uuid/v4');
const moment = require('moment-timezone');
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
//2054445447
ltc.sendSMS('2098728495','ip 0000 47.91.79.99 8803','ITCENTER').then((res)=>{
    console.log(JSON.stringify(res));
}).catch((err)=>{
    console.log(JSON.stringify(err));
});
// ltc.testDirectTopup('2056706660',5000).then(res=>{
//     console.log(res.TopupResult.resultCode);
// }).catch((err)=>{
//     console.log(JSON.stringify(err));
// });

ltc.directTopup('2056706660',100000).then(res=>{
    console.log("topup result");
    console.log(res);
}).catch((err)=>{
    console.log(JSON.stringify(err));
});

ltc.checkCenterBalance().then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(JSON.stringify(err));
});
// ltc.checkPhoneBalance('2055280960','IMEI','TEST').then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(JSON.stringify(err));
// });
// ltc.checkPhoneBalance('2055516321','IMEI','TEST').then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(JSON.stringify(err));
//     console.log('');
// });



// ltc.paymentPOSTPAID('2055051550',100000,'test','test target').then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(JSON.stringify(err));
//     console.log('');
// });

// ltc.checkPhoneBalancePOSTPAID('2055051550','IMEI','TEST').then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(JSON.stringify(err));
//     console.log('');
// });

// ltc.checkPhoneBalancePSTN('21217566','IMEI','TEST').then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(JSON.stringify(err));
//     console.log('');
// });

// // ltc.paymentPSTN('21217566',0,'test','test target').then((res)=>{
// //     console.log(res);
// // }).catch((err)=>{
// //     console.log(JSON.stringify(err));
// //     console.log('');
// // });

// ltc.checkPhoneBalanceInternet('21fh211066','IMEI','TEST').then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(JSON.stringify(err));
//     console.log('');
// });

// ltc.payementInternet('21fh211066',40000,'test','test target').then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(JSON.stringify(err));
//     console.log('');
// });

// ltc.checkPhoneBalancePSTN('2055516321','IMEI','TEST').then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(JSON.stringify(err));
//     console.log('');
// });
// ltc.checkPhoneBalanceInternet('2055516321','IMEI','TEST').then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(JSON.stringify(err));
//     console.log('');
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
function topup(value,phone,resp,owner,target){
    ltc.directTopup(phone,value,owner,target).then(res=>{
        resp.send(res)
    }).catch((err)=>{
        resp.send(err);
    });

}
function paymentPOSTPAID(value,phone,resp,owner,target){
    ltc.paymentPOSTPAID(phone,value,owner,target).then(res=>{
        resp.send(res)
    }).catch((err)=>{
        resp.send(err);
    });
}
function payementInternet(value,phone,resp,owner,target){
    ltc.payementInternet(phone,value,owner,target).then(res=>{
        resp.send(res)
    }).catch((err)=>{
        resp.send(err);
    });
}
function paymentPSTN(value,phone,resp,owner,target){
    ltc.paymentPSTN(phone,value,owner,target).then(res=>{
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
function checkPostPaid(phone,username,sender,resp){
    ltc.checkPhoneBalancePOSTPAID(phone,username,sender).then((res)=>{
        resp.send(res);
    }).catch((err)=>{
        resp.send(err);
    });
}
function checkInternet(phone,username,sender,resp){
    ltc.checkPhoneBalanceInternet(phone,username,sender).then((res)=>{
        resp.send(res);
    }).catch((err)=>{
        resp.send(err);
    });
}
function checkPSTN(phone,username,sender,resp){
    ltc.checkPhoneBalancePSTN(phone,username,sender).then((res)=>{
        resp.send(res);
    }).catch((err)=>{
        resp.send(err);
    });
}

function TopupResult(){

}
function topupHistory(){

}
function convertTZ(fromTZ) {
    return moment.tz(fromTZ, "Asia/Vientiane").format();
}
function validateTopup(client){
    let invalid=[];
    // check if value is number
    // check if username and login token is valid
    // check if ip OK
    // 
    
    if(!client||client == undefined) {
        invalid.push('client is empty');
        return invalid;
    }

    if(!client.data||client.data == undefined){
        invalid.push('data is empty');
        return invalid;
    } 

    return invalid;
}
function commandReader(js){
    const deferred=Q.defer();
    const isValid=validateTopup(js.client);
    if(!isValid.length)
    switch (js.client.data.command) {
        case 'send-sms':
            sendsms(js.client.data.sms.content,js.client.data.sms.phone,js.resp);
            break;
        case 'topup':
            topup(js.client.data.topup.topupvalue,js.client.data.topup.phone,js.resp,js.client.data.topup.username,js.client.data.topup.target);
            break;
        case 'direct-topup':
            break;
        case 'check-center-balance':
            checkCenterBalance(js.resp);
            break;
        case 'check-balance':
            checkPhoneBalance(js.client.data.topup.phone,js.client.data.topup.target,js.client.data.topup.username,js.resp);
            break;
        case 'check-post-balance':
            checkPostPaid(js.client.data.topup.phone,js.client.data.topup.target,js.client.data.topup.username,js.resp);
            break;
        case 'check-PSTN-balance':
            checkPSTN(js.client.data.topup.phone,js.client.data.topup.target,js.client.data.topup.username,js.resp);
            break;
        case 'check-internet-balance':
            checkInternet(js.client.data.topup.phone,js.client.data.topup.target,js.client.data.topup.username,js.resp);
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
                if(!data.client)  data.client={};
                if(!data.client.gui||data.client.gui==undefined){
                        data.client.gui=uuidV4();
                        ws.gui=data.client.gui;
                }   

                data.client.clientip=ip;// need to handle when IP changed
                data.client.data.message='OK';
                data.client.data.TopupResult=res;
                data.client.lastupdate=convertTZ(new Date());
                ws.client=data.client;                
                ws.send(data.client);
            }, 500);
        }).catch(err=>{
            data.client.data.message=err;
            ws.send(data.client);
        }) ;
    });
    
  });
function noop() {}

function heartbeat() {
    let startDate = moment(this.client.lastupdate)
    let endDate = moment(convertTZ(new Date()));
    const timeout = endDate.diff(startDate, 'seconds'); 
    if(this.gui!=this.client.gui){
        this.isAlive=false;
        return;
    }
    if(timeout>60*3)
        this.isAlive=false;
    else
        this.isAlive = true;
    console.log('HEART BEAT');
    this.send(this.client);
}
const interval = setInterval(function ping() {
    wss.clients.forEach(function each(ws) {
      if (ws.isAlive === false) return ws.terminate();
    console.log('TIME INTERVAL');
      ws.isAlive = false;
      ws.ping(noop);
    });
  }, 30000);// set 60 seconds 

  server.listen(8081, function listening() {
    console.log('Listening on %d', server.address().port);
  });