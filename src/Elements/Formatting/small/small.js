import React from 'react';
import './small.css';
import { selectNode } from '../../../redux/actions';
import { connect } from 'react-redux';

function small(attributes, children, id) {
  selectNode = (event) => {
    event.stopPropagation();
    this.props.selectNode(id)
  }
  return (<small {...attributes} onClick={selectNode}>{children}</small>);
}

export default connect(null, {selectNode})(small);