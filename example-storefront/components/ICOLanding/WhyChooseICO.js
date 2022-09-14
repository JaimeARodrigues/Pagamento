import React from 'react'

const WhyChooseICO = () => {
  return (
    <>
      <div className="ico-choose-area pb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="ico-choose-content">
                <span className="sub-title">Why Choose ICO</span>
                <h2>Investors In Icos Expect To Gain Value From Tokens</h2>

                <div className="choose-inner-box">
                  <div className="image">
                    <img
                      src="/images/ico-landing-home/choose/icon-1.png"
                      alt="icon"
                    />
                  </div>
                  <h3>Full Interoperability</h3>
                  <p>
                    Nulla quis lorem ut libero malesuada feugiat. Vivamus magna
                    justo lacinia eget consectetur sed convallis at tellus.
                  </p>
                </div>
                <div className="choose-inner-box">
                  <div className="image">
                    <img
                      src="/images/ico-landing-home/choose/icon-2.png"
                      alt="icon"
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
                      src="/images/ico-landing-home/choose/icon-3.png"
                      alt="icon"
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

            <div className="col-lg-6 col-md-12">
              <div 
                className="ico-choose-image" 
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-once="true"
              >
                <img
                  src="/images/ico-landing-home/choose/choose.png"
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

export default WhyChooseICO
