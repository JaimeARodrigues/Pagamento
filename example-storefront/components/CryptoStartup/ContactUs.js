import React, { useState } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)
import baseUrl from '@/utils/baseUrl'

const alertContent = () => {
  MySwal.fire({
    title: 'Congratulations!',
    text: 'Your message was successfully send and will back to you soon',
    icon: 'success',
    timer: 2000,
    timerProgressBar: true,
    showConfirmButton: false,
  })
}

// Form initial state
const INITIAL_STATE = {
  name: '',
  email: '',
  number: '',
  subject: '',
  text: '',
}

const ContactUs = () => {

  const [contact, setContact] = useState(INITIAL_STATE)

  const handleChange = (e) => {
    const { name, value } = e.target
    setContact((prevState) => ({ ...prevState, [name]: value }))
    // console.log(contact)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const url = `${baseUrl}/api/contact`
      const { name, email, number, subject, text } = contact
      const payload = { name, email, number, subject, text }
      const response = await axios.post(url, payload)
      console.log(response)
      setContact(INITIAL_STATE)
      alertContent()
    } catch (error) {
      console.log(error)
    }
  }
  
  return (
    <>
      <div className="contact-us-area ptb-100">
        <div className="container">
          <div className="contact-us-inner-box">
            <div className="row align-items-center">
              <div className="col-lg-8 col-md-12">
                <div className="contact-form-wrap">
                  <h2>Contact Us</h2>

                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="text"
                            name="name"
                            className="form-control"
                            placeholder="Name"
                            value={contact.name}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="text"
                            name="email"
                            className="form-control"
                            placeholder="Email"
                            value={contact.email}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>
                    </div>

                    <div className="form-group">
                      <input
                        type="text"
                        name="subject"
                        className="form-control"
                        placeholder="Subject"
                        value={contact.subject}
                        onChange={handleChange}
                        required
                      />
                    </div>
 
                    <div className="form-group">
                      <input
                        type="text"
                        name="number"
                        className="form-control"
                        value={contact.number}
                        onChange={handleChange}
                        placeholder="Phone number"
                        required
                      />
                    </div>
 
                    <div className="form-group">
                      <textarea
                        name="text"
                        rows="5"
                        className="form-control"
                        placeholder="Message..."
                        value={contact.text}
                        onChange={handleChange}
                        required
                      ></textarea>
                    </div>

                    <div className="contact-us-btn">
                      <button type="submit" className="default-btn style-two">
                        <span className="ri-arrow-right-s-line"></span>Send
                        Message
                      </button>
                    </div>
                  </form>
                </div>
              </div>

              <div className="col-lg-4 col-md-12">
                <div className="get-in-touch-information">
                  <h4>Get in Touch</h4>

                  <ul className="information-list">
                    <li>
                      <i className="ri-map-pin-line"></i>
                      Address: 2750, Quadra Street Victoria, Canada
                    </li>
                    <li>
                      <i className="ri-phone-line"></i>
                      <a href="tel:+44587154756">+44 587 154756</a>
                      <a href="tel:+55587154756">+55 58715 4756</a>
                    </li>
                    <li>
                      <i className="ri-mail-line"></i>
                      <a href="mailto:hello@lofi.com">hello@lofi.com</a>
                      <a href="mailto:lofi@info.com">lofi@info.com</a>
                    </li>
                    <li>
                      <i className="ri-time-line"></i>
                      <span>Opening Hours:</span> 7:00am - 10:00pm Open 7 Days a
                      Week
                    </li>
                  </ul>
                  <div className="get-in-touch-shape">
                    <img
                      src="/images/crypto-startup/get-in-touch-shape.png"
                      alt="image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactUs
