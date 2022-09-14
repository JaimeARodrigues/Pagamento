import React from 'react'
import Link from 'next/link'

const HeroBanner = () => {
  return (
    <>
      <div className="cryptocurrency-banner-area">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div 
                className="cryptocurrency-banner-content"
                data-aos="fade-left"
                data-aos-duration="1200"
                data-aos-once="true"
              >
                <h1>Launch Your Own Cryptocurrency</h1>
                <p>
                  Donec sollicitudin molestie malesuada. Vivamus magna justo
                  lacinia eget consectetur sed convallis at tellus. Donec rutrum
                  congue leo eget malesuada.
                </p>

                <ul className="banner-btn-list">
                  <li>
                    <Link href="/contact">
                      <a className="default-btn style-two">
                        <span className="ri-arrow-right-s-line"></span>Learn
                        More
                      </a>
                    </Link>
                  </li>
                  <li>
                    <a href="#" className="white-paper-btn">
                      White Paper
                    </a>
                  </li>
                </ul>

                <div className="banner-community">
                  <span>Join Our Community</span>
                  <ul>
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
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div 
                className="cryptocurrency-banner-image"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-once="true"
              >
                <img
                  src="/images/crypto-startup/banner/banner.png"
                  alt="image"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="cryptocurrency-banner-shape-1">
          <img
            src="/images/crypto-startup/banner/shape-1.png"
            alt="image"
          />
        </div>
        <div className="cryptocurrency-banner-shape-2">
          <img
            src="/images/crypto-startup/banner/shape-2.png"
            alt="image"
          />
        </div>
        <div className="cryptocurrency-banner-shape-3">
          <img
            src="/images/crypto-startup/banner/shape-3.png"
            alt="image"
          />
        </div>
      </div>
    </>
  )
}

export default HeroBanner
