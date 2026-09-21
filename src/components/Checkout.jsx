import { useState } from "react"

function Checkout({ cart, cartTotal, onBack, onOrderPlaced }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    pincode: ""
  })

  const [paymentMethod, setPaymentMethod] =
    useState("Cash on Delivery")

  const [error, setError] = useState("")

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })

    setError("")
  }

  const placeOrder = (e) => {
    e.preventDefault()

    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.address ||
      !formData.city ||
      !formData.pincode
    ) {
      setError("Please fill in all delivery details.")
      return
    }

    if (
      !formData.email.includes("@") ||
      !formData.email.includes(".")
    ) {
      setError("Please enter a valid email address.")
      return
    }

    if (formData.phone.length < 10) {
      setError("Please enter a valid phone number.")
      return
    }

    if (formData.pincode.length !== 6) {
      setError("Please enter a valid 6-digit pincode.")
      return
    }

    const order = {
      id: "TN" + Date.now(),
      customer: formData,
      items: cart,
      total: cartTotal,
      paymentMethod,
      date: new Date().toLocaleDateString()
    }

    onOrderPlaced(order)
  }

  return (
    <div className="checkout-overlay">

      <div className="checkout-popup">

        <button
          className="checkout-popup-close"
          onClick={onBack}
          aria-label="Close checkout"
        >
          ×
        </button>

        <div className="checkout-container">

          <div className="checkout-heading">
            <p>SECURE CHECKOUT</p>

            <h1>Order Details</h1>

            <span>
              Enter your delivery details and choose a payment method.
            </span>
          </div>

          {error && (
            <div className="checkout-error">
              {error}
            </div>
          )}

          <div className="checkout-content">

            <form
              className="checkout-form"
              onSubmit={placeOrder}
            >

              <div className="checkout-section">

                <h2>Delivery Information</h2>

                <div className="checkout-fields">

                  <div className="checkout-field">
                    <label>Full Name</label>

                    <input
                      type="text"
                      name="name"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="checkout-field">
                    <label>Email Address</label>

                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="checkout-field">
                    <label>Phone Number</label>

                    <input
                      type="tel"
                      name="phone"
                      placeholder="Enter phone number"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="checkout-field">
                    <label>City</label>

                    <input
                      type="text"
                      name="city"
                      placeholder="Enter your city"
                      value={formData.city}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="checkout-field checkout-full">
                    <label>Delivery Address</label>

                    <textarea
                      name="address"
                      placeholder="Enter complete delivery address"
                      value={formData.address}
                      onChange={handleChange}
                    ></textarea>
                  </div>

                  <div className="checkout-field">
                    <label>Pincode</label>

                    <input
                      type="text"
                      name="pincode"
                      placeholder="6-digit pincode"
                      value={formData.pincode}
                      onChange={handleChange}
                    />
                  </div>

                </div>

              </div>

              <div className="checkout-section">

                <h2>Payment Method</h2>

                <div className="payment-options">

                  <label
                    className={
                      paymentMethod === "Cash on Delivery"
                        ? "payment-option payment-active"
                        : "payment-option"
                    }
                  >

                    <input
                      type="radio"
                      name="payment"
                      value="Cash on Delivery"
                      checked={
                        paymentMethod === "Cash on Delivery"
                      }
                      onChange={(e) =>
                        setPaymentMethod(e.target.value)
                      }
                    />

                    <span>
                      <strong>Cash on Delivery</strong>
                      <small>
                        Pay when your order arrives
                      </small>
                    </span>

                  </label>

                  <label
                    className={
                      paymentMethod === "UPI"
                        ? "payment-option payment-active"
                        : "payment-option"
                    }
                  >

                    <input
                      type="radio"
                      name="payment"
                      value="UPI"
                      checked={paymentMethod === "UPI"}
                      onChange={(e) =>
                        setPaymentMethod(e.target.value)
                      }
                    />

                    <span>
                      <strong>UPI Payment</strong>
                      <small>
                        Pay securely using UPI
                      </small>
                    </span>

                  </label>

                  <label
                    className={
                      paymentMethod === "Card"
                        ? "payment-option payment-active"
                        : "payment-option"
                    }
                  >

                    <input
                      type="radio"
                      name="payment"
                      value="Card"
                      checked={paymentMethod === "Card"}
                      onChange={(e) =>
                        setPaymentMethod(e.target.value)
                      }
                    />

                    <span>
                      <strong>Credit / Debit Card</strong>
                      <small>
                        Secure card payment
                      </small>
                    </span>

                  </label>

                </div>

              </div>

              <button
                type="submit"
                className="place-order-btn"
              >
                Place Order · ₹
                {cartTotal.toLocaleString("en-IN")}
              </button>

            </form>

            <div className="checkout-summary">

              <h2>Order Summary</h2>

              <div className="summary-items">

                {cart.map((item) => (

                  <div
                    className="summary-item"
                    key={item.name}
                  >

                    <img
                      src={item.image}
                      alt={item.name}
                    />

                    <div>
                      <h3>{item.name}</h3>

                      <p>
                        Qty: {item.quantity}
                      </p>
                    </div>

                    <strong>
                      ₹
                      {(
                        parseInt(
                          item.price.replace(/[₹,]/g, "")
                        ) * item.quantity
                      ).toLocaleString("en-IN")}
                    </strong>

                  </div>

                ))}

              </div>

              <div className="summary-line">

                <span>Subtotal</span>

                <strong>
                  ₹{cartTotal.toLocaleString("en-IN")}
                </strong>

              </div>

              <div className="summary-line">

                <span>Delivery</span>

                <strong className="free-delivery">
                  FREE
                </strong>

              </div>

              <div className="summary-total">

                <span>Total</span>

                <strong>
                  ₹{cartTotal.toLocaleString("en-IN")}
                </strong>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  )
}

export default Checkout