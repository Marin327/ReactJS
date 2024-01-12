import { useState, useEffect } from 'react';
import JokeArticle from "./JokeArticle";

const RandomJoke = () => {

    const [joke, setJoke] = useState({ icon_url: '', value: '' });
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch('https://api.chucknorris.io/jokes/random')
            .then(res => res.json())
            .then(data => {
                setJoke(data);
                setIsLoading(false);
            })
    }, []);

    if (isLoading) {
        return <p>Liading...</p>
    }
    return (
        <JokeArticle iconUrl={joke.icon_url} text={joke.value} />
    )
}
export default RandomJoke;