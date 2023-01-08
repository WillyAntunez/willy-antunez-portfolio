import React from 'react'

import { useContext } from 'react'
import { ProfileContext } from '../context/ProfileContext'
import { ProjectCard } from './ProjectCard';

import githubIcon from '../assets/svg/github.svg';

import './Projects.scss';

export const Projects = () => {
    const {projects, social} = useContext(ProfileContext);
    console.log(projects)
    return (
        <div className='myProjects__container'>
            <div className='myProjects'>
                <h2 className='myProjects__title'>Mis proyectos</h2>
                <hr className='myProjects__hr' />
                <div className='myProjects__projects'>
                    {
                        projects.map(project => (
                            <ProjectCard key={project.id} {...project} />
                        ))
                    }
                </div>
                <p className='myProjects__text myProjects__text--bold myProjects__adviceText'>
                    <strong>
                        Por cierto, no te olvides que puedes visitar mi perfil de Github.
                    </strong>
                </p>
                <p className='myProjects__text myProjects__adviceText'>
                    Ahí puedes ver todos mis proyectos públicos en los que he trabajado y estoy trabajando actualmente.
                </p>
                <a className='myProjects__button myProjects__githubButton'
                    href={social.githubUrl}
                    target="_blank" rel="noreferrer"
                >
                    <img src={githubIcon} alt="Github icon" />
                    Visitar perfil de Github
                </a>
            </div>
        </div>
    )
}
