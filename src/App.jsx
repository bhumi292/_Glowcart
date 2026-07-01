  import { Routes, Route } from "react-router-dom";

  import Home from "./pages/Home";
  import Shop from "./pages/Shop";
  import Productdetails from "./pages/Productdetails";
  import Cart from "./pages/Cart";
  import NotFound from "./pages/NotFound";

  function App() {
    return (
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/shop" element={<Shop />} />

        <Route
          path="/product/:id"
          element={<Productdetails />}
        />

        <Route path="/cart" element={<Cart />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    );
  }

  export default App;