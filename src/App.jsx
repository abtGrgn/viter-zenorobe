import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/frontend/home/Home";
import ProductInfo from "./components/pages/frontend/product-info/ProductInfo";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/product/:slug" element={<ProductInfo />} />
      </Routes>
    </Router>
  );
};

export default App;
