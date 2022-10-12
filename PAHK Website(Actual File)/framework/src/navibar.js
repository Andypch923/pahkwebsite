import React from 'react';
import { Route, NavLink, Routes } from 'react-router-dom'
export default function Navibar(){
    return(
        <div id='nav'>
            <nav>
                <ul>
                    <NavLink exact to="/">Home</NavLink>
                    <NavLink to="/aboutus">About Us</NavLink>
                    <NavLink to="/pands">Products and Services</NavLink>
                    <NavLink to="/contactus">Contact Us</NavLink>
                    <NavLink to="/mediaroom">Media Room</NavLink>
                    <NavLink to="/appendix">Appendix</NavLink>
                </ul>
            </nav>

            <Routes>
                <Route exact path="/"></Route>
                <Route path="/aboutus"></Route>
                <Route path="/pands"></Route>
                <Route path="/contactus"></Route>
                <Route path="/mediaroom"></Route>
                <Route path="/appendix"></Route>
            </Routes>
        </div>
    )
}

