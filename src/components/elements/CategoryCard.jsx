import React from "react";
import { useNavigate } from "react-router-dom";

function CategoryCard() {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-6 gap-4 px-6 cursor-pointer">
      <section
        className="category-card group"
        onClick={() => navigate("/products/category/men's clothing")}
      >
        <div className="bg-men category-card-img">
          <div className="category-card-hover">
            <p className="category-card-title">men's clothing</p>
          </div>
        </div>
      </section>
      <section
        className="category-card group"
        onClick={() => navigate("/products/category/women's clothing")}
      >
        <div className="bg-women category-card-img">
          <div className="category-card-hover">
            <p className="category-card-title">women's clothing</p>
          </div>
        </div>
      </section>
      <section
        className="category-card group"
        onClick={() => navigate("/products/category/jewelery")}
      >
        <div className="bg-jewelry category-card-img">
          <div className="category-card-hover">
            <p className="category-card-title">jewelry</p>
          </div>
        </div>
      </section>
      <section
        className="category-card group"
        onClick={() => navigate("/products/category/electronics")}
      >
        <div className="bg-electronic category-card-img">
          <div className="category-card-hover">
            <p className="category-card-title">electronics</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CategoryCard;
