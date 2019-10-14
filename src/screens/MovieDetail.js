
import React, { Component }  from 'react'
import {Jumbotron } from 'reactstrap';
import {connect} from 'react-redux';
import CenteredTabs from '../components/CenteredTabs';
import * as movieActions from '../actions/movie.actions';
import { Container } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ReviewCard from '../components/ReviewCard';
import MediaGallary from '../components/MediaGallary';
import CreditsCard from '../components/CreditsCard';



function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <Typography
        component="div"
        role="tabpanel"
        hidden={value !== index}
        id={`scrollable-auto-tabpanel-${index}`}
        aria-labelledby={`scrollable-auto-tab-${index}`}
        {...other}
      >
        <Box p={3}>{children}</Box>
      </Typography>
    );
  }

 class MovieDetail extends Component {

   constructor(props){
    super(props);

    this.state ={
        tab:0,
        images:[]
    }
   }


   setTabIndex = (i) =>{
        this.setState({tab:i});
   }

    componentDidMount(){
        this.props.fetchMovieById(this.props.match.params.id);
        this.props.fetchMovieReviewsById(this.props.match.params.id);
        this.props.fetchMovieImagesById(this.props.match.params.id);
        this.props.fetchMovieCreditsById(this.props.match.params.id);
    }


   produceImages = (movie) =>{
            return[
                {
                src: `https://image.tmdb.org/t/p/w500/${movie.poster_path}`,
                thumbnail: `https://image.tmdb.org/t/p/w400/${movie.poster_path}`,
                thumbnailWidth: 320,
                thumbnailHeight: 174,
                caption:'Movie Poster'
                },
                {
                    src: `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`,
                    thumbnail: `https://image.tmdb.org/t/p/w400/${movie.backdrop_path}`,
                    thumbnailWidth: 320,
                    thumbnailHeight: 174,
                    caption:'Backdrop Image'
                    }

            ]

       
    }

  render() {
    return (
      <div>

          {this.props.movie ?(
        <Jumbotron  style={{height:'370px', color:'white', backgroundSize:'cover',backgroundImage:`url(https://image.tmdb.org/t/p/w500/${this.props.movie.backdrop_path})`, marginBottom:0}} className="mov-jumbo">
        <div className="movie-cover">
  
    
            <div className="row ">
                <div className="col-md-3">
                <img src={`https://image.tmdb.org/t/p/w300/${this.props.movie.poster_path}`} alt="movie poster"></img>
                </div>
                <div className="col-md-8 align-left" style={{padding:'25px'}}>
                <h1 className="display-3 pdown">{this.props.movie.title}</h1>
                <p className="lead">{this.props.movie.overview}</p>
                </div>
            </div>
            </div>
    </Jumbotron>
  
          ):null}

            <CenteredTabs  onTabChange ={this.setTabIndex} style={{margin:0, backgroundColor:'#343a40'}} />

            <Container>
                <TabPanel value={this.state.tab} index={0} style={{paddingLeft:'140px'}}>
                        
                    {this.props.reviews && this.props.reviews.map(review=>(
                          <ReviewCard review ={review} />
                    ))}
               
                </TabPanel>
                <TabPanel value={this.state.tab} index={1} style={{paddingLeft:'130px'}}>
                
                   {this.props.movie && this.props.movie ? (
                         <MediaGallary images = {this.produceImages(this.props.movie)} />
                   ):null}
                </TabPanel>
                <TabPanel value={this.state.tab} index={2} style={{paddingLeft:'140px'}}>
                    <div className="row">
                    {this.props.credits && this.props.credits.map(credit=>(
                          <CreditsCard cast ={credit} />
                    ))}

                    </div>
                </TabPanel>
               
            
            </Container>

      </div>
    )
  }
}

function mapStateToProps({movie,reviews, movieImages, credits}){
return {movie, reviews, movieImages, credits}
}

export default connect(mapStateToProps,movieActions)(MovieDetail);