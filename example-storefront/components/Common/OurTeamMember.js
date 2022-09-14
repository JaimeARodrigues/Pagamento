import React from 'react'
import Link from 'next/link'

const OurTeamMember = () => {
  return (
    <>
      <div className="team-area bg-gradient-image ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="team-member-list">
                <div className="row justify-content-center">
                  <div 
                    className="col-lg-6 col-md-6 col-sm-6" 
                    data-aos="fade-up"
                    data-aos-delay="300"
                    data-aos-duration="1200"
                    data-aos-once="true"
                  >
                    <div className="single-team-member">
                      <img src="/images/team/team12.jpg" alt="team" />
                      <div className="content">
                        <div className="d-flex align-items-center justify-content-between">
                          <h3>Ben Stokes</h3>
                          <span>Marketing Lead</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div 
                    className="col-lg-6 col-md-6 col-sm-6" 
                    data-aos="fade-up"
                    data-aos-delay="500"
                    data-aos-duration="1200"
                    data-aos-once="true"
                  >
                    <div className="single-team-member">
                      <img src="/images/team/team13.jpg" alt="team" />
                      <div className="content">
                        <div className="d-flex align-items-center justify-content-between">
                          <h3>Sarah Taylor</h3>
                          <span>Art Director</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div 
                    className="col-lg-6 col-md-6 col-sm-6" 
                    data-aos="fade-up"
                    data-aos-delay="600"
                    data-aos-duration="1200"
                    data-aos-once="true"
                  >
                    <div className="single-team-member">
                      <img src="/images/team/team14.jpg" alt="team" />
                      <div className="content">
                        <div className="d-flex align-items-center justify-content-between">
                          <h3>Ellyse Perry</h3>
                          <span>Designer</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div 
                    className="col-lg-6 col-md-6 col-sm-6" 
                    data-aos="fade-up"
                    data-aos-delay="700"
                    data-aos-duration="1200"
                    data-aos-once="true"
                  >
                    <div className="single-team-member">
                      <img src="/images/team/team15.jpg" alt="team" />
                      <div className="content">
                        <div className="d-flex align-items-center justify-content-between">
                          <h3>Steven Smith</h3>
                          <span>Development</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-lg-6 col-md-12">
              <div className="team-section-title">
                <span className="sub-title">OUR EXPERTS</span>
                <h2>
                  Meet Our Leadership <br />
                  Preparing For Your Success
                </h2>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters.
                </p>
                <Link href="/team">
                  <a className="default-btn style-two">
                    <span className="ri-arrow-right-s-line"></span>Meet Our Team
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

export default OurTeamMember
