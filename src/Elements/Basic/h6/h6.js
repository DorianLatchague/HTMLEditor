import React from 'react';
import './h6.css';
import { selectNode } from '../../../redux/actions';
import { connect } from 'react-redux';

function h6(attributes, children, id) {
  selectNode = (event) => {
    event.stopPropagation();
    this.props.selectNode(id)
  }
  return (<h6 {...attributes} onClick={selectNode}>{children}</h6>);
}

export default connect(null, {selectNode})(h6);