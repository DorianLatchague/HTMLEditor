import React from 'react';
import './source.css';
import { selectNode } from '../../../redux/actions';
import { connect } from 'react-redux';

function source(attributes, children, id) {
  selectNode = (event) => {
    event.stopPropagation();
    this.props.selectNode(id)
  }
  return (<source {...attributes} onClick={selectNode}>{children}</source>);
}

export default connect(null, {selectNode})(source);