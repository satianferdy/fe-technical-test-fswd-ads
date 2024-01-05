import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import axios from "axios";

function Assets() {
  const [assets, setAssets] = useState([]);

  useEffect(() => {
    const getAssets = () => {
      fetch("http://localhost:8000/api/assets")
        .then((res) => {
          return res.json();
        })
        .then((response) => {
          console.log(response.data);
          setAssets(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    getAssets();
  }, []);

  const deleteAssets = (id) => {
    axios
      .delete("http://localhost:8000/api/assets/" + id)
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
            <Link to="/assets/create" className="btn btn-primary">
              Create Assets
            </Link>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 mt-3">
            <table className="table table-striped table-hover">
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Product ID</th>
                  <th scope="col">image</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {assets.map((assets, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{assets.product_id}</td>
                    <td>
                      <img
                        src={`http://127.0.0.1:8000/storage/${assets.image}`}
                        alt=""
                        height={50}
                      />
                    </td>
                    <td>
                      <button
                        onClick={() => deleteAssets(assets.id)}
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

export default Assets;
