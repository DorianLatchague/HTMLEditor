import React from 'react';
import './mark.css';
import { selectNode } from '../../../redux/actions';
import { connect } from 'react-redux';

function mark(attributes, children, id) {
  selectNode = (event) => {
    event.stopPropagation();
    this.props.selectNode(id)
  }
  return (<mark {...attributes} onClick={selectNode}>{children}</mark>);
}

export default connect(null, {selectNode})(mark);