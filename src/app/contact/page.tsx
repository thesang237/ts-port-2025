"use client"

import { useRevealer } from '@/hooks/useRevealer'

const Contact = () => {
  useRevealer()

  return (
    <>
    <div className="revealer"></div>
      <div className="contact">
        <div className="col">
          <h2>Contact Me</h2>
        </div>

        <div className="col">
          <div className="contact-copy">
            <h2>Collaborations</h2>
            <h2>thesang.work@gmail.com</h2>
          </div>

          <div className="contact-copy">
            <h2>Inquiries</h2>
            <h2>support@thesang.work</h2>
          </div>

          <div className="socials">
            <p>Instagram</p>
            <p>Twitter</p>
            <p>LinkedIn</p>
          </div>
        </div>
        </div> 
    </>
  )
}

export default Contact
