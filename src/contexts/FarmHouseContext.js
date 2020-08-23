import React, { Component } from 'react'

const FarmHouseContext = React.createContext({
    farmHouse: {},
    realtor: {},
    error: null,
    setError: () => {},
    clearError: () => {},
    setFarmHouse: () => {},
})

export default FarmHouseContext

export class FarmHouseProvider extends Component {
    state = {
        farmHouse: [],
        realtor: {},
        error: null,
    };

    setFarmHouse = farmHouse => {
        console.log(farmHouse)
        this.setState({ farmHouse })
        this.setState({ realtor: farmHouse.realtor })
    }

    setError = error => {
        console.error(error)
        this.setState({ error })
    }

    clearError = () => {
        this.setState({ error: null })
    }

    render() {
        const value = {
            farmHouse: this.state.farmHouse,
            realtor: this.state.realtor,
            realtorUser: this.state.realtorUser,
            error: this.state.error,
            setError: this.setError,
            clearError: this.clearError,
            setFarmHouse: this.setFarmHouse
        }

        return (
            <FarmHouseContext.Provider value={value}>
                {this.props.children}
            </FarmHouseContext.Provider>
        )
    }
}