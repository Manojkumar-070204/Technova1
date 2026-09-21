function Deals() {
  const deals = [
    {
      title: "Laptop Deals",
      offer: "Up to 25% Off",
      text: "Upgrade your work and entertainment setup.",
      image:
        "https://images.unsplash.com/photo-1593642702749-b7d2a804fbcf?auto=format&fit=crop&w=1200&q=85"
    },
    {
      title: "Smartphone Deals",
      offer: "Up to 20% Off",
      text: "Discover powerful smartphones at special prices.",
      image:
        "https://images.unsplash.com/photo-1556656793-08538906a9f8?auto=format&fit=crop&w=900&q=80"
    },
    {
      title: "Audio Deals",
      offer: "Up to 30% Off",
      text: "Enjoy immersive sound with premium audio devices.",
      image:
        "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=900&q=80"
    }
  ]

   const goToProducts = () => {
    document
      .getElementById("products")
      ?.scrollIntoView({
        behavior: "smooth"
      })
  }

  return (
    <section className="deals" id="deals">
      <div className="section-heading">
        <p>SPECIAL OFFERS</p>

        <h2>Deals You Don't Want to Miss</h2>

        <span>
          Get more technology for less with our latest offers.
        </span>
      </div>

      <div className="deals-grid">
        {deals.map((deal) => (
          <div className="deal-card" key={deal.title}>
            <img
              src={deal.image}
              alt={deal.title}
            />

            <div className="deal-content">
              <p>{deal.offer}</p>

              <h3>{deal.title}</h3>

              <span>{deal.text}</span>

              <button onClick={goToProducts}>
                Shop Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Deals