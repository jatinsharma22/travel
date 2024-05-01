import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./assets/css/style.css"
import "./assets/css/responsive.css"
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Package from "./pages/Package";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import Footer from "./components/Footer";
import Switzerland from "./pages/tours/Switzerland";
import Norway from "./pages/tours/Norway";
import Greece from "./pages/tours/Greece";
import Singapore from "./pages/tours/Singapore";

function App() {
  return (
    
    <BrowserRouter>
      <Header />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/package" element={<Package />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/greece" element={<Greece />} />
          <Route path="/switzerland" element={<Switzerland />} />
          <Route path="/norway" element={<Norway />} />
          <Route path="/singapore" element={<Singapore />} />
          <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    
    
  );
}

export default App;
