import React from 'react';
import { BlogPostData } from '../posts';

export default function BlogPost({
    title,
    id,
    description,
    datePosted,
    dateEdited,
    content,
}: BlogPostData) {
    return (
        <>
            <h1>Blog Post</h1>
            <b>{datePosted.toISOString()}</b>
            <b>{dateEdited.toISOString()}</b>
            <p>{description}</p>
            <p>{content}</p>
        </>
    );
}
