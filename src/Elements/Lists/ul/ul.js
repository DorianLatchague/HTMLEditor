import React from 'react';
import './ul.css';
import { selectNode } from '../../../redux/actions';
import { connect } from 'react-redux';

function ul(attributes, children, id) {
  selectNode = (event) => {
    event.stopPropagation();
    this.props.selectNode(id)
  }
  return (<ul {...attributes} onClick={selectNode}>{children}</ul>);
}

export default connect(null, {selectNode})(ul);