import React from "react";
import BeyCard from "./BeyCard"

export default class BeyContainer extends React.Component {
  render() {
    return (
      <div className="bey-container">
        <h1>BEYDEX</h1>
        {this.props.beys.map( bey => (
          <BeyCard key={bey.id} bey={bey} makeFavorite={() => this.props.makeFavorite(bey.id)}/>
        ))}
      </div>
    );
  }
}
