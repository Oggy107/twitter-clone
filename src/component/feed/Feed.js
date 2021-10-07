import React from "react";
import Post from "./Post";

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
          <input type="text" placeholder="What's Happening?" />
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

      <Post
        displayName="Oggy107"
        userName="@oggy107"
        msg="hwllo there"
        isVerified={false}
        img="https://media.istockphoto.com/photos/retro-futuristic-city-flythrough-background-80s-scifi-landscape-in-picture-id1248619427?b=1&k=20&m=1248619427&s=170667a&w=0&h=svQPXt8hCva0D5xKx4l7LHW9v9zjZfBJwfWWWUMvFWw="
      />
      <Post
        displayName="Mr Chuck"
        userName="@chuck112"
        msg="yo what is going on"
        isVerified={true}
        img={null}
      />
      <Post
        displayName="Mr Chuck"
        userName="@chuck112"
        msg="haha..."
        isVerified={true}
        img="https://media.istockphoto.com/photos/abstract-technology-blue-spotlight-backgrounds-loopable-elements-4k-picture-id1174989484?b=1&k=20&m=1174989484&s=170667a&w=0&h=xe1cvmwKDQGcfsxhiukjYP8PrDEyQ52at9-epfX56y4="
      />
      <Post
        displayName="The Hecker"
        userName="@heck99"
        msg="🔥🔥🔥🔥"
        isVerified={true}
        img="https://images.unsplash.com/photo-1544180101-ccbd1b02bb23?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8OTl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
      />
    </div>
  );
};

export default Feed;
