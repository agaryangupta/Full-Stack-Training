//name price color (12-15 details)
const express = require('express');
const app = express();
const PORT = 8000;

app.use(express.json());

let cars = [
    { id: 1, name: "Honda City", price: 15000, color: "White" },
    { id: 2, name: "Hyundai Verna", price: 18000, color: "Red" },
    { id: 3, name: "Toyota Camry", price: 25000, color: "Black" },
    { id: 4, name: "Honda City", price: 15000, color: "White" },
    { id: 5, name: "Hyundai Verna", price: 18000, color: "Red" },
    { id: 6, name: "Honda City", price: 15000, color: "White" },
    { id: 7, name: "Hyundai Verna", price: 18000, color: "Red" },
    { id: 8, name: "Honda City", price: 15000, color: "White" },
    { id: 9, name: "Hyundai Verna", price: 18000, color: "Red" },
    { id: 10, name: "Toyota Camry", price: 25000, color: "Black" },
    { id: 11, name: "Honda City", price: 15000, color: "White" },
    { id: 12, name: "Hyundai Verna", price: 18000, color: "Red" },
    { id: 13, name: "Honda City", price: 15000, color: "White" },
    { id: 14, name: "Hyundai Verna", price: 18000, color: "Red" },
];

let currentId = 15;

//get all cars
app.get('/cars', (req, res) => {
    res.json(cars);
});

//get one car
app.get('/cars/:id', (req, res) => {
    const car = cars.find(c => c.id === parseInt(req.params.id));
    if (!car) return res.status(404).json({ message: "Not found" });
    res.json(car);
});

//create a car
app.post('/cars', (req, res) => {
    const { name, price, color } = req.body;

    const newCar = {
        id: currentId++,
        name,
        price,
        color
    };

    cars.push(newCar);
    res.status(201).json(newCar);
});

//update a car
app.put('/cars/:id', (req, res) => {
    const car = cars.find(c => c.id === parseInt(req.params.id));
    if (!car) return res.status(404).json({ message: "Not found" });

    const { name, price, color } = req.body;

    if (name) car.name = name;
    if (price) car.price = price;
    if (color) car.color = color;

    res.json(car);
});

//delete a car
app.delete('/cars/:id', (req, res) => {
    const index = cars.findIndex(c => c.id === parseInt(req.params.id));
    if (index === -1) return res.status(404).json({ message: "Not found" });

    const deleted = cars.splice(index, 1);
    res.json({ message: "Deleted", car: deleted });
});


app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});