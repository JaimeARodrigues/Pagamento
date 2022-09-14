import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper'
import { Autoplay } from 'swiper'
import Link from 'next/link'

const OurServices = () => {
  return (
    <>
      <div className="services-area ptb-100">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">OUR SERVICES</span>
            <h2>We Offer Professional Services For Business</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <Swiper
            spaceBetween={30}
            autoplay={{
              delay: 6000,
              disableOnInteraction: true,
            }}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1200: {
                slidesPerView: 3,
              },
            }}
            modules={[Pagination, Autoplay]}
            className="mySwiper services-slides-two"
          >
            <SwiperSlide>
              <div className="single-services-item with-boxshadow">
                <div className="d-flex align-items-center">
                  <img src="/images/icon/icon8.png" alt="image" />
                  <h3>
                    <Link href="/service-details">
                      <a>Branding</a>
                    </Link>
                  </h3>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adiscing elit, sed do
                  eiusmod tempor ut labore et dolore magna aliqua.
                </p>
                <Link href="/service-details">
                  <a className="default-btn">
                    <span className="ri-arrow-right-s-line"></span>Learn More
                  </a>
                </Link>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-services-item with-boxshadow">
                <div className="d-flex align-items-center">
                  <img src="/images/icon/icon9.png" alt="image" />
                  <h3>
                    <Link href="/service-details">
                      <a>Design</a>
                    </Link>
                  </h3>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adiscing elit, sed do
                  eiusmod tempor ut labore et dolore magna aliqua.
                </p>
                <Link href="/service-details">
                  <a className="default-btn">
                    <span className="ri-arrow-right-s-line"></span>Learn More
                  </a>
                </Link>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-services-item with-boxshadow">
                <div className="d-flex align-items-center">
                  <img src="/images/icon/icon10.png" alt="image" />
                  <h3>
                    <Link href="/service-details">
                      <a>Content</a>
                    </Link>
                  </h3>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adiscing elit, sed do
                  eiusmod tempor ut labore et dolore magna aliqua.
                </p>
                <Link href="/service-details">
                  <a className="default-btn">
                    <span className="ri-arrow-right-s-line"></span>Learn More
                  </a>
                </Link>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-services-item with-boxshadow">
                <div className="d-flex align-items-center">
                  <img src="/images/icon/icon11.png" alt="image" />
                  <h3>
                    <Link href="/service-details">
                      <a>Strategy</a>
                    </Link>
                  </h3>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adiscing elit, sed do
                  eiusmod tempor ut labore et dolore magna aliqua.
                </p>
                <Link href="/service-details">
                  <a className="default-btn">
                    <span className="ri-arrow-right-s-line"></span>Learn More
                  </a>
                </Link>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-services-item with-boxshadow">
                <div className="d-flex align-items-center">
                  <img src="/images/icon/icon12.png" alt="image" />
                  <h3>
                    <Link href="/service-details">
                      <a>Marketing</a>
                    </Link>
                  </h3>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adiscing elit, sed do
                  eiusmod tempor ut labore et dolore magna aliqua.
                </p>
                <Link href="/service-details">
                  <a className="default-btn">
                    <span className="ri-arrow-right-s-line"></span>Learn More
                  </a>
                </Link>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-services-item with-boxshadow">
                <div className="d-flex align-items-center">
                  <img src="/images/icon/icon13.png" alt="image" />
                  <h3>
                    <Link href="/service-details">
                      <a>Technology</a>
                    </Link>
                  </h3>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adiscing elit, sed do
                  eiusmod tempor ut labore et dolore magna aliqua.
                </p>
                <Link href="/service-details">
                  <a className="default-btn">
                    <span className="ri-arrow-right-s-line"></span>Learn More
                  </a>
                </Link>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  )
}

export default OurServices
