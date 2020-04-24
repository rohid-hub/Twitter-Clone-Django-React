import React, { Component } from "react";
import Tweet from "./Tweet";
import { fetchTweets } from "../../api";

export class Tweets extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tweets: [],
        };
    }

    async componentDidMount() {
        const data = await fetchTweets();
        this.setState({ tweets: data });
    }
    render() {
        const { tweets } = this.state;
        return tweets.length > 0 ? (
            <div className="tweets-wrapper">
                {tweets.map((tweet, key) => (
                    <Tweet key={key} data={tweet} />
                ))}
            </div>
        ) : null;
    }
}

export default Tweets;
