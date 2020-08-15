import React from 'react';
import './track.css';
import { selectNode } from '../../../redux/actions';
import { connect } from 'react-redux';

function track(attributes, children, id) {
  selectNode = (event) => {
    event.stopPropagation();
    this.props.selectNode(id)
  }
  return (<track {...attributes} onClick={selectNode}>{children}</track>);
}

export default connect(null, {selectNode})(track);