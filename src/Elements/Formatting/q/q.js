import React from 'react';
import './q.css';
import { selectNode } from '../../../redux/actions';
import { connect } from 'react-redux';

function q(attributes, children, id) {
  selectNode = (event) => {
    event.stopPropagation();
    this.props.selectNode(id)
  }
  return (<q {...attributes} onClick={selectNode}>{children}</q>);
}

export default connect(null, {selectNode})(q);