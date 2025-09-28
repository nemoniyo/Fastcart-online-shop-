import React, { useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./layout/layout";
import Home from "./pages/home";
import LogIn from "./pages/log-in";
import SignUp from "./pages/sign-up";
import About from "./pages/abuot";
import Account from "./pages/account";
import Cart from "./pages/cart";
import Checkout from "./pages/checkout";
import Products from "./pages/products";
import Wishlist from "./pages/wishlist";
import Contact from "./pages/contact";
import Info from "./pages/info";
import NotFound from "./pages/not-found";
import Product from "./components/product";

export default function App() {
  const local = JSON.parse(localStorage.getItem('wish')) || []
  const [wish, setWish] = useState(local);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout wish={wish} setWish={setWish} />,
      children: [
        {
          index: true,
          element: <Home wish={wish} setWish={setWish} />
        },
        {
          path: "signup",
          element: <SignUp />
        },
        {
          path: "logIn",
          element: <LogIn />
        },
        {
          path: "about",
          element: <About />
        },
        {
          path: "account",
          element: <Account />
        },
        {
          path: "cart",
          element: <Cart />
        },
        {
          path: "checkout",
          element: <Checkout />
        },
        {
          path: "contact",
          element: <Contact />
        },
        {
          path: "info/:id",
          element: <Info />
        },
        {
          path: "notfound",
          element: <NotFound />
        },
        {
          path: "products",
          element: <Products wish={wish} setWish={setWish} />
        },
        {
          path: "product",
          element: <Product wish={wish} setWish={setWish} />
        },
        {
          path: "wishlist",
          element: <Wishlist wish={wish} setWish={setWish} />
        },
      ]
    }
  ]);

  return <RouterProvider router={router} />;
}
