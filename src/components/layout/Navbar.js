import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navbar = ({ icon }) => {
    return (
        <nav className="navbar">
            <h1>
                <Link to="/" i className={icon} /> 
            </h1>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
            </ul>
        </nav>
    )
}

// default title and icon for the page -- if not added to App.js as props -- if values added to App.js, will override defaultProps
Navbar.defaultProps = {
    title: 'Github finder',
    icon: 'fab fa-github-square fa-2x'
};

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
};

export default Navbar
