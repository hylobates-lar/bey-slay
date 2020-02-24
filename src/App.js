
import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BeyContainer from "./BeyContainer";
import Favorites from "./Favorites"

class App extends React.Component {

  state = {
    beys: []
  }

  getBeys = () => {
    fetch("http://localhost:4000/beys")
      .then(r => r.json())
      .then(data => {
        this.setState({
        beys: data 
        })
      })
  }

  componentDidMount = () => {
    this.getBeys()
  }

  makeFavorite = (id) => {
    let beys = this.state.beys.map(bey => {
      if (bey.id === id) {
        bey.favorite = !bey.favorite
      }
      return bey
    })
    this.setState({
      beys: beys
    })
  }

  favoriteBeys = () => {
   
    let beys = this.state.beys.filter(bey => {
      return bey.favorite
    })
    return beys 
  }

  render () {
    return (
      <div className="main-container">
        <BeyContainer beys={this.state.beys} makeFavorite={this.makeFavorite}/>
        <Favorites beys={this.favoriteBeys()} makeFavorite={this.makeFavorite}/>
      </div>
    );
  }
};

export default App;
