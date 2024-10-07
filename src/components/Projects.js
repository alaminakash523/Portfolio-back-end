import React, { useContext, useState } from 'react'
import ProjectContext from '../context/ProjectContext'
import { Link } from 'react-router-dom';

function Projects() {
    const context = useContext(ProjectContext);

    useState(()=>{
        context.getProjects();
    },[])
  return (
    <div>
      <div className="container">
        <h1 className="text-center my-3">Projects</h1>
        <div className="row">
          {context.projects.map((project) => {
            return (
              <div className="col-md-4 my-3" key={project.id}>
                <div className="card" style={{ width: "18rem" }}>
                  <img src={project.imageUrl} className="card-img-top" alt="..." style={{height:"250px"}}/>
                  <div className="card-body">
                    <h5 className="card-title">{project.name}</h5>
                    <p className="card-text">{project.description}</p>
                    <Link to={`/edit-project/${project.id}`} className="btn btn-primary">Edit Project</Link>
                  </div>
                </div>
              </div>
            )
          })}

        </div>
      </div>
    </div>
  )
}

export default Projects
