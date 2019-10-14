import React, { Component } from 'react'
import {Jumbotron , InputGroup, InputGroupAddon, Input ,ListGroup, ListGroupItem } from 'reactstrap';

import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import * as constants from '../configs/constants';
//actions import
import * as movieActions from '../actions/movie.actions';
const axios = require('axios');

 class Explore extends Component {

  constructor(props){
    super(props);


    this.onSearch = this.onSearch.bind(this);
    this.onSearchResults= this.onSearchResults.bind(this);
    this.state ={
      searchResults:[]
    }
  }

  componentDidMount(){
    this.props.fetchNowPlayingMovies();
    this.props.fetchTopRatedMovies();
  }
   
onSearch = (e) =>{
  let that = this;
  let url=`https://api.themoviedb.org/3/search/movie?api_key=${constants.api_key}&query=${e.target.value}`;
  console.log(url)

  if (e.target.value.length > 2){
    //run search here
    axios.get(url)
  .then(  function (response) {
    // handle success
    console.log('[search result]',response.data.results);
    that.setState({searchResults:response.data.results})
  

  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed

  
  });
  }



}


onSearchResults=(result)=>{
  this.setState({searchResults:result.data.results})
}


  render() {
  
    return (
      <div>
       <Jumbotron fluid style={{height:'370px', marginBottom:'10px', color:'white', zIndex:1}} className="search-jumbo">
        <h1 className="display-3">Welcome, Movie Watcher!</h1>
        <p className="lead">Find Your favorites or explore our database for your next best movie or TV Show.</p>
       
                <div className="row">
                    <div className="col-md-4 offset-md-4">
                    <InputGroup>
                        <Input placeholder="Lets find the perfect watch for you ..." onChange={this.onSearch} />
                        <InputGroupAddon addonType="append">Go</InputGroupAddon>
                    </InputGroup>
                    </div>
                </div>
                <div className="row">
                <div className="col-md-4 offset-md-4">
                  <ListGroup  style={{zIndex: '100',position:'relative'}} >

                    {this.state.searchResults && this.state.searchResults.map(result=>(
                        <ListGroupItem className="justify-content-between"><Link to={`/movie/${result.id}`}>{result.title}</Link></ListGroupItem>
                    ))}
                  
                      
                    
                </ListGroup>
                </div>
                </div>
      </Jumbotron>


  {this.props.nowPlayingMovies ? (
    <div style={{zIndex:'-1'}} className="nowPlaying">
       <Typography variant="h6">Now playing</Typography>
       <GridList  style={{flexWrap: 'nowrap',transform: 'translateZ(0)'}} cols={2.5}>
 
           { this.props.nowPlayingMovies && this.props.nowPlayingMovies.map(movie => (
             
           <GridListTile style={{width:'300px'}}>
              <Link  key={movie.id} to={`/movie/${movie.id}`}>
               <img style={{backgroundSize:'contain'}} src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt={movie.title} />
               <GridListTileBar
               title={movie.title}
               classes={{}}
               actionIcon={
                   <IconButton aria-label={`star ${movie.title}`}>
               
                   </IconButton>
               }
               />
               </Link>
           </GridListTile>
           
           ))}
       </GridList>
       </div>
  ):null}
        
     
{this.props.topRatedMovies ?( 
  <div>
       <Typography variant="h6" style={{marginTop:'10px'}}>Top rated movies</Typography>
 <GridList  style={{flexWrap: 'nowrap',transform: 'translateZ(0)'}} cols={2.5}>


    {this.props.topRatedMovies && this.props.topRatedMovies.map(movie =>(
     <div className="col-md-4">
       <Link to={`/movie/${movie.id}`}>
    <Card  style={{ display: 'flex'}}>
    <CardMedia
        style={{ width: 151,height:170,backgroundSize:'cover'}}
        image={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
        title="Live from space album cover"
        />
        <div style={{display: 'flex',flexDirection: 'column'}}>
        <CardContent  style={{flex: '1 0 auto'}}>
        <Typography component="h4" variant="subtitle1">
        {movie.title}
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
        Release Date : {movie.release_date}
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
        Popularity : {movie.popularity}
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
        # votes: {movie.vote_count}
        </Typography>
        </CardContent>
        <div style={{ display: 'flex', alignItems: 'center',paddingLeft: '10px',paddingBottom: '5px'}}>
      
        </div>
        </div>
      
        </Card>
        </Link>
     </div>
    ))}
         
         </GridList>
  </div>
):null}
    





         <Jumbotron fluid style={{height:'370px', marginBottom:'10px', color:'white'}} className="trend-jumbo">
        <h1 className="display-3">Wanna catch the movie fever ?</h1>
        <p className="lead">See what movies are trending and avoid spoilers.</p>
       
                <div className="row">
                    <div className="col-md-4 offset-md-4">
                    <Link className="btn btn-info" to="tending" color="info">View whats trending this week.</Link>
                    </div>

                </div>
      </Jumbotron>
  

      </div>
    )
  }
}

function mapStateToProps({nowPlayingMovies,topRatedMovies}){
  return {nowPlayingMovies, topRatedMovies}
}

export default connect(mapStateToProps,movieActions)(Explore);