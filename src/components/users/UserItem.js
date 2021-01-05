import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const UserItem = ({user: { login, avatar_url }}) => {
    return (
            <div className="card">
                <img className="card-avatar" 
                    src={avatar_url} 
                    alt="avatar"
                />
                <h3 className="card-text">{login}</h3>
                <div>
                    <Link to={`/user/${login}`} className="btn btn-dark">Details</Link>
                </div>
            </div>
    );
}

UserItem.propTypes = {
    user: PropTypes.object.isRequired,
}

export default UserItem
