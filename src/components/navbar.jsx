import React from 'react';

// A React Stateless Functional Component (ES6)
const Navbar = (props) => {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <a className="navbar-brand" href="#">
                Navbar <span className="badge badge-pill badge-secondary">{props.totalCounters}</span>
            </a>
        </nav>
    );
};

export default Navbar;
