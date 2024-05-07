import React from "react";

function Hero() {
  return (
    <section className="grid grid-cols-2 w-full h-[400px] bg-second">
      <div className="grid items-center">
        <div className="flex flex-col relative ml-12 gap-y-2">
          <p className="text-sm uppercase font-medium text-fourth">
            Best Price
          </p>
          <h1 className="text-xl uppercase font-semibold tracking-widest text-white lg:w-[464px]">
            Revolutionize Your Shopping Experience with Us
          </h1>
          <button className="w-40 border-2 border-fourth rounded-sm bg-white text-second p-2 mt-5 text-xs font-medium uppercase hover:bg-second hover:text-white transition-all">
            Shop Now
          </button>
        </div>
      </div>
      <div className="bg-hero bg-cover bg-center">
        <div className="w-full h-full bg-gradient-to-l from-transparent to-second"></div>
      </div>
    </section>
  );
}

export default Hero;
