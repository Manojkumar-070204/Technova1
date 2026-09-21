import { useState } from "react"

function ProductDetails({
  product,
  cart,
  setCart,
  wishlist,
  setWishlist,
  onBack
}) {
  const [quantity, setQuantity] = useState(1)

  const inCart = cart.some(
    (item) => item.name === product.name
  )

  const inWishlist = wishlist.some(
    (item) => item.name === product.name
  )

  const addToCart = () => {
    const existingProduct = cart.find(
      (item) => item.name === product.name
    )

    if (existingProduct) {
      setCart(
        cart.map((item) =>
          item.name === product.name
            ? {
                ...item,
                quantity: item.quantity + quantity
              }
            : item
        )
      )
    } else {
      setCart([
        ...cart,
        {
          ...product,
          quantity
        }
      ])
    }
  }

  const toggleWishlist = () => {
    if (inWishlist) {
      setWishlist(
        wishlist.filter(
          (item) => item.name !== product.name
        )
      )
    } else {
      setWishlist([...wishlist, product])
    }
  }

  return (
    <section className="product-details">
      <div className="product-details-container">

        <button
          className="back-products-btn"
          onClick={onBack}
        >
          ← Back to Products
        </button>

        <div className="product-details-content">

          <div className="product-details-image">
            <img
              src={product.image}
              alt={product.name}
            />
          </div>

          <div className="product-details-info">

            <p className="details-category">
              {product.category}
            </p>

            <h1>{product.name}</h1>

            <div className="details-rating">
              ★ {product.rating}
              <span> | Customer Rating</span>
            </div>

            <div className="details-price">
              <strong>{product.price}</strong>
              <del>{product.oldPrice}</del>
            </div>

            <p className="details-description">
              Experience reliable performance and modern
              technology with the {product.name}. Designed for
              everyday productivity, entertainment and a
              seamless digital experience.
            </p>

            <div className="details-actions">

              <div className="details-quantity">
                <button
                  onClick={() =>
                    setQuantity(
                      Math.max(1, quantity - 1)
                    )
                  }
                >
                  −
                </button>

                <span>{quantity}</span>

                <button
                  onClick={() =>
                    setQuantity(quantity + 1)
                  }
                >
                  +
                </button>
              </div>

              <button
                className="details-cart-btn"
                onClick={addToCart}
              >
                {inCart ? "Add More to Cart" : "Add to Cart"}
              </button>

            </div>

            <button
              className={`details-wishlist-btn ${
                inWishlist ? "details-wishlist-active" : ""
              }`}
              onClick={toggleWishlist}
            >
              {inWishlist
                ? "♥ Remove from Wishlist"
                : "♡ Add to Wishlist"}
            </button>

            <div className="product-features">

              <div>
                <strong>✓</strong>
                <span>Secure Payment</span>
              </div>

              <div>
                <strong>✓</strong>
                <span>Fast Delivery</span>
              </div>

              <div>
                <strong>✓</strong>
                <span>Quality Assured</span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  )
}

export default ProductDetails