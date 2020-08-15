import React from 'react';
import './figure.css';
import { selectNode } from '../../../redux/actions';
import { connect } from 'react-redux';

function figure(attributes, children, id) {
  selectNode = (event) => {
    event.stopPropagation();
    this.props.selectNode(id)
  }
  return (<figure {...attributes} onClick={selectNode}>{children}</figure>);
}

export default connect(null, {selectNode})(figure);