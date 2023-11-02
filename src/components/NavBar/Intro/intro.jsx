import React from 'react'
import './intro.css'
import bg from '../../../assets/image.png';
import dwnImg from '../../../assets/google playstore logo.png'
import qr from '../../../assets/qr.png'
import {Link} from 'react-scroll';

const Intro = () => {
  return(
    <section id="intro">
        <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">We are <span className="introName">Bidesh</span> <br />Your Abroad Partner.</span>
        <h6 className='h6'>Scan to Download</h6>
        <img src={bg} alt="" className="bg" />
        <div className='playStore'> 
          <img src={qr} alt="" className='qr' /> 
          <a href='https://play.google.com/store/apps/details?id=com.bideshonline.bideshapp' target='_blank'><img src={dwnImg} alt=""className="dwnImg" /></a>
          </div>
        </div>
    </section>
  )
}

export default Intro;
