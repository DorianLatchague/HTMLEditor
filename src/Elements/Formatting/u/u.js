import React from 'react';
import './u.css';
import { selectNode } from '../../../redux/actions';
import { connect } from 'react-redux';

function u(attributes, children, id) {
  selectNode = (event) => {
    event.stopPropagation();
    this.props.selectNode(id)
  }
  return (<u {...attributes} onClick={selectNode}>{children}</u>);
}

export default connect(null, {selectNode})(u);