import React from 'react'

const TokenDistribution = () => {
  return (
    <>
      <div className="token-distribution-area pb-70">
        <div className="container">
          <div className="section-title with-max-width">
            <h2>Token Distribution</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="row justify-content-center align-items-center">
            <div className="col-lg-4 col-sm-6">
              <div className="token-distribution-card">
                <img src="/images/ico-landing-home/chart.png" alt="Chart" />
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="token-distribution-card">
                <ul className="distribution-list without-wrap">
                  <li>
                    <span className="bg-0EA6EC">45%</span> Initial Coin Offering
                  </li>
                  <li>
                    <span className="bg-F07258">15%</span> Incentivisation use
                    Platform
                  </li>
                  <li>
                    <span className="bg-0AA350">10%</span> Private Investors
                  </li>
                  <li>
                    <span className="bg-EACF2A">15%</span> Business Development
                  </li>
                  <li>
                    <span className="bg-F48A1D">10%</span> Marketing & Bounty
                  </li>
                  <li>
                    <span className="bg-D72E7C">5%</span> Team Members
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="token-distribution-card">
                <div className="token-distribution-details with-black-color">
                  <div className="header">
                    <h3>Coin Details</h3>
                  </div>
                  <ul className="info-list">
                    <li className="d-flex justify-content-between align-items-center">
                      <span>Asset Name</span>
                      <span>Lofi Coin</span>
                    </li>
                    <li className="d-flex justify-content-between align-items-center">
                      <span>Ticket</span>
                      <span>Lofi</span>
                    </li>
                    <li className="d-flex justify-content-between align-items-center">
                      <span>Starting Price</span>
                      <span>$1.00</span>
                    </li>
                    <li className="d-flex justify-content-between align-items-center">
                      <span>Coin Type</span>
                      <span>Hard Cap</span>
                    </li>
                    <li className="d-flex justify-content-between align-items-center">
                      <span>Intital Supply</span>
                      <span>50K</span>
                    </li>
                    <li className="d-flex justify-content-between align-items-center">
                      <span>Max Supply</span>
                      <span>50M</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TokenDistribution
