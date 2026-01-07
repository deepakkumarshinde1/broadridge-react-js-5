import { useProductContext } from "../context/products.context";

function Products() {
  let { productList, setSingleProductDetails, addToCart } = useProductContext();
  return (
    <section className="product-list">
      {productList.map((product) => (
        <article
          className="product-card"
          key={product.id}
          title={product.title}
          onMouseOver={() => setSingleProductDetails(product)}
        >
          <div className="img-box">
            <img src={product.image} alt={product.title} />
          </div>
          <h3>{product.title.substring(0, 25)}...</h3>
          <p className="price">₹{product.price}</p>
          <button className="add-btn" onClick={() => addToCart(product)}>
            <i className="fa fa-plus"></i> Add
          </button>
        </article>
      ))}
    </section>
  );
}

export default Products;
