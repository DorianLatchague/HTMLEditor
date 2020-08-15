import React from 'react';
import './noscript.css';
import { selectNode } from '../../../redux/actions';
import { connect } from 'react-redux';

function noscript(attributes, children, id) {
  selectNode = (event) => {
    event.stopPropagation();
    this.props.selectNode(id)
  }
  return (<noscript {...attributes} onClick={selectNode}>{children}</noscript>);
}

export default connect(null, {selectNode})(noscript);