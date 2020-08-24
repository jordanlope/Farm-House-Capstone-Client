import React from 'react';
import './LandingPage.css';

class LandingPage extends React.Component {
  render() {
    return (
      <div>
        <h1>What is Molosan?</h1>
        <p>Molosan is a website that displays Farm Houses for sale</p>
        <h1>Main Functionality:</h1>
        <p>Users: Able to see a list of Farm Houses and click on each for more information on house and realtor</p>
        <p>Realtor: Able to add a Farm House to the website and have users get more information to then contact the realtor</p>
        <h1>How do I use it?</h1>
        <p>First determine if you are looking for a Farm House or selling one.</p>
        <p>For those looking for Farm Houses, you can go to out Home Page and look at the list of Farm Houses for sale</p>
        <p>Realtors on the other hand have to create an account, login, and then add the Farm Houses they want to sell</p>
        <h1>Demo Account:</h1>
        <p>You can go to the Login page on the nav bar and enter in these credentials</p>
        <p>Username: jordanlopez999</p>
        <p>Password: Tapout10$</p>
        <p>It will then direct you to the add Farm House Form after authentication</p>
      </div>
    );
  }
}

export default LandingPage;