import React, { Component } from 'react'
import {Jumbotron  } from 'reactstrap';
import {  GridList } from '@material-ui/core';
import MediaCard from '../components/MediaCard';
import {connect} from 'react-redux';
import * as movieActions from '../actions/movie.actions';




 class NowPlaying extends Component {

    componentDidMount(){
        this.props.fetchNowPlayingMovies();
    }
  render() {
    return (
      <div>
        <Jumbotron fluid style={{height:'370px', marginBottom:'10px', color:'white'}} className="movie-jumbo">
         <div className="cover">
        <h1 className="display-3 pdown">Now Playing</h1>
        <p className="lead">Your all-in-one movie guide.</p>
       
                <div className="row">
                    <div className="col-md-4 offset-md-4">
                    {/* <Link className="btn btn-info" to="tending" color="info">View whats trending this week.</Link> */}
                    </div>
                </div>
                </div>
      </Jumbotron>


      <GridList>
            {this.props.nowPlayingMovies && this.props.nowPlayingMovies.map(movie =>(
                <MediaCard  {...movie} />
          ))}
            </GridList>
      </div>
    )
  }
}


function mstp({nowPlayingMovies}){
return {nowPlayingMovies}
}

export default connect(mstp,movieActions)(NowPlaying);