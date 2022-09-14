import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'
import Link from 'next/link'

const HeroSlider = () => {
  return (
    <>
      <div className="home-area">
        <Swiper
          slidesPerView={1}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper home-slides"
        >
          <SwiperSlide>
            <div className="banner-item">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-lg-6 col-md-12">
                    <div className="home-content">
                      <span className="sub-title">AWARD WINNING COMPANY</span>
                      <h1>
                        Make Your Business More Money With Team Of Experts
                      </h1>
                      <Link href="/contact">
                        <a className="default-btn style-two">
                          <span className="ri-arrow-right-s-line"></span>Get
                          Started Now
                        </a>
                      </Link>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12">
                    <div className="home-image">
                      <img src="/images/banner-img1.png" alt="banner-image" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="banner-item">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-lg-6 col-md-12">
                    <div className="home-content">
                      <span className="sub-title">AWARD WINNING COMPANY</span>
                      <h1>
                        Make Your Business More Money With Team Of Experts
                      </h1>
                      <Link href="/contact">
                        <a className="default-btn style-two">
                          <span className="ri-arrow-right-s-line"></span>Get
                          Started Now
                        </a>
                      </Link>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12">
                    <div className="home-image">
                      <img src="/images/banner-img2.png" alt="banner-image" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  )
}

export default HeroSlider
