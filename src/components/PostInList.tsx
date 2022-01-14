import React, { useState } from 'react';
import Post from '../models/post';
import "./PostInList.css";
// import FontAwesomeIcon component from @fortawesome/react-fontawesome to and import spacific icon
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

interface Prop {
    post: Post;
    onDelete: () => void;
}

const PostInList = ({post, onDelete}: Prop) => {
    return (
        <div>
            <h2>{post.Title}</h2>
            <p>{post.Thought}</p>
            {/* add component and icon prop with icon string name to actually add icon to page */}
            <button onClick={onDelete}><FontAwesomeIcon icon={faTrashAlt} /></button>
        </div>
    )
}

export default PostInList;