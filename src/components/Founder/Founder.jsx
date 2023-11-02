import React from "react";
import "../Founder/Founder.css";
import founderImg from "../../assets/founder.jpg";

const Founder = () => {
  return (
    <section id="founder">
      <div className="founderHeader">About Founder</div>
      <div className="founderMessage">
        <img src={founderImg} alt="founderImg" className="founderImg" />
            <h2 className="h3">RP Srijan "Rajendra" </h2>
        <div className="founderText">
            
          <p className="founderPara">
            Behind Bidesh stands a remarkable
            individual who knows the migrant worker journey firsthand. RP
            Srijan, also known as Rajendra, is the founder of this platform. He
            himself was a former migrant worker who has experienced the
            challenges and opportunities of working in Saudi Arabia and the UAE.
            <br />
            <br />
            In 2016, Rajendra initiated a movement of empowerment by starting
            Facebook Live sessions. These sessions were dedicated to sharing
            crucial information about the labor laws, dos, and don'ts of being a
            migrant worker in the UAE. Recognizing the need for broader
            educational efforts, he expanded his reach by creating a YouTube
            channel. Through his videos, he began to share knowledge about
            career growth, financial literacy, and updated technology skills.
            <br /> <br />
            His commitment to delivering educational and informative content has
            garnered significant attention. Rajendra's YouTube channel now
            boasts a strong community of over 385K subscribers, while his
            Facebook page has attracted more than 186K followers. His engagement
            extends to TikTok, where he has amassed an impressive following of
            95K+. <br /> <br />
            In 2018, Rajendra's dedication to the migrant worker community
            led him to join forces with Shramik Sanjal, a migrant worker-led
            organization. As a valued member of Shramik Sanjal, he has been
            collaborating to share essential information and knowledge through
            various platforms, including learning management systems (LMS) and
            social media. <br /> <br />
            Rajendra's personal journey from being a migrant
            worker to becoming a beacon of knowledge and empowerment showcases
            his deep understanding of the challenges faced by individuals
            pursuing opportunities abroad. His dedication to improving the lives
            of fellow migrant workers has shaped the foundation of Bidesh, a
            platform driven by firsthand experience and a passion for making a
            positive impact.
            <br /><br />
            -He is a 2023 Migration and Technology Monitor (MTM) Fellow.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Founder;
