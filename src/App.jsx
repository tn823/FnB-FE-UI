import Layout from "./layout/Layout";
import Home from "../src/pages/Home/Home";
import Cart from "../src/components/Cart/Cart";
import { useEffect, useState } from "react";
import Welcome from "./pages/Welcome/Welcome";
import { AnimatePresence } from "framer-motion";
import PopupLayout from "./layout/PopupLayout";
import BaseLayout from "../src/layout/BaseLayout";
import QrCheckout from "../src/components/Checkout/QrCheckout";
import Checkout from "../src/components/Checkout/Checkout";
import Preloader from "../src/components/ui/preloader";
import CashCheckout from "../src/components/Checkout/CashCheckout";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      window.scrollTo(0, 0);
    }, [1100]);
  });

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Welcome />} />
          </Route>
          <Route path="/home" element={<BaseLayout />}>
            <Route
              index
              element={
                <PopupLayout>
                  <Home />
                </PopupLayout>
              }
            />
          </Route>
          <Route
            path="/cart"
            element={
              <PopupLayout>
                <Cart />
              </PopupLayout>
            }
          />
          <Route
            path="/checkout"
            element={
              <PopupLayout>
                <Checkout />
              </PopupLayout>
            }
          />
          <Route
            path="/cash-checkout"
            element={
              <PopupLayout>
                <CashCheckout />
              </PopupLayout>
            }
          />
          <Route
            path="/qr-checkout"
            element={
              <PopupLayout>
                <QrCheckout />
              </PopupLayout>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;