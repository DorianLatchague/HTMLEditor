import React from 'react';
import './col.css';
import { selectNode } from '../../../redux/actions';
import { connect } from 'react-redux';

function col(attributes, children, id) {
  selectNode = (event) => {
    event.stopPropagation();
    this.props.selectNode(id)
  }
  return (<col {...attributes} onClick={selectNode}>{children}</col>);
}

export default connect(null, {selectNode})(col);