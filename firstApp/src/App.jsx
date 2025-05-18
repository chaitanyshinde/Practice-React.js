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

  const users = [
    {
      name: "Alice Smith",
      age: 28,
      income: 60000,
    },
    {
      name: "Bob Johnson",
      age: 35,
      income: 72000,
    },
    {
      name: "Charlie Brown",
      age: 22,
      income: 48000,
    },
    {
      name: "Diana White",
      age: 40,
      income: 85000,
    },
    {
      name: "Ethan Black",
      age: 31,
      income: 67000,
    },
  ];

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

      <div>
        {users.map(function (e) {
          return <Card name={e.name} age={e.age} income={e.income} />;
        })}
      </div>
    </div>
  );
}

export default App;
