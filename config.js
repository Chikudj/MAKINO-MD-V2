const fs = require("fs");
const chalk = require("chalk");

//to enable function - true
//to disable function - false
//
global.available = false;
global.autoReadGc = false;
global.autoReadAll = false;
global.antitags = false;


//auto functioner
global.autoTyping = false;                //make true to enable auto typing
global.autoRecord = false;                //make true to enable auto recording
global.groupevent = true;                //This is the new variable for controlling group event handling.
global.statusseen = false;                 //make true to view statuses 


global.Owner = [""];
global.OwnerNumber = ["255675104490"];
global.ownertag = [""]; 
global.OwnerName =  "ミ★ 𝘊𝘏𝘐𝘒𝘜 𝘋𝘑 ★彡";
global.BotName = "ミ🍎★ 𝘊𝘏𝘐𝘒𝘜 𝘋𝘑 ★🍎彡";
global.packname = "Tᴀɪʀᴀ Mᴀᴋɪɴᴏ";                             //Do not change.
global.author = "🐦Makino md ᴍᴜʟᴛɪ-ᴅᴇᴠɪᴄᴇ";                               //Do not change.
global.BotSourceCode = "https://github.com/anonphoenix007/MAKINO-MD-V2"; //Do not change.
global.SupportGroupLink = "https://chat.whatsapp.com/KEg0G3UUs1G39ikdyfF5Pm "; 
global.SupportGroupLink = "https://chat.whatsapp.com/KEg0G3UUs1G39ikdyfF5Pm"; //Do not change!
//global.dbase = process.env.DBASE || "";//Mongodb here
global.AuthorWhatsapp = "https://wa.me/255675104490"; //Bot creator WhatsApp link,don't change or bot will not work.

global.sessID = process.env.sessID || `{"noiseKey":{"private":{"type":"Buffer","data":"QCnlo48N3IhQSDgyWVoaxqS57SOIPzkq+/zQXHcPhUg="},"public":{"type":"Buffer","data":"sj+Sd+t+k6+lRAAOKFDYCfruQpg7n0tcw5dla1eWRC0="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"yPlSiCvfKlTjcquCM5SXxe6o8Z3xygYukG8tlfT2Blc="},"public":{"type":"Buffer","data":"Tb30euD2eIs+Mn/vgI+UtpSKGxRJc063xT9/I4k3DB4="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"eNACg1pteOlz0G+2ImcybdDbYwqrH4RxAYxJC6nohHI="},"public":{"type":"Buffer","data":"8XT0VsMFil8VERYAHZ8aa/8XiXRgvAaa1ocYnCfIciA="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"CNy2lErTvbm1/NVyt0sej43rb8DcK8dH2y+uXT8pbXM="},"public":{"type":"Buffer","data":"V7/qkTjC2+Z6IIsYYCswQtipbg9wBujQRWfpXJ4o1l0="}},"signature":{"type":"Buffer","data":"dXmPUkb79ScScn39AIj20noNfboQc+Kl54+Bo8Dox9YcIwGG+t4knKKQUYctw89YOavXxstq/Ik0rb41dDwWiw=="},"keyId":1},"registrationId":227,"advSecretKey":"GPcWMohdrmzlHnlaGSetHV7P5Lw977v+PwR1KVawa3o=","processedHistoryMessages":[],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":0,"accountSettings":{"unarchiveChats":false},"deviceId":"rFtJW9GLQC2OiOgolqXJKg","phoneId":"c40f74d2-8751-46ab-8848-e9bffd72b59f","identityId":{"type":"Buffer","data":"RZ6eMgf/DIF1lT02+VGdkDQIvFE="},"registered":true,"backupToken":{"type":"Buffer","data":"FiVCjJL2pg0ReKhk0qMhy98tTY8="},"registration":{},"pairingCode":"8HVTEXD3","me":{"id":"255675104490:64@s.whatsapp.net"},"account":{"details":"COfWwYwCEJPbr7UGGBcgACgA","accountSignatureKey":"2CUNt0pAy40iJdwvrOZy6a3BM3MK4l6tZKjR/VAeID8=","accountSignature":"KBpAR+ONWHqclelxQ6sx8p+fl3gBOUrJntPtvMhex20m74fcBJpZPxXUOWGyRUBk9fz9qbh3Ztq/blZCbuJgBQ==","deviceSignature":"ruw1Jy7Y3fnQxLWwXvxxc8U0Wa+LhHfWMTWipb8reuBjgP2z0rgn+2unVIpIyPqXo5hVx4wYM1jfN4MVKQLjhQ=="},"signalIdentities":[{"identifier":{"name":"255675104490:64@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"BdglDbdKQMuNIiXcL6zmcumtwTNzCuJerWSo0f1QHiA/"}}],"platform":"android","lastAccountSyncTimestamp":1722543520,"myAppStateKeyId":"AAAAAA4m"}`
global.prefa = ["?"]

//
global.BotLogo = fs.readFileSync("./Assets/pic1.jpg");
global.Thumb = fs.readFileSync("./Assets/pic9.jpg");
global.Thumb1 = fs.readFileSync("./Assets/pic5.jpg");
global.ErrorPic = fs.readFileSync("./Assets/pic7.jpg");


//
global.ntilinkytvid = []
global.ntilinkytch = []
global.ntilinkig = []
global.ntilinkfb = []
global.ntilinktg = []
global.ntilinktt = []
global.ntilinktwt = []
global.ntilinkall = []
global.nticall = []
global.ntwame = []
global.nttoxic = []
global.ntnsfw = []
global.ntvirtex = []
global.rkyt = []
global.wlcm = []
global.gcrevoke = []
global.autorep = []
global.ntilink = []


//
global.mess = {
    jobdone: 'Here you go...',
    useradmin: 'Only group Admin can use the command 😂 ',
    botadmin: 'Make me Admin first 😌📍.',
    botowner: 'Only my *Owner* can use this command,Dont trespass, Baka!',
    grouponly: 'This command is only made for *Groups*, Baka!',
    privateonly: 'This command is only made for *Private Chat*, Baka!',
    botonly: 'Only the *Bot itself* can use this command!',
    waiting: 'Wait a lil bit (¬_¬)ﾉ...',
    nolink: ' provide me *link*, Baka!',
    error: 'An error occurd!',
    banned: 'You cant use the commands because you Are *Banned*',
    bangc: 'This Group is *Banned* from using Commands!',
    nonsfw: 'Dont be a pervert,idiot! This is not a NSFW enabled group!'
    
}
