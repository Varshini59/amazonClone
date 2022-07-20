import React from "react";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal";
import Header from "./Header";

function Checkout() {
  const [{ user, basket }] = useStateValue();
  console.log(basket);
  return (
    <>
      <Header />
      <div className="checkout">
        <div className="checkout__left">
          <h3>Hello, {user?.email}</h3>
          <h2 className="checkout__title">Your Shopping basket</h2>

          {basket.map((item) => (
            <CheckoutProduct
              title={item.title}
              price={item.price}
              rating={item.rating}
              image={item.image}
            />
          ))}
        </div>
        <div className="checkout__right">
          <Subtotal />
        </div>
      </div>
    </>
  );
}

export default Checkout;
