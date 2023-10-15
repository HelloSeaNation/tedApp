import "./App.css";
import { Box } from "@chakra-ui/react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Content from "./components/Content";
import OrderPage from "./Pages/OrderPage";
import Menu from "./Pages/Menu";
import CartPage from "./Pages/CartPage";
import PaymentPage from "./Pages/PaymentPage";
import ThankYou from './Pages/ThankYouPage';
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { ShoppingCartProvider } from "./components/cartFunction";

function App() {
  return (
    <>
    <ShoppingCartProvider>
        <HashRouter basename="/">
          <Navbar />
          <Box backgroundColor="#F2F1E7" minHeight={"100vh"}>
            <Routes>
              <Route path="/" element={<Content />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/order" element={<OrderPage />} />
              <Route path="/cart" element={<CartPage to="/payment"/>} />
              <Route path="/cart/payment" element={<PaymentPage to="/thank-you"/>}></Route>
              <Route path="/thank-you" element ={<ThankYou />}></Route> 
            </Routes>
            <Footer />
          </Box>
        </HashRouter>
    </ShoppingCartProvider>
    </>
  );
}

export default App;
