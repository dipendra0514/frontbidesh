import React, { useEffect, useRef} from 'react'
import './intro.css'
import bg from '../../../assets/image.png';
import dwnImg from '../../../assets/google playstore logo.png'
import qr from '../../../assets/qr.png'
import {Link} from 'react-scroll';


const Intro = () => {
    const elementRef = useRef(null);
  
    useEffect(() => {
      const options = {
        root: null, 
        rootMargin: '0px', 
        threshold: 0.5, 
      };
  
      const callback = (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
           
            elementRef.current.classList.add('animate');
          } else {
          
            elementRef.current.classList.remove('animate');
          }
        });
      };
  
      const observer = new IntersectionObserver(callback, options);
  
      if (elementRef.current) {
        observer.observe(elementRef.current);
      }
  
      return () => {
        if (elementRef.current) {
          observer.unobserve(elementRef.current);
        }
      };
    }, []);
  
  return(
    <section id="intro">
        <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">We are <span className="introName">Bidesh</span> <br />Your Abroad Partner.</span>
        <h6 className='h6'>Scan to Download</h6>
        <div><img src={bg}  ref={elementRef} alt="" className="bg"  /></div>
        <div className='playStore'> 
          <img src={qr} alt="" className='qr'/> 
          <a href='https://play.google.com/store/apps/details?id=com.bideshonline.bideshapp' target='_blank'><img src={dwnImg} alt=""className="dwnImg" /></a>
          </div>
        </div>
    </section>
  )
}

export default Intro;
