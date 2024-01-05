import React, { useState } from "react";

import axios from "axios";
import { useNavigate } from "react-router-dom";

function CreateProduct() {
  const navigate = useNavigate();

  const [txtcategory_id, setCategory_id] = useState("");
  const [txtname, setName] = useState("");
  const [txtslug, setSlug] = useState("");
  const [txtprice, setPrice] = useState("");
  const [message, setMessage] = useState("");

  const uploadProduct = async () => {
    console.log(txtcategory_id);
    const formData = new FormData();
    formData.append("category_id", txtcategory_id);
    formData.append("name", txtname);
    formData.append("slug", txtslug);
    formData.append("price", txtprice);
    const responce = await axios.post(
      "http://127.0.0.1:8000/api/products",
      formData,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );

    if (responce) {
      console.log(responce);
      setMessage(responce.message); //"message": "Product successfully created."
      setTimeout(() => {
        navigate("/products");
      }, 2000);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await uploadProduct();
  };
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-md-8 mt-4">
            <h5 className="mb-4">Add Product </h5>
            <p className="text-warning">{message}</p>

            <form onSubmit={handleSubmit}>
              <div className="mb-3 row">
                <label className="col-sm-3">Category ID </label>
                <div className="col-sm-9">
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => setCategory_id(e.target.value)}
                  />
                </div>
              </div>

              <div className="mb-3 row">
                <label className="col-sm-3">Name </label>
                <div className="col-sm-9">
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </div>

              <div className="mb-3 row">
                <label className="col-sm-3">Slug</label>
                <div className="col-sm-9">
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => setSlug(e.target.value)}
                  />
                </div>
              </div>

              <div className="mb-3 row">
                <label className="col-sm-3">Price</label>
                <div className="col-sm-9">
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </div>
              </div>

              <div className="mb-3 row">
                <label className="col-sm-3"></label>
                <div className="col-sm-9">
                  <button type="submit" className="btn btn-success">
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default CreateProduct;
