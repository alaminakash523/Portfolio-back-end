import './App.css';
import AddMember from './components/AddMember';
import AddProject from './components/AddProject';
import EditMember from './components/EditMember';
import EditProject from './components/EditProject';
import Email from './components/Email';
import Inbox from './components/Inbox';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import TeamMember from './components/TeamMember';
import ProjectState from './context/ProjectState';
import UserState from './context/UserState';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

function App() {
  const isAuthenticated = !!localStorage.getItem('token');
  return (
    <>
        <UserState>
          <ProjectState>
        <Router>
        {isAuthenticated?<Navbar />:""}
          <Routes>
            {isAuthenticated ? (
              <>
            <Route path="/" element={<TeamMember />} />
            <Route path="/addMember" element={<AddMember />} />
            <Route path="/inbox" element={<Inbox />} />
            <Route path="/email/:id" element={<Email />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/edit-member/:name" element={<EditMember />} />
            <Route path="/edit-project/:projectId" element={<EditProject />} />
            <Route path="/add-project" element={<AddProject />} />
            <Route path="/login" element={<Navigate to="/" />} />
            </>
            ):(
              <>
              <Route path='/login' element={<Login />} />
              <Route path="*" element={<Navigate to="/login" />} />
              </>
            )}
          </Routes>
            
        </Router>
        </ProjectState>
        </UserState>
    </>
  );
}

export default App;
