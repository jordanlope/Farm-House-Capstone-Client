import React from 'react';
import './LandingPage.css';

class LandingPage extends React.Component {
    render() {
      return <h1>Hello, {this.props.name}</h1>;
    }
}

export default LandingPage;