import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';/*
import {Provider} from 'react-redux';*/
import axios from 'axios';
import View from './components/View';
import Add from './components/Add';
import {Route,Switch,BrowserRouter as Router,Redirect} from 'react-router-dom';

axios.defaults.headers.post['Content-Type']='application/x-www-form-urlencoded';
axios.defaults.headers.post['Accept']='application/json';

export default class App extends Component
{
  constructor(props)
  {
    super(props);
    this.state={
      movies:[],
      newmovie:{
        movie:'',
        genre:'',
        year:''
      },
      loading:true,
      genres:[]
    }
  }
  componentDidMount=()=>{
    axios.get('http://localhost:5000/get-movies').then(res=>{
      this.setState({
        movies:JSON.parse(res.data),
        loading:false,
        genres:['comedy','action','horror','comic-book']
      })
    })
    document.title='Movies App';
  }
  addMovie=()=>{
    let data=this.state.movies;
    data.push(this.state.newmovie);
    let newMovie={
      movie:'',
      genre:'',
      year:''
    };
    axios.post('http://localhost:5000/add-movie',this.state.newmovie).then(res=>{
      console.log('Data Added');
      this.setState({
        movies:JSON.parse(res.data),
        newmovie:newMovie
      })
    })
    .catch(err=>console.log('Srajan an error'+err));
  }
  inputChange=(e)=>{
    let newMovie=this.state.newmovie;
    switch(e.target.name)
    {
      case 'movie':newMovie.movie=e.target.value;
                  break;
      case 'genre':newMovie.genre=e.target.value;
                  break;
      case 'year':newMovie.year=e.target.value;
                  break;
      default:console.log('INVALID CHECK');
    }
    this.setState({
      newmovie:newMovie
    })
  }
  render=()=>
  {
    return (
      <div>
      <Router>
        <Header/>
        <Switch>
          <Route path='/add' render={()=><Add send={this.state} change={this.inputChange} addMovie={this.addMovie}/>}/>
          <Route path='/view' render={()=><View send={this.state}/>}/>
          <Redirect to='/view'></Redirect>
        </Switch>
      </Router>
      <Footer/>
      </div>
    )
  }
}