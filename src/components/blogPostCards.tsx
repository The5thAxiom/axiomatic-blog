import React from 'react';
import BlogPostCard from '../components/blogPostCard';
import { BlogPostData } from '../posts';

export default function BlogPostCards({ posts }: { posts: BlogPostData[] }) {
    return (
        <div className='blog-post-cards'>
            {posts.length > 0 ? (
                posts
                    .reverse()
                    .map((post, index) => (
                        <BlogPostCard
                            key={index}
                            {...post}
                            className={index % 2 === 0 ? 'alpha' : 'beta'}
                        />
                    ))
            ) : (
                <p>nothing found :(</p>
            )}
        </div>
    );
}
