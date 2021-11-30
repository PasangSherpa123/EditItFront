import React from 'react';
import img from "../../logo192.png"

import { IoIosNotificationsOutline } from "react-icons/io";

import { BiSearch } from "react-icons/bi";
const Navbar = () => {
    return (
        <div className="Navbar">
            <div className="Navbar__Icons">
                <div className="Navbar__Icons__Logo">
                    Photo
                </div>
                <div className="Navbar__Icons__Home">
                    Home
                </div>
                <div className="Navbar__Icons__SearchBar">
                    <div className="Navbar__Icons__SearchBar__IconHandler">
                        <BiSearch className="Navbar__Icons__SearchBar__Icons"/>
                    </div>
                    
                    <input 
                    type="text" 
                    className="Navbar__Icons__SearchBar__Text" 
                    placeholder="Search Templates"
                    />
                </div>
            </div>
            <div className="Navbar__Icons">
                <div className="Navbar__Icons__Notification">
                    <IoIosNotificationsOutline className="Navbar__Icons__Notification__Logo"/>
                </div>
                <div className="Navbar__Icons__Profile">
                    <div className="Navbar__Icons__Profile__Name">
                        Yugal Hero
                    </div>
                    <img src={img} alt="Profile" className="Navbar__Icons__Profile__Picture"/>
                </div>

            </div>
        </div>
    )
}

export default Navbar
