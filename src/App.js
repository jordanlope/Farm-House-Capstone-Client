import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import PrivateRoute from './Utils/PrivateRoute';
import FarmHouses from './Pages/FarmHouses/FarmHouses';
import AddFarmHouse from './Pages/AddFarmHouse/AddFarmHouse';
import Login from './Pages/Login/Login';
import Signup from './Pages/RegistrationForm/RegistrationForm';
import FarmHouse from './Pages/FarmHouse/FarmHouse';
import LandingPage from './Pages/LandingPage/LandingPage';
import ErrorPage from './Pages/ErrorPage/ErrorPage';
import NavBar from './Pages/NavBar/NavBar';

class App extends Component {
  state = { hasError: false }

  static getDerivedStateFromError(error) {
    console.log(error)
    return { hasError: true }
  }

  render() {
    document.title = 'Molosan'

    return (
      <div className="App">
        <header className="App-header">
          <NavBar />
        </header>

        <main className="App-main">
          {this.state.hasError && <p className='red'>There was an error! Oh no!</p>}
          <Switch>
            <Route exact path='/' component={FarmHouses}/>
            <Route path='/login' component={Login}/>
            <Route path='/signup' component={Signup}/>
            <Route path='/home/:homeId' component={FarmHouse}/>
            <Route path='/landingPage' component={LandingPage}/>
            <PrivateRoute path='/addFarmHouse' component={AddFarmHouse}/>
            <Route render={ () => (
              <ErrorPage errorMessage={'Page not found'}/>
            )} />
          </Switch>
        </main>
      </div>
    )
  }
}

export default App;
