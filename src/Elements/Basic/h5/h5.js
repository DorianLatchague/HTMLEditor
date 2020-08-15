import React from 'react';
import './h5.css';
import { selectNode } from '../../../redux/actions';
import { connect } from 'react-redux';

function h5(attributes, children, id) {
  selectNode = (event) => {
    event.stopPropagation();
    this.props.selectNode(id)
  }
  return (<h5 {...attributes} onClick={selectNode}>{children}</h5>);
}

export default connect(null, {selectNode})(h5);