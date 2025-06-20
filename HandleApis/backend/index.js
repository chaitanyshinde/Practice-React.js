import express from "express";

const app = express();
const PORT = 3000;

app.get("/api/products", (req, res) => {
  const products = [
    { name: "woodenTable" },
    { name: "ironTable" },
    { name: "plasticTable" },
  ];
  setTimeout(() => {
    res.send(products);
  }, 3000);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
