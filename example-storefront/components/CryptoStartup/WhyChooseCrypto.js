import React from 'react'

const WhyChooseCrypto = () => {
  return (
    <>
      <div className="cryptocurrency-choose-area pb-100 overflow-hidden">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div 
                className="cryptocurrency-choose-image"
                data-aos="fade-left"
                data-aos-duration="1200"
                data-aos-once="true"
              >
                <img
                  src="/images/crypto-startup/choose/choose.png"
                  alt="image"
                />
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div 
                className="cryptocurrency-choose-content" 
                data-aos="fade-right"
                data-aos-duration="1200"
                data-aos-once="true"
              >
                <span className="sub-title">Why Choose Crypto</span>
                <h2>Investors In Icos Expect To Gain Value From Tokens</h2>

                <div className="choose-inner-box">
                  <div className="image">
                    <img
                      src="/images/crypto-startup/choose/image-1.png"
                      alt="image"
                    />
                  </div>
                  <h3>Full Interoperability</h3>
                  <p>
                    Nulla quis lorem ut libero malesuada feugiat. Vivamus magna
                    justo lacinia eget consectetur sed convallis at tellus.
                  </p>
                </div>
                <div className="choose-inner-box with-some-left">
                  <div className="image">
                    <img
                      src="/images/crypto-startup/choose/image-2.png"
                      alt="image"
                    />
                  </div>
                  <h3>Contract Level Security</h3>
                  <p>
                    Nulla quis lorem ut libero malesuada feugiat. Vivamus magna
                    justo lacinia eget consectetur sed convallis at tellus.
                  </p>
                </div>
                <div className="choose-inner-box">
                  <div className="image">
                    <img
                      src="/images/crypto-startup/choose/image-3.png"
                      alt="image"
                    />
                  </div>
                  <h3>Live Human Support</h3>
                  <p>
                    Nulla quis lorem ut libero malesuada feugiat. Vivamus magna
                    justo lacinia eget consectetur sed convallis at tellus.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default WhyChooseCrypto
