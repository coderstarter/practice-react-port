import React from 'react'
import './Main_Body.css'
import ME from './data/imgg.jpeg'

function Main_Body() {
  return (
    <div>
        <div className="main-body">
          <div className="image-compt">
            <div className="img-cont">
              <img src={ME} alt="description" />
            </div>
          </div>
          <div className="text-about-me">
            <h1>Hi, I'am Abhishek</h1>
            <h3>Software Enginner</h3>
            <h3>IT Undergrad</h3>
            <div className="desc">
              <p>
              I am enthusiastic about AI and related fields, 
              and I have a strong desire to learn and implement
              cutting-edge technologies with practical applications.
              My objective is to stay updated with the latest trends
              and advancements in the field and actively contribute 
              to innovative projects that drive progress and make a
              significant impact. With a passion for continuous learning
              and improvement, I aim to excel in my professional journey 
              and deliver valuable solutions that push the boundaries of 
              AI and technology.
              </p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Main_Body