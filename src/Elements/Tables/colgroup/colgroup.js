import React from 'react';
import './colgroup.css';
import { selectNode } from '../../../redux/actions';
import { connect } from 'react-redux';

function colgroup(attributes, children, id) {
  selectNode = (event) => {
    event.stopPropagation();
    this.props.selectNode(id)
  }
  return (<colgroup {...attributes} onClick={selectNode}>{children}</colgroup>);
}

export default connect(null, {selectNode})(colgroup);