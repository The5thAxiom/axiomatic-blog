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
            <b>Posted on {datePosted.toDateString()}</b> <br />
            {dateEdited.getTime() != datePosted.getTime() && (
                <b>Last edited on {dateEdited.toDateString()}</b>
            )}
            {blurb && <p>{blurb}</p>}
            {content}
        </>
    );
}
