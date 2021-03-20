import React from 'react';
import { Link } from 'react-router-dom';
import {  Navbar ,Nav } from 'react-bootstrap';
import logo from './../../images/logo.png';
import './Header.css';

const Header = () => {
    return (
            <div className="navBar">
                <Navbar bg="dark" variant="dark">
                    <Nav className="mr-auto">
                        <div>
                            <img className="img" src={logo} />
                        </div>
                        <div>
                            <Link className="p-5 navStyle" to="/home">Home</Link>
                            <Link className="p-5 navStyle" to="/login">Login</Link>
                            <Link className="p-5 navStyle" to="/destination">Destination</Link>
                        </div>
                    </Nav>
                </Navbar>
             </div>
    );
};

export default Header;