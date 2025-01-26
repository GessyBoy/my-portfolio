import { projectData } from './data';
import Image from 'next/image';

const Projects = (): JSX.Element => {
  return (
    <div className="projects-container">
      <h2>Projets</h2>
      <div className="projects-grid">
        {projectData && projectData.map((project) => (
          <div className="project-card" key={project.id}>
            <a href={project.Link} target="_blank">
              <div className="project-header">
                <i className="fa-regular fa-folder-open folder-icon"></i>
{project.logo && (
  <Image 
    src={project.logo} 
    alt={`${project.title} logo`} 
    width={100}
    height={100}
    className="project-logo" 
  />
)}
               {project.id === 4 && (
                  <div className="small-icons">
                    <i className="fa-brands fa-github"></i>
                  </div>
                )}
              </div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;