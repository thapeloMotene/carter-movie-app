import React, { Component } from 'react'
import Paper from'@material-ui/core/Paper';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';


export default class CreditsCard extends Component {


  render() {
    return (
      <div>
         <Paper style={{minHeight:'70px', marginBottom:'10px', minWidth:'440px', marginRight:'10px',marginLeft:'5px'}}>
                    <CardHeader
                            avatar={
                            <Avatar aria-label="avatar" stye={{ margin: 10,
                                width: 60,
                                height: 60}}  src={`https://image.tmdb.org/t/p/w300/${this.props.cast.profile_path}`}>
                              
                            </Avatar>
                            }
                            title={this.props.cast.name}
                            subheader={this.props.cast.character ? this.props.cast.character : this.props.cast.job }
                          
                        />
        </Paper>
      </div>
    )
  }
}
