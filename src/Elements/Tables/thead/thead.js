import React from 'react';
import './thead.css';
import { selectNode } from '../../../redux/actions';
import { connect } from 'react-redux';

function thead(attributes, children, id) {
  selectNode = (event) => {
    event.stopPropagation();
    this.props.selectNode(id)
  }
  return (<thead {...attributes} onClick={selectNode}>{children}</thead>);
}

export default connect(null, {selectNode})(thead);