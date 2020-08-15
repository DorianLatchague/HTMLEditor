import React from 'react';
import './Canvas.css';
import { connect } from 'react-redux';
import { getCurrentStructure } from '../redux/selectors';
import { isValidElement } from '../Elements/Utilities';
import Elements from '../Elements';

const mapStateToProps = (state) => ({
    structure: getCurrentStructure(state),
})

function Canvas(props) {
    const recursiveMapping = (children = props.structure.children) => children.map(node => {
        console.log('hello');
        node = props.structure.allNodes[node];
        if (isValidElement(node.element))
            return Elements[node.element](node.attributes, recursiveMapping(node.children),node.id);
        throw new Error("The provided element is not valid: "+node.element);
    })
    return (<aside id="main-canvas">
        { console.log(recursiveMapping()) || recursiveMapping() }
    </aside>)
}

export default connect(mapStateToProps)(Canvas);