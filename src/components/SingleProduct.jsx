import React from "react";
import { Button, Card } from "react-bootstrap";
import Rating from "./Rating";
import { CartState } from "../context/Context";

const SingleProduct = ({ product }) => {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  return (
    <div className="products">
      <Card>
        <Card.Img
          variant="top"
          src={product.image}
          alt={product.name}
        ></Card.Img>
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Subtitle style={{ paddingBottom: 10 }}>
            <span>${product.price.split(".")[0]}</span>
            {product.fastDelivery ? (
              <div>Fast Delivery</div>
            ) : (
              <div>4 days delivery</div>
            )}
            <Rating rating={product.rating} />
          </Card.Subtitle>
          {cart.some((p) => {
            return p.id === product.id;
          }) ? (
            <Button
              variant="danger"
              onClick={() =>
                dispatch({ type: "REMOVE_FROM_CART", payload: product })
              }
            >
              Remove From Cart
            </Button>
          ) : (
            <Button
              variant="primary"
              disabled={product.inStock}
              onClick={() =>
                dispatch({ type: "ADD_TO_CART", payload: product })
              }
            >
              {!product.inStock ? "Add To Cart" : "Out Of Stock"}
            </Button>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

export default SingleProduct;
