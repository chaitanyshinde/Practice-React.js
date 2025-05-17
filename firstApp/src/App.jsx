import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const incCount = () => {
    setCount(count + 1);
  };
  const decCount = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <h1>First Hello!</h1>
      <h2>Count: {count}</h2>
      <button onClick={incCount}>Increase Count</button>
      <button onClick={decCount}>Decrease Count</button>
      <button
        onClick={() => {
          setCount(count + 10);
        }}
      >
        Inc by 10
      </button>
    </div>
  );
}

export default App;
