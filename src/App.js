import styles from "./App.module.css";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const onClick = () => {
    setCounter(counter + 1);
  };
  console.log("I run all the time");
  useState(() => {
    console.log("Once");
  }, []);
  return (
    <div>
      <h1 className={styles.title}>Welcome back to React!</h1>
      <h3>{counter}</h3>
      <button onClick={onClick}>Click me!</button>
    </div>
  );
}

export default App;
