import React, { useState, useEffect } from "react";
import axios from "axios";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loader, setLoader] = useState(false);

  const fetchProducts = async () => {
    let url = "http://localhost:5001/products";
    setLoader(true);
    let res = await axios.get(url);
    console.log(res);
    setLoader(false);
    setProducts(res.data.products);
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <>
      <h3 className="App">Product's List</h3>
      {loader ? (
        "Loading..."
      ) : !products.length ? (
        <h5>No data found..</h5>
      ) : (
        <table>
          <thead>
            {/* <tr>
              {products.length &&
                Object.keys(products[0]).map((h) => <th key={h}>{h}</th>)}
            </tr> */}
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.product}</td>
                <td>{product.id}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default Products;
