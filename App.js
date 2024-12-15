import React from "react";
import "./App.css";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Welcome to My Customized React App</h1>
                <p>
                    This is a sample application created with React. Customize it as you like!
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
                <button
                    onClick={() => alert("You clicked the button!")}
                    style={{
                        padding: "10px 20px",
                        marginTop: "20px",
                        backgroundColor: "#61dafb",
                        color: "#282c34",
                        border: "none",
                        borderRadius: "5px",
                        cursor: "pointer",
                    }}
                >
                    Click Me
                </button>
            </header>
        </div>
    );
}

export default App;
