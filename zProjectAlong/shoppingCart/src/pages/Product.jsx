import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailsCard from "../components/DetailsCard";

function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  const fetchProduct = async () => {
    const res = await fetch(`https://dummyjson.com/products/${id}`);
    const data = await res.json();
    setProduct(data);
  };

  useEffect(() => {
    fetchProduct();
  }, [id]);

  if (!product) return <div className="text-center mt-10">Loading...</div>;

  return (
    <div className="p-4">
      <DetailsCard
        id={product.id}
        title={product.title}
        description={product.description}
        price={product.price}
        images={product.images}
      />
    </div>
  );
}

export default Product;
