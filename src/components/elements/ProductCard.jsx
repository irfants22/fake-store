import React from "react";
import { CiStar } from "react-icons/ci";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slices/cartSlice";
import { useNavigate } from "react-router-dom";

function ProductCard({ product }) {
  const { id, title, image, price, rating } = product;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddToCart = (payload) => {
    dispatch(addToCart(payload));
  };

  const handleToDetailProductPage = (id) => {
    navigate(`/products/${id}`);
  };

  return (
    <div className="flex flex-col shadow shadow-neutral-300 rounded-sm">
      <section
        className="w-full h-[280px] flex justify-center items-center py-4 border-b-2 border-second cursor-pointer"
        onClick={() => handleToDetailProductPage(id)}
      >
        <div className="w-1/2 max-w-[200px] sm:max-w-none h-full flex justify-center items-center">
          <img
            src={image}
            className="w-full bg-transparent aspect-square object-contain"
            alt={title}
            title={title}
          />
        </div>
      </section>
      <section className="w-full h-max flex flex-col gap-1 p-2">
        <div className="py-1">
          <h3 title={title} className="text-base truncate">
            {title}
          </h3>
        </div>
        <div className="flex py-1">
          <p className="text-sm text-slate-600">
            ${" "}
            {price.toLocaleString("id-ID", {
              styles: "currency",
              currency: "USD",
            })}
          </p>
          <span className="flex items-center gap-[2px] m-auto">
            <CiStar className="text-sm text-slate-600" />
            <p className="flex items-center text-sm text-slate-600">
              {rating.rate}/5 ({rating.count})
            </p>
          </span>
        </div>
        <div className="py-1">
          <button
            className="w-full bg-first text-white text-xs font-medium uppercase py-2 px-2 rounded-sm hover:scale-[1.01] transition"
            onClick={() => handleAddToCart(product)}
          >
            add to cart +
          </button>
        </div>
      </section>
    </div>
  );
}

export default ProductCard;
