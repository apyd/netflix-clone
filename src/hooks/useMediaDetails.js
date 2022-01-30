import { useState, useEffect } from 'react'
import { mediaType, apiQueries } from '../api/api'

export const useMediaDetails = (type, id) => {
    const [mediaDetails, setMediaDetails] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            const url = type === mediaType.movie ? apiQueries.getMovieDetails(id) : apiQueries.getTVDetails(id);
            const response = await fetch(url)
            const result = await response.json();
            setMediaDetails({
                type,
                title: result.original_title,
                img: `${apiQueries.getOriginalImage(result.poster_path)}`,
                date: result.release_date,
                description: result.overview,
                genres: result.genres,
                runtime: result.runtime,
            });
        }
        fetchData();
    }, [type, id])
    return mediaDetails
}