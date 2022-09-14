import React from 'react'
import Link from 'next/link'

const ComparePlans = () => {
  return (
    <>
      <div className="plans-compare-area ptb-100">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">COMPARE PLANS</span>
            <h2>Plans For Everything, Plans Details</h2>
          </div>
          <div className="plans-compare-table table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Features</th>
                  <th scope="col">Free</th>
                  <th scope="col">Starter</th>
                  <th scope="col">Team</th>
                  <th scope="col">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Seats</td>
                  <td>1</td>
                  <td>1</td>
                  <td>3+</td>
                  <td>10+</td>
                </tr>
                <tr>
                  <td>Active projects</td>
                  <td>1</td>
                  <td>3</td>
                  <td>10</td>
                  <td>Unlimited</td>
                </tr>
                <tr>
                  <td>Viewers</td>
                  <td>Unlimited</td>
                  <td>Unlimited</td>
                  <td>Unlimited</td>
                  <td>Unlimited</td>
                </tr>
                <tr>
                  <td>No. of blocks</td>
                  <td>10</td>
                  <td>Unlimited</td>
                  <td>Unlimited</td>
                  <td>Unlimited</td>
                </tr>
                <tr>
                  <td>Conditions</td>
                  <td>-</td>
                  <td>
                    <i className="ri-checkbox-circle-line"></i>
                  </td>
                  <td>
                    <i className="ri-checkbox-circle-line"></i>
                  </td>
                  <td>
                    <i className="ri-checkbox-circle-line"></i>
                  </td>
                </tr>
                <tr>
                  <td>CSV export</td>
                  <td>-</td>
                  <td>
                    <i className="ri-checkbox-circle-line"></i>
                  </td>
                  <td>
                    <i className="ri-checkbox-circle-line"></i>
                  </td>
                  <td>
                    <i className="ri-checkbox-circle-line"></i>
                  </td>
                </tr>
                <tr>
                  <td>Password protection</td>
                  <td>-</td>
                  <td>
                    <i className="ri-checkbox-circle-line"></i>
                  </td>
                  <td>
                    <i className="ri-checkbox-circle-line"></i>
                  </td>
                  <td>
                    <i className="ri-checkbox-circle-line"></i>
                  </td>
                </tr>
                <tr>
                  <td>Team management</td>
                  <td>-</td>
                  <td>-</td>
                  <td>
                    <i className="ri-checkbox-circle-line"></i>
                  </td>
                  <td>
                    <i className="ri-checkbox-circle-line"></i>
                  </td>
                </tr>
                <tr>
                  <td>Customization</td>
                  <td>-</td>
                  <td>-</td>
                  <td>
                    <i className="ri-checkbox-circle-line"></i>
                  </td>
                  <td>
                    <i className="ri-checkbox-circle-line"></i>
                  </td>
                </tr>
                <tr>
                  <td>Legal Block</td>
                  <td>Add-On</td>
                  <td>Add-On</td>
                  <td>Add-On</td>
                  <td>Add-On</td>
                </tr>
                <tr>
                  <td>Dedicated CSM</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>
                    <Link href="/contact">
                      <a>Get A Quote</a>
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>Dedicated onboarding</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>
                    <Link href="/contact">
                      <a>Get A Quote</a>
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>Priority support</td>
                  <td>Unlimited</td>
                  <td>Unlimited</td>
                  <td>Unlimited</td>
                  <td>
                    <Link href="/contact">
                      <a>Get A Quote</a>
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>Custom payment terms</td>
                  <td>Add-On</td>
                  <td>-</td>
                  <td>-</td>
                  <td>
                    <Link href="/contact">
                      <a>Get A Quote</a>
                    </Link>
                  </td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td>
                    Need more information? <a href="#">Contact Us</a>
                  </td>
                  <td>
                    <Link href="/pricing">
                      <a className="link-btn">
                        Get Started
                      </a>
                    </Link>
                  </td>
                  <td>
                    <Link href="/pricing">
                      <a className="link-btn">
                        Get Started
                      </a>
                    </Link>
                  </td>
                  <td>
                    <Link href="/pricing">
                      <a className="link-btn">
                        Get Started
                      </a>
                    </Link>
                  </td>
                  <td>
                    <Link href="/pricing">
                      <a className="link-btn">
                        Get Started
                      </a>
                    </Link>
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default ComparePlans
