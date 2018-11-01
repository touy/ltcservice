const WebSocket = require('ws');
const express = require('express');
const http = require('http');
const url = require('url');
const fs = require('fs');
let ltc;
// fs.readFile('./ltc.key', 'utf8', function (err,data) {
//   if (err) {
//     return console.log(err);
//   }
//   console.log(data);
//   try {
//     data=JSON.parse(data);
//     ltc = require("./ltcservice")(data.key, data.username,data.value);  
//   }catch (error) {
//     console.log(error);
//   }
// });
ltc = require("./ltcservice")('ea9uZEit0E7sXPeYoCJZDZWZVT+o10ZthvuldL8cJtQ=', 'ITCENTER', 0);
const app = express();
app.set('trust proxy', true);
const path = require('path');
const Q = require('q');
const uuidV4 = require('uuid/v4');
const moment = require('moment-timezone');
const redis = require("redis");
var r_client = redis.createClient();
const server = http.createServer(app);
const wss = new WebSocket.Server({
    server
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
//console.log('before send SMS')
// ltc.sendSMS('2055516321', 'ip 0000 47.91.79.99 8803', 'ITCENTER').then((res) => {
//     console.log(JSON.stringify(res));
// }).catch((err) => {
//     console.log(JSON.stringify(err));
// });

// ltc.directTopup('305778184',35000).then(res=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(JSON.stringify(err));
// });

// ltc.directTopup('2056706660',200000).then(res=>{
//     console.log("topup result");
//     console.log(res);
// }).catch((err)=>{
//     console.log(JSON.stringify(err));
// });

ltc.directTopup('2059280623',50000).then(res=>{
    console.log("topup result");
    console.log(res);
}).catch((err)=>{
    console.log(JSON.stringify(err));
});

// ltc.checkCenterBalance().then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log(JSON.stringify(err));
// });
// ltc.checkPhoneBalance('2055280960','IMEI','TEST').then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(JSON.stringify(err));
// });
// ltc.checkPhoneBalance('2056706660','IMEI','TEST').then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(JSON.stringify(err));
//     console.log('');
// });

// ltc.directTopup('2059280623',50000).then(res=>{
//     console.log("topup result");
//     console.log(res);
// }).catch((err)=>{
//     console.log(JSON.stringify(err));
// });

// ltc.directTopup('2056706660',200000).then(res=>{
//     console.log("topup result");
//     console.log(res);
// }).catch((err)=>{
//     console.log(JSON.stringify(err));
// });
// ltc.directTopup('2058527861',150000).then(res=>{
//     console.log("topup result");
//     console.log(res);
// }).catch((err)=>{
//     console.log(JSON.stringify(err));
// });
// ltc.paymentPOSTPAID('2055516321',300000,'test','test target').then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(JSON.stringify(err));
//     console.log('');
// });
// ltc.paymentPOSTPAID('2055051550',200000,'test','test target').then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(JSON.stringify(err));
//     console.log('');
// });

// ltc.checkPhoneBalance('2056706660','IMEI','TEST').then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(JSON.stringify(err));
//     console.log('');
// });

// ltc.checkPhoneBalance('2058527861','IMEI','TEST').then((res)=>{
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
// ltc.checkPhoneBalancePOSTPAID('2055516321','IMEI','TEST').then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(JSON.stringify(err));
//     console.log('');
// });
// ltc.checkPhoneBalancePOSTPAID('2054495477','IMEI','TEST').then((res)=>{
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

// ltc.paymentPSTN('21217566',5000,'test','test target').then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(JSON.stringify(err));
//     console.log('');
// });
// ltc.paymentPSTN('305778184  ',5000,'test','test target').then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(JSON.stringify(err));
//     console.log('');
// });
// ltc.checkPhoneBalanceInternet('21fh211066','IMEI','TEST').then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(JSON.stringify(err));
//     console.log('');
// });

// ltc.paymentInternet('21fh211066',5000,'test','test target').then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(JSON.stringify(err));
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
var _client = {
    username: '',
    logintoken: '',
    logintime: '',
    loginip: '',
    prefix: 'gij',
    data: {
        users: {},
        message: {},
        command: ''
    }
}

function topup(js) {
    let deferred = Q.defer();
    ltc.directTopup(js.client.data.topup.phone, js.client.data.topup.value, js.client.data.topup.owner, js.client.data.topup.target).then(res => {
        js.client.data.message = 'OK'
        for (key in res) {
            delete res[key].user_id;
            js.client.data.res = res[key];
        }
        deferred.resolve(js);
    }).catch((err) => {
        js.client.data.message = err;
        deferred.reject(js);
    });
    return deferred.promise;
}

function paymentPOSTPAID(js) {
    let deferred = Q.defer();
    ltc.paymentPOSTPAID(js.client.data.topup.phone, js.client.data.topup.value, js.client.data.topup.owner, js.client.data.topup.target).then(res => {
        js.client.data.message = 'OK'
        for (key in res) {
            delete res[key].user_id;
            js.client.data.res = res[key];
        }
        deferred.resolve(js);
    }).catch((err) => {
        js.client.data.message = err;
        deferred.reject(js);
    });
    return deferred.promise;
}

function paymentInternet(js) {
    let deferred = Q.defer();
    ltc.paymentInternet(js.client.data.topup.phone, js.client.data.topup.value, js.client.data.topup.owner, js.client.data.topup.target).then(res => {
        js.client.data.message = 'OK';
        for (key in res) {
            delete res[key].user_id;
            js.client.data.res = res[key];
        }
        deferred.resolve(js);
    }).catch((err) => {
        js.client.data.message = err;
        deferred.reject(js);
    });
    return deferred.promise;
}

function paymentPSTN(js) {
    ltc.paymentPSTN(js.client.data.topup.phone, js.client.data.topup.value, js.client.data.topup.owner, js.client.data.topup.target).then(res => {
        js.client.data.message = 'OK';
        for (key in res) {
            delete res[key].user_id;
            js.client.data.res = res[key];
        }
        deferred.resolve(js);
    }).catch((err) => {
        js.client.data.message = err;
        deferred.reject(js);
    });
    return deferred.promise;
}

function sendsms(js) {
    let deferred = Q.defer();
    ltc.sendSMS(js.client.data.sms.phonenumber, js.client.data.sms.content, 'ITCENTER').then((res) => {
        js.client.data.message = 'OK';
        for (key in res) {
            delete res[key].user_id;
            js.client.data.res = res[key];
        }
        deferred.resolve(js)
    }).catch((err) => {
        js.client.data.message = err;
        deferred.reject(js);
    });
    return deferred.promise;
}

function checkCenterBalance(js) {
    ltc.checkCenterBalance().then((res) => {
        js.client.data.message = 'OK';
        for (key in res) {
            delete res[key].user_id;
            js.client.data.res = res[key];
        }
        deferred.resolve(js)
    }).catch((err) => {
        js.client.data.message = err;
        deferred.reject(js);
    });
    return deferred.promise;
}

function checkPhoneBalance(js) {
    ltc.checkPhoneBalance(js.client.data.topup.phone, js.client.data.topup.value, js.client.data.topup.owner, js.client.data.topup.target).then(res => {
        js.client.data.message = 'OK';
        for (key in res) {
            delete res[key].user_id;
            js.client.data.res = res[key];
        }
        deferred.resolve(js)
    }).catch((err) => {
        js.client.data.message = err;
        deferred.reject(js);
    });
    return deferred.promise;
}

function checkPostPaid(js) {
    ltc.checkPhoneBalancePOSTPAID(js.client.data.topup.phone, js.client.data.topup.value, js.client.data.topup.owner, js.client.data.topup.target).then(res => {
        js.client.data.message = 'OK';
        for (key in res) {
            delete res[key].user_id;
            js.client.data.res = res[key];
        }
        deferred.resolve(js)
    }).catch((err) => {
        js.client.data.message = err;
        deferred.reject(js);
    });
    return deferred.promise;
}

function checkInternet(js) {
    ltc.checkPhoneBalanceInternet(js.client.data.topup.phone, js.client.data.topup.value, js.client.data.topup.owner, js.client.data.topup.target).then(res => {
        js.client.data.message = 'OK';
        for (key in res) {
            delete res[key].user_id;
            js.client.data.res = res[key];
        }
        deferred.resolve(js)
    }).catch((err) => {
        js.client.data.message = err;
        deferred.reject(js);
    });
    return deferred.promise;
}

function checkPSTN(js) {
    ltc.checkPhoneBalancePSTN(js.client.data.topup.phone, js.client.data.topup.value, js.client.data.topup.owner, js.client.data.topup.target).then(res => {
        js.client.data.message = 'OK';
        for (key in res) {
            delete res[key].user_id;
            js.client.data.res = res[key];
        }
        deferred.resolve(js)
    }).catch((err) => {
        js.client.data.message = err;
        deferred.reject(js);
    });
    return deferred.promise;
}

function topupHistory() {

}

function convertTZ(fromTZ) {
    return moment.tz(fromTZ, "Asia/Vientiane").format();
}

function validateTopup(client) {
    let invalid = [];
    // check if value is number
    // check if username and login token is valid
    // check if ip OK
    // 

    if (!client || client == undefined) {
        invalid.push('client is empty');
        return invalid;
    }

    if (!client.data || client.data == undefined) {
        invalid.push('data is empty');
        return invalid;
    }

    return invalid;
}

function ab2str(buf) {
    return String.fromCharCode.apply(null, new Uint8Array(buf));
}

function str2ab(str) {
    var buf = new ArrayBuffer(str.length * 2); // 2 bytes for each char
    var bufView = new Uint8Array(buf);
    for (var i = 0, strLen = str.length; i < strLen; i++) {
        bufView[i] = str.charCodeAt(i);
    }
    return buf;
}

function commandReader(js) {
    const deferred = Q.defer();
    try {
        switch (js.client.data.command) {
            case 'send-sms':
                console.log('send-sms');
                sendsms(js).then(function (res) {
                    deferred.resolve(res);
                }).catch(function (err) {
                    deferred.reject(err);
                });
                break;
            case 'topup':
                topup(js).then(function (res) {
                    deferred.resolve(res);
                }).catch(function (err) {
                    deferred.reject(err);
                });
                //topup(js.client.data.topup.topupvalue,js.client.data.topup.phone,js.resp,js.client.data.topup.username,js.client.data.topup.target);
                break;
            case 'payment-postpaid':
                paymentPOSTPAID(js).then(function (res) {
                    deferred.resolve(res);
                }).catch(function (err) {
                    deferred.reject(err);
                });
                break;
            case 'payment-internet':
                paymentInternet(js).then(function (res) {
                    deferred.resolve(res);
                }).catch(function (err) {
                    deferred.reject(err);
                });
                break;
            case 'payment-PSTN':
                paymentPSTN(js).then(function (res) {
                    deferred.resolve(res);
                }).catch(function (err) {
                    deferred.reject(err);
                });
                break;
            case 'check-center-balance':
                checkCenterBalance(js).then(function (res) {
                    deferred.resolve(res);
                }).catch(function (err) {
                    deferred.reject(err);
                });
                //checkCenterBalance(js.resp);
                break;
            case 'check-balance':
                checkPhoneBalance(js).then(function (res) {
                    deferred.resolve(res);
                }).catch(function (err) {
                    deferred.reject(err);
                });
                // checkPhoneBalance(js.client.data.topup.phone,js.client.data.topup.target,js.client.data.topup.username,js.resp);
                break;
            case 'check-post-balance':
                checkPostPaid(js).then(function (res) {
                    deferred.resolve(res);
                }).catch(function (err) {
                    deferred.reject(err);
                });
                //checkPostPaid(js.client.data.topup.phone,js.client.data.topup.target,js.client.data.topup.username,js.resp);
                break;
            case 'check-PSTN-balance':
                checkPSTN(js).then(function (res) {
                    deferred.resolve(res);
                }).catch(function (err) {
                    deferred.reject(err);
                });
                //checkPSTN(js.client.data.topup.phone,js.client.data.topup.target,js.client.data.topup.username,js.resp);
                break;
            case 'check-internet-balance':
                checkInternet(js).then(function (res) {
                    deferred.resolve(res);
                }).catch(function (err) {
                    deferred.reject(err);
                });
                //checkInternet(js.client.data.topup.phone,js.client.data.topup.target,js.client.data.topup.username,js.resp);
                break;
            case 'topup-history':
                break;
            default:
                deferred.reject('ERROR NO COMMAND');
                break;
        }
    } catch (error) {
        deferred.reject(error);
    }

    return deferred.promise;
}
app.all('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});
var _current_system = 'top-up';
var _client_prefix = ['gij', 'top-up', 'user-management', 'gps'];
var _system_prefix = _client_prefix;

function ab2str(buf) {
    return String.fromCharCode.apply(null, new Uint8Array(buf));
}

function str2ab(str) {
    var buf = new ArrayBuffer(str.length * 2); // 2 bytes for each char
    var bufView = new Uint8Array(buf);
    for (var i = 0, strLen = str.length; i < strLen; i++) {
        bufView[i] = str.charCodeAt(i);
    }
    return buf;
}

function heartbeat() {
    if (!this.lastupdate && !this.gui) {
        console.log('HEART BEAT:' + this.gui + " is alive:" + this.isAlive + " " + this.lastupdate + " logout");
        this.isAlive = false;
    }
    let startDate = moment(this.lastupdate)
    let endDate = moment(convertTZ(new Date()));

    const timeout = endDate.diff(startDate, 'seconds');
    // if(this.gui!=this.gui){
    //     this.isAlive=false;
    //     console.log('HEART BEAT:'+this.gui+" is alive:"+this.isAlive+" "+this.lastupdate+" timeout"+timeout);
    //     return;
    // }
    if (timeout > 60 * 3)
        this.isAlive = false;
    else
        this.isAlive = true;

    console.log('HEART BEAT:' + this.gui + " is alive:" + this.isAlive + " " + this.lastupdate + " timeout" + timeout);
    //this.send(this.client);
}
wss.on('connection', function connection(ws, req) {
    const ip = req.connection.remoteAddress;
    console.log('connection from ' + ip);
    //const ip = req.headers['x-forwarded-for'];
    ws.isAlive = true;
    ws.binaryType = 'arraybuffer';
    ws.on('pong', heartbeat);
    ws.on('message', function incoming(data) {
        let js = {};
        try {
            js.client = data = JSON.parse(ab2str(data));
            // console.log(data.type);
            console.log(data);
            js.ws = ws;
            ws.client = data;
            if (_system_prefix.indexOf(js.client.prefix) < 0) {
                ws.terminate();
                console.log('wrong system , terminated');
                return;
            }
            commandReader(js).then(res => {
                //setTimeout(function timeout() {
                // if(!data.client)  data.client={};
                // if(!data.client.gui||data.client.gui==undefined){
                //data.client.gui=uuidV4();
                // if(res.client.data.command=='logout'){
                //     ws.gui='';
                //     ws.lastupdate=0;
                // }else{
                //     ws.gui=res.client.gui;
                //     ws.lastupdate=res.client.lastupdate;
                // }

                //}   
                // data.client.clientip=ip;// need to handle when IP changed
                // data.client.data.message='OK';
                //data.client.data.TopupResult=res;
                // data.client.lastupdate=convertTZ(new Date());
                //ws.client=data.client;  
                //console.log(res.client);
                // if(res.client.data.command=="system-prefix")
                //         ws.send(JSON.stringify(res));
                // else              
                ws.send(Buffer.from(JSON.stringify(js.client)), {
                    binary: true
                });
                //}, 500);
            }).catch(err => {
                js = err;
                var l = {
                    log: js.client.data.message,
                    logdate: convertTZ(new Date()),
                    type: "error",
                    gui: uuidV4()
                };
                //console.log(err);
                errorLogging(l);
                console.log('ws sending');
                js.client.data.message = js.client.data.message.message;
                ws.send(Buffer.from(JSON.stringify(js.client)), {
                    binary: true
                });
            });
        } catch (error) {
            js.client.data.message = error.message;
            ws.send(Buffer.from(JSON.stringify(js.client)), {
                binary: true
            });
        }

    });

});
function errorLogging(log) {
    var db = create_db("errorlogs");
    console.log(log);
    db.insert(log, log.gui, function (err, body) {
        if (err) console.log(err);
        else {
            console.log("log oK ");
        }
    });
}
server.listen(8081, function listening() {
    console.log('Listening on %d', server.address().port);
});