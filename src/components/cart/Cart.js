import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { UseDispatch } from "react-redux";
import { incCart, decCart } from "../../context/cartSlice";
const Cart = () => {
  const carts = useSelector((state) => state.cart.value);
  console.log(carts);
  let dispatch = useDispatch();
  const items = carts?.map((el) => (
    <div className="card" key={el.id}>
      <img src={el.images[0]} alt="" />
      <h2>{el.title.substring(0, 20)}</h2>
      <h3>
        {el.price} * {el.quantity} = {el.price * el.quantity}
      </h3>
      <button
        className="btn2"
        disabled={el.quantity <= 1}
        onClick={() => dispatch(decCart(el))}
      >
        -
      </button>
      <span>{el.quantity}</span>
      <button onClick={() => dispatch(incCart(el))}>+</button>
    </div>
  ));

  return (
    <div className="container cart">
      <div className="cards">{items}</div>
    </div>
  );
};

export default Cart;
