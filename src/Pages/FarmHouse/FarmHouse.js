import React from 'react';
import './FarmHouse.css';
import PLACES from '../../PLACES';

function FarmHouse(props) {

  const house = PLACES.find(house =>
      house.id === props.match.params.homeId)
    return (
      <section className="FarmHouse">
        <p>{"Address: " + house.address}</p>
        <p>{"Description: " + house.description}</p>
        <p>{"Price: $" + house.price}</p>
      </section>
    );
}

export default FarmHouse;