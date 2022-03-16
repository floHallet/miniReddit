import React from 'react';
import './Card.css';

export function Card({hint, isSelf, selfText, isVideo, videoUrl, title, url, author, link}) {

    let media;
    if (isSelf) {
        media = <p>{selfText}</p>
    } else if(isVideo) {
        media = (<video controls muted>
                    <source src={videoUrl} type="video/mp4"/>
                    Your browser does not support video.
                </video>)
    } else if(hint === "link"){
        media = <a href={url} target="_blank" rel="noreferrer">{url}</a>;
    } else if(hint === "image") {
        media = <img src={url} alt=""/>
    } else {
        media = <p>{url}</p>
    }


    return (
        <article className="card">
            <h2>{title}</h2>
            {media}
            <div className="card-info">
                <p>Posted by <span>{author}</span></p>
                <a href={link} target="_blank" rel="noreferrer">See it on Reddit</a>
            </div>
        </article>
    );
}