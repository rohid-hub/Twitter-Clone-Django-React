import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dropdown: false,
        };
    }

    render() {
        const { dropdown } = this.state;
        const { loggedIn, checkLogInfo } = this.props;
        return (
            <header className="nav-bar">
                <nav className="nav wrapper">
                    <Link to="/" className="nav-logo">
                        Twitter Clone
                    </Link>
                    <ul className="nav-menu">
                        <Link to="/">Home</Link>
                    </ul>
                    {loggedIn ? (
                        <button
                            className="user-avater"
                            onClick={() => {
                                this.setState({ dropdown: !dropdown });
                            }}
                        >
                            <p>U</p>
                            <div
                                className="user-log user-dropdown-menu"
                                style={{
                                    display: dropdown ? "flex" : "none",
                                }}
                            >
                                <Link to="/helo">Profile</Link>
                                <Link
                                    to=""
                                    onClick={(e) => {
                                        localStorage.clear();
                                        checkLogInfo();
                                    }}
                                >
                                    Logout
                                </Link>
                            </div>
                        </button>
                    ) : (
                        <ul className="user-log">
                            <Link to="/login">Log in</Link>
                        </ul>
                    )}
                </nav>
            </header>
        );
    }
}

export default NavBar;
