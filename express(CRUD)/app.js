const express = require('express');
const app = express();
const port = 8000;

//database
const students = [
    { 'id': 1, 'name': 'John Doe', 'age': 20 },
    { 'id': 2, 'name': 'Jane Smith', 'age': 22 }
];

//data read
app.get('/students', (req, res) => {
    res.json(students);
} );

app.get('/read/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const student = students.find(s => s.id === id);
    if (student) {
        res.json(student);
    } else {
        res.status(404).json({ message: 'Student not found' });
    }
} );


app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
});