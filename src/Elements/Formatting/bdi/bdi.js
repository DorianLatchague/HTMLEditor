import React from 'react';
import './bdi.css';
import { selectNode } from '../../../redux/actions';
import { connect } from 'react-redux';

function bdi(attributes, children, id) {
  selectNode = (event) => {
    event.stopPropagation();
    this.props.selectNode(id)
  }
  return (<bdi {...attributes} onClick={selectNode}>{children}</bdi>);
}

export default connect(null, {selectNode})(bdi);