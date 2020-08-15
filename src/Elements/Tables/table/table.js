import React from 'react';
import './table.css';
import { selectNode } from '../../../redux/actions';
import { connect } from 'react-redux';

function table(attributes, children, id) {
  selectNode = (event) => {
    event.stopPropagation();
    this.props.selectNode(id)
  }
  return (<table {...attributes} onClick={selectNode}>{children}</table>);
}

export default connect(null, {selectNode})(table);