import React from 'react';
import { NavLink } from 'react-router-dom';
import { posts } from '../posts';

export default function Home() {
    return (
        <>
            <h1>Welcome to Axiomatic</h1>
            <h2>
                A blog by me, <a href='https://www.samridh.live'>Samridh</a>!
                <br />
                This blog is going to be a place for a bunch of cool stuff I
                learn (or am going to learn).
            </h2>
            <h3>Topics:</h3>
            <ul>
                <li>Coding</li>
                <li>Computers</li>
                <li>Language</li>
                <li>Fiction (mostly Sci-fi and fantasy) </li>
            </ul>
            <h2>Posts</h2>
            {posts.reverse().map(post => (
                <section id={post.id}>
                    <h2>
                        <NavLink to={`/post/${post.id}`}>{post.title}</NavLink>
                    </h2>
                    <b>{post.datePosted.toISOString()}</b>
                    <p>{post.description}</p>
                </section>
            ))}
        </>
    );
}
