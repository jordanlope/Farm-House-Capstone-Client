import React from 'react';
import './ErrorPage.css';

const ErrorPage = (props) => {
    return (<h1>Error: {props.errorMessage}</h1>);
}

export default ErrorPage;