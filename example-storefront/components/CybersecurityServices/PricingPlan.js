import React from 'react'
import Link from 'next/link'

const PricingPlan = () => {
  return (
    <>
      <div className="pricing-style-area pt-100 pb-70">
        <div className="container">
          <div className="section-title with-max-width">
            <h2>Our Pricing Plan</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="row justify-content-center">
            <div 
              className="col-xl-4 col-lg-6 col-md-6 col-sm-6" 
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="1200"
              data-aos-once="true"
            >
              <div className="single-pricing-card">
                <div className="pricing-header">
                  <h3>Basic</h3>
                </div>

                <div className="price">
                  <h4>
                    Free<span>/Per Month</span>
                  </h4>
                </div>

                <div className="features-list">
                  <ul>
                    <li>
                      <i className="ri-checkbox-circle-line"></i> 10 Days
                      product testing
                    </li>
                    <li>
                      <i className="ri-checkbox-circle-line"></i> Upgrade
                      anytime protection
                    </li>
                    <li>
                      <i className="ri-checkbox-circle-line"></i> Unlimited
                      malware removal
                    </li>
                    <li>
                      <i className="ri-checkbox-circle-line"></i> 24/7 Live
                      assistance
                    </li>
                    <li>
                      <i className="ri-checkbox-circle-line"></i> Scan every 5
                      Hrs
                    </li>
                    <li>
                      <i className="ri-checkbox-circle-line"></i> Configure
                      software
                    </li>
                  </ul>
                </div>

                <Link href="/contact">
                  <a className="link-btn">Get Started</a>
                </Link>

                <div className="pricing-shape">
                  <img
                    src="/images/cybersecurity-services/pricing-shape.png"
                    alt="image"
                  />
                </div>
              </div>
            </div>

            <div 
              className="col-xl-4 col-lg-6 col-md-6 col-sm-6" 
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-duration="1200"
              data-aos-once="true"
            >
              <div className="single-pricing-card">
                <div className="pricing-header">
                  <h3>Starter</h3>
                </div>

                <div className="price">
                  <h4>
                    $49<span>/Per Month</span>
                  </h4>
                </div>

                <div className="features-list">
                  <ul>
                    <li>
                      <i className="ri-checkbox-circle-line"></i> 20 Days
                      product testing
                    </li>
                    <li>
                      <i className="ri-checkbox-circle-line"></i> Upgrade
                      anytime protection
                    </li>
                    <li>
                      <i className="ri-checkbox-circle-line"></i> Unlimited
                      malware removal
                    </li>
                    <li>
                      <i className="ri-checkbox-circle-line"></i> 24/7 Live
                      assistance
                    </li>
                    <li>
                      <i className="ri-checkbox-circle-line"></i> Scan every 10
                      Hrs
                    </li>
                    <li>
                      <i className="ri-checkbox-circle-line"></i> Configure
                      software
                    </li>
                  </ul>
                </div>

                <Link href="/contact">
                  <a className="link-btn">Get Started</a>
                </Link>

                <div className="pricing-shape">
                  <img
                    src="/images/cybersecurity-services/pricing-shape.png"
                    alt="image"
                  />
                </div>
              </div>
            </div>

            <div 
              className="col-xl-4 col-lg-6 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-delay="700"
              data-aos-duration="1200"
              data-aos-once="true"
            >
              <div className="single-pricing-card">
                <div className="pricing-header">
                  <h3>Exclusive</h3>
                </div>

                <div className="price">
                  <h4>
                    $99<span>/Per Month</span>
                  </h4>
                </div>

                <div className="features-list">
                  <ul>
                    <li>
                      <i className="ri-checkbox-circle-line"></i> 30 Days
                      product testing
                    </li>
                    <li>
                      <i className="ri-checkbox-circle-line"></i> Upgrade
                      anytime protection
                    </li>
                    <li>
                      <i className="ri-checkbox-circle-line"></i> Unlimited
                      malware removal
                    </li>
                    <li>
                      <i className="ri-checkbox-circle-line"></i> 24/7 Live
                      assistance
                    </li>
                    <li>
                      <i className="ri-checkbox-circle-line"></i> Scan every 15
                      Hrs
                    </li>
                    <li>
                      <i className="ri-checkbox-circle-line"></i> Configure
                      software
                    </li>
                  </ul>
                </div>

                <Link href="/contact">
                  <a className="link-btn">Get Started</a>
                </Link>

                <div className="pricing-shape">
                  <img
                    src="/images/cybersecurity-services/pricing-shape.png"
                    alt="image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PricingPlan
