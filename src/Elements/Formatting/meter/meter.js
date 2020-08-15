import React from 'react';
import './meter.css';
import { selectNode } from '../../../redux/actions';
import { connect } from 'react-redux';

function meter(attributes, children, id) {
  selectNode = (event) => {
    event.stopPropagation();
    this.props.selectNode(id)
  }
  return (<meter {...attributes} onClick={selectNode}>{children}</meter>);
}

export default connect(null, {selectNode})(meter);