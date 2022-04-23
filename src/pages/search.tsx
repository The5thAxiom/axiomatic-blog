import React, { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import BlogPostCards from '../components/blogPostCards';
import { posts } from '../posts';

export default function Search() {
    const [searchParams, setSearchParams] = useSearchParams();
    const filter = Object.fromEntries([...(searchParams as any)]);

    const [searchString, setSearchString] = useState<string>('');
    const navigate = useNavigate();
    const doSearch = () => {
        navigate(`/search?contains=${searchString}`);
    };

    const answer = posts.filter(x => {
        const yearMatch =
            filter.year === undefined
                ? true
                : x.datePosted.getFullYear() === parseInt(filter.year);

        const textContains =
            filter.contains === undefined || '' || '\n'
                ? true
                : x.title.toLowerCase().includes(filter.contains);

        return yearMatch && textContains;
    });

    return (
        <>
            <input
                type='text'
                placeholder='Enter keywords'
                onChange={x => setSearchString(x.target.value)}
                onKeyPress={key => key.key === 'Enter' && doSearch()}
            />
            <button onClick={doSearch}>Search</button>
            <h1>Search Results</h1>
            <BlogPostCards posts={answer} />
        </>
    );
}
