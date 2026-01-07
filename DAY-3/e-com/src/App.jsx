import "./App.css";
import CartList from "./components/CartList";
import Header from "./components/Header";
import ProductDetails from "./components/ProductDetails";
import Products from "./components/Products";
function App() {
  return (
    <>
      <div className="app">
        {/* HEADER */}

        <Header />

        {/* MAIN CONTENT */}
        <main className="main">
          {/* PRODUCT LIST */}
          <Products />
          {/* SINGLE PRODUCT DETAILS */}
          <ProductDetails />
        </main>
      </div>
    </>
  );
}

export default App;
