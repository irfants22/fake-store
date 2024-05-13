import React, { useEffect } from "react";
import Hero from "../elements/Hero";
import CategoryCard from "../elements/CategoryCard";
import Footer from "../elements/Footer";

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <div>
        <Hero />
        <div className="w-full mt-14 mb-2">
          <p className="text-center text-lg text-black font-medium uppercase tracking-wide">
            shop by categories
          </p>
        </div>
        <CategoryCard />
      </div>
    </div>
  );
}

export default Home;
