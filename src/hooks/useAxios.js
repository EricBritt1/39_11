import {useEffect, useState} from "react";
import axios from "axios";

//This was my attempt at step four trying to get it to work but, I am struggling to do so. I'll refer to solution how to implement this into addPokemon.
//useFlip was not a problem though

const useAxios = (base_url, endpoint=null) => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);
    let url = base_url;

    if (endpoint) {
        url = `${base_url}/${endpoint}`
    };

    const fetchData = async () => {
        try {
            const data = await axios.get(url);
            setResponse(data)
        } catch(err) {
            setError(err)
        }
    };

    useEffect(() => {
        fetchData()
    })
    
    return [response, error]
};

export default useAxios;




