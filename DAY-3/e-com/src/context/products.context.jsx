import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

let ProductContext = createContext({});

export function useProductContext() {
  const context = useContext(ProductContext);
  return context;
}

export function ProductContextProvider({ children }) {
  // productList
  let [productList, setProductList] = useState([]);
  // cart
  let [cart, setCart] = useState([]);
  // singleProductDetails
  let [singleProductDetails, setSingleProductDetails] = useState(null);

  let getProductList = async () => {
    try {
      let url = `https://fakestoreapi.com/products`;
      let response = await axios.get(url);
      setProductList(response.data);
    } catch (error) {
      console.log("error", error);
    }
  };

  let addToCart = (product) => {
    // findValue
    let index = cart.findIndex((cartProduct) => cartProduct.id === product.id);
    if (index === -1) {
      product["qty"] = 1;
      setCart([...cart, product]);
    } else {
      let _cart = [...cart];
      _cart[index].qty += 1;
      setCart(_cart);
    }
  };

  // on mount
  useEffect(() => {
    getProductList();
  }, []);

  let shared = {
    productList,
    cart,
    singleProductDetails,
    setSingleProductDetails,
    addToCart,
  };
  return (
    <ProductContext.Provider value={shared}>{children}</ProductContext.Provider>
  );
}
