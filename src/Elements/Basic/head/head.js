import React from 'react';
import './head.css';
import { selectNode } from '../../../redux/actions';
import { connect } from 'react-redux';

function head(attributes, children, id) {
  selectNode = (event) => {
    event.stopPropagation();
    this.props.selectNode(id)
  }
  return (<head {...attributes} onClick={selectNode}>{children}</head>);
}

export default connect(null, {selectNode})(head);