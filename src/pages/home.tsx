import React from 'react';
import BlogPostCards from '../components/blogPostCards';
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
            <BlogPostCards posts={posts} />
        </>
    );
}
