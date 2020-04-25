import React, { Component } from "react";

export class CreateTweetForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            textvalue: "",
        };
    }

    handlechange(value) {
        this.setState({ textvalue: value });
    }

    render() {
        const { textvalue } = this.state;
        const { handleTweetSubmition } = this.props;
        return (
            <div className="create-tweet-form tweet-wrapper">
                <textarea
                    rows="2"
                    value={textvalue}
                    onChange={(e) => this.handlechange(e.target.value)}
                    placeholder="Make a Tweet"
                ></textarea>
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        handleTweetSubmition(textvalue);
                        this.setState({ textvalue: "" });
                    }}
                    disabled={textvalue === ""}
                    style={{
                        opacity: textvalue === "" ? "0.5" : "1",
                    }}
                >
                    Tweet
                </button>
            </div>
        );
    }
}

export default CreateTweetForm;
