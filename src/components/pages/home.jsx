import React from "react";
import Hero from "../elements/Hero";
import CategoryCard from "../elements/CategoryCard";

function Home() {
  return (
    <>
      <Hero />
      <section className="w-full mt-14 mb-2">
        <p className="text-center text-lg text-black font-medium uppercase tracking-wide">
          shop by categories
        </p>
      </section>
      <CategoryCard />
    </>
  );
}

export default Home;
