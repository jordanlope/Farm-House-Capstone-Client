import React, { Component } from 'react';
import './AddFarmHouse.css';
import { withRouter } from 'react-router-dom';
import FarmHousesAPIService from '../../services/farmHouses-api-service'
import RealtorContext from '../../contexts/RealtorContext'

class AddFarmHouse extends Component {
    static contextType = RealtorContext

    constructor(props) {
        super(props);
        this.state = { 
            error: null,
            address: '', 
            description: '', 
            price: '', 
            rooms: '', 
            bathrooms: '', 
            sizesqft: ''
        }
    }

    addressChanged(address) {
        this.setState({
            address
        })
    }

    descriptionChanged(description) {
        this.setState({
            description
        })
    }

    priceChanged(price) {
        this.setState({
            price
        })
    }

    roomsChanged(rooms) {
        this.setState({
            rooms
        })
    }

    bathroomsChanged(bathrooms) {
        this.setState({
            bathrooms
        })
    }

    sizesqftChanged(sizesqft) {
        this.setState({
            sizesqft
        })
    }

    handleSubmit = ev => {
        ev.preventDefault()

        const { id } = this.context.getRealtor()
        const realtorid = id
        console.log('Realtor id', id)
        const {
            address, 
            description, 
            price, 
            rooms, 
            bathrooms, 
            sizesqft
        } = this.state;

        const newFarmHouse = { 
            address, 
            description, 
            price, 
            rooms, 
            bathrooms, 
            sizesqft, 
            realtorid
        }

        FarmHousesAPIService.postFarmHouse(newFarmHouse)
        .then(data => {

            this.setState({
                error: null,
                address: '',
                description: '',
                price: 0,
                rooms: 0,
                bathrooms: 0,
                sizesqft: 0
            });

            this.props.history.push('/')
        }).catch(res => {
            console.log(res.error)
            this.setState({ error: res.error })
        })
    }

    render() {
        return (
            <form
                className="RegistrationForm"
                onSubmit={this.handleSubmit}>
                <div className='address'>
                    <label>
                        Address:
                    </label>

                    <input
                        type='text'
                        required
                        name='address'
                        value={this.state.address}
                        onChange={e => this.addressChanged(e.target.value)}/>
                </div>
                <div className='description'>
                    <label >
                        Description:
                    </label>

                    <input
                        type='text'
                        required
                        name='description'
                        value={this.state.description}
                        onChange={e => this.descriptionChanged(e.target.value)}/>
                </div>
                <div className='price'>
                    <label >
                        House Price:
                    </label>

                    <input
                        type='number'
                        required
                        name='price'
                        value={this.state.price}
                        onChange={e => this.priceChanged(e.target.value)}/>
                </div>
                <div className='rooms'>
                    <label>
                        Number of rooms:
                    </label>

                    <input
                        type='number'
                        required
                        name='rooms'
                        value={this.state.rooms}
                        onChange={e => this.roomsChanged(e.target.value)}/>
                </div> 
                <div className='bathrooms'>
                    <label>
                        Number of bathrooms:
                    </label>

                    <input 
                        type='number'
                        required
                        name='bathrooms'
                        value={this.state.bathrooms}
                        onChange={e => this.bathroomsChanged(e.target.value)}
                    />
                </div>
                <div className='sizesqft'>
                    <label>
                        Square Feet of the House:
                    </label>

                    <input 
                        type='number'
                        required
                        name='sizesqft'
                        value={this.state.sizesqft}
                        onChange={e => this.sizesqftChanged(e.target.value)}
                    />
                </div>
                <button type='submit'>
                    Add Farm House
                </button>
            </form>
        );
    }
}

export default withRouter(AddFarmHouse);