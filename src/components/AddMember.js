import React, { useContext, useState } from 'react'
import UserContext from '../context/UserContext'

function AddMember() {
    const [member, setMember] = useState({id: "", name:"", description:"", imageUrl:""})
    const context = useContext(UserContext)
    
    const handleClick = async ()=>{
        await context.AddMember(member);
        setMember({id: "", name:"", description:"", imageUrl:""});
    }
    const handleChange= (e)=>{
        setMember({...member, [e.target.name]: e.target.value});
    }
  return (
    <div>
          <div className="container">
    <h1 className="text-center my-3">Add Team Members</h1>
    <form>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Team Member Full Name</label>
          <input type="text" className="form-control" value={member.name} name='name' onChange={handleChange} id="name" aria-describedby="emailHelp"/>
        </div>
        <div className="form-floating">
            <textarea name='description' className="form-control my-3" placeholder="Leave a comment here" onChange={handleChange} id="floatingTextarea" style={{height: "300px"}} value={member.description}></textarea>
            <label htmlFor="description">Member Details</label>
        </div>
        <div className="mb-3">
            <label htmlFor="imageUrl" className="form-label">Team Member Profile Link</label>
            <input type="text" className="form-control" id="member_profile" onChange={handleChange} name='imageUrl' value={member.imageUrl} aria-describedby="emailHelp"/>
          </div>
        <button type="button" onClick={handleClick} className="btn btn-primary">Submit</button>
      </form>
      </div>
    </div>
  )
}

export default AddMember
