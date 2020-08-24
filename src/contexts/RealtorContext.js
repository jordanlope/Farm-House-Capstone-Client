import React, { Component } from 'react'

const RealtorContext = React.createContext({
    full_name: '',
    user_name: '', 
    email: '',
    number: '',
    description: '',
    error: null
})

export default RealtorContext

export class RealtorProvider extends Component {
    state = {
        id: '',
        full_name: '',
        user_name: '', 
        email: '',
        number: null,
        description: '',
        error: null
    };

    setRealtor = (id, full_name, user_name, email, number, description) => {
        this.setState({
            id,
            full_name,
            user_name,
            email,
            number,
            description
        })
    }
 
    getRealtor = () => {
        const id = this.state.id
        const full_name = this.state.full_name
        const user_name = this.state.user_name
        const email = this.state.email
        const number = this.state.number
        const description = this.state.description
        return {
            id,
            full_name,
            user_name,
            email,
            number,
            description
        }
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
            id: this.state.id,
            full_name: this.state.full_name,
            user_name: this.state.user_name,
            email: this.state.email,
            number: this.state.number,
            description: this.state.description,
            error: this.state.error,
            setError: this.setError,
            clearError: this.clearError,
            setRealtor: this.setRealtor,
            getRealtor: this.getRealtor
        }

        return (
            <RealtorContext.Provider value={value}>
                {this.props.children}
            </RealtorContext.Provider>
        )
    }
}