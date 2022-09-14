import React from 'react'

const DownloadApp = () => {
  return (
    <>
      <div className="download-app-area">
        <div className="container">
          <div className="download-app-inner-box">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-12">
                <div className="download-app-content">
                  <span className="sub-title">Download App</span>
                  <h3>
                    Download Your Free Copy Today From Apple And Play Store
                  </h3>

                  <ul className="app-list">
                    <li>
                      <a href="https://play.google.com/store/apps" target="_blank" rel="noreferrer">
                        <img
                          src="/images/crypto-startup/download-app/app-1.png"
                          alt="image"
                        />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.apple.com/app-store/" target="_blank" rel="noreferrer"> 
                        <img
                          src="/images/crypto-startup/download-app/app-2.png"
                          alt="image"
                        />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-6 col-md-12">
                <div className="download-app-image">
                  <img
                    src="/images/crypto-startup/download-app/download-app.png"
                    alt="image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default DownloadApp
