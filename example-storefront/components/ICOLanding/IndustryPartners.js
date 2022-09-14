import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper'

const IndustryPartners = () => {
  return (
    <>
      <div className="industry-partner-area">
        <div className="container">
          <div className="section-title with-max-width">
            <h2>Industry Partners</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="industry-partner-inner-box-wrap with-black-color pt-100 pb-70">
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              autoplay={{
                delay: 6000,
                disableOnInteraction: true,
              }}
              breakpoints={{
                0: {
                  slidesPerView: 2,
                },
                576: {
                  slidesPerView: 3,
                },
                768: {
                  slidesPerView: 4,
                },
                992: {
                  slidesPerView: 5,
                },
              }}
              modules={[Autoplay]}
              className="mySwiper partner-wrap-slides"
            >
              <SwiperSlide>
                <div className="partner-card">
                  <img
                    src="/images/cybersecurity-services/partner/partner-19.png"
                    alt="image"
                  />
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="partner-card">
                  <img
                    src="/images/cybersecurity-services/partner/partner-20.png"
                    alt="image"
                  />
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="partner-card">
                  <img
                    src="/images/cybersecurity-services/partner/partner-21.png"
                    alt="image"
                  />
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="partner-card">
                  <img
                    src="/images/cybersecurity-services/partner/partner-22.png"
                    alt="image"
                  />
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="partner-card">
                  <img
                    src="/images/cybersecurity-services/partner/partner-23.png"
                    alt="image"
                  />
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="partner-card">
                  <img
                    src="/images/cybersecurity-services/partner/partner-21.png"
                    alt="image"
                  />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  )
}

export default IndustryPartners
