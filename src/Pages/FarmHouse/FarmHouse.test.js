import React from 'react';
import ReactDOM from 'react-dom';
import FarmHouse from './FarmHouse';
import renderer from 'react-test-renderer';

describe('FarmHouse component', () => {
    // Smoke test
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<FarmHouse />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    // Snapshot test
    it('renders the UI as expected', () => {
        const tree = renderer
            .create(<FarmHouse />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    })
})