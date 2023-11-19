import { useState, useEffect } from 'react';

const useFetch = (url, defailtValue) => {
    const [data, setData] = useState(defailtValue);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(()=> {
        setIsLoading(true);
        fetch(url)
        .then(res => res.json()
        .then(result => {
            setIsLoading(false);

            setData(Object.values(result));
        }));
    }, [url]);

    return [data, setData, isLoading];

}

export default useFetch;