import React, { FormEvent, useState } from 'react';
import Post from '../models/post';
import prop from '../models/post';
import "./PostForm.css"
import SocialPosts from './SocialPosts'

interface Prop {
    onSubmit: (post:Post) => void;
    onClose: () => void;
}
// WRONG ({onClose}: prop {onSubmit}:prop)
const PostForm = ({onClose, onSubmit}: Prop) => {
    const [title, setTitle] = useState("");
    const [thought, setThought] = useState("");

    const handleSubmit = (e:FormEvent) => {
        e.preventDefault();
        let newPost: Post = {
            Title: title,
            Thought: thought
        }
        onSubmit(newPost);
    }

    return (
        <div className="modal">
            <div className="modal-content">
                <form onSubmit={handleSubmit}>
                    <button className="button" onClick={onClose}>X</button>
                    <label htmlFor="title">Title:<br></br><input type="text" name="title" value={title} onChange={e => setTitle(e.target.value)} /></label>
                    <label htmlFor="thought">Thought:<br></br><input type="text" name="thought" value={thought} onChange={e => setThought(e.target.value)} /></label>
                    <button type="submit">Add Post</button>
                </form>
            </div>
        </div>
    )
}

export default PostForm;