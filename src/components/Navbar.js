import React from 'react'
import { Link } from 'react-router-dom';
function Navbar() {
  const handleClick = (e) =>{
    e.preventDefault();
    localStorage.removeItem('token');
    window.location.href = '/login';
  }
  return (
    <div>
          <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">CMS Service</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav" style={{position:"relative"}}>
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Team Members</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/addMember">Add Member</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/inbox">Inbox</Link>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link" to="/">Emails</Link>
              </li> */}
              <li className="nav-item">
                <Link className="nav-link" to="/projects">Projects</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/add-project">Add Project</Link>
              </li>
              <li className="nav-item ms-auto">
              <button type="button" onClick={handleClick} className="btn btn-primary" style={{position:"absolute", right:"0"}}>Log Out</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
