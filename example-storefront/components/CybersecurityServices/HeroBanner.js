import React from 'react'
import Link from 'next/link'

const HeroBanner = () => {
  return (
    <>
      <div className="cybersecurity-banner-area">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div 
                className="cybersecurity-banner-content" 
                data-aos="fade-left"
                data-aos-duration="1200"
                data-aos-once="true"
              >
                <span className="sub-title">World Class Security</span>
                <h1>Security Your Data From Cyber Attacks</h1>
                <p>
                  Donec sollicitudin molestie malesuada. Vivamus magna justo
                  lacinia eget consectetur sed convallis at tellus. Donec rutrum
                  congue leo eget malesuada.
                </p>
                <Link href="/contact">
                  <a className="default-btn style-two">
                    <span className="ri-arrow-right-s-line"></span>Learn More
                  </a>
                </Link>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div 
                className="cybersecurity-banner-image" 
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-once="true"
              >
                <img
                  src="/images/cybersecurity-services/banner/banner.png"
                  alt="image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HeroBanner
