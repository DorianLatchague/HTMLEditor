import React from 'react';
import './textarea.css';
import { selectNode } from '../../../redux/actions';
import { connect } from 'react-redux';

function textarea(attributes, children, id) {
  selectNode = (event) => {
    event.stopPropagation();
    this.props.selectNode(id)
  }
  return (<textarea {...attributes} onClick={selectNode}>{children}</textarea>);
}

export default connect(null, {selectNode})(textarea);