import React, { Component } from "react";
import BeyCard from "./BeyCard";

export default class Favorites extends Component {
  render() {
    return (
      <div className="favorites">
        <h1>BEYVORITES</h1>
        {this.props.beys.map( bey => (
          <BeyCard key={bey.id} bey={bey} makeFavorite={() => this.props.makeFavorite(bey.id)}/>
        ))}
      </div>
    );
  }
}
