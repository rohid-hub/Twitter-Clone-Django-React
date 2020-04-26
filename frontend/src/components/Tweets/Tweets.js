import React, { Component } from "react";
import Tweet from "./Tweet";
import { fetchTweets, postTweet } from "../../api";
import CreateTweet from "./CreateTweet";
import Loading from "../Loading/Loading";

export class Tweets extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tweets: [],
        };
    }

    async componentDidMount() {
        const data = await fetchTweets();
        this.setState({ tweets: data, loading: false });
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
        let tweetList = [];
        if (tweets) {
            tweetList = tweets.map((tweet) => (
                <Tweet
                    key={tweet.id}
                    data={tweet}
                    handleTweetSubmition={this.handleTweetSubmition}
                />
            ));
        }
        return (
            <div className="tweets-wrapper">
                <CreateTweet handleTweetSubmition={this.handleTweetSubmition} />
                {tweetList.length > 0 ? tweetList : <Loading />}
            </div>
        );
    }
}

export default Tweets;
