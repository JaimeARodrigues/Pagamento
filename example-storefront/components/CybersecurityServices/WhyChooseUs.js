import React from 'react'

const WhyChooseUs = () => {
  return (
    <>
      <div className="why-choose-us-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="why-choose-us-content">
                <span className="sub-title">Why Choose Us</span>
                <h2>
                  You Can Choose Us By Looking At Our Different Work Skills
                </h2>
                <p>
                  Donec sollicitudin molestie malesuada vivamus magna justo
                  lacinia eget consectetur sed convallis at tellus donec rutrum
                  congue leo eget malesuada quisque velit nisi pretium ut
                  lacinia in elementum.
                </p>

                <ul className="list">
                  <li>
                    <i className="ri-check-fill"></i> Network and system
                    administration
                  </li>
                  <li>
                    <i className="ri-check-fill"></i> Operating system and
                    virtual machine
                  </li>
                  <li>
                    <i className="ri-check-fill"></i> Network security control
                  </li>
                  <li>
                    <i className="ri-check-fill"></i> Coding languages
                  </li>
                  <li>
                    <i className="ri-check-fill"></i> Cloud security
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div 
                className="why-choose-us-image" 
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-once="true"
              >
                <img
                  src="/images/cybersecurity-services/choose/choose.png"
                  alt="image"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="why-choose-us-shape">
          <img src="/images/cybersecurity-services/choose/shape.png" alt="image" />
        </div>
      </div>
    </>
  )
}

export default WhyChooseUs
