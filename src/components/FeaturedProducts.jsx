import { useEffect } from "react"

function FeaturedProducts({
  cart,
  setCart,
  wishlist,
  setWishlist,
  searchTerm,
  onProductClick
}) {
  const products = [
    {
      name: "NovaBook Pro 14",
      category: "Laptop",
      price: "₹74,999",
      oldPrice: "₹82,999",
      rating: "4.8",
      image:
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "iPhone 14",
      category: "Smartphone",
      price: "₹89,999",
      oldPrice: "₹99,999",
      rating: "4.7",
      image:
        "https://shop.computeroverhauls.com/cdn/shop/files/co-cine-cat-iphones_1100x.png?v=17413083887969051134"
    },
    {
      name: "SoundMax Pro",
      category: "Headphones",
      price: "₹8,499",
      oldPrice: "₹10,999",
      rating: "4.6",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "NovaWatch S2",
      category: "Smart Watch",
      price: "₹5,999",
      oldPrice: "₹7,499",
      rating: "4.5",
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80"
    }
  ]

  const addToCart = (product) => {
    const exists = cart.some(
      (item) => item.name === product.name
    )

    if (!exists) {
      setCart([
        ...cart,
        {
          ...product,
          quantity: 1
        }
      ])
    }
  }

  const toggleWishlist = (product) => {
    const exists = wishlist.some(
      (item) => item.name === product.name
    )

    if (exists) {
      setWishlist(
        wishlist.filter(
          (item) => item.name !== product.name
        )
      )
    } else {
      setWishlist([...wishlist, product])
    }
  }

  const search = searchTerm.toLowerCase().trim()

  const filteredProducts = products.filter((product) => {
    if (search === "") {
      return true
    }

    return (
      product.name.toLowerCase().includes(search) ||
      product.category.toLowerCase().includes(search)
    )
  })

 useEffect(() => {
  if (searchTerm.trim() && filteredProducts.length > 0) {
    const timer = setTimeout(() => {
      document
        .querySelector(".search-result-info")
        ?.scrollIntoView({
          behavior: "smooth",
          block: "center"
        })
    }, 100)

    return () => clearTimeout(timer)
  }
}, [searchTerm, filteredProducts.length])

  return (
    <section
      className="featured-products"
      id="products"
    >
      <div className="section-heading">
        <p>OUR COLLECTION</p>

        <h2>Featured Products</h2>

        <span>
          Explore technology selected for modern lifestyles.
        </span>
      </div>

      {searchTerm.trim() && (
        <div className="search-result-info">
          <span>
            Search results for:
          </span>

          <strong>
            "{searchTerm}"
          </strong>

          <small>
            {filteredProducts.length} product
            {filteredProducts.length !== 1
              ? "s"
              : ""}{" "}
            found
          </small>
        </div>
      )}

      <div className="product-grid">
        {filteredProducts.length === 0 ? (
          <div className="no-products">
            <h3>No products found</h3>

            <p>
              Try searching for another product or category.
            </p>
          </div>
        ) : (
          filteredProducts.map((product) => {
            const inCart = cart.some(
              (item) => item.name === product.name
            )

            const inWishlist = wishlist.some(
              (item) => item.name === product.name
            )

            return (
              <div
              className="product-card"
               key={product.name}
               onClick={() => onProductClick(product)}
               >
                <div className="product-image">
                  <img
                    src={product.image}
                    alt={product.name}
                  />

                  <button
                    className={`wishlist-icon ${
                      inWishlist
                        ? "wishlist-active"
                        : ""
                    }`}
                    onClick={(e) => {
                   e.stopPropagation()
                       toggleWishlist(product)
                    }}
                    >
                    {inWishlist ? "♥" : "♡"}
                  </button>
                </div>

                <div className="product-info">
                  <p className="product-category">
                    {product.category}
                  </p>

                  <h3>{product.name}</h3>

                  <div className="product-rating">
                    ★ {product.rating}
                  </div>

                  <div className="product-price">
                    <strong>
                      {product.price}
                    </strong>

                    <del>
                      {product.oldPrice}
                    </del>
                  </div>

                  <button
                   className="add-product-btn"
                     onClick={(e) => {
                     e.stopPropagation()
                    addToCart(product)
                    }}
                    >
                    {inCart
                      ? "Added ✓"
                      : "Add to Cart"}
                  </button>
                </div>
              </div>
            )
          })
        )}
      </div>
    </section>
  )
}

export default FeaturedProducts