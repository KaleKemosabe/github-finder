import React, { Fragment, useEffect } from 'react'
import Spinner from '../layout/Spinner';
import Repos from '../repos/Repos';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const User = ({ user, loading, getUser, getUserRepos, repos, match }) => {
    useEffect(() => {
        getUser(match.params.login);
        getUserRepos(match.params.login);
// add [] at the end to only run it once
    }, []);

    const {
        avatar_url,
        name,
        location,
        bio,
        login,
        html_url
    } = user;

    if (loading) return <Spinner />;

    return (
        <Fragment>
            <Link to="/" className="btn btn-light">Back to Search</Link>
            <div className="card">
                <div>
                    <img 
                        className="user-page-img"
                        src={avatar_url} 
                        alt="profile-photo" 
                    />
                    <h1 className="profile-name">{name}</h1>
                    <h5>Github login: {login}</h5>
                    <p>Location: {location}</p>
                </div>
                <div>
                    {bio && (<Fragment>
                        <p>{bio}</p>
                    </Fragment>
                    )}
                    <a href={html_url} className="btn btn-dark github_url_btn">
                        Visit Github profile
                    </a>
                </div>
            </div>
            <Repos repos={repos} />
        </Fragment>
    )
}

User.propTypes = {
    loading: PropTypes.bool,
    user: PropTypes.object.isRequired,
    repos: PropTypes.array.isRequired,
    getUser: PropTypes.func.isRequired,
    getUserRepos: PropTypes.func.isRequired
}

export default User
