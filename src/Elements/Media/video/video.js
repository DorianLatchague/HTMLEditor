import React from 'react';
import './video.css';
import { selectNode } from '../../../redux/actions';
import { connect } from 'react-redux';

function video(attributes, children, id) {
  selectNode = (event) => {
    event.stopPropagation();
    this.props.selectNode(id)
  }
  return (<video {...attributes} onClick={selectNode}>{children}</video>);
}

export default connect(null, {selectNode})(video);