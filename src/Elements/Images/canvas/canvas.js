import React from 'react';
import './canvas.css';
import { selectNode } from '../../../redux/actions';
import { connect } from 'react-redux';

function canvas(attributes, children, id) {
  selectNode = (event) => {
    event.stopPropagation();
    this.props.selectNode(id)
  }
  return (<canvas {...attributes} onClick={selectNode}>{children}</canvas>);
}

export default connect(null, {selectNode})(canvas);