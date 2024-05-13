import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  addProductDetailData,
  setLoadingStatus,
} from "../../redux/slices/productSlice";
import axios from "axios";
import Item from "../elements/Item";
import { BeatLoader } from "react-spinners";
import TitleBar from "../elements/TitleBar";
import Footer from "../elements/Footer";

function DetailProduct() {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.product.status);
  const item = useSelector((state) => state.product.item);

  const getDetailProducts = async (id) => {
    dispatch(setLoadingStatus());
    try {
      dispatch(addProductDetailData({}));
      const { data } = await axios.get(
        `https://fakestoreapi.com/products/${id}`
      );
      dispatch(addProductDetailData(data));
    } catch (error) {
      console.log(error.message);
    } finally {
      dispatch(setLoadingStatus());
    }
  };

  useEffect(() => {
    getDetailProducts(productId);
    window.scrollTo(0, 0);
  }, [productId]);

  return (
    <div className="min-h-screen">
      <div className="mt-4">
        <TitleBar>Detail Product</TitleBar>
        <div className="w-full flex justify-center">
          {isLoading === false && Object.keys(item).length > 0 ? (
            <Item item={item} />
          ) : (
            <BeatLoader color="#86469C" className="mt-32" />
          )}
        </div>
      </div>
    </div>
  );
}

export default DetailProduct;
