export const baseURL = {
    main: 'https://api.themoviedb.org/3',
    image: 'https://image.tmdb.org/t/p/',
}

export const mediaType = {
    tv: 'tv',
    movie: 'movie'
}

export const apiQueries = {
    getTrendingMovies: `${baseURL.main}/trending/movie/day?api_key=${process.env.REACT_APP_TMDB_API_KEY}`,
    getTrendingTVSeries: `${baseURL.main}/trending/tv/day?api_key=${process.env.REACT_APP_TMDB_API_KEY}`,
    getLatestMovies: `${baseURL.main}/movie/latest?api_key=${process.env.REACT_APP_TMDB_API_KEY}`,
    getLatestTVSeries: `${baseURL.main}/tv/latest?api_key=${process.env.REACT_APP_TMDB_API_KEY}`,
    getMovieDetails(id) { return `${baseURL.main}/movie/${id}?api_key=${process.env.REACT_APP_TMDB_API_KEY}` },
    getTVDetails(id) { return `${baseURL.main}/tv/${id}?api_key=${process.env.REACT_APP_TMDB_API_KEY}` },
    getOriginalImage(path) { return `${baseURL.image}/original/${path}?api_key=${process.env.REACT_APP_TMDB_API_KEY}` },
    getW500Image(path) { return `${baseURL.image}/w500/${path}?api_key=${process.env.REACT_APP_TMDB_API_KEY}` },
}