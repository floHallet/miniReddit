import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Card } from '../card/Card';
import { callAPI } from './searchResultsSlice';
import { selectData, selectIsLoading } from './searchResultsSlice';
import './SearchResults.css';

/*async function callAPI() {
    const url = 'https://www.reddit.com/r/popular.json';
    try{
        const response = await fetch(url);
            if(response.ok){
              const jsonResponse = await response.json()
              //console.log(jsonResponse);
              return jsonResponse;
            }
    } catch(error){
        console.log(error)
    }
};*/

export function SearchResults() {
    //const [data, setData] = useState({});
    //const [isLoading, setIsLoading] = useState(true);
    const data = useSelector(selectData);
    const isLoading = useSelector(selectIsLoading);
    const dispatch = useDispatch();

    useEffect(() => {
        /*callAPI().then(result => {
            setData(result);
            setIsLoading(false);
        });*/
        dispatch(callAPI('kitty'));
        //console.log(data, isLoading);
    }, [dispatch]);

    console.log(data, isLoading);

    return (
        <section>
            {data.map((element, index) => {
                return(<Card
                        key={index}
                        hint={element.data.post_hint ? element.data.post_hint : ''}
                        isSelf={element.data.is_self}
                        selfText={element.data.selftext}
                        isVideo={element.data.is_video}
                        videoUrl={ element.data.is_video ? element.data.media.reddit_video.hls_url : ''}
                        title={isLoading ? 'FETCHING...' : element.data.title}
                        url={isLoading ? '' : element.data.url}
                        author={isLoading ? 'FETCHING' : element.data.author}
                        link={isLoading ? 'https://www.reddit.com' : `https://www.reddit.com${element.data.permalink}`} 
                    />)  
                })}            
        </section>
    );
}

/*
<Card 
                title={ isLoading ? 'FETCHING...' : data[0].data.title }
                url={ isLoading ? '' : data[0].data.url }
                author={ isLoading ? 'FETCHING' : data[0].data.author }
                link={ isLoading ? 'https://www.reddit.com' : `https://www.reddit.com${data[0].data.permalink}` }
            />
            <Card 
                title={ isLoading ? 'FETCHING...' : data[1].data.title }
                url={ isLoading ? '' : data[1].data.url }
                author={ isLoading ? 'FETCHING' : data[1].data.author }
                link={ isLoading ? 'https://www.reddit.com' : `https://www.reddit.com${data[1].data.permalink}` }

            />
            <Card 
                title={ isLoading ? 'FETCHING...' : data[2].data.title }
                url={ isLoading ? '' : data[2].data.url }
                author={ isLoading ? 'FETCHING' : data[2].data.author }
                link={ isLoading ? 'https://www.reddit.com' : `https://www.reddit.com${data[2].data.permalink}` }

            />
            <Card 
                title={ isLoading ? 'FETCHING...' : data[3].data.title }
                url={ isLoading ? '' : data[3].data.url }
                author={ isLoading ? 'FETCHING' : data[3].data.author }
                link={ isLoading ? 'https://www.reddit.com' : `https://www.reddit.com${data[3].data.permalink}` }

            />
            <Card 
                title={ isLoading ? 'FETCHING...' : data[4].data.title }
                url={ isLoading ? '' : data[4].data.url }
                author={ isLoading ? 'FETCHING' : data[4].data.author }
                link={ isLoading ? 'https://www.reddit.com' : `https://www.reddit.com${data[4].data.permalink}` }

            />
*/