import React from 'react'
import './intro.css'
import bg from '../../../assets/image.png';
import {Link} from 'react-scroll';
import btnImg from '../../../assets/hireme.png'

const Intro = () => {
  return(
    <section id="intro">
        <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">We are <span className="introName">Bidesh</span> <br />Your Abroad Partner.</span>
         <img src={bg} alt="" className="bg" />
        </div>
    </section>
  )
}

export default Intro;
