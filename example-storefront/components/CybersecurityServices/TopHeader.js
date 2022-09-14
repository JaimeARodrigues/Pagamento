import React from 'react'

const TopHeader = () => {
  return (
    <>
      <div className="top-header-black-area">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-7 col-sm-7">
              <ul className="top-header-black-info">
                <li>
                  <i className="ri-phone-line"></i>
                  <a href="tel:15143125678">+1 (514) 312-5678</a>
                </li>
                <li>
                  <i className="ri-mail-line"></i>
                  <a href="mailto:hello@lofi.com">hello@lofi.com</a>
                </li>
              </ul>
            </div>

            <div className="col-lg-5 col-sm-5">
              <ul className="top-header-black-social-links">
                <li>
                  <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                    <i className="ri-facebook-fill"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.twitter.com/" target="_blank" rel="noreferrer">
                    <i className="ri-twitter-fill"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
                    <i className="ri-linkedin-fill"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                    <i className="ri-instagram-line"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TopHeader
