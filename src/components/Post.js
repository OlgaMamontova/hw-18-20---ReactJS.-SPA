import React from "react";
import MARK from '../assets/check-mark.png';

function Post({author, content, image, date}) {
    return (
    <div className="post">
        <div className="header-post">
            <img className="logo" src={author.photo}/>
            <h3>{author.name}</h3>
            <img className="icon" src={MARK}/>
            <p>{author.nickname}</p>
            <p>{date}</p>
        </div>
        <div className="text-post">
            {content}
        </div>
        <div className="wrapper_image">
            <img src={image}/>
        </div>
    </div>
    );
};

export default Post;