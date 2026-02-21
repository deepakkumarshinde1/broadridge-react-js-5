import { Navigate, Route, Routes } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import Header from "./components/Header";
import { lazy, Suspense, useLayoutEffect } from "react";
import { getCookies } from "./config/authCookies";
import { useDispatch } from "react-redux";
import { addAuth } from "./redux/slice/service/user.slice";

const ProductDetails = lazy(() => import("./components/ProductDetails"));
const ProductList = lazy(() => import("./components/ProductList"));
const Cart = lazy(() => import("./components/Cart"));
const Login = lazy(() => import("./components/Login"));
const Register = lazy(() => import("./components/Register"));

function App() {
  let dispatch = useDispatch();
  useLayoutEffect(() => {
    try {
      let token = getCookies("accessToken");
      let data = jwtDecode(token);
      dispatch(addAuth({ username: data.username, id: data.id }));
    } catch (error) {}
  }, []);
  return (
    <>
      <Header />
      <Suspense fallback={<h2 style={{ textAlign: "center" }}>Loading...</h2>}>
        <Routes>
          <Route path="/" element={<Navigate to="/products" />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart cartItems={[]} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
