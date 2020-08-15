import React from 'react';
import './time.css';
import { selectNode } from '../../../redux/actions';
import { connect } from 'react-redux';

function time(attributes, children, id) {
  selectNode = (event) => {
    event.stopPropagation();
    this.props.selectNode(id)
  }
  return (<time {...attributes} onClick={selectNode}>{children}</time>);
}

export default connect(null, {selectNode})(time);