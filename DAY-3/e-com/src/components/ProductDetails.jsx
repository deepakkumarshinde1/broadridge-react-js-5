import { useProductContext } from "../context/products.context";

function ProductDetails() {
  let { singleProductDetails } = useProductContext();
  return (
    <>
      {singleProductDetails && (
        <aside className="product-details">
          <div className="details-img">
            <img
              src={singleProductDetails.image}
              alt={singleProductDetails.title}
            />
          </div>

          <div className="details-content">
            <h2>{singleProductDetails.title}</h2>
            <p>{singleProductDetails.description}</p>

            <button className="buy-btn">
              <i className="fa fa-bolt"></i> Buy Now
            </button>
          </div>
        </aside>
      )}
    </>
  );
}

export default ProductDetails;
