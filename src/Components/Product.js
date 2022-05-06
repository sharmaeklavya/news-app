import React, { useState, useEffect } from "react";
import AllProducts from "./Product/AllProducts";
import Pagination from "./Product/Pagination";

const productsPerPage = 5;

function Product() {
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [columns] = useState(["title", "description", "category", "price"]);
  const [colChecked, setColChecked] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/")
      .then((res) => res.json())
      .then((json) => setProductList(json), setLoading(false));
  }, []);

  const LastProductIndex = currentPage * productsPerPage;
  const FirstProductIndex = LastProductIndex - productsPerPage;
  const currentProducts = productList.slice(
    FirstProductIndex,
    LastProductIndex
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const filterColumn = (e) => {
    if (e.target.checked) {
      setColChecked((prevState) => [...prevState, e.target.value]);
    }
    if (!e.target.checked) {
      setColChecked(colChecked.filter((checked) => checked !== e.target.value));
    }
  };

  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-md-10">
          <h5 className="h5">Product List</h5>
        </div>
        <div className="col-md-2">
          <div className="input-group mb-3">
            <div className="input-group-prepend ml-auto dropleft">
              <button
                className="btn btn-outline-secondary dropdown-toggle"
                type="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Filter
              </button>
              <div className="dropdown-menu text-left">
                {productList.length > 0 ? (
                  <>
                    <p className="text-muted mt-2 text-center">Choose Column</p>
                    {columns.map((column) => (
                      <div className="dropdown-item" key={column}>
                        <input
                          id={column}
                          type="checkbox"
                          className="mt-2 mx-1"
                          onClick={(e) => filterColumn(e)}
                          value={column}
                          aria-label="Checkbox for following text input"
                        />
                        <label htmlFor={column}>
                          <small>
                            {column[0].toUpperCase() + column.slice(1)}
                          </small>
                        </label>
                      </div>
                    ))}
                  </>
                ) : null}
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-12">
          <AllProducts
            products={currentProducts}
            loading={loading}
            colChecked={colChecked}
          />
          <Pagination
            productsPerPage={productsPerPage}
            totalProducts={productList.length}
            paginate={paginate}
          />
        </div>
      </div>
    </div>
  );
}

export default Product;
