import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from 'framer-motion';
import Home from "../pages/Home.jsx";
import Navbar from "../components/Navbar.jsx";
import ChatBot from "../components/ChatBot.jsx";
import Menu from "../pages/Menu.jsx";
import Footer from "../components/Footer.jsx";
import ScrollToTop from "../components/ScrollToTop.jsx";
import FadeWrapper from "../components/FadeWrapper.jsx";

function AppRoutes() {
   const location = useLocation();
  return (
    <>
      <Navbar />
      <ScrollToTop />
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<FadeWrapper><Home /></FadeWrapper>} />
        <Route path="/Menu" element={<FadeWrapper><Menu /></FadeWrapper>} />
      </Routes>
    </AnimatePresence>
      <ChatBot />
      <div id="contacto">
      <Footer />
      </div>
    </>
  );
}

export default AppRoutes;