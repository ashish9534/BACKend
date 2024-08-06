import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios
      .get("/api/jokes")
      .then((response) => {
        setJokes(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  return (
    <>
      <h1>welcome to "chai and code"</h1>
      <p>JOKES :{jokes.length} </p>
      <p>the end</p>
      {jokes.map((val) => (
        <div key={val.id}>
          <h3>{val.joke}</h3>
        </div>
      ))}
    </>
  );
}

export default App;
