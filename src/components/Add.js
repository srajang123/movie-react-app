import React, { Component } from 'react';

export default class Add extends Component
{
    formSubmit=(ll)=>{
      ll.preventDefault();
      this.props.addMovie(ll);
    }
  render=()=>{
    return <div className=''>
        <form name='movie' onSubmit={this.formSubmit}>
            <input type='text' className='form-control ml-5 mr-2 w-75 mt-3' value={this.props.send.newmovie.movie} placeholder='Enter Movie Name' onChange={this.props.change} name='movie'/>
            <select name='genre' className='form-control ml-5 mr-2 w-75 mt-3' value={this.props.send.newmovie.genre} onChange={this.props.change}>
                <option value=''>Select Movie Genre</option>
                {this.props.send.genres.map(el=>
                <option value={el} key={el}>{el}</option>)}
            </select>
            <input type='text' className='form-control ml-5 mr-2 w-75 mt-3' value={this.props.send.newmovie.year} placeholder='Enter Movie Year' onChange={this.props.change} name='year'/>
            <input type='submit' value='Add Movie' className='btn btn-warning text-danger ml-5 mt-3'/>
        </form>
    </div>
  }
}