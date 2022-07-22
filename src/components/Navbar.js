import React from "react";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
export default function Navbar(props){
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} shadow`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">{props.logo}</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">{props.aboutTitle}</Link>
              </li>
            </ul>
            <div className={`form-check form-switch text-${props.mode === 'light'?'dark':'light'}`}>
              <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={props.enableMode}/>
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.mode === 'light'?'Enable Dark Mode':'Enable Light Mode'}</label>
            </div>
          </div>
        </div>
      </nav>
    )
}

// setting proptypes in function based components
Navbar.propTypes = {
    logo : PropTypes.string.isRequired,
    aboutTitle : PropTypes.string.isRequired 
}


// we can also set defatult proptypes, will use if we will not pass props from App.js.
Navbar.defatultProps = {
    logo : "Set your logo",
    aboutTitle : "Set About Title here"
}




