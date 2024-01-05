import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import axios from "axios";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = () => {
      fetch("http://localhost:8000/api/products")
        .then((res) => {
          return res.json();
        })
        .then((response) => {
          console.log(response.data);
          setProducts(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    getProducts();
  }, []);

  const deleteProducts = (id) => {
    axios
      .delete("http://localhost:8000/api/products/" + id)
      .then(function (response) {
        console.log(response.data);
        alert("Product deleted successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-md-12 mt-3">
            <Link to="/products/create" className="btn btn-primary">
              Create Product
            </Link>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 mt-3">
            <table className="table table-striped table-hover">
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Category ID</th>
                  <th scope="col">Name</th>
                  <th scope="col">Slug</th>
                  <th scope="col">Price</th>
                  <th scope="col">Assets</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{product.category_id}</td>
                    <td>{product.name}</td>
                    <td>{product.slug}</td>
                    <td>{product.price}</td>
                    <td>
                      {/* Melintasi array product.assets dan menampilkan gambar */}
                      {product.assets.map((asset, assetIndex) => (
                        <img key={assetIndex} src={asset.image} height={20} />
                      ))}
                    </td>
                    <td>
                      <Link
                        to={`/products/${product.id}/edit`}
                        className="btn btn-success mb-2"
                      >
                        Edit
                      </Link>
                      <button
                        onClick={() => deleteProducts(product.id)}
                        className="btn btn-danger"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 mt-3">
            <Link to="/" className="btn btn-primary">
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Products;
