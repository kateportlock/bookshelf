import React from 'react';
import {Link} from 'react-router-dom';
import './App.css';

const Nav = () => {
    return(
        <nav className="navBar">
            <ul className="topContainer">                
                <Link to="/" style={{ textDecoration: 'none' }}><li className="liHome"><i className="fa fa-home"></i> Home</li></Link>
                <Link to="/booksearch" style={{ textDecoration: 'none' }}><li className="liSearch"><i className="fa fa-search"></i> Search</li></Link>
            </ul>
        </nav>
    )
}

export default Nav;