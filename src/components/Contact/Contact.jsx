import React from 'react'
import '../Contact/contact.css'
import FacebookIcon from '../../assets/facebook-icon.png'
import Tiktokicon from '../../assets/tiktok.png'
import YoutubeIcon from '../../assets/youtube.png'
import LinkedinIcon from '../../assets/linkedin.png'

const Contact = () => {
  return (
    <section className="contactPage">
        <div id="contact">
            <div className="contactPageTitle">Contact Me</div>
            <span className="contactDesc">
                Please fill up the form below to discuss with us.
            </span>
            <form className="contactForm">
                <input type="text" className="name" placeholder='Your Name' />
                <input type="email" className="email" placeholder='Yout Email' />
                <textarea className='msg' name="message" rows="5" placeholder='Your Message'></textarea>
                <button type='submit' value='send' className="submitBtn">Submit</button>
                <div className="links">
                    <a href="https://www.facebook.com/rpsrijanofficial"> <img src={FacebookIcon} alt="Facebook" className="link" /></a>
                    <a href="https://www.linkedin.com/in/rpsrijan"> <img src={LinkedinIcon} alt="Linkedin" className="link" /></a>
                    <a href="https://www.youtube.com/@rp.srijan"> <img src={YoutubeIcon} alt="Youtube" className="link" /></a>
                    <a href="https://www.tiktok.com/@rpsrijan">  <img src={Tiktokicon} alt="Tiktok" className="link" /></a>
                   
                </div>
            </form>

        </div>
    </section>
  )
}

export default Contact