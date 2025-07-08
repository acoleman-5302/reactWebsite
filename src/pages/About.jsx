import React from "react";
import "./About.css";

// About Component
const About = () => {
  return (
    <div className="about">
      <hr/>
      <div className="learn">
        <h3>Welcome to my page!</h3>
        <p>I am a pure mathematician, getting my Masters Degree at Wake Forest University. I created this website during one of my Front End Development classes in undergrad. I enjoy almost every subject. My thesis is in topology, my undergad focus was graph theory and logic, with lots of deep diving into the continuum hypothesis by Georg Cantor. For more professional information, take a quick look at my resume.</p>
        <div className="button">
          <a target="blank" href="https://drive.google.com/file/d/1GDA9VCrwzSuIi1Gu-ZmiFrUFsHUbCMtl/view?usp=drivesdk" className="btn btn-secondary ">Resume</a>
          <a target="blank" href="https://drive.google.com/file/d/1yS2bmB_7M5OWwrmlSIAESq7ealH7phTs/view?usp=sharing" className="btn btn-secondary ">Continuum Hypothesis</a>
          <a target="blank" href="https://arxiv.org/abs/2402.11381" className="btn btn-secondary ">Paper in Review for Publication</a>
          <a target="blank" href="https://oeis.org/A364237" className="btn btn-secondary ">OEIS Sequence</a>
        </div>
      </div>
      <hr/>

      <div className="card-container">
        <div className="card">
          <div className="card-header">
            Professional
          </div>
          <div className="card-body">

            <div>
              <h5 className="card-title">Education</h5>
              <ul className="card-text">
                <ul>
                  <li>In progress - Masters Degree in Pure Mathematics Thesis Track</li>
                  <li>Bachelors of Science in Pure Mathematics</li>
                </ul>
              </ul>
            </div>

            <div>
              <h5 className="card-title skills">Skills</h5>
              <ul className="card-text">
                <ul>
                  <li>Front End Development</li>
                  <li>Fluent in Haitian Creole</li>
                  <li>Leadership</li>
                </ul>
              </ul>
            </div>

            <div>
              <h5 className="card-title experience">Experience</h5>
              <ul className="card-text">
                <ul>
                  <li>Research Project Leader for undergraduates</li>
                  <li>Moravian University REU 2023</li>
                  <li>Lead Tutor for Academic Center of Enrichment</li>
                  <li>Teaching Assistant to the Math Department</li>
                </ul>
              </ul>
            </div>
          </div>
        </div>
  
        <div className="card">
          <div className="card-header">
            Personal
          </div>
          <div className="card-body">

            <div>
              <h5 className="card-title">Background</h5>
              <ul className="card-text">
                <ul>
                  <li>I grew up as a missionary kid in the country of Haiti and moved to Florida for my college career three years ago. I am founded in my faith of Christianity and believe there is one God whom through I do all things. Since moving to America, I have found such a love for the beauty within mathematics and cannot help but see the creator's brush stroke of creation through it all! </li>
                </ul>
              </ul>
            </div>

            <div>
              <h5 className="card-title">Hobbies</h5>
              <ul className="card-text">
                <ul>
                  <li>Reading</li>
                  <li>Hiking</li>
                </ul>
              </ul>
            </div>
            <div className="button">
              <a target="blank" href="https://lucielleanna02.wixsite.com/annalucielle/blogs" className="btn btn-secondary card-button">See my blog</a>
            </div>
          </div>
        </div>
      </div>

  </div>
  )
};

export default About;