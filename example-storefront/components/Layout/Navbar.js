import React, { useState } from 'react'
import Link from '@/utils/ActiveLink'

const Navbar = () => {
  const [menu, setMenu] = React.useState(true)
  const toggleNavbar = () => {
    setMenu(!menu)
  }
  React.useEffect(() => {
    let elementId = document.getElementById('navbar')
    document.addEventListener('scroll', () => {
      if (window.scrollY > 170) {
        elementId.classList.add('is-sticky')
      } else {
        elementId.classList.remove('is-sticky')
      }
    })
  })

  const classOne = menu
    ? 'collapse navbar-collapse mean-menu'
    : 'collapse navbar-collapse show'
  const classTwo = menu
    ? 'navbar-toggler navbar-toggler-right collapsed'
    : 'navbar-toggler navbar-toggler-right'

  return (
    <>
      <header className="header-area">
        <div className="top-header-area">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-7 col-md-6">
                <div className="top-header-start d-flex align-items-center">
                  <Link href="/">
                    <a className="logo d-inline-block">
                      <img src="/images/logo.png" alt="image" />
                    </a>
                  </Link>
                  <form className="search-box">
                    <label>
                      <i className="ri-search-line"></i>
                    </label>
                    <input
                      type="text"
                      className="input-search"
                      placeholder="Search here..."
                    />
                  </form>
                </div>
              </div>
              <div className="col-lg-5 col-md-6">
                <div className="top-header-end">
                  <div className="d-flex align-items-center justify-content-end">
                    <div className="number">
                      <a
                        href="tel:+1-485-456-0102"
                        className="d-flex align-items-center"
                      >
                        <i className="ri-phone-line"></i> +1-485-456-0102
                      </a>
                    </div>
                    <ul className="social-links">
                      <li>
                        <a
                          href="https://www.facebook.com/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i className="ri-facebook-box-fill"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://twitter.com/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i className="ri-twitter-fill"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.linkedin.com/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i className="ri-linkedin-box-fill"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.instagram.com/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i className="ri-instagram-fill"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="navbar" className="navbar-area">
          <nav className="navbar navbar-expand-md navbar-light">
            <div className="container">
              <Link href="/">
                <a className="navbar-brand d-lg-none">
                  <img src="/images/logo.png" alt="Site logo" />
                </a>
              </Link>

              <button
                onClick={toggleNavbar}
                className={classTwo}
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="icon-bar top-bar"></span>
                <span className="icon-bar middle-bar"></span>
                <span className="icon-bar bottom-bar"></span>
              </button>

              <div className={classOne} id="navbarSupportedContent">
                <ul className="navbar-nav me-auto">
                  <li className="nav-item">
                    <Link href="#">
                      <a className="dropdown-toggle nav-link">
                        Home
                      </a>
                    </Link>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link href="/" activeClassName="active">
                          <a className="nav-link">Technology Solutions</a>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link href="/index-2" activeClassName="active">
                          <a className="nav-link">Digital Marketing</a>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link href="/index-3" activeClassName="active">
                          <a className="nav-link">Business Consulting</a>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link href="/index-4" activeClassName="active">
                          <a className="nav-link">Cybersecurity Services</a>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link href="/index-5" activeClassName="active">
                          <a className="nav-link">Crypto Startup</a>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link href="/index-6" activeClassName="active">
                          <a className="nav-link">ICO Landing</a>
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <Link href="/about-us" activeClassName="active">
                      <a className="nav-link">About Us</a>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <a href="#" className="dropdown-toggle nav-link">
                      Services
                    </a>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link href="/services" activeClassName="active">
                          <a className="nav-link">Services</a>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href="/service-details" activeClassName="active">
                          <a className="nav-link">Services Details</a>
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <a href="#" className="dropdown-toggle nav-link">
                      Case Studies
                    </a>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link href="/case-studies" activeClassName="active">
                          <a className="nav-link">Case Studies</a>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href="/case-studies-2" activeClassName="active">
                          <a className="nav-link">Case Studies #2</a>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href="/case-studies-3" activeClassName="active">
                          <a className="nav-link">Case Studies #3</a>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href="/case-studies-details" activeClassName="active">
                          <a className="nav-link">Case Studies Details</a>
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <Link href="/team" activeClassName="active">
                      <a className="nav-link">Team</a>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link href="/pricing" activeClassName="active">
                      <a className="nav-link">Pricing</a>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link href="/blog" activeClassName="active">
                      <a className="nav-link">Blog</a>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link href="/contact" activeClassName="active">
                      <a className="nav-link">Contact</a>
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="others-option">
                <Link href="/contact">
                  <a className="default-btn style-two">
                    <span className="ri-edit-2-line"></span>Get A Free Quote
                  </a>
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  )
}

export default Navbar
