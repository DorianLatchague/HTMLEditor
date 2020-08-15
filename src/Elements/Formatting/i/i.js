import React from 'react';
import './i.css';
import { selectNode } from '../../../redux/actions';
import { connect } from 'react-redux';

function i(attributes, children, id) {
  selectNode = (event) => {
    event.stopPropagation();
    this.props.selectNode(id)
  }
  return (<i {...attributes} onClick={selectNode}>{children}</i>);
}

export default connect(null, {selectNode})(i);