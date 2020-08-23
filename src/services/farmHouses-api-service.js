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
    }
}

export default FarmHousesApiService