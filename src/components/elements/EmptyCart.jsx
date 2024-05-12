import React from "react";
import { useNavigate } from "react-router-dom";

function EmptyCart() {
    const navigate = useNavigate()
  return (
    <div className="p-5 md:px-10 xl:px-[60px]">
      <div className="w-full flex justify-center">
        <div className="flex flex-col gap-3">
          <div>
            <p className="text-gray-400 text-xl font-normal text-wrap">
              Oops, your shopping cart is empty!
            </p>
          </div>
          <div className="w-full flex justify-start">
            <button className="w-max bg-first text-white text-xs font-medium uppercase py-2 px-5 rounded-sm hover:scale-[1.01] transition"
            onClick={() => navigate('/products')}
            >
              let's shop now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmptyCart;
