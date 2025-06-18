import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product"
import CartList from "./pages/CartList"

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/products" element={<ProductList />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<CartList />} />
      </Routes>
    </Fragment>
  );
}

export default App;
