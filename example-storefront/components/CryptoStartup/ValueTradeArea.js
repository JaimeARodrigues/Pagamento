import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper'

const ValueTradeArea = () => {
  return (
    <>
      <div className="value-trade-area">
        <div className="container-fluid">
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
                slidesPerView: 8,
              },
            }}
            modules={[Autoplay]}
            className="mySwiper value-trade-slides"
          >
            <SwiperSlide>
              <div className="value-trade-card">
                <img
                  src="/images/crypto-startup/value-trade/trade-1.png"
                  alt="image"
                />
                <h3>
                  <span>Bitcoin</span> $38,320.15
                </h3>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="value-trade-card">
                <img
                  src="/images/crypto-startup/value-trade/trade-2.png"
                  alt="image"
                />
                <h3>
                  <span>Ethereum</span> $2,537
                </h3>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="value-trade-card">
                <img
                  src="/images/crypto-startup/value-trade/trade-3.png"
                  alt="image"
                />
                <h3>
                  <span>Tether</span> $1.00
                </h3>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="value-trade-card">
                <img
                  src="/images/crypto-startup/value-trade/trade-4.png"
                  alt="image"
                />
                <h3>
                  <span>BNB</span> $375.28
                </h3>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="value-trade-card">
                <img
                  src="/images/crypto-startup/value-trade/trade-5.png"
                  alt="image"
                />
                <h3>
                  <span>XRP</span> $0.7435
                </h3>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="value-trade-card">
                <img
                  src="/images/crypto-startup/value-trade/trade-6.png"
                  alt="image"
                />
                <h3>
                  <span>Terra</span> $81.47
                </h3>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="value-trade-card">
                <img
                  src="/images/crypto-startup/value-trade/trade-7.png"
                  alt="image"
                />
                <h3>
                  <span>Cardano</span> $0.8151
                </h3>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="value-trade-card">
                <img
                  src="/images/crypto-startup/value-trade/trade-8.png"
                  alt="image"
                />
                <h3>
                  <span>Avalanche</span> $74.02
                </h3>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="value-trade-card">
                <img
                  src="/images/crypto-startup/value-trade/trade-9.png"
                  alt="image"
                />
                <h3>
                  <span>Dogecoin</span> $0.1199
                </h3>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="value-trade-card">
                <img
                  src="/images/crypto-startup/value-trade/trade-10.png"
                  alt="image"
                />
                <h3>
                  <span>USD Coin</span> $0.9996
                </h3>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="value-trade-card">
                <img
                  src="/images/crypto-startup/value-trade/trade-11.png"
                  alt="image"
                />
                <h3>
                  <span>Cosmos</span> $27.82
                </h3>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  )
}

export default ValueTradeArea
