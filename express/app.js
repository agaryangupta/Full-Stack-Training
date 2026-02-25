const express = require('express');
const multer  = require('multer')
const path = require('path');
const app = express();
const port = 8000;

const upload = multer({ dest: 'uploads/' });

app.get('/',(req,res)=>{
    res.send('Hello World');
});

app.get('/img', (req, res) => {
    res.send(`
        <h2>Upload Image</h2>
        <form action="/img" method="POST" enctype="multipart/form-data">
            <input type="file" name="image" />
            <button type="submit">Upload</button>
        </form>
    `);
});

app.post('/img', upload.single('image'), (req, res) => {
    if (!req.file) {
        return res.send("No file uploaded");
    }

    res.send("Image uploaded successfully!");
});

// app.get('/about',(req,res)=>{
//     res.send(`
//         <h1>About Us </h1>
//         <img src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d" width="300" height="200"/> 
//     `);
// });

app.listen(port,()=>{
console.log(`Server is running on port http://localhost:${port}`);
})

