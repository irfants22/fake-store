import React, { useEffect } from "react";
import Filter from "../elements/Filter";
import TitleBar from "../elements/TitleBar";
import axios from "axios";
import { Outlet, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  addProductData,
  setLoadingStatus,
} from "../../redux/slices/productSlice";
import Footer from "../elements/Footer";

function Product() {
  const location = useLocation();
  const dispatch = useDispatch();
  const URL = location.pathname;

  const getProducts = async (url) => {
    dispatch(setLoadingStatus());
    try {
      const { data } = await axios.get(`https://fakestoreapi.com${url}`);
      dispatch(addProductData(data));
    } catch (error) {
      console.log(error.message);
    } finally {
      dispatch(setLoadingStatus());
    }
  };

  useEffect(() => {
    getProducts(URL);
    window.scrollTo(0, 0);
  }, [URL]);

  return (
    <>
      <div className="mt-4">
        <TitleBar>products</TitleBar>
        <div className="grid grid-cols-1">
          <Filter location={URL} />
          <Outlet />
        </div>
      </div>
      <div className="mt-40">
        <Footer />
      </div>
    </>
  );
}

export default Product;
