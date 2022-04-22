import React from 'react';
import { NavLink } from 'react-router-dom';

import { BlogPostData } from '../posts';

import './blogPostCard.css';

export default function BlogPostCard({
    id,
    title,
    datePosted,
    blurb,
}: BlogPostData) {
    return (
        <section className='blog-post-card'>
            <NavLink to={`/post/${id}`}>
                <span className='title'>{title}</span>
                <br />
                <span className='date-posted'>
                    Posted on {datePosted.toDateString()}
                </span>
                <br />
                <span className='blurb'>{blurb}</span>
            </NavLink>
        </section>
    );
}
