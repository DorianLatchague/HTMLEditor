import React from 'react';
import './h2.css';
import { selectNode } from '../../../redux/actions';
import { connect } from 'react-redux';

function h2(attributes, children, id) {
  selectNode = (event) => {
    event.stopPropagation();
    this.props.selectNode(id)
  }
  return (<h2 {...attributes} onClick={selectNode}>{children}</h2>);
}

export default connect(null, {selectNode})(h2);