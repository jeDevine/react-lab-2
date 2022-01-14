import React, { FormEvent, useState } from 'react';
import PostForm from './PostForm';
import PostInList from './PostInList';
import "../App.css";
import Post from '../models/post';

interface Prop {
    Title: string;
    Thought: string;
}

const SocialPosts = () => {
    const [formActive, setFormActive] = useState(false);
    const [posts, setPosts] = useState([
        {Title: "Batman", Thought: "Rich kid with cape who took to many karate lessons"},
        {Title: "Superman", Thought: "The only Alien we ever showed as wanting to help"},
        {Title: "Flash", Thought: "Remade so many times they should just add shapeshifter to the lore"},
        {Title: "Green Lantern", Thought: "All memories have been replaced with Ryan's face and I can't fix it"}
    ]);

    const handlePostFormSubmit = (post: Post) => {
        setPosts(prev => [...prev, post]);
        setFormActive(false);
    }

    const handleDeletePost = (index: number) => {
        console.log("delete firing")
        setPosts(prev => {
            const newPosts = prev.slice(0);
            newPosts.splice (index, 1);
            return newPosts;
        })
    }

    return (
        <div>
            <h1>My Thoughts</h1>
            {posts.map((post, i) => <PostInList onDelete={() => handleDeletePost(i)} key={i} post={post}/>)}
            <button onClick={() => setFormActive(true)}>New Thought</button>
            {formActive ?  <PostForm onSubmit={handlePostFormSubmit} onClose={() => setFormActive(false)} /> : <div></div>}
        </div>
    )
}

export default SocialPosts;