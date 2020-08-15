import React from 'react';
import './area.css';
import { selectNode } from '../../../redux/actions';
import { connect } from 'react-redux';

function area(attributes, children, id) {
  selectNode = (event) => {
    event.stopPropagation();
    this.props.selectNode(id)
  }
  return (<area {...attributes} onClick={selectNode}>{children}</area>);
}

export default connect(null, {selectNode})(area);