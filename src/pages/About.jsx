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

        <div className="center-buttons">
          <a target="blank" href="https://drive.google.com/file/d/1GDA9VCrwzSuIi1Gu-ZmiFrUFsHUbCMtl/view?usp=drivesdk" className="btn btn-secondary ">Resume</a>
          <a target="blank" href="https://drive.google.com/file/d/1FSt7pC6Rlym61ykF1G65yDSqNUwTTK8D/view?usp=drivesdk" className="btn btn-secondary ">Paired (n − 1)-to-(n − 1) Disjoint Path Covers in Bipartite Transposition-Like Graphs</a>
          <a target="blank" href="https://drive.google.com/file/d/1TrwiIGhHVGXOl-VHyCchcqOhkKAAg0PS/view?usp=drivesdk" className="btn btn-secondary ">Hexagonal Mosaics Knot Theory JMM 2026 Talk</a>
          <a target="blank" href="https://oeis.org/A364237" className="btn btn-secondary ">OEIS Sequence</a>
          <a target="blank" href="https://drive.google.com/file/d/1yS2bmB_7M5OWwrmlSIAESq7ealH7phTs/view?usp=sharing" className="btn btn-secondary ">Continuum Hypothesis</a>
                 
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
                  <li>In progress - Masters Degree in Pure Mathematics Thesis Track in knot theory with Hugh Howards</li>
                  <li>Bachelors of Science in Pure Mathematics</li>
                </ul>
              </ul>
            </div>

            <div>
              <h5 className="card-title skills">Skills</h5>
              <ul className="card-text">
                <ul>
                  <li>Coding (This Website is Hard Coded!)</li>
                  <li>Fluent in Haitian Creole</li>
                  <li>Leadership</li>
                </ul>
              </ul>
            </div>

            <div>
              <h5 className="card-title experience">Experience</h5>
              <ul className="card-text">
                <ul>
                  <li>Lead TA for Wake Forest University</li>
                  <li>Research Project Leader for undergraduates</li>
                  <li>Moravian University REU 2023</li>
                  <li>Lead Tutor for Academic Center of Enrichment</li>
                  <li>Teaching Assistant to the Math Department at Southeastern University</li>
                </ul>
              </ul>
            </div>
          </div>
        </div>
 
        <div className="card">
          <div className="card-header">
            People I have worked with
          </div>

          <div className="card-body">
          <div>
              <h5 className="card-title">Tony Wong</h5>
              <ul className="card-text">
                <ul>
                  <li>He is a professor at Kutztown University. We worked together on two projects, one of which was published. We studied sero-sum-free graphs and hypertori together. He was my REU mentor, and continues to pour into my academic career. </li>
                </ul>
              </ul>
            </div>

          <div>
              <h5 className="card-title">Joshua Harrington</h5>
              <ul className="card-text">
                <ul>
                  <li>He currently works at Cedar Crest College. Similar story to Tony Wong. We worked on the same projects together. </li>
                </ul>
              </ul>
            </div>

          <div>
            <h5 className="card-title">Hugh Howards</h5>
            <ul className="card-text">
              <ul>
                <li>He was my graduate thesis advisor. We worked together in knot theory. Specifically, we worked together on hexagonal mosaics. The paper is still in progress, but my JMM talk can be found above. Dr. Howards received his PhD from University of San Diego under Mike Freedman. He also learned from Colin Adams in his undergraduate degree. </li>
              </ul>
            </ul>
          </div>

          <div>
              <h5 className="card-title">Prefer to remain unnamed</h5>
              <ul className="card-text">
                <ul>
                  <li> Three undergraduates, who worked with me at Wake Forest University on playing chess on a torus. This was through our Research Training Program led by Dr. Abbey Bourdon. </li>
                </ul>
              </ul>
            </div>

            <div>
              <h5 className="card-title">Berhane Ghaim</h5>
              <ul className="card-text">
                <ul>
                  <li>He was my undergraduate thesis advisor. He got his PhD from Kent University in Functional Analysis. He taught me to first learn and love analysis. He oversaw my senior capstone, which extended an REU project. </li>
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
                  <li>Reading: Favorite Author is Dostoevsky</li>
                  <li>Hiking/Camping</li>
                </ul>
              </ul>
            </div>
            <div className="button center-buttons">
              <a target="blank" href="https://lucielleanna02.wixsite.com/annalucielle/blogs" className="btn btn-secondary card-button">See my personal blog</a>
            </div>
          </div>
        </div>
      </div>


  </div>
  )
};

export default About;