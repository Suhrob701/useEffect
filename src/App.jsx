import axios from "axios";
import React, { useEffect, useState } from "react";

const Main = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/products")
      .then((res) => {
        setProducts(res.data);
        console.log(res.data); 
      })
      .catch((err) => {
        console.log("Xatolik:", err);
      });
  }, []);

  return (
    <div className="text-white px-6 py-4">
      <h1 className="text-2xl mb-4">Mahsulotlar</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.title} - {product.price} so'm
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Main;
