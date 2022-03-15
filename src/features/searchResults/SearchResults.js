import React, { useState, useEffect } from 'react';
//import { useSelector, useDispatch } from 'react-redux';
import { Card } from '../card/Card';
import './SearchResults.css';

async function callAPI() {
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
};

export function SearchResults() {
    const [data, setData] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        callAPI().then(result => {
            setData(result);
            setIsLoading(false);
        });
    }, []);

    return (
        <section>
            <Card 
                title={ isLoading ? 'FETCHING...' : data.data.children[0].data.title }
                url={ isLoading ? '' : data.data.children[0].data.url }
                author={ isLoading ? 'FETCHING' : data.data.children[0].data.author }
                link={ isLoading ? 'https://www.reddit.com' : `https://www.reddit.com${data.data.children[0].data.permalink}` }
            />
            <Card 
                title={ isLoading ? 'FETCHING...' : data.data.children[1].data.title }
                url={ isLoading ? '' : data.data.children[1].data.url }
                author={ isLoading ? 'FETCHING' : data.data.children[1].data.author }
                link={ isLoading ? 'https://www.reddit.com' : `https://www.reddit.com${data.data.children[1].data.permalink}` }

            />
            <Card 
                title={ isLoading ? 'FETCHING...' : data.data.children[2].data.title }
                url={ isLoading ? '' : data.data.children[2].data.url }
                author={ isLoading ? 'FETCHING' : data.data.children[2].data.author }
                link={ isLoading ? 'https://www.reddit.com' : `https://www.reddit.com${data.data.children[2].data.permalink}` }

            />
            <Card 
                title={ isLoading ? 'FETCHING...' : data.data.children[3].data.title }
                url={ isLoading ? '' : data.data.children[3].data.url }
                author={ isLoading ? 'FETCHING' : data.data.children[3].data.author }
                link={ isLoading ? 'https://www.reddit.com' : `https://www.reddit.com${data.data.children[3].data.permalink}` }

            />
            <Card 
                title={ isLoading ? 'FETCHING...' : data.data.children[4].data.title }
                url={ isLoading ? '' : data.data.children[4].data.url }
                author={ isLoading ? 'FETCHING' : data.data.children[4].data.author }
                link={ isLoading ? 'https://www.reddit.com' : `https://www.reddit.com${data.data.children[4].data.permalink}` }

            />
        </section>
    );
}