import { useState } from "react";
import "./styles.css";
import Pin from "./pin/pin";
export default function App() {
  const [pin, setpin] = useState("");
  return (
    <div className="App">
      <h1>Pin</h1>
      <Pin length={4} perBox={1} onChange={(value) => setpin(value)} />
      <h3>{pin}</h3>
    </div>
  );
}
