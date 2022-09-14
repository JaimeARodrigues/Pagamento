import React from 'react'

const FunFacts = () => {
  return (
    <>
      <div className="funfacts-style-area">
        <div className="container">
          <div className="funfacts-style-inner-box pt-100 pb-70">
            <div className="row justify-content-center">
              <div 
                className="col-lg-3 col-md-6 col-sm-4 col-6" 
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="1200"
                data-aos-once="true"
              >
                <div className="single-funfact-card">
                  <h3>
                    5K
                  </h3>
                  <p>Data Secure</p>
                </div>
              </div>

              <div 
                className="col-lg-3 col-md-6 col-sm-4 col-6" 
                data-aos="fade-up"
                data-aos-delay="400"
                data-aos-duration="1200"
                data-aos-once="true"
              >
                <div className="single-funfact-card">
                  <h3>
                    1500+
                  </h3>
                  <p>Trusted Organizations</p>
                </div>
              </div>

              <div 
                className="col-lg-3 col-md-6 col-sm-4 col-6" 
                data-aos="fade-up"
                data-aos-delay="600"
                data-aos-duration="1200"
                data-aos-once="true"
              >
                <div className="single-funfact-card">
                  <h3>
                    100%
                  </h3>
                  <p>Service Guarantee</p>
                </div>
              </div>

              <div 
                className="col-lg-3 col-md-6 col-sm-4 col-6"
                data-aos="fade-up"
                data-aos-delay="800"
                data-aos-duration="1200"
                data-aos-once="true"
              >
                <div className="single-funfact-card">
                  <h3>
                    100+
                  </h3>
                  <p>Website Protection</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default FunFacts
