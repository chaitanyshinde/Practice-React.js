import { useState } from "react";
import axios from "axios";
import Card from "./components/Card";

function App() {
  const [data, setData] = useState([]);

  const getData = async () => {
    const response = await axios.get("https://picsum.photos/v2/list");
    setData(response.data);
  };

  return (
    <>
    <div>
      <Card getData={getData} />
      <div>
        {data.map((e, idx) => (
          <Card key={e.idx} image={e.download_url} author={e.author} />
        ))}
      </div>
    </div>

    </>
  );
}

export default App;
 