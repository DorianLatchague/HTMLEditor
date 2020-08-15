import React from 'react';
import './blockquote.css';
import { selectNode } from '../../../redux/actions';
import { connect } from 'react-redux';

function blockquote(attributes, children, id) {
  selectNode = (event) => {
    event.stopPropagation();
    this.props.selectNode(id)
  }
  return (<blockquote {...attributes} onClick={selectNode}>{children}</blockquote>);
}

export default connect(null, {selectNode})(blockquote);