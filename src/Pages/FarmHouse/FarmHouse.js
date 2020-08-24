import React, { Component } from 'react';
import './FarmHouse.css';
import FarmHousesService from '../../services/farmHouses-api-service'
import FarmHouseContext from '../../contexts/FarmHouseContext'

export default class FarmHouse extends Component {
  static contextType = FarmHouseContext

  componentDidMount() {
    this.context.clearError()
    FarmHousesService.getFarmHouse(this.props.match?.params.homeId)
      .then(this.context.setFarmHouse)
      .catch(this.context.setError)
  }

  render() {
    const { farmHouse } = this.context ? this.context : {}
    const { realtor } = this.context

    console.log('This is current realtor', realtor)
    return (
      <section className="FarmHouse">
        <h2>Farm House Details</h2>
        <p>{"Address: " + farmHouse.address}</p>
        <p>{"Description: " + farmHouse.description}</p>
        <p>{"Price: $" + farmHouse.price}</p>
        <h2>Realtor Contact Info</h2>
        <p>{"Name: " + realtor.full_name}</p>
        <p>{"Email: " + realtor.email}</p>
        <p>{"Number: " + realtor.number}</p>
        <p>{"Description: " + realtor.description}</p>
      </section>
    );
  }
}