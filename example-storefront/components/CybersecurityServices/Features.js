import React from 'react'

const Features = () => {
  return (
    <>
      <div className="features-style-area pt-100 pb-70">
        <div className="container">
          <div className="row justify-content-center">
            <div 
              className="col-lg-4 col-sm-6 col-md-6" 
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1200"
              data-aos-once="true"
            >
              <div className="single-features-card">
                <div className="image">
                  <img
                    src="/images/cybersecurity-services/features/features-1.png"
                    alt="image"
                  />
                </div>
                <h3>Network Security</h3>
                <p>
                  Vivamus magna justo lacinia eget consectetur sed convallis at
                  tellus. Donec rutrum congue leo eget malesuada. Quisque velit
                  nisi pretium ut lacinia in elementum id enim.
                </p>
              </div>
            </div>

            <div 
              className="col-lg-4 col-sm-6 col-md-6"
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="1200"
              data-aos-once="true"
            >
              <div className="single-features-card">
                <div className="image">
                  <img
                    src="/images/cybersecurity-services/features/features-2.png"
                    alt="image"
                  />
                </div>
                <h3>Cloud Security</h3>
                <p>
                  Vivamus magna justo lacinia eget consectetur sed convallis at
                  tellus. Donec rutrum congue leo eget malesuada. Quisque velit
                  nisi pretium ut lacinia in elementum id enim.
                </p>
              </div>
            </div>

            <div 
              className="col-lg-4 col-sm-6 col-md-6" 
              data-aos="fade-up"
              data-aos-delay="600"
              data-aos-duration="1200"
              data-aos-once="true"
            >
              <div className="single-features-card">
                <div className="image">
                  <img
                    src="/images/cybersecurity-services/features/features-3.png"
                    alt="image"
                  />
                </div>
                <h3>Application Security</h3>
                <p>
                  Vivamus magna justo lacinia eget consectetur sed convallis at
                  tellus. Donec rutrum congue leo eget malesuada. Quisque velit
                  nisi pretium ut lacinia in elementum id enim.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Features
