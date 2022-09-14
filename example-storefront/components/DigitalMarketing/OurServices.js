import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from "swiper";
import { Autoplay } from 'swiper'
import Link from 'next/link'

const OurServices = () => {
  return (
    <>
      <div className="services-area pb-100">
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
            slidesPerView={1}
            spaceBetween={30}
            autoplay={{
              delay: 6000,
              disableOnInteraction: true,
            }}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              1200: {
                slidesPerView: 3,
              },
            }}
            modules={[Pagination, Autoplay]}
            className="mySwiper services-slides"
          >
            <SwiperSlide>
              <div className="single-services-item">
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
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad.
                </p>
                <ul className="features-list">
                  <li>
                    <span>
                      <i className="ri-checkbox-circle-fill"></i> Identity
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="ri-checkbox-circle-fill"></i> Voice
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="ri-checkbox-circle-fill"></i> Positioning
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="ri-checkbox-circle-fill"></i> competitor
                      Farm
                    </span>
                  </li>
                </ul>

                <Link href="/service-details">
                  <a className="default-btn">
                    <span className="ri-arrow-right-s-line"></span>Learn More
                  </a>
                </Link>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-services-item">
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
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad.
                </p>
                <ul className="features-list">
                  <li>
                    <span>
                      <i className="ri-checkbox-circle-fill"></i> App Design
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="ri-checkbox-circle-fill"></i> Website Design
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="ri-checkbox-circle-fill"></i> Product Design
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="ri-checkbox-circle-fill"></i> UX Design
                    </span>
                  </li>
                </ul>

                <Link href="/service-details">
                  <a className="default-btn">
                    <span className="ri-arrow-right-s-line"></span>Learn More
                  </a>
                </Link>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-services-item">
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
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad.
                </p>
                <ul className="features-list">
                  <li>
                    <span>
                      <i className="ri-checkbox-circle-fill"></i> Photography
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="ri-checkbox-circle-fill"></i> Animations
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="ri-checkbox-circle-fill"></i> Copywriting
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="ri-checkbox-circle-fill"></i> Social Content
                    </span>
                  </li>
                </ul>

                <Link href="/service-details">
                  <a className="default-btn">
                    <span className="ri-arrow-right-s-line"></span>Learn More
                  </a>
                </Link>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-services-item">
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
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad.
                </p>
                <ul className="features-list">
                  <li>
                    <span>
                      <i className="ri-checkbox-circle-fill"></i> Research
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="ri-checkbox-circle-fill"></i> Positioning
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="ri-checkbox-circle-fill"></i> Analysis
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="ri-checkbox-circle-fill"></i> Market
                      Strategy
                    </span>
                  </li>
                </ul>

                <Link href="/service-details">
                  <a className="default-btn">
                    <span className="ri-arrow-right-s-line"></span>Learn More
                  </a>
                </Link>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-services-item">
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
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad.
                </p>
                <ul className="features-list">
                  <li>
                    <span>
                      <i className="ri-checkbox-circle-fill"></i> Email
                      Campaigns
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="ri-checkbox-circle-fill"></i> Social
                      Campaigns
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="ri-checkbox-circle-fill"></i> Positioning
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="ri-checkbox-circle-fill"></i> Print
                      Campaigns
                    </span>
                  </li>
                </ul>

                <Link href="/service-details">
                  <a className="default-btn">
                    <span className="ri-arrow-right-s-line"></span>Learn More
                  </a>
                </Link>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-services-item">
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
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad.
                </p>
                <ul className="features-list">
                  <li>
                    <span>
                      <i className="ri-checkbox-circle-fill"></i> E-Commerce
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="ri-checkbox-circle-fill"></i> Prototyping
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="ri-checkbox-circle-fill"></i> Positioning
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="ri-checkbox-circle-fill"></i> Platform &
                      APIs
                    </span>
                  </li>
                </ul>

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
