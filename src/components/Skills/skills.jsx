import React from 'react';
import './skills.css'
import UIDesign from '../../assets/ui-design.png'
import WebDesign from '../../assets/website-design.png'
import AppDesign from '../../assets/app-design.png'


const Skills = () => {
  return (
    <section id="skills">
        <span className="skillsTitle">What We Do?</span>
        <span className="skillsDesc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga alias ipsam molestiae reiciendis earum illum aut, animi labore iusto ab! Cum expedita totam nisi accusamus quasi dolorem repellendus odio illum?</span>
        <div className="skillsBars">
          <div className="skillBar">
            <img src={UIDesign} alt="UIDesign" className="skillBarImg" />
            <div className="skillBarText">
              <h2>Vision</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum tempora eius accusantium explicabo vero enim?</p>
            </div>
          </div>
        
          <div className="skillBar">
            <img src={WebDesign} alt="WebDesign" className="skillBarImg" />
            <div className="skillBarText">
              <h2>Mission</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consectetur autem, nulla maxime esse expedita.</p>
            </div>
         </div>
        
          <div className="skillBar">
            <img src={AppDesign} alt="AppDesign" className="skillBarImg" />
            <div className="skillBarText">
              <h2>Goal</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur laborum amet itaque beatae deserunt aspernatur!</p>
            </div>
          </div>
        </div>
        
    </section>
    
  )
}

export default Skills