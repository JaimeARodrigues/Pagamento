import React from 'react'

const FreeSEOQuotesForm = () => {
  return (
    <>
      <div className="quote-area">
        <div className="container">
          <div className="quote-content">
            <span className="sub-title">QUOTE</span>
            <h2>Free SEO Quotes Now</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <form>
              <div className="row">
                <div className="col-lg-4 col-md-3 pr-0">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your website URL"
                    />
                  </div>
                </div>
                <div className="col-lg-5 col-md-6 pl-0">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your email address"
                    />
                  </div>
                </div>
                <div className="col-lg-3 col-md-3">
                  <button type="submit">
                    Get Report <i className="ri-arrow-right-s-line"></i>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="shape11">
          <img src="/images/shape/shape10.png" alt="shape" />
        </div>
        <div className="shape12">
          <img src="/images/shape/shape11.png" alt="shape" />
        </div>
      </div>
    </>
  )
}

export default FreeSEOQuotesForm
