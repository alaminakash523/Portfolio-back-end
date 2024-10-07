import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function Inbox() {
    const [mails, setMails] = useState([])
    useEffect(() => {
        const fetchMails = async () => {
            const url = "http://localhost:8080/get-emails";
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
                    setMails(data);
                } else {
                    console.error("Failed to fetch data", response.statusText);
                }
            } catch (error) {
                console.error("An error occurred:", error);
            }
        };

        fetchMails(); // Call the async function

    }, []); 

    const getFirst30Words =(paragraph) =>{
        const words = paragraph.split(/\s+/); // Split the paragraph by whitespace (spaces, tabs, newlines)
        
        if (words.length <= 30) {
            return paragraph; // If there are 30 words or less, return the entire paragraph
        }
        
        return words.slice(0, 30).join(' ') + '...'; // Join the first 30 words and add ellipsis
    }
  return (
<div className="container my-5">
    <h1 className="text-center mb-4">Inbox</h1>
    <h2 className="text-center mb-3">Unread Emails</h2>

    {mails.map((mail)=>{
                return (
    <div className="unread-section p-3 mb-4" key={mail.id}>
        <div className="row">
                    <Link to={`/email/${mail.id}`}>
                    <div className="col-md-12" key={mail.id}>
                    <div className="card mb-3" key={mail.id}>
                        <div className="card-body">
                            <h5 className="card-title">{mail.sender}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">{mail.subject}</h6>
                            <p className="card-text">{getFirst30Words(mail.body)}</p>
                        </div>
                    </div>
                </div>
                </Link>


        </div>
    </div>

)
})}
    {/* <div className="read-section p-3">
        <h2 className="text-center mb-3">Read Emails</h2>
        <div className="row">
            <div className="col-md-12">
                <div className="card mb-3">
                    <div className="card-body">
                        <h5 className="card-title">Mark Johnson</h5>
                        <h6 className="card-subtitle mb-2 text-muted">Invoice for July</h6>
                        <p className="card-text">Please find attached the invoice for the month of July...</p>
                    </div>
                </div>
            </div>

            <div className="col-md-12">
                <div className="card mb-3">
                    <div className="card-body">
                        <h5 className="card-title">Emily Davis</h5>
                        <h6 className="card-subtitle mb-2 text-muted">Thank You</h6>
                        <p className="card-text">Dear team, I just wanted to thank you all for the hard work...</p>
                    </div>
                </div>
            </div>
        </div>
    </div> */}

</div>
  )
}

export default Inbox
