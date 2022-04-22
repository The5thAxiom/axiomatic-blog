import React from 'react';
import { NavLink } from 'react-router-dom';
import BlogPostCard from '../components/blogPostCard';
import { posts } from '../posts';

export default function Home() {
    return (
        <>
            <h1>Welcome to Axiomatic</h1>
            <p>
                A blog about....
                <br />
                well, I'll tell you when I figure it out, I promise :)
            </p>
            <h2>Recent Posts</h2>
            {posts.length > 0 ? (
                posts
                    .reverse()
                    .map((post, index) => (
                        <BlogPostCard key={index} {...post} />
                    ))
            ) : (
                <p>nothing found :(</p>
            )}
        </>
    );
}
