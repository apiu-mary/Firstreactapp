import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      await getProducts();
    })();
  }, []);

  const getProducts = async () => {
    try {
      const response = await fetch("https://dummyjson.com/products");
      const result = await response.json();
      setProducts(result.products);
      setLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  console.log(products);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div  className="products2">
      {products.map((item) => (
        <div key={item.id}>
          <Link to={`/products/${item.id}`}>
            <h2>{item.brand}</h2>
            <h3>{item.title}</h3>
            <img src={item.thumbnail} alt={item.title} />
            <p>Price: ${item.price}</p>
            <p>Discount: {item.discountPercentage}%</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Products;
