import React from 'react'

const CyberSafety = () => {
  return (
    <>
      <div className="cyber-safety-area pb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div 
                className="cyber-safety-image" 
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-once="true"
              >
                <img
                  src="/images/cybersecurity-services/cyber-safety.png"
                  alt="image"
                />
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="cyber-safety-content">
                <span className="sub-title">Cyber Safety</span>
                <h2>Protect Your Self Against Cyberattacks</h2>
                <p>
                  Donec sollicitudin molestie malesuada vivamus magna justo
                  lacinia eget consectetur sed convallis at tellus donec rutrum
                  congue leo eget malesuada quisque velit nisi pretium ut
                  lacinia in elementum.
                </p>

                <div className="row align-items-center">
                  <div className="col-lg-6 col-md-6">
                    <ul className="safety-list">
                      <li>
                        <i className="ri-checkbox-circle-line"></i> Update your
                        software
                      </li>
                      <li>
                        <i className="ri-checkbox-circle-line"></i> Don&apos;t
                        open unknown sender email
                      </li>
                      <li>
                        <i className="ri-checkbox-circle-line"></i> Used strong
                        password
                      </li>
                    </ul>
                  </div>

                  <div className="col-lg-6 col-md-6">
                    <ul className="safety-list">
                      <li>
                        <i className="ri-checkbox-circle-line"></i> Cloud
                        security
                      </li>
                      <li>
                        <i className="ri-checkbox-circle-line"></i> Coding
                        languages
                      </li>
                      <li>
                        <i className="ri-checkbox-circle-line"></i> Network
                        security control
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CyberSafety
