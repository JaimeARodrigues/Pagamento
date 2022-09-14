import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <>
      <footer className="footer-style-wrap-area pt-100">
        <div className="container">
          <div className="footer-widget-style-wrap with-white-color">
            <Link href="/">
              <a className="d-inline-block logo">
                <img src="/images/white-logo.png" alt="logo" />
              </a>
            </Link>

            <ul className="quick-links">
              <li>
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>
              <li>
                <Link href="/about-us">
                  <a>About Us</a>
                </Link>
              </li>
              <li>
                <Link href="/case-studies">
                  <a>Case Studies</a>
                </Link>
              </li>
              <li>
                <Link href="/blog">
                  <a href="blog.html">Our News</a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a>Contact Us</a>
                </Link>
              </li>
              <li>
                <Link href="/pricing">
                  <a>Pricing</a>
                </Link>
              </li>
            </ul>

            <ul className="social-links">
              <li>
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="ri-facebook-fill"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.twitter.com/"
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
                  <i className="ri-linkedin-fill"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="ri-instagram-line"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.pinterest.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="ri-pinterest-line"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.skype.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="ri-skype-line"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="ri-youtube-line"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.github.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="ri-github-fill"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.gitlab.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="ri-gitlab-fill"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="copyright-area with-white-color">
          <div className="container">
            <p>
              &copy; <strong>Lofi</strong> is Proudly Owned by{' '}
              <a href="https://envytheme.com/" target="_blank" rel="noreferrer">
                EnvyTheme
              </a>
            </p>
          </div>
        </div>

        <div className="footer-style-wrap-shape">
          <img src="/images/ico-landing-home/global-shape.png" alt="image" />
        </div>
      </footer>
    </>
  )
}

export default Footer
