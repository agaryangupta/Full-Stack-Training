// http=require('http');
// const myserver=http.createServer((req,res)=>{
//     if(req.url=='/'){
//         res.end('welcome to home page');
//     }
//     else if(req.url=='/about'){
//         res.end(`<h1>ABES Engineering college</h1>
//             <img src = "https://i.ytimg.com/vi/vGoiqOA6O2g/maxresdefault.jpg" alt = "ABES Engineering College">
//         `);
//     }
//     else if(req.url=='/contact us'){
//         res.end('1234567890');
//     }
//     else if(req.url=='/class'){
//         res.end('I.T-A');
//     }
//     else{
//         res.end('404 page not found');
//     }
// });
// myserver.listen(8000,(req,res)=>{
//     console.log("server is running on port 8000");
// })

const fs=require('fs');
// fs.writeFileSync("./it-a.txt","we are student of i.t-a class");

// fs.writeFileSync("./abes.txt","we are student of abes");

// const result=fs.readFileSync("./it-a.txt","utf-8");
// console.log(result);

// fs.writeFile("./abe.txt","we are student of abes",() => {});

// fs.writeFile("./abe.txt","we are student of abes",(err, result) => {
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log(result);
//     }
// });

// fs.appendFileSync(".abes.txt","We are happy");

// fs.appendFile(".abes.txt","We are happy",()=>{});

// fs.appendFile(".abes.txt","We are happy",(err, result)=>{
//     if(err){
//         console.log(err);
//     }       
//     else{
//         console.log(result);
//     }
// });

// fs.writeFileSync("./a1.txt","I am great");
// fs.writeFileSync("./a2.txt","");

// fs.writeFileSync("./a3.txt","I am great");
// fs.writeFileSync("./a4.txt","");

// fs.writeFileSync("./a5.txt","I am great");
// fs.writeFileSync("./a6.txt","");

// fs.cpSync("./a1.txt","./a2.txt");

// fs.cp("./a3.txt","./a4.txt",()=>{});

// fs.cp("./a5.txt","./a6.txt",(error, result)=>{
//     if(error){
//         console.log(error);
//     }       
//     else{
//         console.log(result);
//     }
// });

// fs.unlinkSync("./a1.txt");

const os = require('os');

// console.log('playform:', os.platform());
// console.log('architecture:', os.arch());
// console.log('info:', os.userInfo());

// console.log('version:', os.version());
// console.log('cpu:', os.cpus());
// console.log('free memory:', os.freemem());

// console.log('total memory:', os.totalmem());
// console.log('uptime:', os.uptime());
// console.log('home directory:', os.homedir());

// console.log('host name:', os.hostname());
// console.log('network interfaces:', os.networkInterfaces());
// console.log('temp directory:', os.tmpdir());

const path = require('path');

const filePath = path.join(__dirname, 'folder', 'data.txt');
console.log("Joined Path:", filePath);

path.extname('file.txt'); 
path.basename('file.txt');
path.dirname('/users/test/file.txt');
path.parse('/users/test/file.txt');

console.log("Extension:", path.extname('file.txt'));
console.log("Basename:", path.basename('file.txt'));
console.log("Dirname:", path.dirname('/users/test/file.txt'));
console.log("Parsed:", path.parse('/users/test/file.txt'));