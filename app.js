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