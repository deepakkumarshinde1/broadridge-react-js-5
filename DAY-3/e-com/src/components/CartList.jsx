import { useProductContext } from "../context/products.context";

function CartList() {
  let { cart } = useProductContext();
  return (
    <div className="cart-wrapper">
      <i className="fa fa-shopping-cart"></i>
      <span className="badge">{cart.length}</span>

      {/* CART POPUP */}
      <div className="cart-popup">
        <h4>Cart Items</h4>

        <ul className="cart-list">
          {cart.map((product) => {
            return (
              <li className="cart-item" key={product.id}>
                <div className="thumb">
                  <img src={product.image} alt={product.title} />
                </div>
                <div className="info">
                  <p className="name">
                    {product.title}{" "}
                    <span className="price">( {product.qty} )</span>
                  </p>

                  <span className="price">
                    ₹{product.price} x {product.qty} = ₹
                    {product.price * product.qty}
                  </span>
                </div>
              </li>
            );
          })}
        </ul>

        <button className="checkout-btn">
          <i className="fa fa-arrow-right"></i> Go to Cart
        </button>
      </div>
    </div>
  );
}

export default CartList;
