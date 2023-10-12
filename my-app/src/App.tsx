import "./App.css";
import { Box } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
        <Router>
          <Navbar />
          <Box backgroundColor="#F2F1E7" minHeight={"100vh"}>
            <Routes>
              <Route path="/" element={<Content />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/order" element={<OrderPage />} />
              <Route path="/cart" element={<CartPage to="/payment"/>} />
              <Route path="/cart/payment" element={<PaymentPage to="/thankyou"/>}></Route>
              <Route path="/thankyou" element ={<ThankYou />}></Route> 
            </Routes>
            <Footer />
          </Box>
        </Router>
    </ShoppingCartProvider>
    </>
  );
}

export default App;
