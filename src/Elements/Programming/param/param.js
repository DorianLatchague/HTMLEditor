import React from 'react';
import './param.css';
import { selectNode } from '../../../redux/actions';
import { connect } from 'react-redux';

function param(attributes, children, id) {
  selectNode = (event) => {
    event.stopPropagation();
    this.props.selectNode(id)
  }
  return (<param {...attributes} onClick={selectNode}>{children}</param>);
}

export default connect(null, {selectNode})(param);