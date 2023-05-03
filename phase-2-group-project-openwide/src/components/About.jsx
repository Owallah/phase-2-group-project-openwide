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
              The Awesome Team Behind Open Wide
            </h2>
            <p className="section-subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Quibusdam ratione similique ipsa excepturi soluta iure praesentium quis. Molestias dicta sit debitis, distinctio expedita minus eaque porro nam quod quasi illo.</p>
          </div>
          <div className="col-sm-6 col-md-4">
            <div className="team-item">
              <img className='team-img' src={glory} alt="Glory Nkatha" />
              <h3>Glory Nkatha</h3>
              <div className="team-info">
                <p>Senior React Dev</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed nobis, voluptate vel maiores voluptates culpa? Obcaecati provident similique consequuntur. </p>

                <ul className="team-icons">
                  <li>
                    <a href="#" className='twitter'>
                      <i className="fa fa-twitter">
                      </i>
                      </a>
                  </li>
                  <li>
                  <a href="#" className='github'>
                      <i className="fa fa-github">
                      </i>
                      </a>
                  </li>
                  <li>
                  <a href="#" className='linkedin'>
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

            <div className="team-item">
              <img className='team-img' src={brian} alt="Brian Rono" />
              <h3>Brian Rono</h3>
              <div className="team-info">
                <p>Senior React Dev</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed nobis, voluptate vel maiores voluptates culpa? Obcaecati provident similique consequuntur. </p>

                <ul className="team-icons">
                  <li>
                    <a href="#" className='twitter'>
                      <i className="fa fa-twitter">
                      </i>
                      </a>
                  </li>
                  <li>
                  <a href="#" className='github'>
                      <i className="fa fa-github">
                      </i>
                      </a>
                  </li>
                  <li>
                  <a href="#" className='linkedin'>
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

            <div className="team-item">
              <img className='team-img' src={salad} alt="Mohamed Salanka" />
              <h3>Mohamed Salanka</h3>
              <div className="team-info">
                <p>Senior React Dev</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed nobis, voluptate vel maiores voluptates culpa? Obcaecati provident similique consequuntur. </p>

                <ul className="team-icons">
                  <li>
                    <a href="#" className='twitter'>
                      <i className="fa fa-twitter">
                      </i>
                      </a>
                  </li>
                  <li>
                  <a href="#" className='github'>
                      <i className="fa fa-github">
                      </i>
                      </a>
                  </li>
                  <li>
                  <a href="#" className='linkedin'>
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

            <div className="team-item">
              <img className='team-img' src={johnson} alt="Michael Johnson" />
              <h3>Michael Johnson</h3>
              <div className="team-info">
                <p>Senior React Dev</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed nobis, voluptate vel maiores voluptates culpa? Obcaecati provident similique consequuntur. </p>

                <ul className="team-icons">
                  <li>
                    <a href="#" className='twitter'>
                      <i className="fa fa-twitter">
                      </i>
                      </a>
                  </li>
                  <li>
                  <a href="#" className='github'>
                      <i className="fa fa-github">
                      </i>
                      </a>
                  </li>
                  <li>
                  <a href="#" className='linkedin'>
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