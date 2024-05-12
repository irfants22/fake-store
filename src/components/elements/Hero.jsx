import React from "react";
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();

  const handleHeroBtn = () => {
    navigate("/products");
  };

  return (
    <div className="grid grid-cols-2 w-full h-[400px] bg-second">
      <div className="grid items-center">
        <div className="flex flex-col relative ml-12 gap-y-2">
          <p className="text-fourth text-sm font-medium uppercase">
            Best Price
          </p>
          <h1 className="text-white text-xl font-semibold uppercase  tracking-widest lg:w-[464px]">
            Revolutionize Your Shopping Experience with Us
          </h1>
          <button
            onClick={handleHeroBtn}
            className="w-40 border-2 border-fourth bg-white text-second text-xs font-medium uppercase py-2 px-2 mt-5 rounded-sm hover:bg-second hover:text-white transition"
          >
            Shop Now
          </button>
        </div>
      </div>
      <div className="bg-hero bg-cover bg-center">
        <div className="w-full h-full bg-gradient-to-l from-transparent to-second"></div>
      </div>
    </div>
  );
}

export default Hero;
