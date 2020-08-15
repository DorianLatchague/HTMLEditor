import React from 'react';
import './b.css';
import { selectNode } from '../../../redux/actions';
import { connect } from 'react-redux';

function b(attributes, children, id) {
  selectNode = (event) => {
    event.stopPropagation();
    this.props.selectNode(id)
  }
  return (<b {...attributes} onClick={selectNode}>{children}</b>);
}

export default connect(null, {selectNode})(b);