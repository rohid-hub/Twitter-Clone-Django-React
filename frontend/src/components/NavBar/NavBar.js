import React from "react";
import { Link } from "react-router-dom";

function NavBar({ loggedIn }) {
    return (
        <header className="nav-bar">
            <nav className="nav wrapper">
                <Link to="/" className="nav-logo">
                    Twitter Clone
                </Link>
                <ul className="nav-menu">
                    <Link to="/">Home</Link>
                    <Link to="/">All Tweets</Link>
                </ul>
                {loggedIn ? (
                    <ul className="user-log">
                        <Link to="/">User Name</Link>
                        <Link to="/">Logout</Link>
                    </ul>
                ) : (
                    <ul className="user-log">
                        <Link to="/admin">Log in</Link>
                        <Link to="/">Sign up</Link>
                    </ul>
                )}
            </nav>
        </header>
    );
}

export default NavBar;
