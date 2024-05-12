import React from "react";

function CartTotalCost({ total }) {
  return (
    <div className="w-full h-12 flex shadow shadow-neutral-300 rounded-sm">
      <div className="w-max flex items-center gap-2 py-1 mx-auto">
        <p className="text-xs text-slate-500 capitalize">total</p>
        <p className="text-base font-medium uppercase">
          ${" "}
          {total.toLocaleString("id-ID", {
            styles: "currency",
            currency: "USD",
          })}
        </p>
      </div>
      <div className="flex justify-end ml-auto">
        <button className="w-[100px] h-full bg-first text-white text-xs font-medium uppercase rounded-r-sm hover:opacity-95 transition">
          buy
        </button>
      </div>
    </div>
  );
}

export default CartTotalCost;
