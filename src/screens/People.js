import React, { Component } from 'react'
import {Jumbotron } from 'reactstrap';


export default class People extends Component {
  render() {
    return (
      <div>
        <Jumbotron fluid style={{height:'370px', marginBottom:'10px', color:'white'}} className="people-jumbo">
         <div className="cover">
        <h1 className="display-3 pdown">Discover People</h1>
        <p className="lead">Meet all the movers and shakers who make you go watch the movies</p>
       
                <div className="row">
                    <div className="col-md-4 offset-md-4">
                    {/* <Link className="btn btn-info" to="tending" color="info">View whats trending this week.</Link> */}
                    </div>
                </div>
                </div>
      </Jumbotron>
      </div>
    )
  }
}