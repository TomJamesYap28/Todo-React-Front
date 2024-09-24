import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar.jsx';
import Dashboard from './layouts/Dashboard.jsx';
import Tasklist from './layouts/Tasklist.jsx';
import Announcement from './layouts/Announcement.jsx';
import User from './layouts/User.jsx';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import './../node_modules/boxicons/css/boxicons.min.css';
import './index.css';
import './assets/css/Sidebar.css';
import './assets/css/Dashboard.css';
import './assets/css/Tasklist.css';
import './assets/css/Users.css';
import './assets/css/Modal.css';

function App() {
  return (
    <Router>
      <div className="sidebarbody">
        <Sidebar />
        <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/tasklist" element={<Tasklist />} />
            <Route path="/announcement" element={<Announcement />} />
            <Route path="/user" element={<User />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
