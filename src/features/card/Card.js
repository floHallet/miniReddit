import React from 'react';
import Skeleton from 'react-loading-skeleton';
//import ReactMarkdown from 'react-markdown';
//import { Parser } from 'html-to-react';
//import parse from 'html-react-parser';
import 'react-loading-skeleton/dist/skeleton.css'
import './Card.css';

export function Card({hint, isSelf, selfText, isVideo, videoUrl, title, url, author, link}) {

    let media;
    if (isSelf) {
        //media = <ReactMarkdown>{selfText}</ReactMarkdown>;
        /*try {
           media = parse(parse(selfText)); 
        } catch (e) {
            media='';
            console.log(e);
        }*/
        //media=selfText;
        media = <p>Please, <a href={link} target="_blank" rel="noreferrer">click here</a> to see the full post.</p>;
    } else if(isVideo) {
        media = (<video controls muted>
                    <source src={videoUrl} type="video/mp4"/>
                    Your browser does not support video.
                </video>);
        //media = <p>Video is not supported.</p>      
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
            {title ? media : <Skeleton height={100}/>}
            <div className="card-info">
                <p>Posted by <span>{author || <Skeleton />}</span></p>
                <a href={link} target="_blank" rel="noreferrer">See it on Reddit</a>
            </div>
        </article>
    );
}