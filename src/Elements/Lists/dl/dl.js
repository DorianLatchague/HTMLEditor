import React from 'react';
import './dl.css';
import { selectNode } from '../../../redux/actions';
import { connect } from 'react-redux';

function dl(attributes, children, id) {
  selectNode = (event) => {
    event.stopPropagation();
    this.props.selectNode(id)
  }
  return (<dl {...attributes} onClick={selectNode}>{children}</dl>);
}

export default connect(null, {selectNode})(dl);