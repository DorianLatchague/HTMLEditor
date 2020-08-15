import React from 'react';
import './output.css';
import { selectNode } from '../../../redux/actions';
import { connect } from 'react-redux';

function output(attributes, children, id) {
  selectNode = (event) => {
    event.stopPropagation();
    this.props.selectNode(id)
  }
  return (<output {...attributes} onClick={selectNode}>{children}</output>);
}

export default connect(null, {selectNode})(output);