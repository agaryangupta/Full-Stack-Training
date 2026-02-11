const express = require("express");
const cors = require("cors");
const os = require("os");

const app = express();
app.use(cors());

// Route: User Info
app.get("/userinfo", (req, res) => {
    res.json({
        user: os.userInfo()
    });
});

// Route: Architecture
app.get("/architecture", (req, res) => {
    res.json({
        architecture: os.arch()
    });
});

// Route: Hostname
app.get("/hostname", (req, res) => {
    res.json({
        hostname: os.hostname()
    });
});

// Route: Total Memory
app.get("/totalmemory", (req, res) => {
    res.json({
        totalMemory: os.totalmem()
    });
});

// Route: Free Memory
app.get("/freememory", (req, res) => {
    res.json({
        freeMemory: os.freemem()
    });
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
