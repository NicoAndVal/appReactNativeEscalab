import { useEffect, useState } from "react"
import axios from 'axios';

export const useCats = () => {
    const [isLoading, setisLoading] = useState(true);
    const [cats, setCats] = useState({});

    const getCats = async () => {
        const {data} = await axios.get('https://api.thecatapi.com/v1/breeds/');
        setCats(data)
        setisLoading(false);
    }

    useEffect(() => {
        getCats();
    }, [])

    return {
        cats,
        isLoading
    }
}