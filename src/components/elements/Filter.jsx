import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { GoTriangleDown } from "react-icons/go";

function Filter({ location }) {
  const [isFilterShow, setIsFilterShow] = useState(false);
  const handleFilterBtn = () => {
    setIsFilterShow(!isFilterShow);
  };

  return (
    <div className="grid grid-cols-1 px-4 py-2 gap-1">
      <section className="w-full" onClick={handleFilterBtn}>
        <button
          className={`w-full flex justify-between items-center shadow shadow-neutral-300 rounded-sm py-2 px-2 hover:scale-[1.002] transition ${
            isFilterShow && "bg-first"
          }`}
        >
          <span
            className={`${
              isFilterShow ? "text-white" : "text-black"
            } text-sm font-normal capitalize`}
          >
            categories
          </span>
          <span className={`${isFilterShow ? "text-white" : "text-black"}`}>
            <GoTriangleDown
              className={`${isFilterShow && "-rotate-180"} transition`}
            />
          </span>
        </button>
      </section>
      <section
        className={`w-full ${isFilterShow ? "block" : "hidden"} transition duration-1000`}
      >
        <div className="grid grid-cols-1 shadow shadow-neutral-300 rounded-sm py-2 pl-2">
          <NavLink
            className={`p-1 text-sm font-normal capitalize hover:text-first ${
              location == "/products" &&
              "text-first bg-gradient-to-r from-transparent to-second"
            }`}
            to={"/products"}
          >
            all
          </NavLink>
          <NavLink
            className={`p-1 text-sm font-normal capitalize hover:text-first ${
              location == "/products/category/men's%20clothing" &&
              "text-first bg-gradient-to-r from-transparent to-second"
            }`}
            to={"/products/category/men's clothing"}
          >
            men's clothing
          </NavLink>
          <NavLink
            className={`p-1 text-sm font-normal capitalize hover:text-first ${
              location == "/products/category/women's%20clothing" &&
              "text-first bg-gradient-to-r from-transparent to-second"
            }`}
            to={"/products/category/women's clothing"}
          >
            women's clothing
          </NavLink>
          <NavLink
            className={`p-1 text-sm font-normal capitalize hover:text-first ${
              location == "/products/category/jewelery" &&
              "text-first bg-gradient-to-r from-transparent to-second"
            }`}
            to={"/products/category/jewelery"}
          >
            jewelry
          </NavLink>
          <NavLink
            className={`p-1 text-sm font-normal capitalize hover:text-first ${
              location == "/products/category/electronics" &&
              "text-first bg-gradient-to-r from-transparent to-second"
            }`}
            to={"/products/category/electronics"}
          >
            electronics
          </NavLink>
        </div>
      </section>
    </div>
  );
}

export default Filter;
