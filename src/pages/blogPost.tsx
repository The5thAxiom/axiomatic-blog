import React from 'react';
import { BlogPostData } from '../posts';

export default function BlogPost({
    title,
    id,
    blurb,
    datePosted,
    dateEdited,
    content,
}: BlogPostData) {
    return (
        <>
            <h1>{title}</h1>
            <b>{datePosted.toISOString()}</b>
            <b>{dateEdited.toISOString()}</b>
            <p>{blurb}</p>
            <p>{content}</p>
        </>
    );
}
