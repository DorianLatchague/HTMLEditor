import React from 'react';
import './select.css';
import { selectNode } from '../../../redux/actions';
import { connect } from 'react-redux';

function select(attributes, children, id) {
  selectNode = (event) => {
    event.stopPropagation();
    this.props.selectNode(id)
  }
  return (<select {...attributes} onClick={selectNode}>{children}</select>);
}

export default connect(null, {selectNode})(select);