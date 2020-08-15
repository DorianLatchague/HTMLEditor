import React from 'react';
import './tr.css';
import { selectNode } from '../../../redux/actions';
import { connect } from 'react-redux';

function tr(attributes, children, id) {
  selectNode = (event) => {
    event.stopPropagation();
    this.props.selectNode(id)
  }
  return (<tr {...attributes} onClick={selectNode}>{children}</tr>);
}

export default connect(null, {selectNode})(tr);