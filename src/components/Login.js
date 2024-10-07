import React, { useState } from 'react'

function Login() {
    const [credential, setCredential] = useState({username:"", password:""});
    const handleChange = (e) =>{
        setCredential({...credential, [e.target.name]: e.target.value})
    }

    const handleSubmit = async (e) =>{
        e.preventDefault();
        const url = "http://localhost:8080/login";
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(credential) 
        });
        if (response.ok) {
            const data = await response.text();
            localStorage.setItem('token', data);
            // Redirect or handle successful login
            window.location.href = '/';

        } else {
            alert("Invalid Credential")
            // console.error("Failed to fetch data", response.statusText);
        }
    }
  return (
    <div>
    <div className="container d-flex align-items-center justify-content-center min-vh-100">
        <div className="card p-4 shadow" style={{width: "50rem"}}>
            <h2 className="card-title text-center mb-4">Login</h2>
            <form onSubmit={handleSubmit} method='POST'>
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">User Name</label>
                    <input type="text" name='username' onChange={handleChange} value={credential.username} className="form-control" id="email" aria-describedby="emailHelp" required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" onChange={handleChange} value={credential.password} className="form-control" name='password' id="password" required/>
                </div>
                <button type="submit" className="btn btn-primary w-100">Login</button>
            </form>
        </div>
    </div>
    </div>
  )
}

export default Login
