import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Students from "../pages/Students";
import Donate from "../pages/Donate";
import Contact from "../pages/Contact";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AppRoutes = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/students" element={<Students />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default AppRoutes;
