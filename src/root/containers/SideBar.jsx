import React from 'react';
import { NavLink } from 'react-router-dom'

import _nav from './_nav';


const SideBar = () => {

    const navs = _nav.map((nav, idx) => (
        <li 
            style={{
                fontSize: "14px",
                width: "100%",
                padding: "10px 0"
            }}
        >
            <NavLink
                key={idx}
                to={nav.to}
                style={{
                    fontSize: "20px",
                }}
                activeStyle= {{
                    fontWeight: "bolder",
                    display: "block",
                    color : "white",
                    backgroundColor: "#4f4f4f"
                }}
            >
                {nav.name}
            </NavLink>
        </li>
    ))

    return (
        // <div style={{listStyle: "none", maxWidth: "100%", position: "fixed"}}>
        <div>
            {navs}
        </div>
    )
}

export default SideBar;