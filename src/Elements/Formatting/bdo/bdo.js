import React from 'react';
import './bdo.css';
import { selectNode } from '../../../redux/actions';
import { connect } from 'react-redux';

function bdo(attributes, children, id) {
  selectNode = (event) => {
    event.stopPropagation();
    this.props.selectNode(id)
  }
  return (<bdo {...attributes} onClick={selectNode}>{children}</bdo>);
}

export default connect(null, {selectNode})(bdo);