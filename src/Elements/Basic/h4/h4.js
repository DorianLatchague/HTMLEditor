import React from 'react';
import './h4.css';
import { selectNode } from '../../../redux/actions';
import { connect } from 'react-redux';

function h4(attributes, children, id) {
  selectNode = (event) => {
    event.stopPropagation();
    this.props.selectNode(id)
  }
  return (<h4 {...attributes} onClick={selectNode}>{children}</h4>);
}

export default connect(null, {selectNode})(h4);