import React , { useEffect, useRef} from 'react'
import '../Service/Service.css'
import loginImg from '../../assets/login.png'
import loginImg1 from '../../assets/info.png'
import loginImg2 from '../../assets/qna.png'



const Service = () => {
  const elementRef = useRef (null);  
  useEffect(() => {
    const options = {
      root: null, 
      rootMargin: '0px', 
      threshold: 0.5, 
    };

    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
         
          elementRef.current.classList.add('animate1');
        } else {
        
          elementRef.current.classList.remove('animate1');
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


  const elementRef1 = useRef (null);  
  useEffect(() => {
    const options = {
      root: null, 
      rootMargin: '0px', 
      threshold: 0.5, 
    };

    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
         
          elementRef1.current.classList.add('animate1');
        } else {
        
          elementRef1.current.classList.remove('animate1');
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);

    if (elementRef1.current) {
      observer.observe(elementRef1.current);
    }

    return () => {
      if (elementRef1.current) {
        observer.unobserve(elementRef1.current);
      }
    };
  }, []);

  const elementRef2 = useRef (null);  
  useEffect(() => {
    const options = {
      root: null, 
      rootMargin: '0px', 
      threshold: 0.5, 
    };

    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
         
          elementRef2.current.classList.add('animate2');
        } else {
        
          elementRef2.current.classList.remove('animate2');
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);

    if (elementRef2.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef2.current) {
        observer.unobserve(elementRef2.current);
      }
    };
  }, []);


  return (
    <section id="service">
      <div className="serviceContents">
        How the app works</div>
        
      <div className="serviceContent">
        <img src={loginImg} alt="loginImg" ref={elementRef} className='serviceContentImg' />
        <div className="serviceText">
          <h3 className='h4'>Create an account</h3>
          <br />
          <h2>Create/login to an existing accunt to get started</h2>
          <p className='p'>An account is created with your email and a desired password.</p>
        </div>

        
        
      </div>

      <div className="serviceContent1">
        <img src={loginImg1} alt="loginImg" ref={elementRef2} className='serviceContentImg1' />
        <div className="serviceText1">
          <h3 className='h4'>Explore Journey</h3>
          <br />
          <h2>Find your favorite country news and updates</h2>
          <p className='p'>Read the latest updates and news about the country you to visit.</p>
        </div>
      </div>

      <div className="serviceContent">
        <img src={loginImg2} alt="loginImg" className='serviceContentImg'  ref={elementRef1} />
        <div className="serviceText">
          <h3 className='h4'>Ask you Queries</h3>
          <br />
          <h2>Ask any questions that you want to know more about.</h2>
         
          <p className='p'>Receive the personalised answer to your question.</p>
        </div>
      </div>
    </section>
  )
}

export default Service