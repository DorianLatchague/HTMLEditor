import React from 'react';
import './h1.css';
import { selectNode } from '../../../redux/actions';
import { connect } from 'react-redux';

function h1(attributes, children, id) {
  selectNode = (event) => {
    event.stopPropagation();
    this.props.selectNode(id)
  }
  return (<h1 {...attributes} onClick={selectNode}>{children}</h1>);
}

export default connect(null, {selectNode})(h1);