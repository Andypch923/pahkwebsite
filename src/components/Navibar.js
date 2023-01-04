import "./styles.css"
import React from 'react';
import { Route, Routes } from 'react-router-dom';
export default function Navibar(){
    return(
        <div>
            <nav className='nav'>
                <h1>Site Name</h1>
                <ul>
                    <li id = "HomeTab"><a href="/">Home</a></li>
                    <li id = "AboutUsTab"><a href="/aboutus">About Us</a></li>
                    <li id = "PandsTab"><a href="/pands">Products and Services</a></li>
                    <li id = "ContactUsTab"><a href="/contactus">Contact Us</a></li>
                    <li id = "MediaRoomTab"><a href="/mediaroom">Media Room</a></li>
                    <li id = "AppendixTab"><a href="/appendix">Appendix</a></li>
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


