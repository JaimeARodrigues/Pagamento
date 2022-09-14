import React from 'react';
import Link from 'next/link';

const ServiceSidebar = () => {
    return (
		<>
			<div className="service-sidebar"> 
                <div className="sidebar-box">
                    <h3>Services List</h3>
                    <ul>
                        <li>
                            <Link href="/service-details">
                                <a>Branding <i className="ri-arrow-right-line"></i></a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/service-details">
                                <a>Design <i className="ri-arrow-right-line"></i></a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/service-details">
                                <a>Content <i className="ri-arrow-right-line"></i></a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/service-details">
                                <a>Strategy <i className="ri-arrow-right-line"></i></a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/service-details">
                                <a>Marketing <i className="ri-arrow-right-line"></i></a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/service-details">
                                <a>Technology <i className="ri-arrow-right-line"></i></a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
		</>
    );
}

export default ServiceSidebar;