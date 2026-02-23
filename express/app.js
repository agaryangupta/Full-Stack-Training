const express = require('express');
const app = express();
const port = 8000;

app.get('/',(req,res)=>{
    res.send('Hello World');
});

app.get('/about',(req,res)=>{
    res.send('About Us');
});

app.listen(port,()=>{
console.log(`Server is running on port http://localhost:${port}`);
})

