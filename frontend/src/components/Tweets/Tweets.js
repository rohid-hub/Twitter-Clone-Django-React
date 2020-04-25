import React, { Component } from "react";
import Tweet from "./Tweet";
import { fetchTweets, postTweet } from "../../api";
import CreateTweet from "./CreateTweet";

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

    handleTweetSubmition = async (tweet) => {
        const returnedData = await postTweet(tweet);
        this.setState((prevState) => {
            return {
                tweets: [returnedData, ...prevState.tweets],
            };
        });
    };

    render() {
        const { tweets } = this.state;
        return tweets.length > 0 ? (
            <div className="tweets-wrapper">
                <CreateTweet handleTweetSubmition={this.handleTweetSubmition} />
                {tweets.map((tweet, key) => (
                    <Tweet key={key} data={tweet} />
                ))}
            </div>
        ) : null;
    }
}

export default Tweets;
