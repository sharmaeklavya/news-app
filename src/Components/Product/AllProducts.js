import React, { useState, useEffect } from "react";

function AllProducts({ products, loading, colChecked }) {
  const [layout, setLayout] = useState();

  const tableLayout = (columns, products) => {
    if (columns.length > 0) {
      setLayout(
        <>
          <thead>
            <tr>
              <th
                scope="col"
                className="border-warning"
                style={{ width: "5rem" }}
              >
                #
              </th>
              {columns.map((column, i) => (
                <th
                  key={i}
                  scope="col"
                  className="border-warning"
                  style={{ width: "20rem" }}
                >
                  {column[0].toUpperCase() + column.slice(1)}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <th scope="row" className="border-warning">
                  {product.id}
                </th>
                {columns.map((column, i) => (
                  <td key={i} className="border-warning">
                    {product[column]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </>
      );
    } else {
      setLayout(
        <>
          <thead>
            <tr>
              <th
                scope="col"
                className="border-warning"
                style={{ width: "5rem" }}
              >
                #
              </th>
              <th
                scope="col"
                className="border-warning"
                style={{ width: "20rem" }}
              >
                Title
              </th>
              <th
                scope="col"
                className="border-warning"
                style={{ width: "20rem" }}
              >
                Description
              </th>
              <th
                scope="col"
                className="border-warning"
                style={{ width: "20rem" }}
              >
                Category
              </th>
              <th
                scope="col"
                className="border-warning"
                style={{ width: "20rem" }}
              >
                Price
              </th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <th scope="row" className="border-warning">
                  {product.id}
                </th>
                <td className="border-warning text-left">{product.title}</td>
                <td className="border-warning text-left">
                  {product.description}
                </td>
                <td className="border-warning">{product.category}</td>
                <td className="border-warning">{product.price}</td>
              </tr>
            ))}
          </tbody>
        </>
      );
    }
  };

  useEffect(() => {
    tableLayout(colChecked, products);
  }, [colChecked, products]);

  if (loading) return <p className="lead text-center">Loading...</p>;

  return (
    <table
      className="table table-sm table-hover table-bordered text-center"
      style={{
        display: "block",
        width: "100%",
        height: "60vh",
        overflowY: "auto",
      }}
    >
      {layout}
    </table>
  );
}

export default AllProducts;
