import React, { useState } from 'react';
import Post from '../models/post';
import "./PostForm.css";

interface Prop {
    post: Post;
    onDelete: () => void;
}

const PostInList = ({post, onDelete}: Prop) => {
    return (
        <div>
            <h2>{post.Title}</h2>
            <p>{post.Thought}</p>
            <button onClick={onDelete}>Delete <i className="fa fa-trash"></i></button>
        </div>
    )
}

export default PostInList;