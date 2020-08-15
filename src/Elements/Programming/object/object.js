import React from 'react';
import './object.css';
import { selectNode } from '../../../redux/actions';
import { connect } from 'react-redux';

function object(attributes, children, id) {
  selectNode = (event) => {
    event.stopPropagation();
    this.props.selectNode(id)
  }
  return (<object {...attributes} onClick={selectNode}>{children}</object>);
}

export default connect(null, {selectNode})(object);