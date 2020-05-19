import React, { Component } from 'react';

export default class ViewMovies extends Component
{
  render=()=>{
    return  <div className='card-columns'>
    {this.props.send.movies.filter(el=>el.genre===(this.props.cur==='all'?el.genre:this.props.cur)).map(el=>
    <div className='card border border-danger'>
      <div className='card-body text-center'>
        <div className='title'>
          <h2>{el.name}</h2>
        </div>
        <div className='genre'>
          <h4>{el.genre}</h4>
        </div>
        <div className='year'>
          <h4>{el.year}</h4>
        </div>
      </div>
    </div>
    )}
    </div>
  }
}