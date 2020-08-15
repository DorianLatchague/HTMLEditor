import React from 'react';
import './th.css';
import { selectNode } from '../../../redux/actions';
import { connect } from 'react-redux';

function th(attributes, children, id) {
  selectNode = (event) => {
    event.stopPropagation();
    this.props.selectNode(id)
  }
  return (<th {...attributes} onClick={selectNode}>{children}</th>);
}

export default connect(null, {selectNode})(th);