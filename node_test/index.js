import http from "http"

const app = http.createServer((req,res)=>{
    console.log('Server started.....')
    res.end('This is my server')
})

app.listen(8000,(req,res)=>{
    console.log('Server is running on port 8000.....')
})