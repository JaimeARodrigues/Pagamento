import React from 'react'
import Link from 'next/link'

const CaseStudiesCard3 = () => {
  return (
    <>
      <div className="case-studies-area bg-gradient-image pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">OUR CASE STUDIES</span>
            <h2>Case Studies</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor <br />
              incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="shorting row justify-content-center">
            <div className="col-lg-4 col-sm-6 col-md-6">
              <div className="case-studies-box">
                <img src="/images/case-studies/case-studies4.png" alt="image" />
                <h3>
                  <Link href="case-studies-details">
                    <a>eLan Education</a>
                  </Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore rts magna rtt
                  aliqua.
                </p>
                <Link href="case-studies-details">
                  <a className="default-btn">
                    <span className="ri-arrow-right-s-line"></span>Read More
                  </a>
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6 col-md-6">
              <div className="case-studies-box">
                <img src="/images/case-studies/case-studies5.png" alt="image" />
                <h3>
                  <Link href="case-studies-details">
                    <a>StartP Startup</a>
                  </Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore rts magna rtt
                  aliqua.
                </p>
                <Link href="case-studies-details">
                  <a className="default-btn">
                    <span className="ri-arrow-right-s-line"></span>Read More
                  </a>
                </Link>
              </div>
            </div>
            
            <div className="col-lg-4 col-sm-6 col-md-6">
              <div className="case-studies-box">
                <img src="/images/case-studies/case-studies6.png" alt="image" />
                <h3>
                  <Link href="case-studies-details">
                    <a>Edmo Marketing</a>
                  </Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore rts magna rtt
                  aliqua.
                </p>
                <Link href="case-studies-details">
                  <a className="default-btn">
                    <span className="ri-arrow-right-s-line"></span>Read More
                  </a>
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6 col-md-6">
              <div className="case-studies-box">
                <img src="/images/case-studies/case-studies7.png" alt="image" />
                <h3>
                  <Link href="case-studies-details">
                    <a>StartNext IT</a>
                  </Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore rts magna rtt
                  aliqua.
                </p>
                <Link href="case-studies-details">
                  <a className="default-btn">
                    <span className="ri-arrow-right-s-line"></span>Read More
                  </a>
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6 col-md-6">
              <div className="case-studies-box">
                <img src="/images/case-studies/case-studies8.png" alt="image" />
                <h3>
                  <Link href="case-studies-details">
                    <a>Naxai Security</a>
                  </Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore rts magna rtt
                  aliqua.
                </p>
                <Link href="case-studies-details">
                  <a className="default-btn">
                    <span className="ri-arrow-right-s-line"></span>Read More
                  </a>
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6 col-md-6">
              <div className="case-studies-box">
                <img src="/images/case-studies/case-studies9.png" alt="image" />
                <h3>
                  <Link href="case-studies-details">
                    <a>Noke Creative</a>
                  </Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore rts magna rtt
                  aliqua.
                </p>
                <Link href="case-studies-details">
                  <a className="default-btn">
                    <span className="ri-arrow-right-s-line"></span>Read More
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CaseStudiesCard3
