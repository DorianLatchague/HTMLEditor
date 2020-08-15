import React from 'react';
import './iframe.css';
import { selectNode } from '../../../redux/actions';
import { connect } from 'react-redux';

function iframe(attributes, children, id) {
  selectNode = (event) => {
    event.stopPropagation();
    this.props.selectNode(id)
  }
  return (<iframe {...attributes} onClick={selectNode}>{children}</iframe>);
}

export default connect(null, {selectNode})(iframe);