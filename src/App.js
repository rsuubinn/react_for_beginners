import { useEffect, useState } from "react";

function Hello() {
  useEffect(() => {
    console.log("Hi :)");
    return () => console.log("Bye :(");
  }, []);
  return <h1>Hello</h1>;
}

function App() {
  const [showing, setShowing] = useState(false);

  const onClick = () => {
    setShowing((prev) => !prev);
  };
  return (
    <div>
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
      {showing ? <Hello></Hello> : null}
    </div>
  );
}

export default App;
