import React from 'react';
import "./Header.css";
import logo from "../../Assets/Logo.svg";
import { IconContext } from "react-icons";
import { CgLayoutGridSmall } from "react-icons/cg";
import { RiArrowDownSFill } from "react-icons/ri";



function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <img className="header--logo" src={logo} alt="logo" />
                <div className="header--boardInfo">
                    <h1 className="header--boardInfo_Title">DevChallenge Board</h1>
                    <div className="header--boardInfo_btn gray-btn">
                        <IconContext.Provider value={{color: "var(--gray-3)",size: "1.5em"}}>
                            <div className="d-f">
                                <CgLayoutGridSmall />
                            </div>
                        </IconContext.Provider>
                        <h3>All Board</h3>
                    </div>
                </div>
            </div>
            {/* The Right side */}
            <div className="header__right">
                <div className="header--search">
                    <input 
                        className="header--search_input" 
                        type="text"
                        placeholder="Keywords ..."
                    />
                    <button className="header--search_btn">Search</button>
                </div>
                <div className="header--userInfo">
                    <div className="header--userInfo_photoParent">
                        <img 
                            className="header--userInfo_photo" 
                            src="https://images.unsplash.com/photo-1612601006505-1254db3e290d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=327&q=80" alt="" />
                    </div>
                    <h3 className="header--userInfo_name">first name last name</h3>
                    <RiArrowDownSFill />
                </div>
            </div>
        </div>
    )
}

export default Header;
