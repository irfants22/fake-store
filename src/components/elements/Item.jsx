import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slices/cartSlice";

function Item({ item }) {
  const { title, price, description, category, image, rating } = item;
  const dispatch = useDispatch();

  const handleAddToCart = (payload) => {
    dispatch(addToCart(payload));
  };

  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-2 p-4 transition">
      <section className="w-full h-[300px] sm:h-[350px] flex justify-center items-center lg:col-start-1 lg:col-end-3 transition">
        <div className="w-64 sm:w-2/2 bg-transparent">
          <img
            src={image}
            alt={title}
            className="w-full bg-transparent aspect-square object-contain hover:scale-110 transition cursor-pointer"
            loading="lazy"
          />
        </div>
      </section>
      <section className="w-full h-[300px] sm:h-[350px] flex flex-col justify-center items-center lg:col-start-3 lg:col-end-6 gap-2 p-2 transition">
        <div className="w-full">
          <p className="text-gray-400 text-xs font-normal uppercase">
            #{category}
          </p>
        </div>
        <div className="w-full">
          <p className="text-base font-normal capitalize text-wrap">{title}</p>
        </div>
        <div className="w-full flex flex-col gap-1">
          <div className="w-full flex justify-start items-center gap-1 mb-2">
            <p className="text-sm font-medium uppercase">
              ${" "}
              {price.toLocaleString("id-ID", {
                styles: "currency",
                currency: "USD",
              })}
            </p>
            <p className="text-first text-sm font-normal capitalize">
              in stock
            </p>
          </div>
          <div className="w-full flex justify-start items-center gap-1">
            <p className="text-sm font-medium uppercase">{rating.rate}</p>
            <p className="text-gray-400 text-xs font-normal lowercase">
              average reviews
            </p>
          </div>
          <div className="w-full flex justify-start items-center gap-1">
            <p className="text-sm font-medium uppercase">{rating.count}</p>
            <p className="text-gray-400 text-xs font-normal lowercase">
              number of reviews
            </p>
          </div>
        </div>
        <div className="w-full">
          <p className="text-sm font-normal capitalize text-wrap">
            {description}
          </p>
        </div>
        <div className="w-full flex justify-start gap-5 py-1 mt-5">
          <button className="w-[150px] bg-first text-white text-xs font-medium uppercase py-2 px-2 rounded-sm hover:scale-[1.01] transition">
            buy now
          </button>
          <button
            className="w-[150px] bg-third text-white text-xs font-medium uppercase py-2 px-2 rounded-sm hover:scale-[1.01] transition"
            onClick={() => handleAddToCart(item)}
          >
            add to cart +
          </button>
        </div>
      </section>
    </div>
  );
}

export default Item;
