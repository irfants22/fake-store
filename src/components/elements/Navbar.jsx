import React from "react";
import { useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import { TiShoppingCart } from "react-icons/ti";

function Navbar() {
  const { cartItems } = useSelector((state) => state.cart.data);

  return (
    <>
      <header className="w-full p-3 bg-first z-[999] sticky top-0">
        <nav className="w-full flex justify-between items-center">
          <div className="flex flex-1 items-center ml-5">
            <Link to={"/"}>
              <h1 className="font-jaro text-white text-2xl font-normal uppercase">
                fakestore
              </h1>
            </Link>
          </div>
          <div className="flex flex-1 justify-end items-center mr-5">
            <Link to={"/cart"} className="relative">
              <span
                className={`absolute block w-4 h-4 bg-red-500 text-white text-xs font-normal text-center rounded-full -top-[5px] -right-[5px] transition ${
                  cartItems.length > 0 ? "scale-100" : "scale-0"
                }`}
              >
                {cartItems.length}
              </span>
              <TiShoppingCart className="text-white text-2xl font-normal" />
            </Link>
          </div>
        </nav>
      </header>
      <Outlet />
    </>
  );
}

export default Navbar;
