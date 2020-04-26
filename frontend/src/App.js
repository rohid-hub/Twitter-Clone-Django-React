import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Tweets } from "./components/Tweets";
import { NavBar } from "./components/NavBar";
import Login from "./components/UserLog/Login";
import SignUp from "./components/UserLog/SignUp";

export class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loggedIn: false,
        };
    }

    componentDidMount() {
        this.checkLogInfo();
    }

    checkLogInfo = () => {
        const token = localStorage.getItem("token");
        if (token) {
            this.setState({ loggedIn: true });
        } else {
            this.setState({ loggedIn: false });
        }
    };

    render() {
        const { loggedIn } = this.state;
        return (
            <Router>
                <NavBar loggedIn={loggedIn} checkLogInfo={this.checkLogInfo} />
                <div className="wrapper">
                    <Route path="/" exact component={Tweets} />
                    <Route
                        path="/login"
                        exact
                        component={() => (
                            <Login checkLogInfo={this.checkLogInfo} />
                        )}
                    />
                    <Route path="/signup" exact component={SignUp} />
                </div>
            </Router>
        );
    }
}

export default App;
