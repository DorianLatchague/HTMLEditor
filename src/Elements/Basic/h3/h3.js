import React from 'react';
import './h3.css';
import { selectNode } from '../../../redux/actions';
import { connect } from 'react-redux';

function h3(attributes, children, id) {
  selectNode = (event) => {
    event.stopPropagation();
    this.props.selectNode(id)
  }
  return (<h3 {...attributes} onClick={selectNode}>{children}</h3>);
}

export default connect(null, {selectNode})(h3);