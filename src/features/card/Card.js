import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'
import './Card.css';

export function Card({hint, isSelf, isVideo, videoUrl, title, url, author, link}) {

    let media;
    if (isSelf) {
        media = <p>Please, <a href={link} target="_blank" rel="noreferrer">click here</a> to see the full post.</p>;
    } else if(isVideo) {
        media = (<video controls muted>
                    <source src={videoUrl} type="video/mp4"/>
                    Your browser does not support video.
                </video>);    
    } else if(hint === "link"){
        media = <a href={url} target="_blank" rel="noreferrer">{url}</a>;
    } else if(hint === "image") {
        media = <img src={url} alt=""/>;
    } else {
        media = <p></p>;
    }

    return (
        <article className="card">
            <h2>{title || <Skeleton />}</h2>
            {title ? media : <Skeleton height={200}/>}
            <div className="card-info">
                <p>Posted by <span>{author || <Skeleton />}</span></p>
                <a href={link} target="_blank" rel="noreferrer">See it on Reddit</a>
            </div>
        </article>
    );
}