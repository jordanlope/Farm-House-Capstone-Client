require('dotenv').config()

export default {
    API_ENDPOINT: process.env.REACT_APP_API_ENDPOINT || 'https://safe-wave-66925.herokuapp.com/api',
    TOKEN_KEY: process.env.REACT_APP_TOKEN_KEY || '1e272152-e43a-11ea-87d0-0242ac130003',
}