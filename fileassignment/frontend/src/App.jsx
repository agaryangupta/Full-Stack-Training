import { useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const [output, setOutput] = useState("");

  // FS CREATE / WRITE
  const handleWrite = async () => {
    if (!text.trim()) {
      alert("Please enter some text");
      return;
    }

    await fetch("http://localhost:5000/write", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ content: text }),
    });

    alert("File written successfully");
    setText("");
  };

  // FS READ
  const handleRead = async () => {
    const response = await fetch("http://localhost:5000/read");
    const data = await response.text();
    setOutput(data);
  };

  return (
    <>
      {/* Navbar */}
      <div className="navbar">
        <div className="nav-left">
          <img src="/logo.png" alt="College Logo" />
          <span>Home</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="container">
        <h1>FS Model for Node</h1>

        <textarea
          placeholder="Enter text here"
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>

        <div className="btn-group">
          <button onClick={handleWrite}>FS Create / Write</button>
          <button onClick={handleRead}>FS Read</button>
        </div>

        <div className="output">
          <h3>Output:</h3>
          <p>{output}</p>
        </div>
      </div>
    </>
  );
}

export default App;
