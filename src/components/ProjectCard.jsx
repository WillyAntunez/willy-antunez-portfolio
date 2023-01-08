import React from 'react'


export const ProjectCard = ({title, id, description, repoUrl, previewUrl}) => {
  return (
    <div className='projectCard'>
        <p className="projectCard__title">{ title }</p>
        
        <div className="projectCard__content">
          <div className='projectCard__image'>
            <img src={`src/assets/img/projects/${id}.png`} alt={`project "${ title }"`} />
          </div>
          <p className='projectCard__description'>{description}</p>
        </div>

        <div className='projectCard__buttons'>
          <a className='projectCard__button projectCard__button--repo'  
            href={repoUrl}
            target="_blank" rel="noreferrer"
          >
            Ver repositorio
          </a>
          {
            previewUrl ? (
              <a className='projectCard__button projectCard__button--preview'  
                href={previewUrl}
                target="_blank" rel="noreferrer"
              >
                Vista previa
              </a>
            ) : null
          }
          
        </div>
    </div>
  )
}
