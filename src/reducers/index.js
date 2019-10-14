import {combineReducers} from 'redux';
import nowPlayingReducer from './nowPlayingReducer';
import topRatedReducer from './topRatedReducer';
import movieReducer from './movieReducer';
import discoverReducer from './discoverReducer';
import reviewsReducer from './reviewsReducer';
import movieImageReducer from './moveImageReducer';
import castReducer from './castReducer';
import trendingReducer from './trendingReducer';


export default combineReducers({
    nowPlayingMovies:nowPlayingReducer,
    topRatedMovies:topRatedReducer,
    movie:movieReducer,
    discoverMovies:discoverReducer,
    reviews:reviewsReducer,
    movieImages:movieImageReducer,
    credits:castReducer,
    trendingMovies:trendingReducer
});