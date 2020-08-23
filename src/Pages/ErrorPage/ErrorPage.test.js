import React from 'react';
import ReactDOM from 'react-dom';
import ErrorPage from './ErrorPage';
import renderer from 'react-test-renderer';

describe('ErrorPage component', () => {
    // Smoke test
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<ErrorPage errorMessage={'This is a test'}/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    // Snapshot test
    it('renders the UI as expected', () => {
        const tree = renderer
            .create(<ErrorPage errorMessage={'This is a test'}/>)
            .toJSON();
        expect(tree).toMatchSnapshot();
    })
})