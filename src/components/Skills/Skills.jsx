import React from 'react';
import PropTypes from 'prop-types';

import { useContext } from 'react'
import { ProfileContext } from '../../context'

import './Skills.scss';

export const Skills = ({id}) => {

  const {skills} = useContext(ProfileContext);

  return (
    <div className='skills__container' id={id}>
        <div className="skills">
          <h2 className='skills__text skills__text--title'>Mis habilidades</h2>

          <div className='skills__content'>
            <h3 className='skills__text skills__text--subtitle skills__techTitle'>Desarrollo web</h3>

              {skills?.techSkills.map(skill => 
                <div key={skill.name} className="skills__barContainer">
                  <span className='skills__text skills__name'>{skill.name}</span>
                  
                  <div className='skills__barBackground'>
                    <div className='skills__bar' style={{ width: `${skill.domainPercent}%`, }}>
                      <span className='skills__text skills__text--small skills__domain'> {skill.domainPercent}%</span>
                    </div>
                  </div>
                </div>
              )}


              <div className='skills__soft'>
                    <h3 className='skills__text skills__text--subtitle skills__softTitle'>Habilidades blandas</h3>

                    <ul className='skills__list'>
                      {skills?.softSkills.map(skill => 
                          <li key={skill.name} className="skills__softSkill skills__text">{skill.name}</li>
                      )}
                    </ul>
              </div>
            </div>
          </div>

          
    </div>
  )
}

Skills.propTypes = {
    id: PropTypes.string.isRequired,
}