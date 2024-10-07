import React, { useContext, useEffect } from 'react'
import ProjectContext from '../context/ProjectContext'
import { useParams } from 'react-router-dom'

function EditProject() {
    const context = useContext(ProjectContext)
    const {projectId} = useParams();
    useEffect(()=>{
        context.getSingleProject(projectId);
        // eslint-disable-next-line
    },[])
    const handleClick = async () =>{
        const response = await context.updateProject();
        // console.log("Compontent: "+response);
        if(response === 200){
            alert("Project Updated.")
        }
    }
    const handleChange = (e) =>{
        context.setProject({...context.project,[e.target.name]:e.target.value})
    }
    return (
        <>
            <div className="container">
                <h1 className="text-center my-3">Edit Projects</h1>
                <form>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Team Member Full Name</label>
                        <input type="text" className="form-control" value={context.project.name} name='name' onChange={handleChange} id="name" aria-describedby="emailHelp" />
                    </div>
                    <div className="form-floating">
                        <textarea name='description' className="form-control my-3" placeholder="Leave a comment here" onChange={handleChange} id="floatingTextarea" style={{ height: "300px" }} value={context.project.description}></textarea>
                        <label htmlFor="description">Member Details</label>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="imageUrl" className="form-label">Team Member Profile Link</label>
                        <input type="text" className="form-control" id="member_profile" onChange={handleChange} name='imageUrl' value={context.project.imageUrl} aria-describedby="emailHelp" />
                    </div>
                    <button type="button" onClick={handleClick} className="btn btn-primary">Submit</button>
                </form>
            </div>
        </>
    )
}

export default EditProject
