import React from 'react';
import './header.css';
import { selectNode } from '../../../redux/actions';
import { connect } from 'react-redux';

function header(attributes, children, id) {
  selectNode = (event) => {
    event.stopPropagation();
    this.props.selectNode(id)
  }
  return (<header {...attributes} onClick={selectNode}>{children}</header>);
}

export default connect(null, {selectNode})(header);