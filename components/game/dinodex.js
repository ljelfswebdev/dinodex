import React, { Component } from 'react';
import Dinocard from './dinocard';

class Dinodex extends Component {
    render() {
        let title;
        if(this.props.isWinner){
            title=<h1 className="Dinodex-winner">Winner</h1>
        } else {
            title=<h1 className="Dinodex-loser">Loser</h1>
        }
       return (
           <div className="Dinodex">
               {title}
               <h4>Total experience: {this.props.exp}</h4>
               <div className="Dinodex-cards">
                    {this.props.dinosaur.map((d) => (
                        <Dinocard id={d.id} name={d.name} type={d.type} imageUrl={d.imageUrl} exp={d.base_experience+d.base_defence} key={d.id}/>
                    ))}
               </div>
               
           </div>
       );
    }
}

export default Dinodex
