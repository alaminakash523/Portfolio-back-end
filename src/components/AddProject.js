import React, { useContext, useState } from 'react'
import ProjectContext from '../context/ProjectContext'

function AddProject() {
    const [project, setProject] = useState({name:"", description:"", imageUrl:""})
    const context = useContext(ProjectContext);
    const handleClick = () =>{
        const response = context.addProject(project);
        if(response === 200){
            alert("Project Added.")
        }
    }
    const handleChange = (e) =>{
        setProject({...project, [e.target.name]: e.target.value})
        console.log(project)
    }
    return (
        <>
            <div className="container">
                <h1 className="text-center my-3">Add Projects</h1>
                <form>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Team Member Full Name</label>
                        <input type="text" className="form-control" value={project.name} name='name' onChange={handleChange} id="name" aria-describedby="emailHelp" />
                    </div>
                    <div className="form-floating">
                        <textarea name='description' className="form-control my-3" placeholder="Leave a comment here" onChange={handleChange} id="floatingTextarea" style={{ height: "300px" }} value={project.description}></textarea>
                        <label htmlFor="description">Member Details</label>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="imageUrl" className="form-label">Team Member Profile Link</label>
                        <input type="text" className="form-control" id="member_profile" onChange={handleChange} name='imageUrl' value={project.imageUrl} aria-describedby="emailHelp" />
                    </div>
                    <button type="button" onClick={handleClick} className="btn btn-primary">Submit</button>
                </form>
            </div>
        </>
    )
}

export default AddProject
