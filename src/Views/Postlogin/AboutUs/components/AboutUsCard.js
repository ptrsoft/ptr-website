import React from 'react'
import VissionIcon from "../../../../Assets/Images/VissionIcon.svg"

const AboutUsCard = (prop) => {
  return (
    <div className="project_grid_container">
    <img className="project_grid_container_img" src={prop.icon} alt="" />
    <div>
      <span className='project_grid_container_label'>{prop.label}</span>
      <p className='project_grid_container_desc'>{prop.para}</p>
      </div>
  </div>
  )
}

export default AboutUsCard