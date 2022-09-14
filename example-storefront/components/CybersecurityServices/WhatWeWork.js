import React from 'react'

const WhatWeWork = () => {
  return (
    <>
      <div className="what-we-work-area pb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div 
                className="what-we-work-image" 
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-once="true"
              >
                <img
                  src="/images/cybersecurity-services/what-we-work/what-we-work.png"
                  alt="image"
                />
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="what-we-work-content">
                <span className="sub-title">What We Work</span>
                <h2>All The Procedures That We Operate For Security</h2>

                <div className="we-work-inner-box">
                  <div className="image">
                    <img
                      src="/images/cybersecurity-services/what-we-work/image-1.png"
                      alt="image"
                    />
                  </div>
                  <h3>Trusted Partner</h3>
                  <p>
                    Nulla quis lorem ut libero malesuada feugiat. Vivamus magna
                    justo lacinia eget consectetur sed convallis at tellus.
                  </p>
                </div>

                <div className="we-work-inner-box with-some-left">
                  <div className="image">
                    <img
                      src="/images/cybersecurity-services/what-we-work/image-2.png"
                      alt="image"
                    />
                  </div>
                  <h3>System Security</h3>
                  <p>
                    Nulla quis lorem ut libero malesuada feugiat. Vivamus magna
                    justo lacinia eget consectetur sed convallis at tellus.
                  </p>
                </div>
                
                <div className="we-work-inner-box">
                  <div className="image">
                    <img
                      src="/images/cybersecurity-services/what-we-work/image-3.png"
                      alt="image"
                    />
                  </div>
                  <h3>Product Security</h3>
                  <p>
                    Nulla quis lorem ut libero malesuada feugiat. Vivamus magna
                    justo lacinia eget consectetur sed convallis at tellus.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="what-we-work-shape">
          <img
            src="/images/cybersecurity-services/what-we-work/shape.png"
            alt="image"
          />
        </div>
      </div>
    </>
  )
}

export default WhatWeWork
