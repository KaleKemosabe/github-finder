import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Navbar = ({ icon, title }) => {
    return (
        <nav className="navbar bg-primary">
            <h1>
                <i className={icon} /> {title} </h1>
        </nav>
    )
}

// default title and icon for the page -- if not added to App.js as props -- if values added to App.js, will override defaultProps
Navbar.defaultProps = {
    title: 'Github finder',
    icon: 'fab fa-github'
};

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
};

export default Navbar
