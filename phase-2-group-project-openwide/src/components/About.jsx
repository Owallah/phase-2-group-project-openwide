import React from 'react'
import glory from '../assets/glory.jpeg'
import brian from '../assets/brian.jpeg'
import salad from '../assets/salad.jpeg'
import johnson from '../assets/johnson.jpeg'

const About = () => {
  return (
    <section className='section-white'>
      <div className='container mt-5'>
        <div className="row">
          <div className="col-md-12 text-center">
            <h2 className="section-title">
              The Awesome Team Behind BeatRoute
            </h2>
            <p className="section-subtitle">
              The ideation and realization of this project was brought to succes by: <br /> The members of <span id='group-name'>group 3</span>. <br />
              These members worked tirelessly to make sure you have a fully functional app that suites your music needs. <br />
              They are presented bellow:
              </p>
          </div>
          <div className="col-sm-6 col-md-4">
            <div className="team-item">
              <img className='team-img' src={glory} alt="Glory Nkatha" />
              <h3>Glory Nkatha</h3>
              <div className="team-info">
                <p>Senior React Dev <br />Senior UI/UX Designer</p>
                <p>Meet Glory, a passionate young developer with a keen eye for design and a mastery of front-end development. <br /> With a toolbox full of cutting-edge technologies, she's fully equipped to take on any challenge and bring your website to life. <br /> From responsive layouts to dynamic animations, Glory's got you covered.</p>

                <ul className="team-icons">
                  <li>
                    <a href="#" target='_blank' className='twitter'>
                      <i className="fa fa-twitter">
                      </i>
                      </a>
                  </li>
                  <li>
                  <a href="https://github.com/Nkathaglow" target='_blank' className='github'>
                      <i className="fa fa-github">
                      </i>
                      </a>
                  </li>
                  <li>
                  <a href="#" target='_blank' className='linkedin'>
                      <i className="fa fa-linkedin">
                      </i>
                      </a>
                  </li>
                  <li>
                  <a href="#" target='_blank' className='facebook'>
                      <i className="fa fa-facebook">
                      </i>
                      </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="team-item">
              <img className='team-img' src={brian} alt="Brian Rono" />
              <h3>Brian Rono</h3>
              <div className="team-info">
                <p>Full Stack <br /> Software Eng</p>
                <p>Here is <strong>Brian Rono</strong>, a highly interested and diverse individual with a passion for programming and staying updated with the latest technology trends. I thrive on innovation and constantly strive to push the boundaries of what's possible in software development</p>

                <ul className="team-icons">
                  <li>
                    <a href="https://twitter.com/brian_kipkorir_" target='_blank' className='twitter'>
                      <i className="fa fa-twitter">
                      </i>
                      </a>
                  </li>
                  <li>
                  <a href="https://github.com/brianrono" target='_blank' className='github'>
                      <i className="fa fa-github">
                      </i>
                      </a>
                  </li>
                  <li>
                  <a href="https://www.linkedin.com/in/brian-rono-915223113" target='_blank' className='linkedin'>
                      <i className="fa fa-linkedin">
                      </i>
                      </a>
                  </li>
                  <li>
                  <a href="#" target='_blank' className='facebook'>
                      <i className="fa fa-facebook">
                      </i>
                      </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="team-item">
              <img className='team-img' src={salad} alt="Mohamed Salanka" />
              <h3>Mohamed Salad</h3>
              <div className="team-info">
                <p>Senior React Dev <br />Full Stack Software Engineer</p>
                <p>As a person whose currently pursuing a Software Engineering course at Moringa School.I have a passion to be a well known full stack software Engineer. </p>

                <ul className="team-icons">
                  <li>
                    <a href="#" target='_blank' className='twitter'>
                      <i className="fa fa-twitter">
                      </i>
                      </a>
                  </li>
                  <li>
                  <a href="#" target='_blank' className='github'>
                      <i className="fa fa-github">
                      </i>
                      </a>
                  </li>
                  <li>
                  <a href="#" target='_blank' className='linkedin'>
                      <i className="fa fa-linkedin">
                      </i>
                      </a>
                  </li>
                  <li>
                  <a href="https://www.facebook.com/profile.php?id=100060709951895&mibextid=LQQJ4d" target='_blank' className='facebook'>
                      <i className="fa fa-facebook">
                      </i>
                      </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="team-item">
              <img className='team-img' src={johnson} alt="Michael Johnson" />
              <h3>Michael Johnson</h3>
              <div className="team-info">
                <p>Senior React Dev <br />Senior DevOps Engineer</p>
                <p>Johnson is a Computer Science graduate. He is a Mobile developer and currently pursuing a Software Engineering course at Moringa School</p>

                <ul className="team-icons">
                  <li>
                    <a href="https://twitter.com/_michaelowallah" target='_blank' className='twitter'>
                      <i className="fa fa-twitter">
                      </i>
                      </a>
                  </li>
                  <li>
                  <a href="https://github.com/Owallah" target='_blank' className='github'>
                      <i className="fa fa-github">
                      </i>
                      </a>
                  </li>
                  <li>
                  <a href="https://www.linkedin.com/in/michael-johnson-8a6a08176/" target='_blank' className='linkedin'>
                      <i className="fa fa-linkedin">
                      </i>
                      </a>
                  </li>
                  <li>
                  <a href="#" className='facebook'>
                      <i className="fa fa-facebook">
                      </i>
                      </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}

export default About