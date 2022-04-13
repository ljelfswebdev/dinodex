import React, { Component } from 'react';
import Dinodex from './dinodex'


class Dinogame extends Component {
    static defaultProps = {
        dinosaur : [
            {id: 1, name: 'Allosaurus', type: 'carnivorous', base_experience: 87, imageUrl:'./images/dinosaurs/allosaurus.jpg'},
            {id: 2, name: 'Brachiosaurus', type: 'herbivorous', base_experience: 63, imageUrl:'./images/dinosaurs/Brachiosaurus.jpg'},
            {id: 3, name: 'Spinosaurus', type: 'carnivorous', base_experience: 130, imageUrl:'./images/dinosaurs/spinosaurus.jpeg'},
            {id: 4, name: 'Tyrannosaurus Rex', type: 'carnivorous', base_experience: 178, imageUrl:'./images/dinosaurs/trex.jpeg'},
            {id: 5, name: 'Velociraptor', type: 'carnivorous', base_experience: 162, imageUrl:'./images/dinosaurs/velociraptor.jpeg'},
            {id: 6, name: 'Triceratops', type: 'herbivorous', base_experience: 155, imageUrl:'./images/dinosaurs/triceratops.jpg'},
            {id: 7, name: 'Diplodocus', type: 'herbivorous', base_experience: 60, imageUrl:'./images/dinosaurs/diplodocus.jpg'},
            {id: 8, name: 'Pterodactyl', type: 'carnivorous', base_experience: 101, imageUrl:'./images/dinosaurs/pterodactyl.png'}
        ]
    };
    render() {
        let hand1= [];
        let hand2 = [...this.props.dinosaur];
        while(hand1.length < hand2.length){
            let randIdx = Math.floor(Math.random() * hand2.length);
            let randDinosaur = hand2.splice(randIdx, 1)[0];
            hand1.push(randDinosaur);
        }
        let exp1 = hand1.reduce((exp, dinosaur) => exp+dinosaur.base_experience, 0);
        let exp2 = hand2.reduce((exp, dinosaur) => exp+dinosaur.base_experience, 0);
        return (
            <div>
                <Dinodex dinosaur={hand1} exp={exp1} isWinner={exp1 > exp2} />
                <Dinodex dinosaur={hand2} exp={exp2} isWinner={exp2 > exp1}/>
            </div>
        );
    }
}

export default Dinogame;