import React from 'react'
import '../Service/Service.css'
import loginImg from '../../assets/login.png'
import loginImg1 from '../../assets/info.png'
import loginImg2 from '../../assets/qna.png'



const Service = () => {
  return (
    <section id="service">
      <div className="serviceContents">
        How the app works</div>
        
      <div className="serviceContent">
        <img src={loginImg} alt="loginImg" className='serviceContentImg' />
        <div className="serviceText">
          <h3 className='h4'>Create an account</h3>
          <br />
          <h2>Create/login to an existing accunt to get started</h2>
          <p className='p'>An account is created with your email and a desired password.</p>
        </div>

        
        
      </div>

      <div className="serviceContent1">
        <img src={loginImg1} alt="loginImg" className='serviceContentImg1' />
        <div className="serviceText1">
          <h3 className='h4'>Explore Journey</h3>
          <br />
          <h2>Find your favorite country news and updates</h2>
          <p className='p'>Read the latest updates and news about the country you to visit.</p>
        </div>
      </div>

      <div className="serviceContent">
        <img src={loginImg2} alt="loginImg" className='serviceContentImg' />
        <div className="serviceText">
          <h3 className='h4'>Create an account</h3>
          <br />
          <h2>Create/login to an existing account to get started</h2>
         
          <p className='p'>An account is created with your email and a desired password.</p>
        </div>
      </div>
s
    </section>
  )
}

export default Service