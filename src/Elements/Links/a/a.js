import React from 'react';
import './a.css';
import { selectNode } from '../../../redux/actions';
import { connect } from 'react-redux';

function a(attributes, children, id) {
  selectNode = (event) => {
    event.stopPropagation();
    this.props.selectNode(id)
  }
  return (<a {...attributes} onClick={selectNode}>{children}</a>);
}

export default connect(null, {selectNode})(a);