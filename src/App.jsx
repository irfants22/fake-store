import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/elements/Navbar";
import Home from "./components/pages/home";
import Product from "./components/pages/product";
import DetailProduct from "./components/pages/detailProduct";
import Cart from "./components/pages/cart";
import ProductList from "./components/elements/ProductList";

const router = createBrowserRouter([
  {
    element: <Navbar />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products",
        element: <Product />,
        children: [
          {
            index: true,
            element: <ProductList />,
          },
          {
            path: "category/men's clothing",
            element: <ProductList />,
          },
          {
            path: "category/women's clothing",
            element: <ProductList />,
          },
          {
            path: "category/jewelery",
            element: <ProductList />,
          },
          {
            path: "category/electronics",
            element: <ProductList />,
          },
        ],
      },
      {
        path: "/products/:productId",
        element: <DetailProduct />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
