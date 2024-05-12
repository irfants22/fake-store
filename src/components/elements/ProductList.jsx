import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";
import { BeatLoader } from "react-spinners";

function ProductList() {
  const products = useSelector((state) => state.product.data);
  const isLoading = useSelector((state) => state.product.status);

  return (
    <div className="px-4 py-2">
      <div
        className={`w-full h-max ${
          isLoading ? "flex" : "grid"
        } grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3`}
      >
        {isLoading ? (
          <div className="mx-auto mt-12">
            <BeatLoader color="#86469C" />
          </div>
        ) : (
          products.map((product, idx) => (
            <ProductCard product={product} key={idx} />
          ))
        )}
      </div>
    </div>
  );
}

export default ProductList;
