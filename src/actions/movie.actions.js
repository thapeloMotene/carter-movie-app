
import {FETCH_DISCOVER,FETCH_NOW_PLAYING, FETCH_TOP_RATED, FETCH_MOVIE, FETCH_REVIEWS, FETCH_IMAGES, FETCH_CREDITS, FETCH_TRENDING} from '../types';
import * as constants from '../configs/constants';

const axios = require('axios');

const axios_http = axios.create({
    baseURL: constants.basePath,
    timeout: 10000,
    
  });




// GET: Discover Movies
export const fetchDiscoverMovies = () => async dispatch =>{
    
    const res =await axios_http.get(`/discover/movie?api_key=${constants.api_key}&language=en-US&page=1&sort_by=popularity.desc&include_adult=false&include_video=false`);
    
    const movies = await res.data.results;

    console.log('[action : discover]', movies);
    dispatch({type: FETCH_DISCOVER, payload: movies});
}



//GET: Now Playing
export const fetchNowPlayingMovies = () => async dispatch =>{

    const res =await axios_http.get(`/movie/now_playing?api_key=${constants.api_key}&language=en-US&page=1`);
    
    const movies = await res.data.results;

    console.log('[action : now playing]', movies);
    dispatch({type: FETCH_NOW_PLAYING, payload: movies});
}





//GET Top Rated Movies

//GET: Now Playing
export const fetchTopRatedMovies = () => async dispatch =>{

    const res =await axios_http.get(`/movie/now_playing?api_key=${constants.api_key}&language=en-US&page=1`);
    
    const movies = await res.data.results;

    console.log('[action : top rated]', movies);
    dispatch({type: FETCH_TOP_RATED, payload: movies});
}

//GET Movie By id
export const fetchMovieById = (id) => async dispatch =>{

    const res =await axios_http.get(`/movie/${id}?api_key=${constants.api_key}&language=en-US&page=1`);
    
    const movie = await res.data;

    console.log('[action : movie by Id]', movie);
    dispatch({type: FETCH_MOVIE, payload: movie});
}



//GET Movie By id
export const fetchMovieReviewsById = (id) => async dispatch =>{

    const res =await axios_http.get(`/movie/${id}/reviews?api_key=${constants.api_key}&language=en-US&page=1`);
    
    const review = await res.data.results;

    console.log('[action : review by Id]', review);
    dispatch({type: FETCH_REVIEWS, payload: review});
}


export const fetchMovieImagesById = (id) => async dispatch =>{

    const res =await axios_http.get(`/movie/${id}/images?api_key=${constants.api_key}&language=en-US&page=1`);
    
    const images = await res.data;

    console.log('[action : images by Id]', images);
    dispatch({type: FETCH_IMAGES, payload: images});
}


export const fetchMovieCreditsById = (id) => async dispatch =>{

    const res =await axios_http.get(`/movie/${id}/credits?api_key=${constants.api_key}&language=en-US&page=1`);
    
    const credits = await res.data.cast;

    console.log('[action : credits by Id]', credits);
    dispatch({type: FETCH_CREDITS, payload: credits});

}


//GET: Trending Movies
export const fetchTrendingMovies = () => async dispatch =>{

    const res =await axios_http.get(`/movie/now_playing?api_key=${constants.api_key}&language=en-US&page=1`);
    
    const movies = await res.data.results;

    console.log('[action : trending]', movies);
    dispatch({type: FETCH_TRENDING, payload: movies});
}
