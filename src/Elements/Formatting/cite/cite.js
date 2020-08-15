import React from 'react';
import './cite.css';
import { selectNode } from '../../../redux/actions';
import { connect } from 'react-redux';

function cite(attributes, children, id) {
  selectNode = (event) => {
    event.stopPropagation();
    this.props.selectNode(id)
  }
  return (<cite {...attributes} onClick={selectNode}>{children}</cite>);
}

export default connect(null, {selectNode})(cite);