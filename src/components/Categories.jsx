function Categories() {
  const categories = [
    {
      name: "Laptops",
      icon: "💻",
      text: "Powerful laptops for work and gaming"
    },
    {
      name: "Smartphones",
      icon: "📱",
      text: "Latest smartphones and accessories"
    },
    {
      name: "Headphones",
      icon: "🎧",
      text: "Immersive sound for every moment"
    },
    {
      name: "Smart Watches",
      icon: "⌚",
      text: "Smart technology on your wrist"
    },
    {
      name: "Gaming",
      icon: "🎮",
      text: "Level up your gaming experience"
    },
    {
      name: "Accessories",
      icon: "⌨️",
      text: "Essential tech accessories"
    }
  ]

  return (
    <section className="categories" id="categories">
      <div className="section-heading">
        <p>EXPLORE TECHNOLOGY</p>
        <h2>Shop by Category</h2>
        <span>
          Find the right technology for your everyday needs.
        </span>
      </div>

      <div className="category-grid">
        {categories.map((category) => (
          <div className="category-card" key={category.name}>
            <div className="category-icon">
              {category.icon}
            </div>

            <h3>{category.name}</h3>

            <p>{category.text}</p>

            <button>Explore →</button>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Categories