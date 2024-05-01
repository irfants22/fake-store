import React from "react";
import { TiShoppingCart } from "react-icons/ti";
import { Link, Outlet } from "react-router-dom";

function Navbar() {
  return (
    <>
      <header className="w-full p-3 bg-first z-[999] sticky top-0">
        <nav className="w-full flex justify-between">
          <div className="flex flex-1 items-center ml-5">
            <Link to={"/"}>
              <h1 className="text-white text-lg">Fakestore</h1>
            </Link>
          </div>
          <div className="flex flex-1 justify-end items-center mr-5">
            <Link to={"/cart"}>
              <TiShoppingCart className="text-white text-lg" />
            </Link>
          </div>
        </nav>
      </header>
      <Outlet />
    </>
  );
}

export default Navbar;
