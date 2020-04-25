import axios from "axios";
import { url } from "./index";

const postTweet = async (tweet) => {
    const { data } = await axios.post(
        `${url}/tweets/`,
        { text: tweet },
        {
            headers: {
                Authorization: `AUTHORIZATION_KEY`,
                "Content-Type": "application/json",
            },
        }
    );
    return data;
};
export default postTweet;
