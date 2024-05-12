import React from "react";
import { Link, NavLink } from "react-router-dom";

function Footer() {
  return (
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
              <NavLink to={"https://www.instagram.com/irpane_/"} target="blank">
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
  );
}

export default Footer;
