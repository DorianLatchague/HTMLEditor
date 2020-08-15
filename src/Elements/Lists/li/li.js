import React from 'react';
import './li.css';
import { selectNode } from '../../../redux/actions';
import { connect } from 'react-redux';

function li(attributes, children, id) {
  selectNode = (event) => {
    event.stopPropagation();
    this.props.selectNode(id)
  }
  return (<li {...attributes} onClick={selectNode}>{children}</li>);
}

export default connect(null, {selectNode})(li);