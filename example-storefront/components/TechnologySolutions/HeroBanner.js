import React from 'react'
import Link from 'next/link'

const HeroBanner = () => {
  return (
    <>
      <div className="main-banner-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 col-md-12">
              <div 
                className="main-banner-content" 
                data-aos="fade-left"
                data-aos-duration="1200"
                data-aos-once="true"
              >
                <span className="sub-title">AWARD WINNING COMPANY</span>
                <h1>Let&apos;s Make Wave Amazing Together</h1>
                <Link href="/contact">
                  <a className="default-btn style-two">
                    <span className="ri-arrow-right-s-line"></span>Get Started
                    Now
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-lg-7 col-md-12">
              <div className="main-banner-image">
                <div 
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-once="true"
                >
                  <img 
                    src="/images/woman.png" 
                    alt="image" 
                  />
                </div>
                <div className="shape">
                  <img src="/images/shape/shape8.png" alt="image" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Shape images */}
        <div className="shape1">
          <img src="/images/shape/shape1.png" alt="image" />
        </div>
        <div className="shape2">
          <img src="/images/shape/shape2.png" alt="image" />
        </div>
        <div className="shape3">
          <img src="/images/shape/shape3.png" alt="image" />
        </div>
        <div className="shape4">
          <img src="/images/shape/shape4.png" alt="image" />
        </div>
      </div>
    </>
  )
}

export default HeroBanner
