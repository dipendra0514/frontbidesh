import React from 'react'
import '../Contact/contact.css'
import FacebookIcon from '../../assets/facebook-icon.png'
import InstagramIcon from '../../assets/instagram.png'
import YoutubeIcon from '../../assets/youtube.png'
import TwitterIcon from '../../assets/twitter.png'

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
                    
                    <img src={TwitterIcon} alt="Twitter" className="link" />
                    <img src={YoutubeIcon} alt="Youtube" className="link" />
                    <img src={InstagramIcon} alt="Instagram" className="link" />
                </div>
            </form>

        </div>
    </section>
  )
}

export default Contact