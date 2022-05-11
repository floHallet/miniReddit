import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Card } from '../card/Card';
import { callAPI } from './searchResultsSlice';
import { selectData, selectIsLoading } from './searchResultsSlice';
import './SearchResults.css';

export function SearchResults() {
    const data = useSelector(selectData);
    const isLoading = useSelector(selectIsLoading);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(callAPI('init'));
    }, [dispatch]);

    //debug use only :
    //console.log(data, isLoading);

    return (
        <section>
            {data.map(element => {
                return(<Card
                        key={element.data.id}
                        hint={element.data.post_hint ? element.data.post_hint : ''}
                        isSelf={element.data.is_self}
                        isVideo={element.data.is_video}
                        videoUrl={ element.data.is_video && element.data.media ? element.data.media.reddit_video.fallback_url : ''}
                        title={isLoading ? '' : element.data.title}
                        url={isLoading ? '' : element.data.url}
                        author={isLoading ? '' : element.data.author}
                        link={isLoading ? 'https://www.reddit.com' : `https://www.reddit.com${element.data.permalink}`} 
                    />)  
                })}            
        </section>
    );
}