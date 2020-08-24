import React from 'react';
import './FarmHouses.css';
import { Link } from 'react-router-dom';
import MainImage from '../../Assets/michael-bourgault-YvvHEQNgMcU-unsplash.jpg';
import FarmHousesService from '../../services/farmHouses-api-service';
import FarmHouseListContext from '../../contexts/FarmHouseListContext';

export default class FarmHouses extends React.Component {
  static contextType = FarmHouseListContext

  componentDidMount() {
    this.context.clearError()
    FarmHousesService.getFarmHouses()
      .then(this.context.setFarmHouseList)
      .catch(this.context.setError)
  }

  render() {
    const { farmHouseList } = this.context ? this.context : []

    return (
      <>
        <img className='MainImage' src={MainImage} alt={"Logo"} />
        <h1 className='title'>Farm Houses for Sale</h1>
        <ul className='FarmList'>
          {
            farmHouseList.map(house =>
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