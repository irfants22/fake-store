import React from "react";
import { useSelector } from "react-redux";
import { Link, NavLink, Outlet } from "react-router-dom";
import { TiShoppingCart } from "react-icons/ti";

function Layout() {
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
      <footer className="w-full z-[999] mt-16">
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 bg-first text-white p-4 gap-y-4 sm:gap-y-0 lg:pt-5">
          <section className="flex justify-start items-center sm:items-start p-2 lg:h-[156px] transition">
            <div>
              <Link to={"/"}>
                <h1 className="font-jaro text-white text-2xl font-normal uppercase">
                  fakestore
                </h1>
              </Link>
              <h1 className="max-w-[310px] text-white text-sm font-medium uppercase tracking-widest mt-4">
                Revolutionize Your Shopping Experience with Us
              </h1>
            </div>
          </section>

          <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 lg:h-[156px] gap-y-4 p-2 transition">
            <div>
              <ul>
                <li className="footer-list">
                  <p className="footer-text-icon">&gt;</p>
                  <NavLink to={"/"}>
                    <p className="footer-text">home</p>
                  </NavLink>
                </li>
                <li className="footer-list">
                  <p className="footer-text-icon">&gt;</p>
                  <NavLink to={"/products"}>
                    <p className="footer-text">products</p>
                  </NavLink>
                </li>
                <li className="footer-list">
                  <p className="footer-text-icon">&gt;</p>
                  <NavLink to={"/cart"}>
                    <p className="footer-text">cart</p>
                  </NavLink>
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <li className="footer-list">
                  <p className="footer-text-icon">&gt;</p>
                  <NavLink to={"/products/category/men's clothing"}>
                    <p className="footer-text">men's clothing</p>
                  </NavLink>
                </li>
                <li className="footer-list">
                  <p className="footer-text-icon">&gt;</p>
                  <NavLink to={"/products/category/women's clothing"}>
                    <p className="footer-text">women's clothing</p>
                  </NavLink>
                </li>
                <li className="footer-list">
                  <p className="footer-text-icon">&gt;</p>
                  <NavLink to={"/products/category/jewelery"}>
                    <p className="footer-text">jewelry</p>
                  </NavLink>
                </li>
                <li className="footer-list">
                  <p className="footer-text-icon">&gt;</p>
                  <NavLink to={"/products/category/electronics"}>
                    <p className="footer-text">electronics</p>
                  </NavLink>
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <li className="footer-list">
                  <p className="footer-text-icon">&gt;</p>
                  <NavLink to={"https://github.com/irfants22"} target="blank">
                    <p className="footer-text">github</p>
                  </NavLink>
                </li>
                <li className="footer-list">
                  <p className="footer-text-icon">&gt;</p>
                  <NavLink
                    to={"https://www.linkedin.com/in/irfansitio"}
                    target="blank"
                  >
                    <p className="footer-text">Linkedin</p>
                  </NavLink>
                </li>
                <li className="footer-list">
                  <p className="footer-text-icon">&gt;</p>
                  <NavLink
                    to={"https://www.instagram.com/irpane_/"}
                    target="blank"
                  >
                    <p className="footer-text">instagram</p>
                  </NavLink>
                </li>
              </ul>
            </div>
          </section>

          <section className="p-2">
            <p className="text-gray-400 text-xs font-normal">
              &copy; Copyright 2024. FAKESTORE - All Rights Reserved{" "}
            </p>
          </section>
        </div>
      </footer>
    </>
  );
}

export default Layout;
