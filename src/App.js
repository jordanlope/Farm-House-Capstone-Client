import React from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css';
import FarmHouses from './Pages/FarmHouses/FarmHouses';
import Login from './Pages/Login/Login';
import Signup from './Pages/Signup/Signup';
import FarmHouse from './Pages/FarmHouse/FarmHouse';
import ErrorPage from './Pages/ErrorPage/ErrorPage';
import NavBar from './Pages/NavBar/NavBar';
import PLACES from './PLACES';

function App() {
  return (
    <div className="App">

      <header className="App-header">
        <NavBar />
      </header>

      <main className="App-main">
        <Switch>
          <Route exact path='/' render={ () => (
            <FarmHouses houses={PLACES}/>
          ) }/>
          <Route path='/login' component={Login}/>
          <Route path='/signup' component={Signup}/>
          <Route path='/home/:homeId' component={FarmHouse}/>
          <Route render={ () => (
            <ErrorPage errorMessage={'Page not found'}/>
          )} />
        </Switch>
      </main>

      <footer className="App-footer">
        <p>We are Live</p>
      </footer>

    </div>
  );
}

export default App;
