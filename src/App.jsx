import { useState } from "react"
import Navbar from "./components/Navbar"
import Categories from "./components/Categories"
import FeaturedProducts from "./components/FeaturedProducts"
import Deals from "./components/Deals"
import About from "./components/About"
import ProductDetails from "./components/ProductDetails"
import Checkout from "./components/Checkout"
import OrderConfirmation from "./components/OrderConfirmation"
import techBackground from "./assets/tech-background.mp4";

function App() {
  const [cart, setCart] = useState([])
  const [cartOpen, setCartOpen] = useState(false)
  const [wishlist, setWishlist] = useState([])
  const [wishlistOpen, setWishlistOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [accountOpen, setAccountOpen] = useState(false)
  const [loggedIn, setLoggedIn] = useState(false)
  const [userEmail, setUserEmail] = useState("")
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [checkoutOpen, setCheckoutOpen] = useState(false)
  const [orderPlaced, setOrderPlaced] = useState(null)

  const increaseQuantity = (name) => {
    setCart(
      cart.map((item) =>
        item.name === name
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    )
  }

  const decreaseQuantity = (name) => {
    setCart(
      cart
        .map((item) =>
          item.name === name
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    )
  }

  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  )

  const cartTotal = cart.reduce(
    (total, item) =>
      total +
      Number(
        item.price.replace("₹", "").replace(",", "")
      ) * item.quantity,
    0
  )

  const removeFromWishlist = (name) => {
    setWishlist(
      wishlist.filter((item) => item.name !== name)
    )
  }

  const moveToCart = (product) => {
    const alreadyInCart = cart.some(
      (item) => item.name === product.name
    )

    if (!alreadyInCart) {
      setCart([
        ...cart,
        {
          ...product,
          quantity: 1
        }
      ])
    }

    setWishlist(
      wishlist.filter(
        (item) => item.name !== product.name
      )
    )
  }

  return (
    <div className="app">

      <video
        className="site-background-video"
        autoPlay
        muted
        loop
        playsInline
      >
       <source src={techBackground} type="video/mp4" />
      </video>

      <div className="site-video-overlay"></div>

      <div className="site-content">

        <Navbar
          cartCount={cartCount}
          wishlistCount={wishlist.length}

          openCart={() => {
            setCartOpen(!cartOpen)
            setWishlistOpen(false)
            setAccountOpen(false)
            setCheckoutOpen(false)
            setSearchOpen(false)
            setSearchTerm("")
          }}

          openWishlist={() => {
            setWishlistOpen(!wishlistOpen)
            setCartOpen(false)
            setAccountOpen(false)
            setCheckoutOpen(false)
            setSearchOpen(false)
            setSearchTerm("")
          }}

          openAccount={() => {
            setAccountOpen(true)
            setSearchOpen(false)
            setCartOpen(false)
            setWishlistOpen(false)
            setCheckoutOpen(false)
            setSearchTerm("")
          }}

          searchOpen={searchOpen}
          setSearchOpen={setSearchOpen}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}

          closeCart={() => setCartOpen(false)}
          closeWishlist={() => setWishlistOpen(false)}

        
        />

        <main>

          <section id="home" className="hero">

            <div className="hero-content">

              <p className="hero-label">
                NEXT GENERATION TECHNOLOGY
              </p>

              <h1>
                Technology That
                <span> Moves You Forward</span>
              </h1>

              <p className="hero-text">
                Discover powerful laptops, smart devices and the latest
                technology designed for modern life.
              </p>

              <div className="hero-buttons">

                <a
                  href="#products"
                  className="primary-btn"
                >
                  Explore Products
                </a>

                <a
                  href="#deals"
                  className="secondary-btn"
                >
                  View Deals
                </a>

              </div>

            </div>

            <div className="hero-visual">

              <div className="tech-circle"></div>

              <div className="product-showcase">
                LAPTOP
              </div>

            </div>

          </section>

          {selectedProduct ? (

            <ProductDetails
              product={selectedProduct}
              cart={cart}
              setCart={setCart}
              wishlist={wishlist}
              setWishlist={setWishlist}
              onBack={() => setSelectedProduct(null)}
            />

          ) : (

            <>
              <Categories />

              <FeaturedProducts
                cart={cart}
                setCart={setCart}
                wishlist={wishlist}
                setWishlist={setWishlist}
                searchTerm={searchTerm}
                onProductClick={setSelectedProduct}
              />

              <Deals />

              <About />
            </>
          )}

        </main>

        <footer className="technova-footer">

          <div className="footer-container">

            <div className="footer-brand">

              <div className="footer-logo">
                Tech<span>Nova</span>
              </div>

              <p>
                Smart technology for modern lifestyles.
                Discover reliable electronics designed for
                performance, convenience and everyday innovation.
              </p>

              <div className="footer-socials">

                <a href="#" aria-label="Facebook">
                  f
                </a>

                <a href="#" aria-label="Instagram">
                  ◎
                </a>

                <a href="#" aria-label="Twitter">
                  𝕏
                </a>

                <a href="#" aria-label="LinkedIn">
                  in
                </a>

              </div>

            </div>

            <div className="footer-column">

              <h3>Quick Links</h3>

              <a href="#home">Home</a>
              <a href="#products">Products</a>
              <a href="#categories">Categories</a>
              <a href="#deals">Deals</a>
              <a href="#about">About Us</a>

            </div>

            <div className="footer-column">

              <h3>Customer Support</h3>

              <a href="#products">Product Support</a>
              <a href="#deals">Offers & Deals</a>
              <a href="#">Shipping Information</a>
              <a href="#">Returns & Refunds</a>
              <a href="#">Privacy Policy</a>

            </div>

            <div className="footer-column footer-contact">

              <h3>Contact Us</h3>

              <p>📍 Bengaluru, Karnataka</p>
              <p>📞 +91 98765 43210</p>
              <p>✉ support@technova.com</p>

              <div className="footer-newsletter">

                <h4>Stay Updated</h4>

                <div className="newsletter-form">

                  <input
                    type="email"
                    placeholder="Your email address"
                  />

                  <button type="button">
                    Subscribe
                  </button>

                </div>

              </div>

            </div>

          </div>

          <div className="footer-bottom">

            <p>
              © 2026 TechNova. All rights reserved.
            </p>

            <div>
              <span>Secure Payments</span>
              <span>Fast Delivery</span>
              <span>Trusted Technology</span>
            </div>

          </div>

        </footer>

        {checkoutOpen && !orderPlaced && (

          <Checkout
            cart={cart}
            cartTotal={cartTotal}

            onBack={() => {
              setCheckoutOpen(false)
            }}

            onOrderPlaced={(order) => {
              setOrderPlaced(order)
              setCheckoutOpen(false)
              setCart([])
            }}
          />

        )}

      {orderPlaced && (
  <OrderConfirmation
    order={orderPlaced}
    onContinueShopping={() => {
      setOrderPlaced(null)

      setTimeout(() => {
        document
          .getElementById("products")
          ?.scrollIntoView({
            behavior: "smooth"
          })
      }, 100)
    }}
    onClose={() => {
      setOrderPlaced(null)
    }}
  />
)}

        {cartOpen && (

          <div className="cart-overlay">

            <div className="cart-popup">

              <div className="cart-header">

                <h2>Your Cart</h2>

                <button
                  className="cart-close"
                  onClick={() => setCartOpen(false)}
                >
                  ×
                </button>

              </div>

              {cart.length === 0 ? (

                <div className="empty-cart">
                  <p>Your cart is empty.</p>
                </div>

              ) : (

                <>

                  <div className="cart-items">

                    {cart.map((product) => (

                      <div
                        className="cart-item"
                        key={product.name}
                      >

                        <img
                          src={product.image}
                          alt={product.name}
                        />

                        <div className="cart-item-info">

                          <h3>{product.name}</h3>

                          <p>{product.price}</p>

                          <div className="quantity-controls">

                            <button
                              onClick={() =>
                                decreaseQuantity(product.name)
                              }
                            >
                              −
                            </button>

                            <span>
                              {product.quantity}
                            </span>

                            <button
                              onClick={() =>
                                increaseQuantity(product.name)
                              }
                            >
                              +
                            </button>

                          </div>

                        </div>

                      </div>

                    ))}

                  </div>

                  <div className="cart-total">

                    <span>Total</span>

                    <strong>
                      ₹{cartTotal.toLocaleString("en-IN")}
                    </strong>

                  </div>

                  <button
                    className="checkout-btn"
                    onClick={() => {
                      setCartOpen(false)
                      setWishlistOpen(false)
                      setAccountOpen(false)
                      setCheckoutOpen(true)
                    }}
                  >
                    Checkout
                  </button>

                </>

              )}

            </div>

          </div>

        )}

        {wishlistOpen && (

          <div className="wishlist-overlay">

            <div className="wishlist-popup">

              <div className="wishlist-header">

                <h2>Wishlist</h2>

                <button className="wishlist-close"
                  onClick={() => setWishlistOpen(false)}
                >
                  ×
                </button>

              </div>

              {wishlist.length === 0 ? (

                <div className="empty-wishlist">
                  <p>Your wishlist is empty.</p>
                </div>

              ) : (

                <div className="wishlist-items">

                  {wishlist.map((product) => (

                    <div
                      className="wishlist-item"
                      key={product.name}
                    >

                      <img
                        src={product.image}
                        alt={product.name}
                      />

                      <div className="wishlist-item-info">

                        <h3>{product.name}</h3>

                        <p>{product.price}</p>

                        <div className="wishlist-actions">

                          <button
                            className="remove-wishlist"
                            onClick={() =>
                              removeFromWishlist(product.name)
                            }
                          >
                            Remove
                          </button>

                          <button
                            className="move-cart"
                            onClick={() =>
                              moveToCart(product)
                            }
                          >
                            Move to Cart
                          </button>

                        </div>

                      </div>

                    </div>

                  ))}

                </div>

              )}

            </div>

          </div>

        )}

        {accountOpen && (

          <div className="account-overlay">

            <div className="account-popup">

              <button
                className="account-close"
                onClick={() => setAccountOpen(false)}
              >
                ×
              </button>

              {!loggedIn ? (

                <>

                  <div className="account-title">

                    <p>WELCOME TO TECHNOVA</p>

                    <h2>
                      Login to Your Account
                    </h2>

                    <span>
                      Access your wishlist, orders and personalized experience.
                    </span>

                  </div>

                  <form
                    onSubmit={(e) => {
                      e.preventDefault()

                      const email = e.target.email.value
                      const password = e.target.password.value

                      if (
                        email.includes("@") &&
                        email.includes(".") &&
                        password.length >= 6
                      ) {
                        setUserEmail(email)
                        setLoggedIn(true)
                      }
                    }}
                  >

                    <label>
                      Email Address
                    </label>

                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      required
                    />

                    <label>
                      Password
                    </label>

                    <input
                      type="password"
                      name="password"
                      placeholder="Enter your password"
                      minLength="6"
                      required
                    />

                    <button
                      type="submit"
                      className="login-btn"
                    >
                      Login
                    </button>

                  </form>

                  <p className="account-note">
                    New to TechNova? Create an account to continue.
                  </p>

                </>

              ) : (

                <div className="logged-account">

                  <div className="account-avatar">
                    {userEmail.charAt(0).toUpperCase()}
                  </div>

                  <p>WELCOME BACK</p>

                  <h2>
                    TechNova Account
                  </h2>

                  <span>
                    {userEmail}
                  </span>

                  <div className="account-options">

                    <button>
                      My Orders
                    </button>

                    <button
                      onClick={() => {
                        setAccountOpen(false)
                        setWishlistOpen(true)
                      }}
                    >
                      Wishlist
                    </button>

                    <button>
                      Account Settings
                    </button>

                  </div>

                  <button
                    className="logout-btn"
                    onClick={() => {
                      setLoggedIn(false)
                      setUserEmail("")
                      setAccountOpen(false)
                    }}
                  >
                    Logout
                  </button>

                </div>

              )}

            </div>

          </div>

        )}

      </div>

    </div>
  )
}

export default App