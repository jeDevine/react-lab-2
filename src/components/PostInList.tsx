import React, { useState } from 'react';
import Post from '../models/post';

const PostInList = ({Title, Thought}:Post) => {
    const [] = useState();
    return (
        <div>
            <h2>{Title}</h2>
            <p>{Thought}</p>
        </div>
    )
}

export default PostInList;