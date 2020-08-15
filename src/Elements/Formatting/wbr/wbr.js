import React from 'react';
import './wbr.css';
import { selectNode } from '../../../redux/actions';
import { connect } from 'react-redux';

function wbr(attributes, children, id) {
  selectNode = (event) => {
    event.stopPropagation();
    this.props.selectNode(id)
  }
  return (<wbr {...attributes} onClick={selectNode} />);
}

export default connect(null, {selectNode})(wbr);