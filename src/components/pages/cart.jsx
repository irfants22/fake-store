import React, { useEffect } from "react";
import TitleBar from "../elements/TitleBar";
import { useSelector } from "react-redux";
import CartItem from "../elements/CartItem";
import CartTotalCost from "../elements/CartTotalCost";
import EmptyCart from "../elements/EmptyCart";
import Footer from "../elements/Footer";

function Cart() {
  const { cartItems, totalCost } = useSelector((state) => state.cart.data);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <div className="mt-4">
        <TitleBar>Cart</TitleBar>
        <div className="grid grid-cols-1 px-5 md:px-10 xl:px-[60px] gap-3">
          {cartItems.map((item, idx) => (
            <CartItem item={item} key={idx} />
          ))}
        </div>
        {totalCost === 0 ? (
          <EmptyCart />
        ) : (
          <div className="p-5 md:px-10 xl:px-[60px] mt-2">
            <CartTotalCost total={totalCost} />
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
