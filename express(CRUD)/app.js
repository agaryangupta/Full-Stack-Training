const express = require('express');
const app = express();
const port = 8000;

//database
const students = [
    { id: 1, name: 'John Doe', age: 20 },
    { id: 2, name: 'Jane Smith', age: 22 }
];

app.listen(port, () => {
    console.log(`Server is running on port https://localhost:${port}`);
});