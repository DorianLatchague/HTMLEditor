import React from 'react';
import './span.css';
import { selectNode } from '../../../redux/actions';
import { connect } from 'react-redux';

function span(attributes, children, id) {
  selectNode = (event) => {
    event.stopPropagation();
    this.props.selectNode(id)
  }
  return (<span {...attributes} onClick={selectNode}>{children}</span>);
}

export default connect(null, {selectNode})(span);