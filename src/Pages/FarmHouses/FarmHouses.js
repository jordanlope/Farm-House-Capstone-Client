import React from 'react';
import './FarmHouses.css';
import { Link } from 'react-router-dom';

export default class FarmHouses extends React.Component {

    render() {
      const farmHouses = this.props.houses
      return (
        <>
          <h1>Farm Houses:</h1>
          <ul className='FarmList'>
            {
              farmHouses.map(house =>
                <li key={house.id}>
                  <Link to={`/home/${house.id}`}>
                    
                    <h2>{house.address}</h2>
                    
                    <p>{house.description}</p>
                  </Link>
                </li>
            )}
          </ul>
        </>
      );
    }
}