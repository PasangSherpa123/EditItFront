import React from 'react';
import Navbar from "./Navbar.js";
import Sidebar from "./Sidebar.js";
import Display from "./Display.js";

const Dashboard = () => {
    return (
        <div>
            <Navbar/>
            <div className="DashBoard">
            <Sidebar/>
            <Display/>
            </div>
            


            
        </div>
    )
}

export default Dashboard
