http=require('http');
const myserver=http.createServer((req,res)=>{
    if(req.url=='/'){
        res.end('welcome to home page');
    }
    else if(req.url=='/about'){
        res.end(`<h1>ABES Engineering college</h1>
            <img src = "https://i.ytimg.com/vi/vGoiqOA6O2g/maxresdefault.jpg" alt = "ABES Engineering College">
        `);
    }
    else if(req.url=='/contact us'){
        res.end('1234567890');
    }
    else if(req.url=='/class'){
        res.end('I.T-A');
    }
    else{
        res.end('404 page not found');
    }
});
myserver.listen(8000,(req,res)=>{
    console.log("server is running on port 8000");
})
const fs=require('fs');
fs.writeFileSync("./it-a.txt","we are student of i.t-a class");

fs.writeFileSync("./abes.txt","we are student of abes");

const result=fs.readFileSync("./it-a.txt","utf-8");
console.log(result);
