import React from 'react';
import './rt.css';
import { selectNode } from '../../../redux/actions';
import { connect } from 'react-redux';

function rt(attributes, children, id) {
  selectNode = (event) => {
    event.stopPropagation();
    this.props.selectNode(id)
  }
  return (<rt {...attributes} onClick={selectNode}>{children}</rt>);
}

export default connect(null, {selectNode})(rt);