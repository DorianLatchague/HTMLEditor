import React from 'react';
import './address.css';
import { selectNode } from '../../../redux/actions';
import { connect } from 'react-redux';

function address(attributes, children, id) {
  selectNode = (event) => {
    event.stopPropagation();
    this.props.selectNode(id)
  }
  return (<address {...attributes} onClick={selectNode}>{children}</address>);
}

export default connect(null, {selectNode})(address);