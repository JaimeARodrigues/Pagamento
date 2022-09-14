import React from 'react'
import PartnerSlider from './PartnerSlider'

const PartnerArea = () => {
  return (
    <>
      <div className="partner-area pt-100">
        <div className="container">
          <div className="section-title style-two">
            <div className="row align-items-center">
              <div className="col-lg-5 col-md-12">
                <span className="sub-title">OUR PARTNERS</span>
                <h2>
                  A Trusted Partner <br /> For Ambitious Brands
                </h2>
              </div>
              <div className="col-lg-7 col-md-12">
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters. It is a long established fact
                  that a reader will be distracted by the.
                </p>
              </div>
            </div>
          </div>

          <PartnerSlider />
        </div>
      </div>
    </>
  )
}

export default PartnerArea
