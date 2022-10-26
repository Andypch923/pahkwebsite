import React from "react";

import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navibar from "./components/Navibar";
import Home from "./components/Home"
import AboutUs from "./components/AboutUs"
import ProductsAndServices from "./components/ProductsAndServices"
import ContactUs from "./components/ContactUs"
import MediaRoom from "./components/MediaRoom"
import Appendix from "./components/Appendix"

function App() {
  let Component;
  switch (window.location.pathname) {
    case "/":
      Component = Home;
      break;
    case "/aboutus":
      Component = AboutUs;
      break;
    case "/pands":
      Component = ProductsAndServices;
      break;
    case "/contactus":
      Component = ContactUs;
      break;
    case "/mediaroom":
      Component = MediaRoom;
      break;
    case "/appendix":
      Component = Appendix;
      break;
  }

  return (
    <>
      <Header />
      <BrowserRouter>
        <Navibar />
        <Component />

      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
