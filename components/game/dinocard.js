import React, { Component } from 'react'

class Dinocard extends Component {
    render() {

        return (
           <div className="Dinocard">
               <h1 className="Dinocard-title">{this.props.name}</h1>
               <img className="Dinocard-image" src={this.props.imageUrl} alt={this.props.name}/>
               <div className="Dinocard-data">Type: {this.props.type}</div>
               <div className="Dinocard-data">Exp: {this.props.exp}</div>
           </div>
        );
    }
}

export default Dinocard;