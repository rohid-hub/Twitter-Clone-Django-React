import axios from "axios";
import { url } from "./index";

const fetchTweets = async () => {
    try {
        const { data } = await axios.get(`${url}/tweets`);
        let reverseList = [];
        for (let i = data.length - 1; i >= 0; i--) {
            reverseList.push(data[i]);
        }
        return reverseList;
    } catch (error) {
        console.error(error);
    }
};

export default fetchTweets;
