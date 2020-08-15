import React from 'react';
import './hr.css';
import { selectNode } from '../../../redux/actions';
import { connect } from 'react-redux';

function hr(attributes, children, id) {
  selectNode = (event) => {
    event.stopPropagation();
    this.props.selectNode(id)
  }
  return (<hr {...attributes} onClick={selectNode} />);
}

export default connect(null, {selectNode})(hr);