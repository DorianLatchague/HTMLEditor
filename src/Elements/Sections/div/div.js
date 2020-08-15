import React from 'react';
import './div.css';
import { selectNode } from '../../../redux/actions';
import { connect } from 'react-redux';

function div(attributes, children, id) {
  selectNode = (event) => {
    event.stopPropagation();
    this.props.selectNode(id)
  }
  return (<div {...attributes} onClick={selectNode}>{children}</div>);
}

export default connect(null, {selectNode})(div);