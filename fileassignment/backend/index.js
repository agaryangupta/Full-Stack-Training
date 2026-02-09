const express = require("express");
const fs = require("fs");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Home test
app.get("/", (req, res) => {
  res.send("Backend is working");
});

// FS CREATE / WRITE
app.post("/write", (req, res) => {
  const { content } = req.body;

  fs.writeFile("data.txt", content, (err) => {
    if (err) {
      return res.status(500).send("Error writing file");
    }
    res.send("File written successfully");
  });
});

// FS READ
app.get("/read", (req, res) => {
  fs.readFile("data.txt", "utf-8", (err, data) => {
    if (err) {
      return res.status(500).send("Error reading file");
    }
    res.send(data);
  });
});

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
