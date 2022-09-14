import React from 'react'
import Link from 'next/link'

const CaseStudiesCard = () => {
  return (
    <>
      <div className="case-studies-area ptb-100">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">OUR CASE STUDIES</span>
            <h2>We Get you Higher Revenues, Not just Higher Ranks</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className='case-studies-card-box'>
            <div className="single-case-studies-box">
              <div className="row align-items-center m-0">
                <div className="col-lg-6 col-md-12 p-0">
                  <div className="content">
                    <div className="logo">
                      <img src="/images/case-studies/elan.png" alt="image" />
                    </div>
                    <h3>
                      <Link href="/case-studies-details">
                        <a>eLan Education</a>
                      </Link>
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                      do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo.
                    </p>
                    <ul className="features-list">
                      <li>
                        <span>FRAMEWORK</span>
                        WordPress
                      </li>
                      <li>
                        <span>CATEGORY</span>
                        Education
                      </li>
                      <li>
                        <span>WEB LINK</span>
                        <a href="#" target="_blank">
                          www.elan.com
                        </a>
                      </li>
                    </ul>
                    <Link href="/case-studies-details">
                      <a className="default-btn">
                        <span className="ri-arrow-right-s-line"></span>View More
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 p-0">
                  <div className="image">
                    <img
                      src="/images/case-studies/case-studies1.png"
                      alt="image"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="single-case-studies-box">
              <div className="row align-items-center m-0">
                <div className="col-lg-6 col-md-12 p-0">
                  <div className="content">
                    <div className="logo">
                      <img src="/images/case-studies/startp.png" alt="image" />
                    </div>
                    <h3>
                      <Link href="/case-studies-details">
                        <a>StartP Startup</a>
                      </Link>
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                      do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo.
                    </p>
                    <ul className="features-list">
                      <li>
                        <span>FRAMEWORK</span>
                        React.js
                      </li>
                      <li>
                        <span>CATEGORY</span>
                        Startup
                      </li>
                      <li>
                        <span>WEB LINK</span>
                        <a href="#" target="_blank">
                          www.startp.com
                        </a>
                      </li>
                    </ul>
                    <Link href="/case-studies-details">
                      <a className="default-btn">
                        <span className="ri-arrow-right-s-line"></span>View More
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 p-0">
                  <div className="image">
                    <img
                      src="/images/case-studies/case-studies2.png"
                      alt="image"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="single-case-studies-box">
              <div className="row align-items-center m-0">
                <div className="col-lg-6 col-md-12 p-0">
                  <div className="content">
                    <div className="logo">
                      <img src="/images/case-studies/edmo.png" alt="image" />
                    </div>
                    <h3>
                      <Link href="/case-studies-details">
                        <a>Edmo Marketing</a>
                      </Link>
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                      do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo.
                    </p>
                    <ul className="features-list">
                      <li>
                        <span>FRAMEWORK</span>
                        Moodle
                      </li>
                      <li>
                        <span>CATEGORY</span>
                        Marketing
                      </li>
                      <li>
                        <span>WEB LINK</span>
                        <a href="#" target="_blank">
                          www.edmo.com
                        </a>
                      </li>
                    </ul>
                    <Link href="/case-studies-details">
                      <a className="default-btn">
                        <span className="ri-arrow-right-s-line"></span>View More
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 p-0">
                  <div className="image">
                    <img
                      src="/images/case-studies/case-studies3.png"
                      alt="image"
                    />
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

export default CaseStudiesCard
