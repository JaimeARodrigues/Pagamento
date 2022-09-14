import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper'
import { Navigation } from 'swiper'

const TeamSlider = () => {
  return (
    <>
      <div className="team-area bg-gradient-image ptb-100">
        <div className="container">
          <div className="section-title style-two">
            <div className="row align-items-center">
              <div className="col-lg-5 col-md-12">
                <span className="sub-title">OUR EXPERTS</span>
                <h2>
                  Meet Our Leadership <br />
                  Preparing For Your Success
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

          <Swiper
            navigation={true}
            spaceBetween={30}
            autoplay={{
              delay: 6000,
              disableOnInteraction: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              576: {
                slidesPerView: 3,
              },
              992: {
                slidesPerView: 5,
              },
            }}
            modules={[Autoplay, Navigation]}
            className="mySwiper team-slides"
          >
            <SwiperSlide>
              <div className="single-team-box">
                <div className="image">
                  <div
                    className="bg-1"
                    style={{ backgroundImage: `url(/images/team/team1.jpg)` }}
                  ></div>
                </div>
                <div className="content">
                  <h3>Sarah Taylor</h3>
                  <span>Marketing Lead</span>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-team-box">
                <div className="image">
                  <div
                    className="bg-2"
                    style={{ backgroundImage: `url(/images/team/team2.jpg)` }}
                  ></div>
                </div>
                <div className="content">
                  <h3>Ben Stokes</h3>
                  <span>Art Director</span>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-team-box">
                <div className="image">
                  <div
                    className="bg-3"
                    style={{ backgroundImage: `url(/images/team/team3.jpg)` }}
                  ></div>
                </div>
                <div className="content">
                  <h3>Ellyse Perry</h3>
                  <span>Designer</span>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-team-box">
                <div className="image">
                  <div
                    className="bg-4"
                    style={{ backgroundImage: `url(/images/team/team4.jpg)` }}
                  ></div>
                </div>
                <div className="content">
                  <h3>Steven Smith</h3>
                  <span>Development</span>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-team-box">
                <div className="image">
                  <div
                    className="bg-5"
                    style={{ backgroundImage: `url(/images/team/team5.jpg)` }}
                  ></div>
                </div>
                <div className="content">
                  <h3>Suzie Bates</h3>
                  <span>Front-End Development</span>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-team-box">
                <div className="image">
                  <div
                    className="bg-6"
                    style={{ backgroundImage: `url(/images/team/team6.jpg)` }}
                  ></div>
                </div>
                <div className="content">
                  <h3>David Warner</h3>
                  <span>Head of Team</span>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  )
}

export default TeamSlider
