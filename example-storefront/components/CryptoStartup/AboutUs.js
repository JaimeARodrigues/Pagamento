import React from 'react'
import Link from 'next/link'

const AboutUs = () => {
  return (
    <>
      <div className="about-area ptb-100 overflow-hidden">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div 
                className="cryptocurrency-about-image"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-once="true"
              >
                <img src="/images/crypto-startup/about.png" alt="image" />
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div 
                className="cryptocurrency-about-content"
                data-aos="fade-left"
                data-aos-duration="1200"
                data-aos-once="true"
              >
                <span className="sub-title">About Crypto</span>
                <h2>
                  New Investors Can Buy The Initial Currency Offer To Receive A
                  Cryptocurrency Token
                </h2>
                <p>
                  Donec sollicitudin molestie malesuada. Vivamus magna justo
                  lacinia eget consectetur sed convallis at tellus. Donec rutrum
                  congue leo eget malesuada. Quisque velit nisi pretium ut
                  lacinia in elementum.
                </p>
                <ul className="about-list">
                  <li>
                    <i className="ri-check-fill"></i> Vivamus magna justo,
                    lacinia eget consectetur sed, convallis at tellus.
                  </li>
                  <li>
                    <i className="ri-check-fill"></i> Quisque velit nisi,
                    pretium ut lacinia in, elementum id enim.{' '}
                  </li>
                </ul>
                <div className="about-btn">
                  <Link href="/contact">
                    <a className="default-btn style-two">
                      <span className="ri-arrow-right-s-line"></span>Learn More
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutUs
