import React from 'react';
import './sub.css';
import { selectNode } from '../../../redux/actions';
import { connect } from 'react-redux';

function sub(attributes, children, id) {
  selectNode = (event) => {
    event.stopPropagation();
    this.props.selectNode(id)
  }
  return (<sub {...attributes} onClick={selectNode}>{children}</sub>);
}

export default connect(null, {selectNode})(sub);