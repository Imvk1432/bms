import { useEffect, useState } from 'react';

function useFetch(url) {

    let[data, setdata] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("https://book-data-v10b.onrender.com/books")
            .then(response => {
            
                return response.json();
            })
            .then(data => {
                setdata(data);
                setError(null); // Reset error if fetch is successful
            })
            .catch(error => {
                setError(error.message); // Set error message

            });
    }, [url]);

    return { data, error };
}

export default useFetch;
