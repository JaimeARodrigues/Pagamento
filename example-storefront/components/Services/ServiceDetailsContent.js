import React from 'react'
import ServiceSidebar from './ServiceSidebar';

const ServiceDetailsContent = () => {
  return (
    <>
      <div className="ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="service-details-content">
                <img src="/images/services/services2.jpg" alt="Services Images" />

                <h3>Partnership Ecosystem</h3>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <p>
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                  dolor in reprehenderit in voluptate velit esse cillum dolore eu
                  fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                  proident, sunt in culpa qui officia deserunt mollit anim id est
                  laborum.
                </p>

                <h3>Analysises of Business</h3>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                  quae ab illo inventore veritatis et quasi architecto beatae
                  vitae dicta sunt explicabo.{' '}
                </p>

                <ul>
                  <li>Cost of supplies and equipment point</li>
                  <li>Change the volume of expected of contact</li>
                  <li>Bibend auctor nisi elit volume are so beguiled</li>
                  <li>Quickly maximize timely deliverables</li>
                </ul>

                <h3>Benefit of Service</h3>
                <p>
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                  aut fugit, sed quia consequuntur magni dolores eos qui ratione
                  voluptatem sequi nesciunt.
                </p>

                <ul>
                  <li>Objectively innovate empowered manufactured</li>
                  <li>Holisticly predominate extensible</li>
                  <li>Procedures for reliable supply chains</li>
                  <li>Quickly maximize timely deliverables</li>
                </ul>

                <p>
                  But I must explain to you how all this mistaken idea of
                  denouncing pleasure and praising pain was born and I will give
                  you a complete account of the system, and expound the actual
                  teachings of the great explorer of the truth, the master-builder
                  of human happiness. No one rejects, dislikes, or avoids pleasure
                  itself, because it is pleasure, but because those who do not
                  know how to pursue pleasure rationally encounter consequences
                  that are extremely painful.
                </p>
              </div>
            </div>

            <div className="col-lg-4">
              <ServiceSidebar />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ServiceDetailsContent
