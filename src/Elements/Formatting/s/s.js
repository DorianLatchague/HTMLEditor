import React from 'react';
import './s.css';
import { selectNode } from '../../../redux/actions';
import { connect } from 'react-redux';

function s(attributes, children, id) {
  selectNode = (event) => {
    event.stopPropagation();
    this.props.selectNode(id)
  }
  return (<s {...attributes} onClick={selectNode}>{children}</s>);
}

export default connect(null, {selectNode})(s);