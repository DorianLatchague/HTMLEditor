import React from 'react';
import './summary.css';
import { selectNode } from '../../../redux/actions';
import { connect } from 'react-redux';

function summary(attributes, children, id) {
  selectNode = (event) => {
    event.stopPropagation();
    this.props.selectNode(id)
  }
  return (<summary {...attributes} onClick={selectNode}>{children}</summary>);
}

export default connect(null, {selectNode})(summary);