import React from 'react'

import { useContext } from 'react'
import { ProfileContext } from '../context/ProfileContext'

export const Skills = () => {

  const {skills} = useContext(ProfileContext);

  return (
    <div className='skills__container'>
        <div className="skills">
          <h2>Mis habilidades</h2>

          <div className="skills__tech">
              <h3 className='skills__text'>Desarrollo web</h3>
              {skills?.techSkills.map(skill => 
                <div key={skill.name} className="skills__barContainer">
                  <span className='skills__text'>{skill.name}</span>
                  <span className='skills__text--small'> {skill.domainPercent}%</span>
                  <div className='skills__barBackround'>
                    <div className='skills__bar' style={{ width: `${skill.domainPercent}%`, }}></div>
                  </div>
                </div>
              )}
          </div>

          <div className='skills__soft'>
                <h3 className='skills__text'>Habilidades blandas</h3>
                <ul className='skills__list'>
                  {skills?.softSkills.map(skill => 
                      <li key={skill.name}>{skill.name}</li>
                  )}
                </ul>
          </div>
        </div>
    </div>
  )
}
