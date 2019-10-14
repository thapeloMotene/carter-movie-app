import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom';

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    margin:10
  },
  media: {
    height: 140,
  },
});

function trim(text,len){
    
    
    var t = text.length;
    text = text.substring(0, len);
    
    return t > text.length ? text + ". . ." : text
  
    }

export default function MediaCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={`https://image.tmdb.org/t/p/w300/${props.poster_path}`}
          title={props.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {trim(props.title,22)}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {trim(props.overview,180)}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
       
        <Link className="" to={`/movie/${props.id}`} size="small" color="primary">
          More Info
        </Link>
      </CardActions>
    </Card>
  );
}