import React from 'react'

const ContactInfo = () => {
  return (
    <>
      <div className="pt-100 pb-70">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-3 col-sm-6 col-md-6">
              <div className="single-contact-info-box text-center">
                <div className="icon">
                  <i className="ri-map-pin-2-line"></i>
                </div>
                <h3>Address:</h3>
                <p>2750 Open Space, Quadra Street Line Victoria, Canada</p>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 col-md-6">
              <div className="single-contact-info-box text-center">
                <div className="icon">
                  <i className="ri-time-line"></i>
                </div>
                <h3>Working Hours:</h3>
                <p>
                  Open Saturday to Friday
                  <br />
                  From 06:00 PM to 20:00 AM
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 col-md-6">
              <div className="single-contact-info-box text-center">
                <div className="icon">
                  <i className="ri-mail-unread-line"></i>
                </div>
                <h3>Email Address:</h3>
                <p>
                  <a href="mailto:hello@lofi.com">hello@lofi.com</a>
                  <br />
                  <a href="mailto:info@lofi.com">info@lofi.com</a>
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 col-md-6">
              <div className="single-contact-info-box text-center">
                <div className="icon">
                  <i className="ri-phone-line"></i>
                </div>
                <h3>Toll Free:</h3>
                <p>
                  <a href="tel:+44587154756">+44 587 154756</a>
                  <br />
                  <a href="tel:+44587154756">+55 58715 4756</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactInfo
