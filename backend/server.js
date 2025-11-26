import express from "express";
import cors from "cors";

const corsOptions = {
  origin: "http://localhost:5173",
  optionsSuccessStatus: 200,
};

const app = express();
app.use(cors(corsOptions));
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.get("/about", (req, res) => {
  const student = [
    {
      name: "John Doe",
      age: 21,
    },

    {
      name: "Jane Smith",
      age: 22,

    },
    {
      name: "Alice Johnson",
      age: 20,
    },
    {
      name: "Bob Brown",
      age: 23,
    },
    {
      name: "Charlie Davis",
      age: 24,
    },
  ];
  res.json(student);
});
app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});