import React from 'react';
import './Card.css';

export function Card({title, url, author, link}) {

    return (
        <article className="card">
            <h2>{title}</h2>
            <img src={url} alt=""/>
            <p>Posted by <span>{author}</span></p>
            <a href={link} target="_blank" rel="noreferrer">See it on Reddit</a>
        </article>
    );
}