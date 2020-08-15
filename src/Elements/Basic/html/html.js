import React from 'react';
import './html.css';
import { selectNode } from '../../../redux/actions';
import { connect } from 'react-redux';

function html(attributes, children, id) {
  selectNode = (event) => {
    event.stopPropagation();
    this.props.selectNode(id)
  }
  return (<html {...attributes} onClick={selectNode}>{children}</html>);
}

export default connect(null, {selectNode})(html);