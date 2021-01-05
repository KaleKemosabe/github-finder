import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

const Search =  ({ searchUsers, showClear, clearUsers, setAlert }) => {
    const [text, setText] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        if (text === '') {
            setAlert('Oh come on... write something on search!');
        } else {
            searchUsers(text);
            setText('');
        };
    };

    const onChange = e => setText(e.target.value);

    return (
        <div>
            <form onSubmit={onSubmit} className="form">
                <input 
                    type="text" 
                    name="text" 
                    placeholder="Search Github Users" 
                    value={text} 
                    onChange={onChange} 
                />
                <input type="submit" className="btn btn-dark btn-block" />
            </form>
            {showClear && (
                <Button className="clear-btn btn-block" onClick={clearUsers}>Clear</Button>
            )}
        </div>
    )
}

Search.propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
    setAlert: PropTypes.func.isRequired
};

export default Search
