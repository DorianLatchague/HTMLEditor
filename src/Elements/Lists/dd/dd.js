import React from 'react';
import './dd.css';
import { selectNode } from '../../../redux/actions';
import { connect } from 'react-redux';

function dd(attributes, children, id) {
  selectNode = (event) => {
    event.stopPropagation();
    this.props.selectNode(id)
  }
  return (<dd {...attributes} onClick={selectNode}>{children}</dd>);
}

export default connect(null, {selectNode})(dd);