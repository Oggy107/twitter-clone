import React from "react";

const Post = ({ displayName, userName, isVerified, msg, img }) => {
  return (
    <div className="post">
      <div className="userImg-area">
        <div className="userImg-container"></div>
      </div>
      <div className="post-area">
        <div className="userName-container">
          <ul>
            <li>
              <h5>{displayName}</h5>
            </li>
            {isVerified && (
              <li>
                <i className="fas fa-check"></i>
              </li>
            )}
            <li>
              <p className="userName">{userName}</p>
            </li>
          </ul>
        </div>
        <div className="postText-container">
          <p>{msg}</p>
        </div>
        {img && (
          <div className="postImg-container">
            <img src={img} alt="img" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Post;
