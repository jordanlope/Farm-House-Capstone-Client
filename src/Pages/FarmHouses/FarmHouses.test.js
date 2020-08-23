import React from 'react'
import ReactDOM from 'react-dom'
import FarmHouses from './FarmHouses'
import renderer from 'react-test-renderer'

describe('FarmHouses component', () => {
    // Smoke test
    it('renders without crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(<FarmHouses />, div);
        ReactDOM.unmountComponentAtNode(div);
    })

    //Snapshot test
    it('renders the UI as expected', () => {
        const tree = renderer
            .create(<FarmHouses />)
            .toJSON()
        expect(tree).toMatchSnapshot();
    })
})