import React from 'react';
import './ol.css';
import { selectNode } from '../../../redux/actions';
import { connect } from 'react-redux';

function ol(attributes, children, id) {
  selectNode = (event) => {
    event.stopPropagation();
    this.props.selectNode(id)
  }
  return (<ol {...attributes} onClick={selectNode}>{children}</ol>);
}

export default connect(null, {selectNode})(ol);