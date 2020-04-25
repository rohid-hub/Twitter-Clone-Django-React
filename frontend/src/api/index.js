import fetchTweets from "./fetchTweets";
import postTweet from "./postTweet";
import axios from "axios";

axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";

const url = "http://localhost:8000/api";

export { fetchTweets, postTweet, url };
