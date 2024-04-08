import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./assets/css/style.css"
import "./assets/css/responsive.css"
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Offers from "./pages/Offers";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import Footer from "./components/Footer";

function App() {
  return (
    
    <BrowserRouter>
      <Header />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    
    
  );
}

export default App;
