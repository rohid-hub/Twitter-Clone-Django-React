import React from "react";
import { Link } from "react-router-dom";

const Tweet = ({ data: { id, text } }) => {
    const textList = text.split("\n");
    const modifiedText = textList.map((t, i) => {
        const splitBySpace = t.split(" ");
        return (
            <p key={i}>
                {splitBySpace.map((ss, j) =>
                    ss[0] === "@" || ss[0] === "#" ? (
                        <Link key={j} to={ss.slice(1)}>
                            {` ${ss}`}
                        </Link>
                    ) : (
                        ` ${ss}`
                    )
                )}
            </p>
        );
    });
    return (
        <div className="tweet-wrapper">
            <div className="user-info">
                <div className="user-avater">U</div>
                <p className="user-name">User Name</p>
                <p className="user-id">@user_id</p>
            </div>
            <div className="tweet-text">{modifiedText}</div>
            <div className="btns">
                <button className="tweet-btn like" disabled={true}>
                    Like
                </button>
                <button className="tweet-btn comment" disabled={true}>
                    Comment
                </button>
                <button className="tweet-btn share" disabled={true}>
                    Share
                </button>
            </div>
        </div>
    );
};

export default Tweet;
