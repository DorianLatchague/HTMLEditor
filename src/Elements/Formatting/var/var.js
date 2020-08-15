import React from 'react';
import './var.css';
import { selectNode } from '../../../redux/actions';
import { connect } from 'react-redux';

function htmlVar(attributes, children, id) {
  selectNode = (event) => {
    event.stopPropagation();
    this.props.selectNode(id)
  }
  return (<var {...attributes} onClick={selectNode}>{children}</var>);
}

export default connect(null, {selectNode})(htmlVar);