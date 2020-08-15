import React from 'react';
import './label.css';
import { selectNode } from '../../../redux/actions';
import { connect } from 'react-redux';

function label(attributes, children, id) {
  selectNode = (event) => {
    event.stopPropagation();
    this.props.selectNode(id)
  }
  return (<label {...attributes} onClick={selectNode}>{children}</label>);
}

export default connect(null, {selectNode})(label);