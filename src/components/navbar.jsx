import React from 'react';

// A React Stateless Functional Component (ES6)
const Navbar = ({totalCounters}) => {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <a className="navbar-brand" href="#">
                Navbar <span className="badge badge-pill badge-secondary">{totalCounters}</span>
            </a>
        </nav>
    );
};

export default Navbar;
