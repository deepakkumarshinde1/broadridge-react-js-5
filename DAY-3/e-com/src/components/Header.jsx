import CartList from "./CartList";

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <i className="fa fa-leaf"></i>
        <span>MyStore</span>
      </div>

      <div className="cart">
        <CartList />
      </div>
    </header>
  );
}

export default Header;
