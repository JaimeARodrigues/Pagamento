import React from 'react'
import Link from 'next/link'

const HeroBanner = () => {
  return (
    <>
      <div className="banner-area">
        <div className="container">
          <div className="banner-content">
            <span className="sub-title">AWARD WINNING COMPANY</span>
            <h1>Make Your Business More Money With Team Of Experts</h1>

            <Link href="/contact">
              <a className="default-btn style-two">
                <span className="ri-arrow-right-s-line"></span>Get Started Now
              </a>
            </Link>

            <div 
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-once="true"
            >
              <img src="/images/banner.png" alt="banner-image" />
            </div>
          </div>
        </div>

        {/* Shape Images */}
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
        <div className="shape9">
          <img src="/images/shape/shape8.png" alt="image" />
        </div>
      </div>
    </>
  )
}

export default HeroBanner
