import React from 'react'
import Link from 'next/link'

const BlogCard = () => {
  return (
    <>
      <div className="blog-area ptb-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-blog-post">
                <div className="image">
                  <Link href="/blog-details">
                    <a className="d-block">
                      <img src="/images/blog/blog1.jpg" alt="image" />
                    </a>
                  </Link>
                  <span className="date">March 20, 2022</span>
                </div>
                <div className="content">
                  <h3>
                    <Link href="/blog-details">
                      <a>Resources for Teachers</a>
                    </Link>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam.
                  </p>

                  <Link href="/blog-details">
                    <a className="default-btn">
                      <span className="ri-arrow-right-s-line"></span>Read More
                    </a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-blog-post">
                <div className="image">
                  <Link href="/blog-details">
                    <a className="d-block">
                      <img src="/images/blog/blog4.jpg" alt="image" />
                    </a>
                  </Link>
                  <span className="date">March 19, 2022</span>
                </div>
                <div className="content">
                  <h3>
                    <Link href="/blog-details">
                      <a>Instructional Strategies</a>
                    </Link>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam.
                  </p>
                  <Link href="/blog-details">
                    <a className="default-btn">
                      <span className="ri-arrow-right-s-line"></span>Read More
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-blog-post">
                <div className="image">
                  <Link href="/blog-details">
                    <a className="d-block">
                      <img src="/images/blog/blog5.jpg" alt="image" />
                    </a>
                  </Link>
                  <span className="date">March 18, 2022</span>
                </div>
                <div className="content">
                  <h3>
                    <Link href="/blog-details">
                      <a>Fitness Guideline Program</a>
                    </Link>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam.
                  </p>
                  <Link href="/blog-details">
                    <a className="default-btn">
                      <span className="ri-arrow-right-s-line"></span>Read More
                    </a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-blog-post">
                <div className="image">
                  <Link href="/blog-details">
                    <a className="d-block">
                      <img src="/images/blog/blog6.jpg" alt="image" />
                    </a>
                  </Link>
                  <span className="date">March 19, 2022</span>
                </div>
                <div className="content">
                  <h3>
                    <Link href="/blog-details">
                      <a>Content Writing Resources</a>
                    </Link>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam.
                  </p>
                  <Link href="/blog-details">
                    <a className="default-btn">
                      <span className="ri-arrow-right-s-line"></span>Read More
                    </a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-blog-post">
                <div className="image">
                  <Link href="/blog-details">
                    <a className="d-block">
                      <img src="/images/blog/blog7.jpg" alt="image" />
                    </a>
                  </Link>
                  <span className="date">March 20, 2022</span>
                </div>
                <div className="content">
                  <h3>
                    <Link href="/blog-details">
                      <a>Social Marketing Resources</a>
                    </Link>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam.
                  </p>
                  <Link href="/blog-details">
                    <a className="default-btn">
                      <span className="ri-arrow-right-s-line"></span>Read More
                    </a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-blog-post">
                <div className="image">
                  <Link href="/blog-details">
                    <a className="d-block">
                      <img src="/images/blog/blog8.jpg" alt="image" />
                    </a>
                  </Link>
                  <span className="date">March 20, 2022</span>
                </div>
                <div className="content">
                  <h3>
                    <Link href="/blog-details">
                      <a>Video Marketing Resources</a>
                    </Link>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam.
                  </p>
                  <Link href="/blog-details">
                    <a className="default-btn">
                      <span className="ri-arrow-right-s-line"></span>Read More
                    </a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="pagination-area">
                  <div className="nav-links">
                      <span className="page-numbers current">1</span>
                      <a href="#" className="page-numbers">2</a>
                      <a href="#" className="page-numbers">3</a>
                      <a href="#" className="next page-numbers" title="Next Page">
                        <i className="ri-arrow-right-line"></i>
                      </a>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default BlogCard
