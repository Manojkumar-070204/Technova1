import { useEffect, useState } from "react"

function Navbar({
  cartCount,
  wishlistCount,
  openCart,
  openWishlist,
  openAccount,
  searchOpen,
  setSearchOpen,
  searchTerm,
  setSearchTerm,
  closeCart,
  closeWishlist
}) {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeSearch = () => {
    setSearchOpen(false)
    setSearchTerm("")
  }

  const closeMenu = () => {
    setMenuOpen(false)
  }

  const handleSearchClick = () => {
    closeCart()
    closeWishlist()
    setMenuOpen(false)

    if (searchOpen) {
      setSearchOpen(false)
      setSearchTerm("")
    } else {
      setSearchOpen(true)
    }
  }

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      setSearchOpen(false)

      setTimeout(() => {
        document
          .getElementById("products")
          ?.scrollIntoView({
            behavior: "smooth"
          })
      }, 100)
    }
  }

  const handleCart = () => {
    closeSearch()
    setMenuOpen(false)
    openCart()
  }

  const handleWishlist = () => {
    closeSearch()
    setMenuOpen(false)
    openWishlist()
  }

  const handleMenu = () => {
    closeSearch()
    closeCart()
    closeWishlist()
    setMenuOpen(!menuOpen)
  }

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        searchOpen &&
        !e.target.closest(".search-box") &&
        !e.target.closest(".search-btn") &&
        !e.target.closest(".mobile-search-btn")
      ) {
        setSearchOpen(false)
      }
    }

    document.addEventListener("click", handleClickOutside)

    return () => {
      document.removeEventListener("click", handleClickOutside)
    }
  }, [searchOpen, setSearchOpen])

  return (
    <header className="navbar">
      <div className="nav-container">

        <div className="logo">
          Tech<span>Nova</span>
        </div>

        <nav
          className={`nav-links ${
            menuOpen ? "mobile-menu-open" : ""
          }`}
        >

          <a
            href="#home"
            onClick={() => {
              closeSearch()
              closeMenu()
            }}
          >
            Home
          </a>

          <a
            href="#products"
            onClick={() => {
              closeSearch()
              closeMenu()
            }}
          >
            Products
          </a>

          <a
            href="#categories"
            onClick={() => {
              closeSearch()
              closeMenu()
            }}
          >
            Categories
          </a>

          <a
            href="#deals"
            onClick={() => {
              closeSearch()
              closeMenu()
            }}
          >
            Deals
          </a>

          <a
            href="#about"
            onClick={() => {
              closeSearch()
              closeMenu()
            }}
          >
            About
          </a>

          <div className="mobile-nav-actions">

            <button
              className="mobile-action-btn mobile-search-btn"
              onClick={handleSearchClick}
            >
              ⌕ Search
            </button>

            <button
              className="mobile-action-btn"
              onClick={handleWishlist}
            >
              ♡ Wishlist
              <span>{wishlistCount}</span>
            </button>

            <button
              className="mobile-action-btn"
              onClick={handleCart}
            >
              🛒 Cart
              <span>{cartCount}</span>
            </button>

            <button
              className="mobile-action-btn"
              onClick={() => {
                closeMenu()
                openAccount()
              }}
            >
              Account
            </button>

          </div>
        </nav>

        <div className="nav-actions">

          <button
            className="search-btn"
            onClick={handleSearchClick}
            aria-label="Search"
          >
            ⌕
          </button>

          <button
            className="wishlist-btn"
            onClick={handleWishlist}
          >
            ♡
            <span>{wishlistCount}</span>
          </button>

          <button
            className="cart-btn"
            onClick={handleCart}
          >
            🛒
            <span>{cartCount}</span>
          </button>

          <button
            className="account-btn"
            onClick={openAccount}
          >
            Account
          </button>

        </div>

        {searchOpen && (
          <div className="search-box">

            <input
              type="text"
              placeholder="Search products or categories..."
              value={searchTerm}
              onChange={(e) =>
                setSearchTerm(e.target.value)
              }
              onKeyDown={handleSearch}
              autoFocus
            />

            {searchTerm && (
              <button
                className="search-clear"
                onClick={() => setSearchTerm("")}
              >
                ×
              </button>
            )}

          </div>
        )}

        <button
          className={`menu-btn ${
            menuOpen ? "menu-active" : ""
          }`}
          onClick={handleMenu}
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? "×" : "☰"}
        </button>

      </div>
    </header>
  )
}

export default Navbar