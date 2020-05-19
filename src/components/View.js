import React, { Component } from 'react';
import ViewMovies from './ViewMovies';
import Navigation from './Navigation';
export default class View extends Component
{
  constructor(props)
  {
      super(props);
      this.state={
          cur:'all'
      }
      console.log(this.props.send.movies);
  }
  changeView=(e)=>{
      this.setState({
          cur:e.target.value
      })
  }
  render=()=>{
    return (
      <div className='container'>
          <div className='row'>
            <div className='col'>
              <Navigation send={this.props.send} change={this.changeView} cur={this.state.cur}/>
            </div>
            <div className='col-10'>
              <ViewMovies send={this.props.send} cur={this.state.cur}/>
            </div>
          </div>
      </div>
    )
  }
}