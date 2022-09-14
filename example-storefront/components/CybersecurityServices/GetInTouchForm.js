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

const GetInTouchForm = () => {

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
      <div className="get-in-touch-area">
        <div className="container">
          <div className="get-in-touch-inner-box ptb-100">
            <form onSubmit={handleSubmit} className="get-in-touch-form">
              <div className="row justify-content-center">
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="form-group">
                    <label>Name</label>
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      value={contact.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="form-group">
                    <label>Email</label>
                    <input
                      type="text"
                      name="email"
                      className="form-control"
                      value={contact.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="form-group">
                    <label>Subject</label>
                    <input
                      type="text"
                      name="subject"
                      className="form-control"
                      value={contact.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="form-group">
                    <label>Phone</label>
                    <input
                      type="text"
                      name="number"
                      className="form-control"
                      value={contact.number}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
 
                <div className="col-lg-12 col-md-12 col-sm-12">
                  <div className="form-group">
                    <label>Message</label>
                    <textarea
                      name="text"
                      cols="30"
                      rows="4"
                      className="form-control"
                      value={contact.text}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>
                </div>

                <div className="col-lg-12 col-md-12 col-sm-12">
                  <div className="get-in-touch-btn">
                    <button type="submit">Send Message</button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default GetInTouchForm
