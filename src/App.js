import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News'
import LoadingBar from 'react-top-loading-bar'

import {
 BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"



export default class App extends Component {
 


 pageSize = 10;

  

state = {
  progress :0 ,
}

setProgress = (progress)=>{
     this.setState({progress:progress})
}

  render() {
    return (
      <div>
        <Router>
        <Navbar/>
        <LoadingBar
        height={3}
        color='#f11946'
        progress={this.state.progress}
        // onLoaderFinished={() => setProgress(0)}
      />
        <Routes>j=
           <Route exact path = "/science" element = {<News setProgress = {this.setProgress}  key="sciences" pageSize={this.pageSize} country = 'in' category = "science"/> }/>
           <Route exact path = "/entertainment" element = {<News setProgress = {this.setProgress}   key="entertainments" pageSize={this.pageSize} country = 'in' category = 'entertainment'/>}/>
           <Route exact path = "/health" element = {<News setProgress = {this.setProgress}   key="healths" pageSize={this.pageSize} country = 'in' category = 'health'/>}/>
           <Route exact path = "/technology" element = {<News setProgress = {this.setProgress}   key="technologys" pageSize={this.pageSize} country = 'in' category = 'technology'/>}/>
           <Route exact path = "/general" element = {<News setProgress = {this.setProgress}   key="generals" pageSize={this.pageSize} country = 'in' category = 'general'/>}/>
           <Route exact path = "/sports" element = {<News setProgress = {this.setProgress}   key="sportss" pageSize={this.pageSize} country = 'in' category = 'sports'/>}/>
           <Route exact path = "/business" element = {<News setProgress = {this.setProgress}   key="businesss" pageSize={this.pageSize} country = 'in' category = 'business'/>}/>
           <Route exact path = "/" element = {<News setProgress = {this.setProgress}   key="homes" pageSize={this.pageSize} country = 'in' category = 'general'/>}/>
        </Routes>
        </Router>
      </div>
      
    )
  }
}
