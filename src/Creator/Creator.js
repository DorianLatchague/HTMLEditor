import React from 'react';
import './Creator.css';
import { connect } from 'react-redux';
import { listOfSemantics } from '../Elements/Utilities';
import { appendNewNode } from '../redux/actions';

function Creator(props) {
    let selectedElement = 'h1';
    const onSubmit = (event) => {
        event.preventDefault();
        props.appendNewNode(0, {
            element: selectedElement,
            attributes: {}
        });
    }
    const onSelectChange = (event) => {
        selectedElement = event.target.value;
    }
    return <form onSubmit={onSubmit}>
        <select onChange={onSelectChange} value={selectedElement}>
            {listOfSemantics.map(element => (<option key={element} value={element}>{element}</option>))}
        </select>
        <button>Add</button>
    </form>
}

export default connect(null, { appendNewNode })(Creator);