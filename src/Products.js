import React, { useState, useEffect } from "react";
import Product from "./Product.js";
import useFetch from "./useFetch.js";
import Loader from "./Loader.js";

export default function Products(props) {
  const [products, setProducts] = useState([]);
  const { get, loading } = useFetch(
    "https://todaydo-b2293-default-rtdb.europe-west1.firebasedatabase.app/"
  );

  useEffect(() => {
    get("productdata.json").then((data) => {
      setProducts(data);
    });
  }, []);

  return (
    <div className="products-layout">
      <h1>Products</h1>
      <p>Take a look at our products</p>
      <div className="products-grid">
        {loading && <Loader />}
        {products.map((product) => {
          return (
            <Product
              key={product.id}
              details={product}
              cart={props.cart}
              onProductAdd={props.onProductAdd}
              onProductDelete={props.onProductDelete}
            />
          );
        })}
      </div>
    </div>
  );
}
