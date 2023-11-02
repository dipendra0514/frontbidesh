import React from 'react';
import './skills.css'
import UIDesign from '../../assets/ui-design.png'
import WebDesign from '../../assets/website-design.png'
import AppDesign from '../../assets/app-design.png'


const Skills = () => {
  return (
    <section id="skills">
        <span className="skillsTitle">What We Do?</span>
        <span className="skillsDesc"></span>
        <div className="skillsBars">
          <div className="skillBar">
            <img src={UIDesign} alt="UIDesign" className="skillBarImg" />
            <div className="skillBarText">
              <h2>Vision</h2>
              <p>
At Bidesh, we envision a world where individuals working abroad have the resources to thrive and succeed in their chosen paths. Our platform is designed to be your partner in navigating the challenges and opportunities of working in a foreign country. We see ourselves as a bridge that connects you with the knowledge necessary to make the best choices for your career and life abroad.
</p>
            </div>
          </div>
        
          <div className="skillBar">
            <img src={WebDesign} alt="WebDesign" className="skillBarImg" />
            <div className="skillBarText">
              <h2>Mission</h2>
              <p>Welcome to Bidesh! Our mission is to empower both aspiring migrant workers and those who are already abroad with the information they need to make informed choices about their work and lives. Whether you're considering going abroad for work or you're already there, our aim is to provide you with essential insights that enhance your decision-making process. We're here to support you every step of the way.

</p>
            </div>
         </div>
        
          {/* <div className="skillBar">
            <img src={AppDesign} alt="AppDesign" className="skillBarImg" />
            <div className="skillBarText">
              <h2>Goal</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur laborum amet itaque beatae deserunt aspernatur!</p>
            </div> */}
          {/* </div> */}
        </div>
        
    </section>
    
  )
}

export default Skills