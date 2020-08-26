import React, { Component } from 'react'

const RealtorContext = React.createContext({
    id: '',
    full_name: '',
    user_name: '', 
    email: '',
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
        description: '',
        error: null
    };

    setRealtor = (id, full_name, user_name, email, description) => {
        this.setState({
            id,
            full_name,
            user_name,
            email,
            description
        })
    }
 
    getRealtor = () => {
        const id = this.state.id
        const full_name = this.state.full_name
        const user_name = this.state.user_name
        const email = this.state.email
        const description = this.state.description
        return {
            id,
            full_name,
            user_name,
            email,
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