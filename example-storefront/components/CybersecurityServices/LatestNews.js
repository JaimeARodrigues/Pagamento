import React from 'react'
import Link from 'next/link'

const LatestNews = () => {
  return (
    <>
      <div className="blog-style-area pb-70">
        <div className="container">
          <div className="section-title with-max-width">
            <h2>Latest News</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="row justify-content-center">
            <div 
              className="col-lg-4 col-md-6" 
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1200"
              data-aos-once="true"
            >
              <div className="blog-style-card">
                <div className="blog-image">
                  <Link href="/blog-details">
                    <a>
                      <img
                        src="/images/cybersecurity-services/blog/blog-1.jpg"
                        alt="image"
                      />
                    </a>
                  </Link>
                </div>
                <div className="blog-content">
                  <ul className="meta">
                    <li>
                      By <a href="#">Admin</a>
                    </li>
                    <li>March 15, 2022</li>
                  </ul>
                  <h3>
                    <Link href="/blog-details">
                      <a>
                        Proper Guide Line Learning Strategies About Cyber
                        Security
                      </a>
                    </Link>
                  </h3>
                </div>
              </div>
            </div>

            <div 
              className="col-lg-4 col-md-6" 
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="1200"
              data-aos-once="true"
            >
              <div className="blog-style-card">
                <div className="blog-image">
                  <Link href="/blog-details">
                    <a>
                      <img
                        src="/images/cybersecurity-services/blog/blog-2.jpg"
                        alt="image"
                      />
                    </a>
                  </Link>
                </div>
                <div className="blog-content">
                  <ul className="meta">
                    <li>
                      By <a href="#">Admin</a>
                    </li>
                    <li>March 15, 2022</li>
                  </ul>
                  <h3>
                    <Link href="/blog-details">
                      <a>Rules To Protect Your Account From Cyber Attack</a>
                    </Link>
                  </h3>
                </div>
              </div>
            </div>

            <div 
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="600"
              data-aos-duration="1200"
              data-aos-once="true"
            >
              <div className="blog-style-card">
                <div className="blog-image">
                  <Link href="/blog-details">
                    <a>
                      <img
                        src="/images/cybersecurity-services/blog/blog-3.jpg"
                        alt="image"
                      />
                    </a>
                  </Link>
                </div>
                <div className="blog-content">
                  <ul className="meta">
                    <li>
                      By <a href="#">Admin</a>
                    </li>
                    <li>March 15, 2022</li>
                  </ul>
                  <h3>
                    <Link href="/blog-details">
                      <a>
                        Rules For Introducing Web Code To Increase Cyber
                        Security
                      </a>
                    </Link>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="blog-style-shape">
          <img src="/images/cybersecurity-services/blog/shape.png" alt="image" />
        </div>
      </div>
    </>
  )
}

export default LatestNews
