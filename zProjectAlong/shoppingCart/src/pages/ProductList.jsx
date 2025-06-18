import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

function ProductList() {
  const [listOfProducts, setListOfProducts] = useState(null);

  const fetchListOfProducts = async () => {
    const response = await fetch("https://dummyjson.com/products");
    const result = await response.json();

    if (result && result?.products) {
      setListOfProducts(result.products);
    }
  };

  useEffect(() => {
    fetchListOfProducts();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Product List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {listOfProducts &&
          listOfProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
      </div>
    </div>
  );
}

export default ProductList;
