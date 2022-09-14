import React from 'react'

const NewsletterForm = () => {
  return (
    <>
      <div className="subscribe-area pb-100">
        <div className="container">
          <div className="subscribe-inner">
            <span className="sub-title">READY TO GET STARTED</span>
            <h2>Subscribe To Our Newsletter</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>
            <form className="newsletter-form">
              <input
                type="email"
                className="input-newsletter"
                placeholder="Enter your email address"
                name="EMAIL"
                required
              />
              <button type="submit">
                Subscribe Now <i className="ri-arrow-right-s-line"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default NewsletterForm
