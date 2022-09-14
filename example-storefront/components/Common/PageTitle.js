import React from 'react'
import Link from 'next/link'

const PageTitle = ({ pageTitle, homeText }) => {
  return (
    <div className="page-title-area">
      <div className="container">
        <div className="page-title-content text-center">
          <h1>{pageTitle}</h1>
          <ul>
            <li>
              <Link href="/">
                <a>{homeText}</a>
              </Link>
            </li>
            <li>{pageTitle}</li>
          </ul>
        </div>
      </div>
      <div className="shape1">
        <img src="/images/shape/shape1.png" alt="image" />
      </div>
      <div className="shape3">
        <img src="/images/shape/shape2.png" alt="image" />
      </div>
    </div>
  )
}

export default PageTitle
