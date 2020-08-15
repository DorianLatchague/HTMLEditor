import React from 'react';
import './rp.css';
import { selectNode } from '../../../redux/actions';
import { connect } from 'react-redux';

function rp(attributes, children, id) {
  selectNode = (event) => {
    event.stopPropagation();
    this.props.selectNode(id)
  }
  return (<rp {...attributes} onClick={selectNode}>{children}</rp>);
}

export default connect(null, {selectNode})(rp);