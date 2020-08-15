import React from 'react';
import './audio.css';
import { selectNode } from '../../../redux/actions';
import { connect } from 'react-redux';

function audio(attributes, children, id) {
  selectNode = (event) => {
    event.stopPropagation();
    this.props.selectNode(id)
  }
  return (<audio {...attributes} onClick={selectNode}>{children}</audio>);
}

export default connect(null, {selectNode})(audio);