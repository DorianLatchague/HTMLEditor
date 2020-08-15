import React from 'react';
import './td.css';
import { selectNode } from '../../../redux/actions';
import { connect } from 'react-redux';

function td(attributes, children, id) {
  selectNode = (event) => {
    event.stopPropagation();
    this.props.selectNode(id)
  }
  return (<td {...attributes} onClick={selectNode}>{children}</td>);
}

export default connect(null, {selectNode})(td);