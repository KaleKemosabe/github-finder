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
        location,
        bio,
        login,
        html_url
    } = user;

    if (loading) return <Spinner />;

    return (
        <Fragment>
            <Link to="/" className="btn btn-light">Back to Search</Link>
            <div className="card grid-2">
                <div className="all-center">
                    <img 
                        src={avatar_url} 
                        className="round-img" alt="profile-photo" 
                        style={{ width: "150px" }} 
                    />
                    <h1>{login}</h1>
                    <p>Location: {location}</p>
                </div>
                <div>
                    {bio && (<Fragment>
                        <p>{bio}</p>
                    </Fragment>
                    )}
                    <a href={html_url} className="btn btn-dark">
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
