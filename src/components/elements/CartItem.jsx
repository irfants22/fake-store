import React from "react";
import { IoTrashOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";
import {
  decreaseProductQuantity,
  increaseProductQuantity,
  removeFromCart,
} from "../../redux/slices/cartSlice";

function CartItem({ item }) {
  const { id, title, image, price, quantity } = item;
  const dispatch = useDispatch();

  const handleIncreaseQuantity = (payload) => {
    dispatch(increaseProductQuantity(payload));
  };

  const handleDecreaseQuantity = (payload) => {
    dispatch(decreaseProductQuantity(payload));
  };

  const handleRemoveFromCart = (payload) => {
    dispatch(removeFromCart(payload));
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 shadow shadow-neutral-300 rounded-sm">
      <section className="w-full h-[200px] sm:h-[180px] py-4 border-b-2 sm:border-b-0 sm:border-r-2 border-second">
        <div className="w-full h-full flex justify-center items-center">
          <img
            src={image}
            className="w-1/5 min-w-[170px] sm:min-w-[160px] aspect-square object-contain"
            alt={title}
            title={title}
          />
        </div>
      </section>
      <section className="w-full h-max sm:h-full flex flex-col sm:justify-between sm:col-start-2 sm:col-end-4 gap-1 p-2">
        <div className="p-1">
          <h3 className="truncate" title={title}>
            {title}
          </h3>
        </div>
        <div className="w-full flex justify-center items-center p-2">
          <div className="w-[150px] grid grid-cols-4 border border-slate-300">
            <div className="w-full">
              <button
                className="w-full text-slate-400 font-medium hover:bg-slate-300 hover:text-black transition"
                onClick={() => handleDecreaseQuantity(id)}
              >
                -
              </button>
            </div>
            <div className="col-start-2 col-end-4 border-x border-slate-300">
              <p className="text-center">{quantity}</p>
            </div>
            <div className="w-full">
              <button
                className="w-full text-slate-400 font-medium hover:bg-slate-300 hover:text-black transition"
                onClick={() => handleIncreaseQuantity(id)}
              >
                +
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center p-1">
          <span className="flex items-center">
            <p>
              ${" "}
              {price.toLocaleString("id-ID", {
                styles: "currency",
                currency: "USD",
              })}
            </p>
          </span>
          <span className="flex items-center">
            <button
              className="w-max hover:scale-105 transition"
              onClick={() => handleRemoveFromCart(id)}
            >
              <IoTrashOutline className="text-xl" />
            </button>
          </span>
        </div>
      </section>
    </div>
  );
}

export default CartItem;
