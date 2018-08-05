import React from "react";

export default class Tweet extends React.Component {

    render(){
        const data = this.props.data;

        return (
            <div className="tweetWrapper">
                <p className="tweetText"> {data.account} </p>
            </div>
        );
    }
};