import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../components/pages/Home";
import { Contact } from "../components/pages/Contact";

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;
