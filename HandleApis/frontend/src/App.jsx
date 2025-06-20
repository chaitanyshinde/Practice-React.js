import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        setError(false);
        const response = await axios.get("/api/products");
        console.log(response.data);
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    })();
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Something Went Wrong...</h1>;
  }

  return (
    <>
      <h1>products</h1>
      <div>{products && products.map((item) => <li>{item.name}</li>)}</div>
    </>
  );
}

export default App;
