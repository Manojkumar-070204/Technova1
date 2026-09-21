function OrderConfirmation({
  order,
  onContinueShopping,
  onClose
}) {
  return (
    <div className="order-confirmation-overlay">
      <div className="order-confirmation-popup">

        <button
          className="confirmation-close"
          onClick={onClose}
          aria-label="Close order confirmation"
        >
          ×
        </button>

        <div className="confirmation-container">

          <div className="confirmation-icon">
            ✓
          </div>

          <p className="confirmation-label">
            ORDER PLACED SUCCESSFULLY
          </p>

          <h1>
            Thank You for Your Order!
          </h1>

          <p className="confirmation-message">
            Your TechNova order has been successfully placed.
            We will process your order shortly.
          </p>

          <div className="order-id">
            <span>Order ID</span>
            <strong>#{order.id}</strong>
          </div>

          <div className="confirmation-content">

            <div className="confirmation-section">
              <h2>Delivery Details</h2>

              <p>
                <strong>
                  {order.customer.name}
                </strong>
              </p>

              <p>
                {order.customer.email}
              </p>

              <p>
                {order.customer.phone}
              </p>

              <p>
                {order.customer.address},{" "}
                {order.customer.city} -{" "}
                {order.customer.pincode}
              </p>
            </div>

            <div className="confirmation-section">
              <h2>Order Summary</h2>

              {order.items.map((item) => (
                <div
                  className="confirmation-item"
                  key={item.name}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                  />

                  <div>
                    <h3>
                      {item.name}
                    </h3>

                    <p>
                      Quantity: {item.quantity}
                    </p>
                  </div>

                  <strong>
                    ₹{(
                      parseInt(
                        item.price.replace(/[₹,]/g, "")
                      ) * item.quantity
                    ).toLocaleString("en-IN")}
                  </strong>
                </div>
              ))}

              <div className="confirmation-total">
                <span>
                  Total Amount
                </span>

                <strong>
                  ₹{order.total.toLocaleString("en-IN")}
                </strong>
              </div>

              <div className="confirmation-payment">
                <span>
                  Payment Method
                </span>

                <strong>
                  {order.paymentMethod}
                </strong>
              </div>
            </div>

          </div>

          <button
            className="continue-shopping-btn"
            onClick={onContinueShopping}
          >
            Continue Shopping
          </button>

        </div>

      </div>
    </div>
  )
}

export default OrderConfirmation