import { useEffect, useState } from "react"

const images = [
  "https://p0.piqsels.com/preview/932/979/739/dark-mode-black-late-night-work-inspiration.jpg",
   "https://shop.computeroverhauls.com/cdn/shop/files/co-cine-cat-iphones_1100x.png?v=17413083887969051134",
   "https://assets.promptbase.com/Images%2F3FbZJz0rg4YRm7U4ifuG%2Fresized%2F1751495473870p_800x800.webp?alt=media&token=f49dfde3-7d80-4e3b-bf54-7e039d7dc4ce",
   "https://img.pikbest.com/ai/illus_our/20230423/350dfe620c44de16e0331d46604028b2.jpg%21bw700",
   "https://assets.promptbase.com/Images%2FTEq620REMomoDARyzoFH%2Fresized%2F1751478717139p_800x800.webp?alt=media&token=cddf65f9-c4fc-4d75-ba27-eee2b9d8dc57"
]

function About() {
  

  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((previous) => {
        let randomImage

        do {
          randomImage = Math.floor(
            Math.random() * images.length
          )
        } while (randomImage === previous)

        return randomImage
      })
    }, 3000)

    return () => clearInterval(interval)
  }, [])



  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="about-video">
        <img
          key={currentImage}
          src={images[currentImage]}
            alt="TechNova electronics"
           />
         </div>

        <div className="about-content">
          <p className="about-label">ABOUT TECHNOVA</p>

          <h2>
            Technology Made
            <span> Simple & Powerful</span>
          </h2>

          <p className="about-text">
            TechNova brings modern electronics together in one
            convenient place. From powerful laptops and
            smartphones to smart devices and premium audio,
            we make technology easier to discover.
          </p>

          <p className="about-text">
            Our goal is to provide reliable products, modern
            technology and a smooth shopping experience for
            every customer.
          </p>

          <div className="about-features">
            <div className="about-feature">
              <strong>01</strong>
              <div>
                <h3>Quality Products</h3>
                <p>Reliable technology for everyday needs.</p>
              </div>
            </div>

            <div className="about-feature">
              <strong>02</strong>
              <div>
                <h3>Modern Technology</h3>
                <p>Discover the latest electronic innovations.</p>
              </div>
            </div>

            <div className="about-feature">
              <strong>03</strong>
              <div>
                <h3>Easy Shopping</h3>
                <p>A simple and convenient shopping experience.</p>
              </div>
            </div>
          </div>

          <button
            className="about-btn"
            onClick={() =>
              document
                .getElementById("products")
                ?.scrollIntoView({
                  behavior: "smooth"
                })
            }
          >
            Explore Products
          </button>
        </div>
      </div>
    </section>
  )
}

export default About