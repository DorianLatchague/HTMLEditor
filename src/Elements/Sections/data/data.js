import React from 'react';
import './data.css';
import { selectNode } from '../../../redux/actions';
import { connect } from 'react-redux';

function data(attributes, children, id) {
  selectNode = (event) => {
    event.stopPropagation();
    this.props.selectNode(id)
  }
  return (<data {...attributes} onClick={selectNode}>{children}</data>);
}

export default connect(null, {selectNode})(data);