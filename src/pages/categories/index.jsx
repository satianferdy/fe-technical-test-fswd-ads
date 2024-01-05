import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import axios from "axios";

function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategories = () => {
      fetch("http://localhost:8000/api/categories")
        .then((res) => {
          return res.json();
        })
        .then((response) => {
          console.log(response.data);
          setCategories(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    getCategories();
  }, []);

  const deleteCategories = (id) => {
    axios
      .delete("http://localhost:8000/api/categories/" + id)
      .then(function (response) {
        console.log(response.data);
        alert("Category deleted successfully");
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
            <Link to="/categories/create" className="btn btn-primary">
              Create Category
            </Link>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 mt-3">
            <table className="table table-striped table-hover">
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Category Name</th>
                  <th scope="col">Products Count</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {categories.map((category, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{category.name}</td>
                    <td>{category.products_count}</td>
                    <td>
                      <button
                        onClick={() => deleteCategories(category.id)}
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

export default Categories;
