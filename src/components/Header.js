import React, { Component } from 'react';
import {NavLink as Link} from 'react-router-dom';
export default class Header extends Component
{
  render=()=>{
    return <div className='header pl-4 pb-2 mb-4 border-bottom border-dark'>
        <h1 className='display-4 text-white font-weight-bold'>Movies App</h1>
        <div className='text-right links'>
          <Link to='/add' key='add' className='badge-primary m-3 pl-4 pr-4 text-decoration-none'>Add</Link>
          <Link to='/view' key='view' className='badge-primary m-3 pl-4 pr-4 text-decoration-none'>View</Link>
        </div>
    </div>
  }
}