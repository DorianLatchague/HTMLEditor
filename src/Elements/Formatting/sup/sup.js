import React from 'react';
import './sup.css';
import { selectNode } from '../../../redux/actions';
import { connect } from 'react-redux';

function sup(attributes, children, id) {
  selectNode = (event) => {
    event.stopPropagation();
    this.props.selectNode(id)
  }
  return (<sup {...attributes} onClick={selectNode}>{children}</sup>);
}

export default connect(null, {selectNode})(sup);