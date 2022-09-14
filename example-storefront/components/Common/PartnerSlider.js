import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper'

const PartnerSlider = () => {
  return (
    <>
      <div className="partner-area ptb-100">
        <div className="container">
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
              1024: {
                slidesPerView: 6,
              },
            }}
            modules={[Autoplay]}
            className="mySwiper partner-slides"
          >
            <SwiperSlide>
              <div className="partner-item">
                <img src="/images/partner/partner1.png" alt="image" />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="partner-item">
                <img src="/images/partner/partner2.png" alt="image" />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="partner-item">
                <img src="/images/partner/partner3.png" alt="image" />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="partner-item">
                <img src="/images/partner/partner4.png" alt="image" />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="partner-item">
                <img src="/images/partner/partner5.png" alt="image" />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="partner-item">
                <img src="/images/partner/partner6.png" alt="image" />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="partner-item">
                <img src="/images/partner/partner7.png" alt="image" />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  )
}

export default PartnerSlider
