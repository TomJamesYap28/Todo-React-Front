import React, { useEffect } from 'react';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Sidebar from './components/Sidebar.jsx';
import Login from './layouts/Login.jsx';
import Dashboard from './layouts/Dashboard.jsx';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import './../node_modules/boxicons/css/boxicons.min.css';
import './index.css';

function App() {
  return(
    <div>
        <Sidebar />
        <Dashboard />
    </div>
    // <Login />
  );
}

export default App
