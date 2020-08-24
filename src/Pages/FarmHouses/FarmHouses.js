import React from 'react';
import './FarmHouses.css';
import { Link } from 'react-router-dom';
import FarmHousesService from '../../services/farmHouses-api-service'
import FarmHouseListContext from '../../contexts/FarmHouseListContext'

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

    const { error } = this.context

    return (
      <>
        <h1>Farm Houses:</h1>
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