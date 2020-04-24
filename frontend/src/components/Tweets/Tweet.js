import React from "react";

const Tweet = ({ data: { id, text } }) => {
    return (
        <div className="tweet-wrapper">
            <div className="user-info">
                <div className="user-avater">U</div>
                <p className="user-name">User Name</p>
                <p className="user-id">@user_id</p>
            </div>
            <p className="tweet-text">{text}</p>
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
