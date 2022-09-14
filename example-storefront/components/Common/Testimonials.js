import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'
import { Autoplay } from 'swiper'

const Testimonials = () => {
  return (
    <>
      <div className="feedback-area pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">TESTIMONIALS</span>
            <h2>Our Valuable Clients Feedback</h2>
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
              768: {
                slidesPerView: 2,
              },
              1199: {
                slidesPerView: 3,
              },
            }}
            modules={[Navigation, Autoplay]}
            className="mySwiper feedback-slides"
          >
            <SwiperSlide>
              <div className="single-feedback-item">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis.
                </p>
                <div className="client-info">
                  <div className="d-flex align-items-center">
                    <img src="/images/user/user1.jpg" alt="image" />
                    <div className="title">
                      <h3>John Smith</h3>
                      <span>Web Developer</span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-feedback-item">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis.
                </p>
                <div className="client-info">
                  <div className="d-flex align-items-center">
                    <img src="/images/user/user2.jpg" alt="image" />
                    <div className="title">
                      <h3>Sarah Taylor</h3>
                      <span>UX/UI Designer</span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-feedback-item">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis.
                </p>
                <div className="client-info">
                  <div className="d-flex align-items-center">
                    <img src="/images/user/user3.jpg" alt="image" />
                    <div className="title">
                      <h3>James Anderson</h3>
                      <span>Developer</span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-feedback-item">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis.
                </p>
                <div className="client-info">
                  <div className="d-flex align-items-center">
                    <img src="/images/user/user4.jpg" alt="image" />
                    <div className="title">
                      <h3>David Conway</h3>
                      <span>Developer</span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  )
}

export default Testimonials
