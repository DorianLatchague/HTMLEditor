import React from 'react';
import './code.css';
import { selectNode } from '../../../redux/actions';
import { connect } from 'react-redux';

function code(attributes, children, id) {
  selectNode = (event) => {
    event.stopPropagation();
    this.props.selectNode(id)
  }
  return (<code {...attributes} onClick={selectNode}>{children}</code>);
}

export default connect(null, {selectNode})(code);