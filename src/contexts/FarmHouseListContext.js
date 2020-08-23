import React, { Component } from 'react'

const FarmHouseListContext = React.createContext({
    farmHouseList: [],
    error: null,
    setError: () => {},
    clearError: () => {},
    setFarmHouseList: () => {},
})

export default FarmHouseListContext

export class FarmHouseListProvider extends Component {
    state = {
        farmHouseList: [],
        error: null,
    };

    setFarmHouseList = farmHouseList => {
        this.setState({ farmHouseList })
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
            farmHouseList: this.state.farmHouseList,
            error: this.state.error,
            setError: this.setError,
            clearError: this.clearError,
            setFarmHouseList: this.setFarmHouseList
        }

        return (
            <FarmHouseListContext.Provider value={value}>
                {this.props.children}
            </FarmHouseListContext.Provider>
        )
    }
}