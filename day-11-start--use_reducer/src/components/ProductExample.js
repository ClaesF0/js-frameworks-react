import React from "react";
import { useState, useReducer } from "react";

const ACTIONS = {
  ADD_PRODUCT: "add-product",
  DELETE_PRODUCT: "delete-product",
};

function reducer(products, action) {
  console.log("products", products);
  console.log("action", action);

  switch (action.type) {
    case ACTIONS.ADD_PRODUCT:
      return [
        ...products,
        { id: Date.now(), name: action.payload.productName },
      ];
    case ACTIONS.DELETE_PRODUCT:
      return products.filter((product) => product.id !== action.payload.id); //filter myy products and return the products that is not equal to the product id i passed
    default:
      return products;
  }
}

const ProductExample = () => {
  const [products, dispatch] = useReducer(reducer, []);

  const [productName, setProductName] = useState("");

  function handleSubmit(event) {
    console.log("Hello submitted the state product name", productName);
    event.preventDefault();
    //console.log("state product name", productName);

    dispatch({
      type: ACTIONS.ADD_PRODUCT,
      payload: { productName: productName },
    });
    setProductName("");
  }

  function deleteProduct(id) {
    console.log("deleteProduct", deleteProduct);
    console.log("delete-id", id);
    dispatch({
      type: ACTIONS.DELETE_PRODUCT,
      payload: {
        id: id,
      },
    });
  }

  return (
    <div className="productContainer">
      <h1>ProductExample</h1>
      <form className="flex" onSubmit={handleSubmit}>
        <label>Product Name</label>
        <input
          placeholder="Write product name"
          value={productName}
          type="text"
          onChange={(event) => setProductName(event.target.value)}
        />
      </form>
      {products.map((item) => {
        return (
          <li>
            <span>
              Name: {item.name} ID: {item.id}
            </span>
            <button onClick={() => deleteProduct(item.id)}>Delete</button>
          </li>
        );
      })}
      <ul>
        <li className="product">
          <h1>{productName}</h1>
        </li>
      </ul>
    </div>
  );
};
export default ProductExample;
