import styles from "./App.module.css";
import { useEffect, useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => {
    setCounter(counter + 1);
  };
  const onChange = (event) => {
    setKeyword(event.target.value);
  };
  useEffect(() => {
    console.log("I run only once.");
  }, []);
  useEffect(() => {
    console.log("I run when 'keyword' changes.");
  }, [keyword]);
  useEffect(() => {
    console.log("I run when 'counter' changes.");
  }, [counter]);
  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        placeholder="Searching for .."
        type="text"
      ></input>
      <h1 className={styles.title}>Welcome back to React!</h1>
      <h3>{counter}</h3>
      <button onClick={onClick}>Click me!</button>
    </div>
  );
}

export default App;
