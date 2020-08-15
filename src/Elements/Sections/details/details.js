import React from 'react';
import './details.css';
import { selectNode } from '../../../redux/actions';
import { connect } from 'react-redux';

function details(attributes, children, id) {
  selectNode = (event) => {
    event.stopPropagation();
    this.props.selectNode(id)
  }
  return (<details {...attributes} onClick={selectNode}>{children}</details>);
}

export default connect(null, {selectNode})(details);