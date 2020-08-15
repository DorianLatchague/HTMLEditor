import React from 'react';
import './base.css';
import { selectNode } from '../../../redux/actions';
import { connect } from 'react-redux';

function base(attributes, children, id) {
  selectNode = (event) => {
    event.stopPropagation();
    this.props.selectNode(id)
  }
  return (<base {...attributes} onClick={selectNode}>{children}</base>);
}

export default connect(null, {selectNode})(base);