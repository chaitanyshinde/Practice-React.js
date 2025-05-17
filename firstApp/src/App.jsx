import { useState } from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);

  const incCount = () => {
    setCount(count + 1);
  };
  const decCount = () => {
    setCount(count - 1);
  };

  const [username, setUsername] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert("Form submit!");
    setUsername("");
  };

  return (
    <div>
      {/* <h1>First Hello!</h1> */}
      {/* <h2>Count: {count}</h2>
      <button onClick={incCount}>Increase Count</button>
      <button onClick={decCount}>Decrease Count</button>
      <button
        onClick={() => {
          setCount(count + 10);
        }}
      >
        Inc by 10
      </button> */}
      {/* Form Handling */}
      {/* <form
        onSubmit={(e) => {
          handleFormSubmit(e);
        }}
      >
        <input
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          type="text"
          placeholder="enter your name"
        />
        <button type="submit">Submit</button>
      </form> */}

      <Navbar />
      <Card item="Cricket Bat" market="100000" />
      <Card item="HeadPhone" market="1000000" />
    </div>
  );
}

export default App;
