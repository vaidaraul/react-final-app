import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../components/pages/Home";
import { Contact } from "../components/pages/Contact";
import Navbar from "../components/complex/Navbar";
import Footer from "../components/complex/Footer";

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
};

export default AppRouter;
