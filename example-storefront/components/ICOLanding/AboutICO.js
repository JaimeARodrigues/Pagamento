import React from 'react'

const AboutICO = () => {
  return (
    <>
      <div className="about-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div 
                className="ico-about-image"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-once="true"
              >
                <img src="/images/ico-landing-home/about.jpg" alt="image" />
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="ico-about-content">
                <span className="sub-title">About ICO</span>
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
                    <i className="ri-check-fill"></i> Donec sollicitudin
                    molestie malesuada.
                  </li>
                  <li>
                    <i className="ri-check-fill"></i> Vivamus magna justo,
                    lacinia eget consectetur sed, convallis at tellus.
                  </li>
                  <li>
                    <i className="ri-check-fill"></i> Donec rutrum congue leo
                    eget malesuada.
                  </li>
                  <li>
                    <i className="ri-check-fill"></i> Quisque velit nisi,
                    pretium ut lacinia in, elementum id enim.{' '}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutICO
