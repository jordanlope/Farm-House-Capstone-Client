import config from '../config'

const FarmHousesApiService = {

    getFarmHouses() {
        return fetch(`${config.API_ENDPOINT}/farmHouses`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${config.TOKEN_KEY}`
            }
        })
        .then(res => 
            (!res.ok)
                ? res.json().then(e => Promise.reject(e))
                : res.json()
        )
    },
    getFarmHouse(houseId) {
        return fetch(`${config.API_ENDPOINT}/farmHouses/${houseId}`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${config.TOKEN_KEY}`
            }
        })
        .then(res =>
            (!res.ok)
                ? res.json().then(e => Promise.reject(e))
                : res.json()
        )
    },
    postFarmHouse(newFarmHouseValues) {
        return fetch(`${config.API_ENDPOINT}/farmHouses`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${config.TOKEN_KEY}`
            },
            body: JSON.stringify(newFarmHouseValues)
        })
        .then(res =>
            (!res.ok)
                ? res.json().then(e => Promise.reject(e))
                : res.json()
        )
    },
    deleteFarmHouse(farmHouseId) {
        return fetch(`${config.API_ENDPOINT}/farmHouses/${farmHouseId}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${config.TOKEN_KEY}`
            }
        })
        .then(res =>
            (!res.ok)
                ? res.json().then(e => Promise.reject(e))
                : res.json()
        )
    },
    updateFarmHouse(farmHouseId, updatedFarmHouseValues) {
        return fetch(`${config.API_ENDPOINT}/farmHouses/${farmHouseId}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${config.TOKEN_KEY}`
            },
            body: JSON.stringify(updatedFarmHouseValues)
        })
        .then(res =>
            (!res.ok)
                ? res.json().then(e => Promise.reject(e))
                : res.json()
        )
    }
}

export default FarmHousesApiService