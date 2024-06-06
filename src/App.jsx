import "./App.css";
import { useState } from "react";

function App() {
  const [greeting, setGreeting] = useState("");
  return (
    <div className="App">
      <div className="greeting-container">Greeting Message</div>
      <div className="buttons">
        <button onClick={() => {setGreeting("สวัสดี!");}}>สวัสดี!</button>
        <button onClick={() => {setGreeting("Hi!");}}>Hi!</button>
        <button onClick={() => {setGreeting("你好!");}}>你好!</button>
      </div>
    </div>
  );
}

export default App;
