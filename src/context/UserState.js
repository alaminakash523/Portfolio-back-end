import React,{useState} from 'react'
import UserContext from './UserContext'

function UserState(props) {
    const [users, setUsers] =useState([])
    const[member, setMember] = useState({id: "", name:"", description:"", imageUrl:""})
    const getUser = async()=>{
        const url = "http://localhost:8080/team/get_all_member";
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });
        if (response.ok) {
            const data = await response.json();
            setUsers(data)
            // console.log(data)
        } else {
            console.error("Failed to fetch data", response.statusText);
        }
    }

    const getUserByName = async (name) => {
        const url = `http://localhost:8080/team/single_member/${name}`;
        const token = localStorage.getItem('token');
    
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json"
            },
        });
    
        if (response.ok) {
            const data = await response.json();
            setMember(data); 
        } else {
            console.error("Failed to fetch data", response.statusText);
        }
    };

    const handleUpdate = async() =>{
        const url = "http://localhost:8080/team/update_member";
        const token = localStorage.getItem('token');
    
        const response = await fetch(url, {
            method: "PUT",
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(member) 
        });
    }

    const AddMember = async (member) =>{
        const url = "http://localhost:8080/team/add_team_member";
        const token = localStorage.getItem('token');
    
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(member) 
        });
        if (response.ok) {
            alert("Member Added.")
        } else {
            alert("Failed to add Member.")
            console.error("Failed to fetch data", response.statusText);
        }
    }
  return (
    <UserContext.Provider value={{users, member, AddMember, setMember, handleUpdate, getUserByName, setUsers, getUser}}>
      {props.children}
    </UserContext.Provider>
  )
}

export default UserState
