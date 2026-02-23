const express = require('express');
const app = express();
const port = 8000;

app.get('/',(req,res)=>{
    res.send('Hello World');
});

app.get('/about',(req,res)=>{
    res.send(`
        <h1>About Us </h1>
        <img src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d" width="300" height="200"/> 
        `);
});

app.listen(port,()=>{
console.log(`Server is running on port http://localhost:${port}`);
})

