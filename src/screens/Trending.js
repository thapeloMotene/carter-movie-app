import React, { Component } from 'react'
import {Jumbotron  } from 'reactstrap';
import {  GridList } from '@material-ui/core';
import MediaCard from '../components/MediaCard';
import * as movieActions from '../actions/movie.actions';
import { connect } from 'react-redux';




 class Trending extends Component {

    componentDidMount(){
    
        this.props.fetchTrendingMovies();
    }
  render() {
    return (
      <div>
        <Jumbotron fluid style={{height:'370px', marginBottom:'10px', color:'white'}} className="movie-jumbo">
         <div className="cover">
        <h1 className="display-3 pdown">Trending Movies</h1>
        <p className="lead">Browse our catalog and discover new movies.</p>
       
                <div className="row">
                    <div className="col-md-4 offset-md-4">
                    
                    </div>
                </div>
                </div>
      </Jumbotron>

      <div className="container-fluid">


            <GridList>
            {this.props.trendingMovies && this.props.trendingMovies.map(movie =>(
                <MediaCard  {...movie} />
          ))}
            </GridList>
        
         
      </div>
      </div>
    )
  }
}


function mapStateToProps({trendingMovies}){
    return {trendingMovies}
}

export default connect(mapStateToProps, movieActions)(Trending);
