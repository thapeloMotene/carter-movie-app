import React from 'react';
import './App.css';
import Explore from './screens/Explore';
import Movies from './screens/Movies';
import People from './screens/People';
import NowPlaying from './screens/NowPlaying'
import Trending from './screens/Trending';
import MovieDetail from "./screens/MovieDetail";
import NavigationBar from './components/NavigationBar';

import {BrowserRouter,Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <div >
          <NavigationBar/>
          <Route component={Explore} exact path={'/'}/>
          <Route component={Movies} exact path={'/movies'}/>
          <Route component={People} exact path={'/people'}/>
          <Route component={NowPlaying} exact path={'/now-playing'}/>
          <Route component={Trending} exact path={'/tending'}/>
          <Route component={MovieDetail} exact path={'/movie/:id'} />
      </div>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
