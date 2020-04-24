import React, { Component } from "react";
import { Tweets } from "./components/Tweets";

export class App extends Component {
    render() {
        return (
            <div className="wrapper">
                <Tweets />
            </div>
        );
    }
}

export default App;
