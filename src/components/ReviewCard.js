import React, { Component } from 'react'
import Paper from'@material-ui/core/Paper';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';

function trim(text){
    text = text.substring(0, 1);
    return text.toUpperCase();
    }

export default class ReviewCard extends Component {

 

  render() {
    return (
      <div>
         <Paper style={{minHeight:'70px', marginBottom:'10px'}}>
                    <CardHeader
                            avatar={
                            <Avatar aria-label="avatar">
                                {trim(this.props.review.author)}
                            </Avatar>
                            }
                            title={this.props.review.author}
                            subheader={this.props.review.url}
                          
                        />
                        <div style={{padding:20, paddingBottom:15}}>
                        {this.props.review.content}
                        </div>
                     
        </Paper>
      </div>
    )
  }
}
