import React from 'react';
import './body.css';
import { selectNode } from '../../../redux/actions';
import { connect } from 'react-redux';

function body(attributes, children, id) {
  selectNode = (event) => {
    event.stopPropagation();
    this.props.selectNode(id)
  }
  return (<body {...attributes} onClick={selectNode} key={id}>{children}</body>);
}

export default connect(null, {selectNode})(body);