import React from 'react'
import Link from 'next/link'

const CaseStudiesCard2 = () => {
  return (
    <>
      <div className="case-studies-area pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">OUR CASE STUDIES</span>
            <h2>We Get you Higher Revenues, Not just Higher Ranks</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="case-studies-list">
            <div className="row justify-content-center">
              <div className="col-lg-6 col-md-6">
                <div className="single-case-studies-item bg-3D2F5D">
                  <img
                    src="/images/case-studies/case-studies1.png"
                    alt="image"
                  />
                  <h3>
                    <Link href="case-studies-details">
                      <a>eLan Education</a>
                    </Link>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore rts magna
                    rtt aliqua. Ut enim ad minim veniam, quis norud.
                  </p>
                  <Link href="case-studies-details">
                    <a className="default-btn">
                      <span className="ri-arrow-right-s-line"></span>Read More
                    </a>
                  </Link>
                </div>
              </div>

              <div className="col-lg-6 col-md-6">
                <div className="single-case-studies-item bg-AC5863">
                  <img
                    src="/images/case-studies/case-studies2.png"
                    alt="image"
                  />
                  <h3>
                    <Link href="case-studies-details">
                      <a>StartP Startup</a>
                    </Link>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore rts magna
                    rtt aliqua. Ut enim ad minim veniam, quis norud.
                  </p>
                  <Link href="case-studies-details">
                    <a className="default-btn">
                      <span className="ri-arrow-right-s-line"></span>Read More
                    </a>
                  </Link>
                </div>
              </div>

              <div className="col-lg-6 col-md-6">
                <div className="single-case-studies-item bg-FFB774">
                  <img
                    src="/images/case-studies/case-studies3.png"
                    alt="image"
                  />
                  <h3>
                    <Link href="case-studies-details">
                      <a>Edmo Marketing</a>
                    </Link>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore rts magna
                    rtt aliqua. Ut enim ad minim veniam, quis norud.
                  </p>
                  <Link href="case-studies-details">
                    <a className="default-btn">
                      <span className="ri-arrow-right-s-line"></span>Read More
                    </a>
                  </Link>
                </div>
              </div>

              <div className="col-lg-6 col-md-6">
                <div className="single-case-studies-item bg-34575A">
                  <img
                    src="/images/case-studies/case-studies1.png"
                    alt="image"
                  />
                  <h3>
                    <Link href="case-studies-details">
                      <a>WideCademy Remote</a>
                    </Link>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore rts magna
                    rtt aliqua. Ut enim ad minim veniam, quis norud.
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
        <div className="shape6">
          <img src="/images/shape/shape6.png" alt="image" />
        </div>
      </div>
    </>
  )
}

export default CaseStudiesCard2
