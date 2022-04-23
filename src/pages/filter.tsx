import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import BlogPostCard from '../components/blogPostCard';
import { posts } from '../posts';

export default function Filter() {
    const [searchParams, setSearchParams] = useSearchParams();
    const filter = Object.fromEntries([...(searchParams as any)]);
    const answer = posts.filter(
        x => x.datePosted.getFullYear() === parseInt(filter.year)
    );

    return (
        <>
            <h1>Filter</h1>
            <div className='blog-post-cards'>
                {answer.length > 0 ? (
                    answer
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
        </>
    );
}
