import React, { useContext, useEffect } from 'react'
import UserContext from '../context/UserContext'
import { Link } from 'react-router-dom';

function TeamMember() {
  const context = useContext(UserContext);
  useEffect(() => {
    context.getUser()
  }, [])
  return (
    <div>
      <div className="container">
        <h1 className="text-center my-3">Team Members</h1>
        <div className="row">
          {context.users.map((user) => {
            return (
              <div className="col-md-4" key={user.id}>
                <div className="card" style={{ width: "18rem" }}>
                  <img src={user.imageUrl} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{user.name}</h5>
                    <p className="card-text">{user.description}</p>
                    <Link to={`/edit-member/${user.name}`} className="btn btn-primary">Edit Member</Link>
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

export default TeamMember
