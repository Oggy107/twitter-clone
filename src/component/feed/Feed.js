import React from 'react';
import Post from './Post';

const Feed = () => {
    return (
        <div className="feed">
            <div className="header">
                <h2 className="title">Home</h2>
                <i className="far fa-star fa-lg top-tweets"></i>
            </div>

            <div className="tweetBox">
                <div className="userImg-area">
                    <div className="userImg-container"></div>
                </div>
                <form className="input-container">
                    <input type="text" placeholder="What's Happening?"/>
                    <div className="options-container">
                        <div className="icon-container">
                            <i className="far fa-image fa-lg"></i>
                            <i className="fas fa-gift fa-lg"></i>
                            <i className="fas fa-chart-bar fa-lg"></i>
                            <i className="far fa-smile-wink fa-lg"></i>
                            <i className="far fa-calendar-times fa-lg"></i>
                        </div>
                        <button className="btn btn-primary btn-tweet">Tweet</button>
                    </div>
                </form>
            </div>

            <Post />
        </div>
    )
}

export default Feed