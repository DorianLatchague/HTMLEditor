import React from 'react';
import './optgroup.css';
import { selectNode } from '../../../redux/actions';
import { connect } from 'react-redux';

function optgroup(attributes, children, id) {
  selectNode = (event) => {
    event.stopPropagation();
    this.props.selectNode(id)
  }
  return (<optgroup {...attributes} onClick={selectNode}>{children}</optgroup>);
}

export default connect(null, {selectNode})(optgroup);