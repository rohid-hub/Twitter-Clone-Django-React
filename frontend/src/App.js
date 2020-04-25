import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Tweets } from "./components/Tweets";
import { NavBar } from "./components/NavBar";

export class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loggedIn: false,
        };
    }

    render() {
        const { loggedIn } = this.state;
        return (
            <Router>
                <NavBar loggedIn={loggedIn} />
                <div className="wrapper">
                    <Route path="/" exact>
                        <Tweets />
                    </Route>
                </div>
            </Router>
        );
    }
}

export default App;
