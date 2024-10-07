
import React, { useState } from 'react'
import ProjectContext from './ProjectContext'

function ProjectState(props) {
    const [projects, setProjects] = useState([])
    const [project, setProject] = useState({id: "", name:"", description:"", imageUrl:""})
    const getProjects = async () =>{
        const url = "http://localhost:8080/works/all_works";
        const token = localStorage.getItem('token');
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json"
            }
        });
        if (response.ok) {
            const data = await response.json();
            setProjects(data)
            // console.log(data)
        } else {
            console.error("Failed to fetch data", response.statusText);
        }
    }

    const getSingleProject = async (projectId) =>{
        const url = `http://localhost:8080/works/work/${projectId}`;
        const token = localStorage.getItem('token');
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json"
            }
        });
        if (response.ok) {
            const data = await response.json();
            setProject(data)
        } else {
            console.error("Failed to fetch data", response.statusText);
        }

    }

    const updateProject = async () => {
        const url = "http://localhost:8080/works/updateWork";
        const token = localStorage.getItem('token');
        const response = await fetch(url, {
            method: "PUT",
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(project) 
        });
        if (response.ok) {
            return response.status
        } else {
            console.error("Failed to fetch data", response.statusText);
        }
    }

    const addProject = async(new_project) =>{
        const url = "http://localhost:8080/works/add-Work";
        const token = localStorage.getItem('token');
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(new_project) 
        });
        if (response.ok) {
            return response.status
        } else {
            console.error("Failed to fetch data", response.statusText);
        }
    }
  return (
    <ProjectContext.Provider value={{projects, getProjects, project,setProject, getSingleProject, updateProject, addProject}}>
      {props.children}
    </ProjectContext.Provider>
  )
}

export default ProjectState
