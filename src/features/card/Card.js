import React, { useState } from 'react';
//import { useSelector, useDispatch } from 'react-redux';
import './Card.css';

export function Card({title, url, author, link}) {

    return (
        <article className="card">
            <h2>{title}</h2>
            <img src={url} alt=""/>
            <p>Posted by {author}</p>
            <a href={link} target="_blank" rel="noreferrer">see it on Reddit</a>
        </article>
    );
}