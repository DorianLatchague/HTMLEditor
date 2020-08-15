import React from 'react';
import './ins.css';
import { selectNode } from '../../../redux/actions';
import { connect } from 'react-redux';

function ins(attributes, children, id) {
  selectNode = (event) => {
    event.stopPropagation();
    this.props.selectNode(id)
  }
  return (<ins {...attributes} onClick={selectNode}>{children}</ins>);
}

export default connect(null, {selectNode})(ins);