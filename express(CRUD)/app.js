const express = require('express');
const app = express();
const port = 8000;
app.use(express.json());

//database
let students = [
    { id: 1, name: 'John Doe', age: 20 },
    { id: 2, name: 'Jane Smith', age: 22 }
];

// Get all students
app.get('/students', (req, res) => {
    console.log('Current students:', students); // Add logging for debugging
    res.json(students);
});

// Get student by ID
app.get('/read/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const student = students.find(s => s.id === id);
    if (student) {
        res.json(student);
    } else {
        res.status(404).json({ message: 'Student not found' });
    }
});

// Create new student
app.post('/create', (req, res) => {
    console.log('Request body:', req.body); // Add logging for debugging
    
    const { name, age } = req.body;
    
    // Validate input
    if (!name || !age) {
        return res.status(400).json({ 
            message: 'Name and age are required' 
        });
    }
    
    const newStudent = {
        id: students.length + 1,
        name: name,
        age: age
    };
    
    students.push(newStudent);
    console.log('Updated students:', students); // Add logging for debugging
    res.status(201).json(newStudent);
});

app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
});