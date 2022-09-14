import React from 'react'
import Link from 'next/link'

const PricingTable = () => {
  return (
    <>
      <div className="pricing-area pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">PRICING OPTIONS</span>
            <h2>Our Reasonable Pricing</h2>
          </div>

          <div className="row justify-content-center">
            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
              <div className="single-pricing-box">
                <div className="pricing-header">
                  <h3>Free</h3>
                  <p>Give Lofi a try for free</p>
                </div>

                <div className="price">
                  <h4>
                    $0<span>/month</span>
                  </h4>
                  <p>Pricing includes coverage for users</p>
                </div>

                <Link href="/contact">
                  <a className="link-btn">
                    Get Started
                  </a>
                </Link>

                <div className="features-list">
                  <h5>ALL FEATURES:</h5>
                  <ul>
                    <li>
                      <i className="ri-check-line"></i> 1 seat
                    </li>
                    <li>
                      <i className="ri-check-line"></i> 1 active project
                    </li>
                    <li>
                      <i className="ri-check-line"></i> Limited blocks
                    </li>
                    <li>
                      <i className="ri-close-line"></i> Conditions
                    </li>
                    <li>
                      <i className="ri-close-line"></i> CSV export
                    </li>
                    <li>
                      <i className="ri-close-line"></i> Password protection
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
              <div className="single-pricing-box">
                <div className="pricing-header">
                  <h3>Starter</h3>
                  <p>Best for individual designers</p>
                </div>

                <div className="price">
                  <h4>
                    $49<span>/month</span>
                  </h4>
                  <p>Pricing includes coverage for users</p>
                </div>

                <Link href="/contact">
                  <a className="link-btn">
                    Get Started
                  </a>
                </Link>

                <div className="features-list">
                  <h5>ALL FEATURES:</h5>
                  <ul>
                    <li>
                      <i className="ri-check-line"></i> 1 seat
                    </li>
                    <li>
                      <i className="ri-check-line"></i> 3 active project
                    </li>
                    <li>
                      <i className="ri-check-line"></i> Unlimited blocks
                    </li>
                    <li>
                      <i className="ri-check-line"></i> Conditions
                    </li>
                    <li>
                      <i className="ri-check-line"></i> CSV export
                    </li>
                    <li>
                      <i className="ri-close-line"></i> Password protection
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
              <div className="single-pricing-box active">
                <div className="pricing-header">
                  <h3>Team</h3>
                  <p>Get your team together</p>
                </div>

                <div className="price">
                  <h4>
                    $39<span>/month</span>
                  </h4>
                  <p>Pricing includes coverage for users</p>
                </div>

                <Link href="/contact">
                  <a className="link-btn">
                    Get Started
                  </a>
                </Link>

                <div className="features-list">
                  <h5>ALL FEATURES:</h5>
                  <ul>
                    <li>
                      <i className="ri-check-line"></i> 3+ seat
                    </li>
                    <li>
                      <i className="ri-check-line"></i> 10 active project
                    </li>
                    <li>
                      <i className="ri-check-line"></i> Unlimited blocks
                    </li>
                    <li>
                      <i className="ri-check-line"></i> Team management
                    </li>
                    <li>
                      <i className="ri-check-line"></i> Customization
                    </li>
                    <li>
                      <i className="ri-check-line"></i> Password protection
                    </li>
                  </ul>
                </div>
                <div className="ribbon">
                  <span>Popular</span>
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
              <div className="single-pricing-box">
                <div className="pricing-header">
                  <h3>Enterprise</h3>
                  <p>For large teams & enterprises</p>
                </div>

                <div className="price">
                  <h4>Custom</h4>
                  <p>Annual billing only</p>
                </div>

                <Link href="/contact">
                  <a className="link-btn">
                    Contact Us
                  </a>
                </Link>
                
                <div className="features-list">
                  <h5>ALL FEATURES:</h5>
                  <ul>
                    <li>
                      <i className="ri-check-line"></i> 10+ seat
                    </li>
                    <li>
                      <i className="ri-check-line"></i> Unlimited projects
                    </li>
                    <li>
                      <i className="ri-check-line"></i> Dedicated CSM
                    </li>
                    <li>
                      <i className="ri-check-line"></i> Legal blocks
                    </li>
                    <li>
                      <i className="ri-check-line"></i> Dedicated onboarding
                    </li>
                    <li>
                      <i className="ri-check-line"></i> Custom payment terms
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PricingTable
