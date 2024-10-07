import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import UserContext from '../context/UserContext';

function EditMember() {
    const {name} = useParams();
    const context = useContext(UserContext)
    useEffect(()=>{
        context.getUserByName(name);
    },[])
    const handleChange=(e)=>{
        context.setMember({...context.member, [e.target.name]: e.target.value});
    }

    const handleClick = () =>{
        context.handleUpdate();
    }
  return (
    <>
          <div className="container">
    <h1 className="text-center my-3">Add/Edit Team Members</h1>
    <form>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Team Member Full Name</label>
          <input type="text" className="form-control" value={context.member.name} name='name' onChange={handleChange} id="name" aria-describedby="emailHelp"/>
        </div>
        <div className="form-floating">
            <textarea name='description' className="form-control my-3" placeholder="Leave a comment here" onChange={handleChange} id="floatingTextarea" style={{height: "300px"}} value={context.member.description}></textarea>
            <label htmlFor="description">Member Details</label>
        </div>
        <div className="mb-3">
            <label htmlFor="imageUrl" className="form-label">Team Member Profile Link</label>
            <input type="text" className="form-control" id="member_profile" onChange={handleChange} name='imageUrl' value={context.member.imageUrl} aria-describedby="emailHelp"/>
          </div>
        <button type="button" onClick={handleClick} className="btn btn-primary">Submit</button>
      </form>
</div> 
    </>
  )
}

export default EditMember
