import React from 'react';
import './svg.css';
import { selectNode } from '../../../redux/actions';
import { connect } from 'react-redux';

function svg(attributes, children, id) {
  selectNode = (event) => {
    event.stopPropagation();
    this.props.selectNode(id)
  }
  return (<svg {...attributes} onClick={selectNode}>{children}</svg>);
}

export default connect(null, {selectNode})(svg);