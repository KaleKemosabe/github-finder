import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Navbar extends Component {
// default title and icon for the page -- if not added to App.js as props -- if values added to App.js, will override defaultProps
    static defaultProps = {
        title: 'Github finder',
        icon: 'fab fa-github'
    };

    static propTypes = {
        title: PropTypes.string.isRequired,
        icon: PropTypes.string.isRequired
    };

    render() {
        return (
            <div>
                <h1>
                    <i className={this.props.icon} /> {this.props.title} </h1>
            </div>
        )
    }
}

export default Navbar
