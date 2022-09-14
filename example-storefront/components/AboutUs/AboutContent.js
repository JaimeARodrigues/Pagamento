import React from 'react'

const AboutContent = () => {
  return (
    <>
      <div className="about-area bg-gradient-image ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="about-image">
                <img src="/images/about.jpg" alt="image" />
                <div className="shape5">
                  <img src="/images/shape/shape5.png" alt="image" />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="about-content">
                <span className="sub-title">ABOUT US</span>
                <h2>We Are Award Winning Digital Marketing Company</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <ul className="features-list">
                  <li>
                    <div className="d-flex align-items-center">
                      <div className="icon">
                        <img src="/images/icon/icon4.png" alt="image" />
                      </div>
                      <span>Brand Strategy</span>
                    </div>
                  </li>
                  <li>
                    <div className="d-flex align-items-center">
                      <div className="icon">
                        <img src="/images/icon/icon5.png" alt="image" />
                      </div>
                      <span>Expert Team</span>
                    </div>
                  </li>
                  <li>
                    <div className="d-flex align-items-center">
                      <div className="icon">
                        <img src="/images/icon/icon6.png" alt="image" />
                      </div>
                      <span>Fast Delivery</span>
                    </div>
                  </li>
                  <li>
                    <div className="d-flex align-items-center">
                      <div className="icon">
                        <img src="/images/icon/icon7.png" alt="image" />
                      </div>
                      <span>Ongoing Report</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="awards-list">
            <h4>AWARDS AND INDUSTRY RECOGNITION</h4>
            <div className="row justify-content-center">
              <div className="col-lg-2 col-4 col-sm-4 col-md-3">
                <div className="awards-box">
                  <img src="/images/awards/awards1.png" alt="image" />
                </div>
              </div>
              <div className="col-lg-2 col-4 col-sm-4 col-md-3">
                <div className="awards-box">
                  <img src="/images/awards/awards2.png" alt="image" />
                </div>
              </div>
              <div className="col-lg-2 col-4 col-sm-4 col-md-3">
                <div className="awards-box">
                  <img src="/images/awards/awards3.png" alt="image" />
                </div>
              </div>
              <div className="col-lg-2 col-4 col-sm-4 col-md-3">
                <div className="awards-box">
                  <img src="/images/awards/awards4.png" alt="image" />
                </div>
              </div>
              <div className="col-lg-2 col-4 col-sm-4 col-md-3">
                <div className="awards-box">
                  <img src="/images/awards/awards5.png" alt="image" />
                </div>
              </div>
              <div className="col-lg-2 col-4 col-sm-4 col-md-3">
                <div className="awards-box">
                  <img src="/images/awards/awards6.png" alt="image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutContent
