import React, { Component } from 'react';
import SearchForm from 'react';

const NavBar = (props) => {


return(

    <nav className="navbar navbar-toggleable-md navbar-light bg-faded"> 
    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul className="navbar-nav mr-auto mt-2 mt-md-0">
            <li className="nav-item">
                <button onClick={props.showHome} className="btn btn-link toggleButton">Home</button>
            </li>
            <li className="nav-item">
                <button onClick={props.showPage} className="btn btn-link toggleButton">My Page</button>
            </li>
            <li className="nav-item">
                <button onClick={props.showForm} className="btn btn-link toggleButton">New Post</button>
            </li>
        </ul>
        {/* My SearchForm */}
        {props.children}              
    </div>
  </nav>
)
        
}


export default NavBar;