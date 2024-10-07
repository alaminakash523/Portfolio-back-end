import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Email() {
    const {id} = useParams();
    const [mail, setMail] = useState([]);
    useEffect(()=>{
        const fetchMail = async () =>{
            const url = `http://localhost:8080/get-mail/${id}`;
            const token = localStorage.getItem('token');
            try {
                const response = await fetch(url, {
                    method: "GET", // Corrected the method here
                    headers: {
                        "Authorization": `Bearer ${token}`,
                        "Content-Type": "application/json"
                    }
                });
                if (response.ok) {
                    const data = await response.json();
                    setMail(data);
                } else {
                    console.error("Failed to fetch data", response.statusText);
                }
            } catch (error) {
                console.error("An error occurred:", error);
            }
        }
        fetchMail();
    },[])
  return (
<div className="container my-5">
    <div className="row justify-content-center">
        <div className="col-md-8">
            <div className="card">
                <div className="card-header">
                    <h5 className="card-title">Email Details</h5>
                </div>
                <div className="card-body">
                    <div className="mb-3">
                        <label className="form-label"><strong>From:</strong></label>
                        <p className="form-control-plaintext">{mail.sender}</p>
                    </div>
                    <div className="mb-3">
                        <label className="form-label"><strong>To:</strong></label>
                        <p className="form-control-plaintext">jane.smith@example.com</p>
                    </div>
                    <div className="mb-3">
                        <label className="form-label"><strong>Subject:</strong></label>
                        <p className="form-control-plaintext">{mail.subject}</p>
                    </div>
                    <div className="mb-3">
                        <label className="form-label"><strong>Message:</strong></label>
                        <textarea className="form-control" rows="10" value={mail.body}>
                        </textarea>
                    </div>
                </div>
                <div className="card-footer text-end">
                    <button className="btn btn-primary">Reply</button>
                    <button className="btn btn-secondary">Forward</button>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Email
