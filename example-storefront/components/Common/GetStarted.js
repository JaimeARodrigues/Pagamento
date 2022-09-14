import React from 'react'
import Link from 'next/link'

const GetStarted = () => {
  return (
    <>
      <div className="get-started-area bg-gradient-image pt-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div 
                className="get-started-image" 
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-once="true"
              >
                <img src="/images/man.png" alt="image" />
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="get-started-content">
                <span className="sub-title">READY TO STARTED?</span>
                <h2>
                  Let&apos;s Talk Something <br /> Amazing Together
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam.
                </p>
                <Link href="/contact">
                  <a className="default-btn style-two">
                    <span className="ri-arrow-right-s-line"></span>Get Started
                    Now
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default GetStarted
