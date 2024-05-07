import React from "react";

function CategoryCard() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-6 gap-4">
      <div className="category-card group">
        <div className="bg-men category-card-img">
          <div className="category-card-hover">
            <p className="category-card-title">men's clothing</p>
          </div>
        </div>
      </div>
      <div className="category-card group">
        <div className="bg-women category-card-img">
          <div className="category-card-hover">
            <p className="category-card-title">women's clothing</p>
          </div>
        </div>
      </div>
      <div className="category-card group">
        <div className="bg-jewelry category-card-img">
          <div className="category-card-hover">
            <p className="category-card-title">jewelry</p>
          </div>
        </div>
      </div>
      <div className="category-card group">
        <div className="bg-furniture category-card-img">
          <div className="category-card-hover">
            <p className="category-card-title">furniture</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CategoryCard;
